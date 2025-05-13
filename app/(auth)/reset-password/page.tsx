"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sparkles, ShieldCheck } from "lucide-react"
import { supabase } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function ResetPasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [passwordStrength, setPasswordStrength] = useState(0)

  // Check for hash parameter when component mounts
  useEffect(() => {
    // If we're accessing this page directly, the hash might be in the URL
    // This handles the redirect from the email link
    const hashParams = new URLSearchParams(window.location.hash.substring(1))
    const accessToken = hashParams.get('access_token')
    
    // If there's no access token, we'll assume the user needs to check their email
    if (!accessToken) {
      setMessage("Please check your email and click the reset link we sent you.")
    }
  }, [])

  const checkPasswordStrength = (pass: string) => {
    let strength = 0
    if (pass.length >= 8) strength += 1
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength += 1
    if (pass.match(/\d/)) strength += 1
    if (pass.match(/[^a-zA-Z\d]/)) strength += 1
    setPasswordStrength(strength)
    return strength
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    checkPasswordStrength(newPassword)
  }

  const handleResetPassword = async () => {
    setLoading(true)
    setError('')
    setMessage('')
    
    if (!password || !confirmPassword) {
      setError("Please fill all fields.")
      setLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords don't match.")
      setLoading(false)
      return
    }

    if (checkPasswordStrength(password) < 3) {
      setError("Please use a stronger password with at least 8 characters, including uppercase, lowercase, numbers, and special characters.")
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      })
      
      if (error) {
        setError(error.message)
      } else {
        setMessage("Password updated successfully!")
        // Redirect to login page after 2 seconds
        setTimeout(() => {
          router.push('/login')
        }, 2000)
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
            Choose a New Password
          </h1>

          <p className="text-slate-300 mb-8">
            Create a strong, unique password to secure your Freelancer Profile Launcher account.
          </p>

          <div className="space-y-6">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/40 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Password Security Tips</h3>
                  <p className="text-sm text-slate-400">Mix letters, numbers, and symbols</p>
                </div>
              </div>
              <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    passwordStrength === 0 ? 'w-0' :
                    passwordStrength === 1 ? 'w-1/4 bg-red-500' :
                    passwordStrength === 2 ? 'w-2/4 bg-yellow-500' :
                    passwordStrength === 3 ? 'w-3/4 bg-blue-500' :
                    'w-full bg-gradient-to-r from-purple-500 to-cyan-500'
                  }`} 
                />
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
              <h2 className="text-3xl font-bold">Reset Password</h2>
              <p className="text-slate-400">Enter your new password below</p>
            </div>

            {message && (
              <div className="p-3 rounded-md bg-green-900/30 border border-green-700 text-green-400">
                {message}
              </div>
            )}

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  type="password"
                  placeholder="••••••••"
                  className="bg-slate-900/50 border-slate-700 focus:border-purple-500"
                />
                {password && (
                  <div className="mt-1">
                    <div className="flex gap-1">
                      <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 1 ? 'bg-red-500' : 'bg-slate-700'}`}></div>
                      <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 2 ? 'bg-yellow-500' : 'bg-slate-700'}`}></div>
                      <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 3 ? 'bg-blue-500' : 'bg-slate-700'}`}></div>
                      <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 4 ? 'bg-green-500' : 'bg-slate-700'}`}></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      {passwordStrength === 0 && "Password is too weak"}
                      {passwordStrength === 1 && "Password is weak"}
                      {passwordStrength === 2 && "Password is fair"}
                      {passwordStrength === 3 && "Password is good"}
                      {passwordStrength === 4 && "Password is strong"}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="••••••••"
                  className="bg-slate-900/50 border-slate-700 focus:border-purple-500"
                />
                {password && confirmPassword && (
                  <p className={`text-xs mt-1 ${password === confirmPassword ? 'text-green-400' : 'text-red-400'}`}>
                    {password === confirmPassword ? "Passwords match" : "Passwords don't match"}
                  </p>
                )}
              </div>

              {error && (
                <div className="p-3 rounded-md bg-red-900/30 border border-red-700 text-red-400">
                  {error}
                </div>
              )}

              <Button
                onClick={handleResetPassword}
                disabled={loading || passwordStrength < 3 || password !== confirmPassword}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white shadow-lg shadow-purple-500/20 transition-all duration-300"
              >
                {loading ? 'Updating...' : 'Reset Password'}
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-slate-400">
                Remember your password?{" "}
                <Link href="/login" className="text-purple-400 hover:text-purple-300">
                  Back to Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}