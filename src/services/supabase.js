import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://hgosoqziylahwzcanrvj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhnb3NvcXppeWxhaHd6Y2FucnZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzNDQyMjgsImV4cCI6MjAwMTkyMDIyOH0.N0UybgIg6sGRyOmB2io2uhJn3DENfN0WMZjSo5uB--E';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
