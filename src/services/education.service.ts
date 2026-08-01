"use server";

import { fetcher } from "@/lib/base.api";
import { Education } from "@/types/education";

export async function getEducations(): Promise<Education[]> {
  try {
    const educations = await fetcher<Education[]>("/educations");
    return educations;
  } catch (error) {
    console.error("Failed to fetch educations:", error);
    return [];
  }
}
