"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Upload,
  X,
  Plus,
  ArrowRight,
  Info,
  Globe,
  DollarSign,
  Clock,
  FileText,
  LinkIcon,
  Briefcase,
  Code,
  Languages,
  Sparkles,
  Loader2,
} from "lucide-react"
// Sample data
import { skillOptions, languageOptions, fluencyLevels, serviceCategories } from "@/constants/util"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FormSchema, formSchema, loadUserToken } from "@/app/actions/Util"
import type { Database } from '@/lib/supabase/config'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { EntryData } from "@/constants/declear"

export default function ProfileInputPage() {

  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [newSkill, setNewSkill] = useState("")
  const [selectedLanguages, setSelectedLanguages] = useState<{ language: string; fluency: string }[]>([])
  const [newLanguage, setNewLanguage] = useState("")
  const [newLanguageFluency, setNewLanguageFluency] = useState("Conversational")
  const [services, setServices] = useState<string[]>([])
  const [newService, setNewService] = useState("")
  const [hourlyRate, setHourlyRate] = useState([50])
  const [weeklyHours, setWeeklyHours] = useState([40])
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [noofProject, setNoofProject] = useState(0)
  const [yearsExperience, setYearsExperience] = useState(0)
  const [ExperienceLevel, setExperienceLevel] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [Generate_cover_letter, setGenerate_cover_letter] = useState(false);
  // const [Generate_proposal_template, setGenerate_proposal_template] = useState(false);
  // const [Optamize_for_platform_Seo, setOptamize_for_platform_Seo] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "",
      experienceLevel: "",
      yearsExperience: "",
      location: "",
      professional_summary: "",
      skills: [],
      services: [],
      hourly_rate: 50,
      weekly_hours: 40,
      languages: [],
      fluencylevels: {},
      communication_style: "",
      portfolio_url: "",
      project: [],
      cv: undefined,
      Prefferd_platform: ["upwork"],
      work_preferences: ["remote"],
      generate_cover_letter: false,
      generate_proposal_template: false,
      Optamize_for_platform_Seo: false
    }
  });
  // console.log("Current form values:", watch());
  // now I want that , the fetched data will be displayed on the input box and if they edit , it will be updated in the database
  useEffect(() => {
    const getUserData = async () => {
      const userData = await loadUserToken();
      const supabase = createClientComponentClient<Database>()
      const { data, error } = await supabase.from('entries').select('*').eq('user_id', userData?.id) as { data: EntryData | null, error: any }
      if (error) {
        console.error('Error loading entries:', error)
      }
      // const Data_current = data[data.length - 1]
      const Data_current = Array.isArray(data) && data.length > 0 ? data[data.length - 1] : null;
      if (Data_current) {
        setValue("role", Data_current.role);
        setValue("experienceLevel", Data_current.experience_level);
        const expLevel = Data_current.experience_level || "";
        setValue("experienceLevel", expLevel);
        setExperienceLevel(expLevel.replace(" ", ""));
        const yearsExp = typeof Data_current.years_experience === 'number'
          ? Data_current.years_experience.toString()
          : Data_current.years_experience || "";
        setValue("yearsExperience", yearsExp);
        setYearsExperience(parseInt(yearsExp));
        console.log("Experience Level:", expLevel);
        setValue("location", Data_current.location);
        setValue("professional_summary", Data_current.professional_summary);
        setSelectedSkills(Data_current.skills);
        setServices(Data_current.services);
        setHourlyRate([Data_current.hourly_rate]);
        setWeeklyHours([Data_current.weekly_hours]);

        if (Data_current.languages && Array.isArray(Data_current.languages)) {
          const languagesWithFluency = Data_current.languages.map((lang: string) => ({
            language: lang,
            fluency: Data_current.fluencylevels?.[lang] || "Conversational"
          }));
          setSelectedLanguages(languagesWithFluency);
        }

        setValue("communication_style", Data_current.communication_style);
        setValue("portfolio_url", Data_current.portfolio_url);

        if (Array.isArray(Data_current.project) && Data_current.project.length > 0) {
          // Set the project count
          setNoofProject(Data_current.project.length - 1);

          // Also make sure the form value is set correctly
          setValue("project", Data_current.project);

          // Loop through projects to set values in the form fields
          Data_current.project.forEach((project: any, index: any) => {
            setValue(`project.${index}.title`, project.title || '');
            setValue(`project.${index}.description`, project.description || '');
            setValue(`project.${index}.url`, project.url || '');
          });
        } else {
          // Default to 0 projects if none exist
          setNoofProject(0);
        }
        setValue("Prefferd_platform", Data_current.prefferd_platform);
        setValue("work_preferences", Data_current.work_preferences);
        setValue("generate_cover_letter", Data_current.generate_cover_letter);
        setValue("generate_proposal_template", Data_current.generate_proposal_template);
        setValue("Optamize_for_platform_Seo", Data_current.optamize_for_platform_seo);
      }
    }
    getUserData();

  }, [])

  useEffect(() => {
    setValue("skills", selectedSkills);
  }, [selectedSkills, setValue]);

  //year experence
  useEffect(() => {
    setValue("yearsExperience", yearsExperience.toString());
  }, [yearsExperience, setValue]);

  useEffect(() => {
    setValue("experienceLevel", ExperienceLevel);
  }, [ExperienceLevel, setValue]);

  useEffect(() => {
    if (!selectedLanguages || selectedLanguages.length === 0) {
      setValue("languages", []);
      setValue("fluencylevels", {});
      return;
    }

    const languages = selectedLanguages.map(lang => lang.language);
    const fluencyObject = selectedLanguages.reduce((acc, lang) => {
      if (lang.language && lang.fluency !== undefined) {
        acc[lang.language] = lang.fluency;
      }
      return acc;
    }, {} as Record<string, any>);

    setValue("languages", languages);
    setValue("fluencylevels", fluencyObject);
  }, [selectedLanguages, setValue]);

  useEffect(() => {
    setValue("services", services);
  }, [services, setValue]);

  useEffect(() => {
    setValue("hourly_rate", hourlyRate[0]);
  }, [hourlyRate, setValue]);

  useEffect(() => {
    setValue("weekly_hours", weeklyHours[0]);
  }, [weeklyHours, setValue]);

  useEffect(() => {
    if (resumeFile) {
      setValue("cv", resumeFile);
    }
  }, [resumeFile, setValue]);

  // Add this near your other validation code
  useEffect(() => {
    if (resumeFile) {
      if (resumeFile.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5MB limit");
        removeResume();
      }
    }
  }, [resumeFile]);



  // Handlers for form inputs
  const addSkill = () => {
    if (newSkill && !selectedSkills.includes(newSkill)) {
      setSelectedSkills([...selectedSkills, newSkill])
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill))
  }

  const addLanguage = () => {
    if (newLanguage && !selectedLanguages.some((l) => l.language === newLanguage)) {
      setSelectedLanguages([
        ...selectedLanguages,
        {
          language: newLanguage,
          fluency: newLanguageFluency,
        },
      ])
      setNewLanguage("")
    }
  }

  const removeLanguage = (language: string) => {
    setSelectedLanguages(selectedLanguages.filter((l) => l.language !== language))
  }

  const addService = () => {
    if (newService && !services.includes(newService)) {
      setServices([...services, newService])
      setNewService("")
    }
  }
  const handleAddProject = (e: number) => {
    setNoofProject(e);
  }


  const removeService = (service: string) => {
    setServices(services.filter((s) => s !== service))
  }

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setResumeFile(file);
      setValue("cv", file);
    }
  }

  const removeResume = () => {
    setResumeFile(null);
    setValue("cv", undefined);
  }


  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const supabase = createClientComponentClient<Database>()
    try {
      setIsLoading(true)
      const {
        data: { session },
      } = await supabase.auth.getSession()

      const token = session?.access_token
      if (!token) {
        alert('You must be signed in.')
        return
      }

      const { data: user } = await supabase.auth.getUser()

      const insertPayload = {
        user_id: user?.user?.id,
        role: data.role,
        experience_level: data.experienceLevel,
        years_experience: data.yearsExperience,
        location: data.location || null,
        professional_summary: data.professional_summary,
        skills: data.skills,
        services: data.services,
        hourly_rate: data.hourly_rate,
        weekly_hours: data.weekly_hours,
        languages: data.languages,
        fluencylevels: data.fluencylevels || {},
        communication_style: data.communication_style || null,
        portfolio_url: data.portfolio_url || null,
        project: data.project || [],
        cv_url: null, // optional: upload and attach cv_url if needed
        prefferd_platform: data.Prefferd_platform,
        work_preferences: data.work_preferences || [],
        generate_cover_letter: data.generate_cover_letter || false,
        generate_proposal_template: data.generate_proposal_template || false,
        optamize_for_platform_seo: data.Optamize_for_platform_Seo || false,
      }

      const { error } = await supabase.from('entries').insert(insertPayload)

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: data.role,
          summary: data.professional_summary,
          skills: data.skills
        }),
      });
      
      const dataa = await res.json();
      console.log("dataa : ", dataa);

      if (error) {
        throw error
      }

      alert('Profile created successfully!')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error saving your profile. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <>
      <div className="p-3 sm:p-6">
        <div className="mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 premium-text">Complete Your Freelancer Profile</h1>
          <p className="text-sm sm:text-base text-slate-400">
            Fill in the details below to generate optimized profiles for multiple freelancing platforms
          </p>
        </div>

        <form
          className="space-y-4 sm:space-y-8">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Professional Information */}
              <Card className="premium-card premium-border bg-slate-800/50 border-slate-700">
                <CardHeader className="relative z-10 p-4 sm:p-6">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-violet-400" />
                    <CardTitle>Professional Information</CardTitle>
                  </div>
                  <CardDescription>Tell clients about your professional background</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0 sm:pt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="role" className="flex items-center gap-1 text-sm">
                        Your Role <span className="text-red-500">*</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-3.5 w-3.5 text-slate-400 cursor-help ml-1" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-60">Your professional title that will appear on your profile</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <Input id="role" placeholder={`e.g. Full Stack Developer ${errors.role ? "(required)" : ""}`} className="premium-input text-sm" required {...register("role")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience-level" className="flex items-center gap-1 text-sm">
                        Experience Level <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        defaultValue={ExperienceLevel ? ExperienceLevel : watch("experienceLevel")}
                        onValueChange={(value) => { setValue("experienceLevel", value) }}

                        required>
                        <SelectTrigger className="premium-input text-sm">
                          <SelectValue placeholder={`Select your experience level ${errors.experienceLevel ? "(required)" : ""}`} />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700">
                          <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                          <SelectItem value="expert">Expert (5+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

                    <div className="space-y-2">
                      <Label htmlFor="years-experience" className="flex items-center gap-1 text-sm">
                        Years of Experience <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        onValueChange={(value) => {
                          setValue("yearsExperience", value);
                          setYearsExperience(parseInt(value) || 0);
                        }}
                        defaultValue={yearsExperience ? yearsExperience.toString() : watch("yearsExperience")}
                        required>
                        <SelectTrigger className="premium-input text-sm">
                          <SelectValue
                            placeholder={`Select years of experience ${errors.yearsExperience ? "(required)" : ""}`} />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700">
                          {Array.from({ length: 20 }, (_, i) => (
                            <SelectItem key={i} value={(i + 1).toString()}>
                              {i + 1} {i === 0 ? "year" : "years"}
                            </SelectItem>
                          ))}
                          <SelectItem value="20+">20+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="flex items-center gap-1 text-sm">
                        Location
                      </Label>
                      <Input {...register("location")} id="location" placeholder={`e.g. Jaipur, India`} className="premium-input text-sm" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="professional-summary" className="flex items-center gap-1 text-sm">
                      Professional Summary <span className="text-red-500">*</span>
                      <TooltipProvider >
                        <Tooltip >
                          <TooltipTrigger asChild>
                            <Info className="h-3.5 w-3.5 text-slate-400 cursor-help ml-1" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-60">
                              A brief overview of your professional background, expertise, and what makes you unique
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Textarea
                      {...register("professional_summary")}
                      id="professional-summary"
                      placeholder={`Write a brief summary about your professional background, expertise, and what makes you stand out... ${errors.professional_summary ? "(required)" : ""}`}
                      className="min-h-20 sm:min-h-32 premium-input text-sm"
                      required
                    />
                    <p className="text-xs text-slate-500">
                      This will be used as the foundation for your platform-specific bios. Be detailed but concise
                      (150-300 words recommended).
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Skills & Services */}
              <Card className="premium-card premium-border bg-slate-800/50 border-slate-700">
                <CardHeader className="relative z-10 p-4 sm:p-6">
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 sm:h-5 sm:w-5 text-violet-400" />
                    <CardTitle>Skills & Services</CardTitle>
                  </div>
                  <CardDescription>Showcase your technical skills and service offerings</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0 sm:pt-0">
                  <div className="space-y-2">
                    <Label htmlFor="skills" className="flex items-center gap-1 text-sm">
                      Skills / Tech Stack <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {selectedSkills.map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border-purple-500/30 px-2 py-1 text-xs sm:px-3 sm:py-1 flex items-center gap-1"
                        >
                          {skill}
                          <button type="button" className="ml-1 hover:text-white" onClick={() => removeSkill(skill)}>
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Select {...register("skills")} onValueChange={setNewSkill}>
                        <SelectTrigger className="premium-input text-sm">
                          <SelectValue placeholder={`Select or type a skill ${errors.skills ? "(required)" : ""}`} />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700 max-h-64">
                          {skillOptions.map((skill) => (
                            <SelectItem key={skill} value={skill}>
                              {skill}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button type="button" onClick={addSkill} className="premium-button-outline" disabled={!newSkill}>
                        <Plus className="h-4 w-4 mr-1" /> Add
                      </Button>
                    </div>
                    <p className="text-xs text-slate-500">Select up to 15 skills that best represent your expertise</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="services" className="flex items-center gap-1 text-sm">
                      Services Offered <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {services.map((service) => (
                        <Badge
                          key={service}
                          className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-500/30 px-2 py-1 text-xs sm:px-3 sm:py-1 flex items-center gap-1"
                        >
                          {service}
                          <button
                            type="button"
                            className="ml-1 hover:text-white"
                            onClick={() => removeService(service)}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Select {...register("services")} onValueChange={setNewService}>
                        <SelectTrigger className="premium-input text-sm">
                          <SelectValue placeholder={`Select or type a service ${errors.services ? "(required)" : ""}`} />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700 max-h-64">
                          {serviceCategories.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button
                        type="button"
                        onClick={addService}
                        className="premium-button-outline"
                        disabled={!newService}
                      >
                        <Plus className="h-4 w-4 mr-1" /> Add
                      </Button>
                    </div>
                    <p className="text-xs text-slate-500">List the specific services you offer to clients</p>
                  </div>
                </CardContent>
              </Card>

              {/* Communication */}
              <Card className="premium-card premium-border bg-slate-800/50 border-slate-700">
                <CardHeader className="relative z-10 p-4 sm:p-6">
                  <div className="flex items-center gap-2">
                    <Languages className="h-4 w-4 sm:h-5 sm:w-5 text-violet-400" />
                    <CardTitle>Communication</CardTitle>
                  </div>
                  <CardDescription>Languages you speak and communication preferences</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0 sm:pt-0">
                  <div className="space-y-2">
                    <Label htmlFor="languages" className="flex items-center gap-1 text-sm">
                      Languages You Speak <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {selectedLanguages.map((lang) => (
                        <Badge
                          key={lang.language}
                          className="bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border-indigo-500/30 px-2 py-1 text-xs sm:px-3 sm:py-1 flex items-center gap-1"
                        >
                          {lang.language} ({lang.fluency})
                          <button
                            type="button"
                            className="ml-1 hover:text-white"
                            onClick={() => removeLanguage(lang.language)}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div className="sm:col-span-2">
                        <Select {...register("languages")} onValueChange={setNewLanguage}>
                          <SelectTrigger className="premium-input text-sm">
                            <SelectValue placeholder={`Select a language ${errors.languages ? "(required)" : ""}`} />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-700 max-h-64">
                            {languageOptions.map((language) => (
                              <SelectItem key={language} value={language}>
                                {language}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <Select {...register("fluencylevels")} defaultValue="Conversational" onValueChange={setNewLanguageFluency}>
                        <SelectTrigger className="premium-input text-sm">
                          <SelectValue placeholder={`Fluency ${errors.fluencylevels ? "(required)" : ""}`} />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700">
                          {fluencyLevels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-end mt-2">
                      <Button
                        type="button"
                        onClick={addLanguage}
                        className="premium-button-outline text-sm"
                        disabled={!newLanguage}
                      >
                        <Plus className="h-4 w-4 mr-1" /> Add Language
                      </Button>
                    </div>
                    <p className="text-xs text-slate-500">
                      Add all languages you can communicate in with their fluency level
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="communication-style" className="flex items-center gap-1 text-sm">
                      Communication Style
                    </Label>
                    <Textarea
                      {...register("communication_style")}
                      id="communication-style"
                      placeholder="Describe your communication style, availability for meetings, preferred contact methods..."
                      className="min-h-16 sm:min-h-24 premium-input text-sm"
                    />
                    <p className="text-xs text-slate-500">
                      This helps clients understand how you prefer to communicate during projects
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Portfolio & Links */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle>Portfolio & Experience</CardTitle>
                  <CardDescription>Highlight your best work and professional experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0 sm:pt-0">
                  <div className="space-y-2">
                    <Label htmlFor="portfolio-url" className="text-sm">Portfolio URL</Label>
                    <Input
                      {...register("portfolio_url")}
                      id="portfolio-url"
                      placeholder="https://yourportfolio.com"
                      className="bg-slate-900/50 border-slate-700 focus:border-purple-500 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm">Number of Projects</Label>
                    <Select
                      defaultValue={(noofProject-1).toString() || "0"}
                      onValueChange={(e) => handleAddProject(parseInt(e))}>
                      <SelectTrigger className="premium-input text-sm">
                        <SelectValue placeholder="Select number of projects" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700 max-h-64">
                        {Array.from({ length: 21 }).map((_, index) => (
                          <SelectItem key={index} value={index.toString()}>
                            {index + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {noofProject >= 0 && (
                    <div className="mt-4">
                      <Label className="text-sm font-medium">Project Highlights</Label>
                      <div className="space-y-4 mt-2">
                        {Array.from({ length: noofProject+1}).map((_, index) => (
                          <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-md p-3 sm:p-4 space-y-3 sm:space-y-4">
                            <div className="space-y-2">
                              <Input
                                {...register(`project.${index}.title`)}
                                placeholder="Project Title"
                                className="bg-slate-800/50 border-slate-700 focus:border-purple-500 text-sm"
                              />
                              <Textarea
                                {...register(`project.${index}.description`)}
                                placeholder="Brief description of the project, your role, and key achievements..."
                                className="min-h-16 sm:min-h-20 bg-slate-800/50 border-slate-700 focus:border-purple-500 text-sm"
                              />
                              <Input
                                {...register(`project.${index}.url`)}
                                placeholder="Project URL"
                                className="bg-slate-800/50 border-slate-700 focus:border-purple-500 text-sm"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label className="text-sm">Upload CV (Optional)</Label>
                    <div className="border-2 border-dashed border-slate-700 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center text-center">
                      {resumeFile ? (
                        <div className="w-full">
                          <div className="flex items-center justify-between bg-slate-800/80 p-2 rounded-md">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-purple-400 mr-2" />
                              <span className="text-sm truncate">{resumeFile.name}</span>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={removeResume}
                              className="text-slate-400 hover:text-white"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800/80 flex items-center justify-center mb-3 sm:mb-4">
                            <Upload className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400" />
                          </div>
                          <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4">
                            Drag and drop your CV/resume here, or click to browse
                          </p>
                          <label htmlFor="cv-upload">
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="border-slate-700 text-slate-300 text-xs sm:text-sm"
                              onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('cv-upload')?.click();
                              }}
                            >
                              Browse Files
                            </Button>
                          </label>
                          <input
                            id="cv-upload"
                            type="file"
                            accept=".pdf,.doc,.docx,.txt"
                            className="hidden"
                            onChange={handleResumeUpload}
                          // Add this register function to connect to react-hook-form
                          // Note: We don't actually use register here since we handle the onChange manually
                          // But we preserve the connection to the form
                          />
                          <p className="text-xs text-slate-500 mt-3 sm:mt-4">
                            Supports PDF, DOCX, TXT (Max 5MB)
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 sm:space-y-8">
              {/* Freelancer Preferences */}
              <Card className="premium-card premium-border bg-slate-800/50 border-slate-700 lg:sticky lg:top-24">
                <CardHeader className="relative z-10 p-4 sm:p-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-violet-400" />
                    <CardTitle>Freelancer Preferences</CardTitle>
                  </div>
                  <CardDescription>Set your rates, availability, and platform preferences</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0 sm:pt-0">
                  <div className="space-y-3 sm:space-y-4">
                    <Label className="flex items-center gap-1 text-sm">
                      Preferred Platforms <span className="text-red-500">*</span>
                    </Label>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="fiverr"
                          checked={watch("Prefferd_platform")?.includes("fiverr")}
                          onCheckedChange={(checked) => {
                            const current_Platform = watch("Prefferd_platform") || [];
                            setValue(
                              "Prefferd_platform",
                              checked ? [...current_Platform, "fiverr"] : current_Platform.filter((platform: string | never[]) => platform !== "fiverr")
                            )
                          }}
                          className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                        />
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center font-bold text-white text-xs">
                            F
                          </div>
                          <Label htmlFor="fiverr" className="font-medium cursor-pointer text-sm">
                            Fiverr
                          </Label>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={watch("Prefferd_platform")?.includes("upwork")}
                          onCheckedChange={(checked) => {
                            const current_Platform = watch("Prefferd_platform") || [];
                            setValue(
                              "Prefferd_platform",
                              checked ? [...current_Platform, "upwork"] : current_Platform.filter((platform: string | never[]) => platform !== "upwork")
                            )
                          }}

                          id="upwork"
                          className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                        />
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center font-bold text-white text-xs">
                            U
                          </div>
                          <Label htmlFor="upwork" className="font-medium cursor-pointer text-sm">
                            Upwork
                          </Label>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={watch("Prefferd_platform")?.includes("freelancer")}
                          onCheckedChange={(checked) => {
                            const current_Platform = watch("Prefferd_platform") || [];
                            setValue(
                              "Prefferd_platform",
                              checked ? [...current_Platform, "freelancer"] : current_Platform.filter((platform: string | never[]) => platform !== "freelancer")
                            )
                          }}

                          id="freelancer"
                          className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                        />
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center font-bold text-white text-xs">
                            F
                          </div>
                          <Label htmlFor="freelancer" className="font-medium cursor-pointer text-sm">
                            Freelancer.com
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-slate-700">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="hourly-rate" className="flex items-center gap-1 text-sm">
                          <DollarSign className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400" />
                          Hourly Rate (USD) <span className="text-red-500">*</span>
                        </Label>
                        <span className="text-base sm:text-lg font-medium text-white">${hourlyRate[0]}</span>
                      </div>
                      <Slider
                        {...register("hourly_rate")}
                        id="hourly-rate"
                        min={5}
                        max={200}
                        step={5}
                        value={hourlyRate}
                        onValueChange={setHourlyRate}
                        className="py-2 sm:py-4"
                      />
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>$5</span>
                        <span>$200+</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="weekly-hours" className="flex items-center gap-1 text-sm">
                          <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400" />
                          Available Weekly Hours <span className="text-red-500">*</span>
                        </Label>
                        <span className="text-base sm:text-lg font-medium text-white">{weeklyHours[0]} hrs</span>
                      </div>
                      <Slider
                        {...register("weekly_hours")}
                        id="weekly-hours"
                        min={5}
                        max={60}
                        step={5}
                        value={weeklyHours}
                        onValueChange={setWeeklyHours}
                        className="py-2 sm:py-4"
                      />
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>5 hrs</span>
                        <span>60 hrs</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-slate-700">
                    <div className="space-y-2">
                      <Label className="flex items-center gap-1 text-sm">
                        <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400" />
                        Work Preferences
                      </Label>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="remote"
                            checked={watch("work_preferences")?.includes("remote")}
                            onCheckedChange={(checked) => {
                              const currentPrefs = watch("work_preferences") || [];
                              setValue(
                                "work_preferences",
                                checked ? [...currentPrefs, "remote"] : currentPrefs.filter((pref: string | never[]) => pref !== "remote")
                              )
                            }}
                            className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                          />
                          <Label htmlFor="remote" className="text-xs sm:text-sm cursor-pointer">
                            Remote
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="onsite"
                            checked={watch("work_preferences")?.includes("onsite")}
                            onCheckedChange={(checked) => {
                              const currentPrefs = watch("work_preferences") || [];
                              setValue(
                                "work_preferences",
                                checked ? [...currentPrefs, "onsite"] : currentPrefs.filter((pref: string | never[]) => pref !== "onsite")
                              )
                            }}
                            className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                          />
                          <Label htmlFor="onsite" className="text-xs sm:text-sm cursor-pointer">
                            On-site
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="short-term"
                            checked={watch("work_preferences")?.includes("short term")}
                            onCheckedChange={(checked) => {
                              const currentPrefs = watch("work_preferences") || [];
                              setValue(
                                "work_preferences",
                                checked ? [...currentPrefs, "short term"] : currentPrefs.filter((pref: string | never[]) => pref !== "short term")
                              )
                            }}
                            className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                          />
                          <Label htmlFor="short-term" className="text-xs sm:text-sm cursor-pointer">
                            Short-term
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            checked={watch("work_preferences")?.includes("long term")}
                            onCheckedChange={(checked) => {
                              const currentPrefs = watch("work_preferences") || [];
                              setValue(
                                "work_preferences",
                                checked ? [...currentPrefs, "long term"] : currentPrefs.filter((pref: string | never[]) => pref !== "long term")
                              )
                            }}
                            value="long term"
                            id="long-term"
                            defaultChecked
                            className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                          />
                          <Label htmlFor="long-term" className="text-xs sm:text-sm cursor-pointer">
                            Long-term
                          </Label>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-slate-700">
                    <div className="space-y-2">
                      <Label className="flex items-center gap-1 text-sm">Additional Options</Label>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="cover-letter" className="text-xs sm:text-sm cursor-pointer">
                            Generate Cover Letter Templates
                          </Label>
                          <Switch
                            checked={watch("generate_cover_letter") || false}
                            onCheckedChange={(checked) => setValue("generate_cover_letter", checked)}
                            id="cover-letter" className="data-[state=checked]:bg-purple-600" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="proposal-templates" className="text-xs sm:text-sm cursor-pointer">
                            Create Proposal Templates
                          </Label>
                          <Switch
                            checked={watch("generate_proposal_template") || false}
                            onCheckedChange={(checked) => setValue("generate_proposal_template", checked)}
                            id="proposal-templates" className="data-[state=checked]:bg-purple-600" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="optimize-seo" className="text-xs sm:text-sm cursor-pointer">
                            Optimize for Platform SEO
                          </Label>
                          <Switch
                            id="optimize-seo"
                            checked={watch("Optamize_for_platform_Seo") || false}
                            onCheckedChange={(checked) => setValue("Optamize_for_platform_Seo", checked)}
                            className="data-[state=checked]:bg-purple-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="button"
                    onClick={handleSubmit(onSubmit)}
                    className="w-full premium-button text-sm">
                    {
                      isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        "Generate My Profiles"
                      )
                    }
                    <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
