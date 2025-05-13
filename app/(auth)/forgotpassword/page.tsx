"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sparkles } from "lucide-react"
import { supabase } from "@/lib/supabase/client"
import { useState } from "react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handlePasswordReset = async () => {
    setLoading(true)
    setError('')
    setMessage('')
    
    if (!email) {
      setError("Please enter your email address.")
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password`,
      })
      
      if (error) {
        setError(error.message)
      } else {
        setMessage("Password reset link sent! Check your email inbox.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Branding Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 flex-col items-center justify-center p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-md mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="font-bold text-white text-xl">FPL</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-200">
            Reset Your Password
          </h1>

          <p className="text-slate-300 mb-8">
            We'll send you a reset link to get back into your Freelancer Profile Launcher account.
          </p>

          <div className="space-y-6">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/40 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Account Security</h3>
                  <p className="text-sm text-slate-400">Keep your profile secure with a strong password</p>
                </div>
              </div>
              <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Panel */}
      <div className="w-full lg:w-1/2 bg-slate-950 flex flex-col items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center lg:hidden mb-8">
            <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="font-bold text-white text-xl">FPL</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">Forgot Password</h2>
              <p className="text-slate-400">Enter your email to receive a password reset link</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="name@example.com"
                  className="bg-slate-900/50 border-slate-700 focus:border-purple-500"
                />
              </div>

              {message && (
                <div className="p-3 rounded-md bg-green-900/30 border border-green-700 text-green-400">
                  {message}
                </div>
              )}

              {error && (
                <div className="p-3 rounded-md bg-red-900/30 border border-red-700 text-red-400">
                  {error}
                </div>
              )}

              <Button
                onClick={handlePasswordReset}
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white shadow-lg shadow-purple-500/20 transition-all duration-300"
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </div>

            <div className="text-center space-y-4">
              <p className="text-sm text-slate-400">
                Remember your password?{" "}
                <Link href="/login" className="text-purple-400 hover:text-purple-300">
                  Back to Login
                </Link>
              </p>
              <p className="text-sm text-slate-400">
                Don't have an account?{" "}
                <Link href="/signup" className="text-purple-400 hover:text-purple-300">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}