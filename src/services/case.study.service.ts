"use server";

import { fetcher } from "@/lib/base.api";
import { CaseStudy } from "@/types/case.study";

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const caseStudies = await fetcher<CaseStudy[]>("/case-studies");
    return caseStudies;
  } catch (error) {
    console.error("Failed to fetch case studies:", error);
    return [];
  }
}
