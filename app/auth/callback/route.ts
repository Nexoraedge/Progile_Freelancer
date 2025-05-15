// app/auth/callback/route.ts
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  console.log("Auth callback triggered")
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  console.log("Auth code present:", !!code)

  if (code) {
    try {
      const cookieStore = cookies()
      const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
      await supabase.auth.exchangeCodeForSession(code)
      console.log("Session exchange successful")
    } catch (error) {
      console.error("Error exchanging code for session:", error)
    }
  }

  return NextResponse.redirect(new URL(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard`, request.url))
}

