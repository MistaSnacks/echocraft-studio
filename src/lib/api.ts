/**
 * API Service Layer
 * 
 * Handles all API calls to the backend. Configure the endpoints
 * in src/lib/config.ts or via environment variables.
 */

import { config } from "./config";

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
 * 
 * @example
 * // With Firebase/Supabase/Custom Backend:
 * const result = await submitToWaitlist({
 *   phone: "+15551234567",
 *   smsConsent: true,
 *   consentTimestamp: new Date().toISOString(),
 * });
 */
export async function submitToWaitlist(
  data: WaitlistSubmission
): Promise<WaitlistResponse> {
  // Check if backend submission is enabled
  if (!config.features.enableWaitlistSubmission) {
    // Demo mode - simulate success
    console.log("[Waitlist] Demo mode - submission data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      success: true,
      message: "Demo mode: Waitlist submission simulated",
    };
  }

  const url = `${config.api.baseUrl}${config.api.waitlistEndpoint}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: data.phone,
        sms_consent: data.smsConsent,
        consent_timestamp: data.consentTimestamp,
        source: data.source || "landing_page",
        metadata: data.metadata || {},
        created_at: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      message: result.message || "Successfully joined the waitlist!",
    };
  } catch (error) {
    console.error("[Waitlist] Submission error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit",
    };
  }
}
