// app/auth/signout/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/server'

export async function POST() {  
  // Sign out from supabase
  await supabase.auth.signOut()
  
  // Redirect to login page
  return NextResponse.redirect(new URL('/login', process.env.NEXT_PUBLIC_SITE_URL))
}