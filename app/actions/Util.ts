import { createClient } from "@/lib/supabase/browser"
export default async function loadUser() {
      const supabase = createClient()
      const { data: { user }, error } = await supabase.auth.getUser()
       const userData = user?.user_metadata as UserData;
      
      
      if (error) {
        console.error('Error loading user:', error)
      }
      
      if (!user) {
        return null
      }
      
      return userData;
    }
