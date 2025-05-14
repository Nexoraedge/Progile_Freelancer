// lib/supabase/browser.ts
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from './config'

export const createClient = () => {
  return createClientComponentClient<Database>()
}

