"use server";

import { revalidateTag } from "next/cache";
import { getUserToken } from "./utils/user-token";
import { mapStatusCodeToException } from "./errors/error-mapper";
import ApiResponse from "@/types/ApiResponse";

const buildJsonHeaders = async (includeToken: boolean): Promise<Headers> => {
  const reqHeaders = new Headers({
    "Content-Type": "application/json",
  });

  if (includeToken) {
    const token = await getUserToken();
    if (token) reqHeaders.set("Authorization", `Bearer ${token}`);
  }

  return reqHeaders;
};

const fetcher = async <T>(
  path: string,
  next?: NextFetchRequestConfig | undefined,
  { tag }: { tag?: string[] } = {},
  { includeToken = true }: { includeToken?: boolean } = {},
): Promise<T> => {
  const reqHeaders = await buildJsonHeaders(includeToken);
  const response = await fetch(`${process.env.BACKEND_API_BASE_URL}${path}`, {
    headers: reqHeaders,
    next: next,
  });

  if (!response.ok) {
    throw mapStatusCodeToException(response.status, response.statusText);
  }

  const json: ApiResponse<T> = await response.json();
  return json.data;
};

const poster = async <T>(
  path: string,
  body: object,
  includeToken: boolean = true,
  { tag }: { tag?: string[] } = {},
): Promise<ApiResponse<T>> => {
  const reqHeaders = await buildJsonHeaders(includeToken);
  const response = await fetch(`$process.env.BACKEND_API_BASE_URL}${path}`, {
    method: "POST",
    headers: reqHeaders,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw mapStatusCodeToException(response.status, response.statusText);
  }

  const json: ApiResponse<T> = await response.json();
  return json;
};

const updater = async <T>(
  path: string,
  body: object,
  includeToken: boolean = true,
  { tag }: { tag?: string[] } = {},
): Promise<ApiResponse<T>> => {
  const reqHeaders = await buildJsonHeaders(includeToken);
  const response = await fetch(`${process.env.BACKEND_API_BASE_URL}${path}`, {
    method: "PATCH",
    headers: reqHeaders,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw mapStatusCodeToException(response.status);
  }

  const json: ApiResponse<T> = await response.json();
  return json;
};

export { fetcher, poster, updater };
