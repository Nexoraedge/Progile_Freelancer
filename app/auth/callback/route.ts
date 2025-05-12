// app/auth/callback/route.ts
import { createClient } from '@/lib/supabase/browser'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'




export async function GET(req: NextRequest) {
  const requestUrl = new URL(req.url)
  const code = requestUrl.searchParams.get('code')

  if (!code) {
    return NextResponse.redirect(new URL('/login', requestUrl.origin))
  }

  const supabase = createClient()
  await supabase.auth.exchangeCodeForSession(code)

  return NextResponse.redirect(new URL('/dashboard', requestUrl.origin))
}
