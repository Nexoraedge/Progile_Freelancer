// app/actions/auth.ts
'use server'

import { createClient } from '@/lib/supabase/browser'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

export async function signInWithEmail(formData: FormData) {
  const supabase = createClient()
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return { error: error.message }
  }

  redirect('/')
}

export async function signUpWithEmail(formData: FormData) {
  const supabase = createClient()
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signUp({ email, password })

  if (error) {
    return { error: error.message }
  }

  redirect('/')
}

export async function signInWithProvider(provider: 'google' | 'github') {
  const supabase = createClient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options:{
      redirectTo : `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`
    }
  })

  if (error) throw error
 
  redirect(data.url + "error" + error)
}

