import { createClient } from "@supabase/supabase-js";

const supURL = "https://hxhtjamlrqbyzoalwrfh.supabase.co";
const supKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4aHRqYW1scnFieXpvYWx3cmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3MTAxMDMsImV4cCI6MjA1MDI4NjEwM30.72E5yIC-OqAIjumf8Ouc71ycGuc5fQptGGKWqQRYny0";

export const supabase = createClient(supURL, supKey);