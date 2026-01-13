/**
 * API Service Layer
 * 
 * Handles all API calls to the backend using Lovable Cloud.
 */

import { supabase } from "@/integrations/supabase/client";

export interface WaitlistSubmission {
  phone: string;
  smsConsent: boolean;
  consentTimestamp: string;
  source?: string;
  metadata?: Record<string, unknown>;
}

export interface WaitlistResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Submit a phone number to the waitlist
 */
export async function submitToWaitlist(
  data: WaitlistSubmission
): Promise<WaitlistResponse> {
  try {
    const { error } = await supabase.from("waitlist").insert([
      {
        phone: data.phone,
        sms_consent: data.smsConsent,
        consent_timestamp: data.consentTimestamp,
        source: data.source || "landing_page",
        metadata: (data.metadata || {}) as Record<string, string | number | boolean | null>,
      },
    ]);

    if (error) {
      // Handle duplicate phone number
      if (error.code === "23505") {
        return {
          success: false,
          error: "This phone number is already on the waitlist!",
        };
      }
      throw error;
    }

    return {
      success: true,
      message: "Successfully joined the waitlist!",
    };
  } catch (error) {
    console.error("[Waitlist] Submission error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit",
    };
  }
}
