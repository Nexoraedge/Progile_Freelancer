// lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create a single Supabase client for the entire client-side application
// This version is for client-side code (browser)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)