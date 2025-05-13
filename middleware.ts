// middleware.ts
import { createClient } from '@/lib/supabase/browser'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // Create response and initialize Supabase client
  const res = NextResponse.next()
  const supabase = createClient()
  
  // Refresh session if expired
  const { data: { session } } = await supabase.auth.getSession()
  
  // Get the pathname of the request
  const pathname = req.nextUrl.pathname
  
  // Define protected routes that require authentication
  const isAuthRequired = pathname.startsWith('/dashboard') || 
                         pathname.startsWith('/profile') ||
                         pathname.startsWith('/settings')
  
  // Define auth routes (login, signup, etc.)
  const isAuthRoute = pathname === '/login' || 
                     pathname === '/signup' || 
                     pathname === '/forgotpassword' ||
                     pathname === '/reset-password'
  
  // If accessing protected route without auth, redirect to login
  if (isAuthRequired && !session) {
    const redirectUrl = new URL('/login', req.url)
    // Add the original URL as a query param to redirect back after login
    redirectUrl.searchParams.set('redirectTo', pathname)
    return NextResponse.redirect(redirectUrl)
  }
  
  // If accessing auth pages while logged in, redirect to dashboard
  if (isAuthRoute && session) {
    const redirectUrl = new URL('/dashboard', req.url)
    return NextResponse.redirect(redirectUrl)
  }
  
  return res
}

// Match all routes except for API routes, static files, etc.
// But specifically include the auth and protected routes for the middleware to run
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/dashboard/:path*',
    '/profile/:path*', 
    '/settings/:path*',
    '/login',
    '/signup',
    '/forgotpassword',
    '/reset-password'
  ],
}