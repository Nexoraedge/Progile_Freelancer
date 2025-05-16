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


    export const formSchema = z.object({
      role: z.string().min(1, "Role is required"),
      experienceLevel: z.enum(["Beginner", "Intermediate", "Expert"]),
      yearsExperience: z.string().min(1, "Years of experience is required"),
      location: z.string().min(1, "Location is required"),
      professional_summary: z.string().min(1, "Professional summary is required"),
    
      skills: z.array(z.string()).min(1, "At least one skill is required"),
      services: z.array(z.string()).min(1, "At least one service is required"),
    
      hourly_rate: z.number({
        invalid_type_error: "Hourly rate must be a number",
      }).min(1, "Hourly rate is required"),
    
      weekly_hours: z.number({
        invalid_type_error: "Weekly hours must be a number",
      }).min(1, "Weekly hours are required"),
    
      languages: z.array(z.string()).min(1, "Select at least one language"),
    
      fluency: z.record(
        z.enum(["Basic", "Conversational", "Fluent", "Native"]),
        {
          required_error: "Fluency is required",
          invalid_type_error: "Fluency must be a valid map",
        }
      ),
    
      communication_style: z.string().min(1, "Communication style is required"),
    
      portfolio_url: z.string().url("Must be a valid URL").min(1, "Portfolio is required"),
    
      project: z.object({
        title: z.string().min(1, "Project title is required"),
        description: z.string().min(1, "Project description is required"),
        url: z.string().url("Project URL must be valid").min(1, "Project URL is required"),
      }),
    
      cv: z.string().min(1, "CV upload is required"),
      Prefferd_platform:z.enum(["Fiverr", "Upwork", "Freelancer", "none"]),
      work_preferences: z.enum(["remote", "onsite", "short term", "long term"]),
      generate_cover_letter: z.boolean(),
      generate_proposal_template: z.boolean(),
      Optamize_for_platform_Seo: z.boolean(),
    });