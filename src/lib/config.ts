/**
 * Application Configuration
 * 
 * Configure your backend API endpoints and settings here.
 * These values can be overridden by environment variables.
 */

export const config = {
  // API Configuration
  api: {
    // Base URL for your backend API
    // Set VITE_API_URL in your .env file for different environments
    baseUrl: import.meta.env.VITE_API_URL || "",
    
    // Waitlist endpoint - configure based on your backend
    // Examples:
    // - Firebase: "/api/waitlist" (via Cloud Functions)
    // - Supabase: "/rest/v1/waitlist"
    // - Custom: "/api/v1/waitlist"
    waitlistEndpoint: import.meta.env.VITE_WAITLIST_ENDPOINT || "/api/waitlist",
  },

  // SMS Configuration
  sms: {
    // Your app name shown in SMS messages
    appName: "Echomaps",
    
    // Consent text for SMS opt-in (TCPA compliance)
    consentText: "I agree to receive SMS messages from Echomaps about updates, launches, and promotions. Message & data rates may apply. Reply STOP to unsubscribe.",
    
    // Privacy notice
    privacyNote: "Your number is safe with us. We only text about Echomaps.",
  },

  // Feature Flags
  features: {
    // Set to true when backend is ready
    enableWaitlistSubmission: import.meta.env.VITE_ENABLE_WAITLIST === "true" || false,
    
    // Enable analytics tracking
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === "true" || false,
  },
} as const;

export type Config = typeof config;
