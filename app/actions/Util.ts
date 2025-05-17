import { createClient } from "@/lib/supabase/browser"
import * as z from "zod";
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


    // Define the project schema
    const projectSchema = z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      url: z.string().url().optional().or(z.string().length(0)),
    });
    
    // Define the main form schema
    export const formSchema = z.object({
      role: z.string().min(1, { message: "Role is required" }),
      experienceLevel: z.string().min(1, { message: "Experience level is required" }),
      yearsExperience: z.string().min(1, { message: "Years of experience is required" }),
      location: z.string().optional(),
      professional_summary: z.string().min(10, { message: "Professional summary is required" }),
      skills: z.array(z.string()).min(1, { message: "At least one skill is required" }),
      services: z.array(z.string()).min(1, { message: "At least one service is required" }),
      hourly_rate: z.number().min(5, { message: "Hourly rate must be at least $5" }),
      weekly_hours: z.number().min(5, { message: "Weekly hours must be at least 5" }),
      languages: z.array(z.string()).min(1, { message: "At least one language is required" }),
      fluencylevels: z.record(z.string()).optional(),
      communication_style: z.string().optional(),
      portfolio_url: z.string().url().optional().or(z.string().length(0)),
      project: z.array(projectSchema).optional(),
      cv: z.instanceof(File).optional(),
      Prefferd_platform: z.array(z.string()).min(1, { message: "Select at least one platform" }),
      work_preferences: z.array(z.string()).optional(),
      generate_cover_letter: z.boolean().optional(),
      generate_proposal_template: z.boolean().optional(),
      Optamize_for_platform_Seo: z.boolean().optional(),
    });
    
    // Type definitions for form data
    export type FormSchema = z.infer<typeof formSchema>;