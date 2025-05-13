"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"

export default function AuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const handleAuthCallback = async () => {
      // Process the OAuth callback or email confirmation
      const { data, error } = await supabase.auth.getSession()
      
      if (error) {
        console.error("Auth callback error:", error)
        router.push("/login?error=Unable to authenticate")
        return
      }
      
      // Check if this is a password reset flow
      const hashParams = new URLSearchParams(window.location.hash.substring(1))
      const type = hashParams.get('type')
      
      if (type === 'recovery') {
        // Send to reset password page with the hash intact
        router.push(`/reset-password${window.location.hash}`)
        return
      }
      
      // For normal sign-ins or other auth flows
      if (data?.session) {
        router.push('/dashboard')
      } else {
        router.push('/login')
      }
    }

    handleAuthCallback()
  }, [router])

  return (
    <div className="flex min-h-screen bg-slate-950 items-center justify-center">
      <div className="text-center p-8">
        <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-6">
          <span className="font-bold text-white text-2xl">FPL</span>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Processing your authentication...</h1>
        <p className="text-slate-400">Please wait while we securely sign you in.</p>
        
        <div className="mt-6 flex justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-500"></div>
        </div>
      </div>
    </div>
  )
}