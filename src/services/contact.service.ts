"use server";

import { poster } from "@/lib/base.api";
import { Contact } from "@/types/contact";

export async function submitContact(data: Contact) {
  try {
    const response = await poster<Contact>("/contacts", data, false);
    return {
      success: true,
      data: response.data,
      message: response.message || "Message sent successfully",
    };
  } catch (error: unknown) {
    console.error("Failed to submit contact:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to submit contact message";
    return {
      success: false,
      error: errorMessage,
    };
  }
}
