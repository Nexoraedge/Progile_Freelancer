// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  
  // This refreshes the session and sets the cookie if it exists
  await supabase.auth.getSession()
  
  // Add your protected route logic here if needed
  const { pathname } = req.nextUrl

  const { data: { session } } = await supabase.auth.getSession() 

  const protectedRoutes = ['/dashboard', '/settings']
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
  
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL(`${process.env.NEXT_PUBLIC_APP_URL}/login`, req.url))
  }
  const authRoutes = ['/login', '/register', '/forgot-password']
  const isAuthRoute = authRoutes.some(route => pathname === route)
  
  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL(  `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`, req.url))
  }
  
  return res
}

export const config = {
  matcher: [
    // Match all routes except public assets
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}