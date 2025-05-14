// lib/supabase/config.ts

// Minimal/empty database type when you don't have schema yet
export type Database = {
    public: {
      Tables: Record<string, any>;
      Views: Record<string, any>;
      Functions: Record<string, any>;
      Enums: Record<string, any>;
    };
  }
  
  // Your Supabase URL and anon key
  export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
  export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!