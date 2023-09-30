import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://duabzibaycfsrxcuexlz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1YWJ6aWJheWNmc3J4Y3VleGx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzMTgwNzQsImV4cCI6MjAxMDg5NDA3NH0.YzRZZYU8cI87UlSK_RHRZ7Bg4QXmS7LpxqcbZaVSGck";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
