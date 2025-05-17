interface DashboardLayoutProps {
    children: ReactNode
  }

interface UserData {
    id: string
    email?: string
    firstName?: string
    lastName?: string
    created_at: string
    updated_at: string
    full_name?: string
    avatar_url?: string
    user_name?: string
    provider_id?: string
}
export type EntryData = {
  role: string;
  experience_level: string;
  years_experience: number;
  location: string | null;
  professional_summary: string;
  skills: string[];
  services: string[];
  hourly_rate: number;
  weekly_hours: number;
  languages: string[];
  fluencylevels: Record<string, string>;
  communication_style: string | null;
  portfolio_url: string | null;
  project: any[];
  cv_url: string | null;
  prefferd_platform: string[];
  work_preferences: string[];
  generate_cover_letter: boolean;
  generate_proposal_template: boolean;
  optamize_for_platform_seo: boolean;
  datalength :number;
}
