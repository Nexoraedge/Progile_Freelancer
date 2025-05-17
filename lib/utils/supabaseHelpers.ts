// lib/utils/supabaseHelpers.ts (or inside your form file)
import { createClient } from '@/lib/supabase/browser';
import { FormSchema } from '@/app/actions/Util'; // path to your Zod schema

const supabase = createClient();

export const uploadCV = async (file: File, userId: string) => {
  const filePath = `cv-${userId}/${file.name}`;

  const { data, error } = await supabase.storage
    .from('cv-uploads')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: true,
    });

  if (error) throw new Error("CV upload failed: " + error.message);

  const {
    data: { publicUrl },
  } = supabase.storage.from('cv-uploads').getPublicUrl(filePath);

  return publicUrl;
};

export const saveUserProfile = async (
  formData: FormSchema,
  cvUrl: string | null,
  userId: string
) => {
  const { error } = await supabase.from('freelancer_profiles').insert([
    {
      user_id: userId,
      ...formData,
      cv_url: cvUrl,
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) throw new Error("Profile save failed: " + error.message);
};
