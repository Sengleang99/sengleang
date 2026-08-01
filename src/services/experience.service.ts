"use server";

import { fetcher } from "@/lib/base.api";
import { Experience } from "@/types/experience";

export async function getExperiences(): Promise<Experience[]> {
  try {
    const experiences = await fetcher<Experience[]>("/experiences");
    return experiences;
  } catch (error) {
    console.error("Failed to fetch experiences:", error);
    return [];
  }
}
