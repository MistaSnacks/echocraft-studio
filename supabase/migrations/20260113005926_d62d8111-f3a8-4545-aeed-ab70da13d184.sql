-- Create waitlist table for phone signups with SMS consent
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  phone TEXT NOT NULL UNIQUE,
  sms_consent BOOLEAN NOT NULL DEFAULT false,
  consent_timestamp TIMESTAMPTZ,
  source TEXT DEFAULT 'landing_page',
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (anyone can join waitlist)
CREATE POLICY "Anyone can join waitlist"
ON public.waitlist
FOR INSERT
WITH CHECK (true);

-- Only admins can view waitlist entries (no public reads)
CREATE POLICY "No public reads"
ON public.waitlist
FOR SELECT
USING (false);