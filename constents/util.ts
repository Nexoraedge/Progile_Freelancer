import { Settings2 } from "lucide-react";
import { Award, BarChart3, Clock, Download, FileInput, FileOutput, FileText, Home, Layers, Library, Repeat, Rocket , Sparkles, Target, ThumbsUp, UserCircle, Users, Zap } from "lucide-react";

export const steps = [
  {
    id: 1,
    title: "Create Your Base Profile",
    description: "Enter your skills, experience, and portfolio or simply upload your CV to get started.",
    icon: UserCircle,
    color: "from-purple-500 to-purple-700",
  },
  {
    id: 2,
    title: "Select Your Target Platforms",
    description: "Choose which freelancing platforms you want to optimize your profile for.",
    icon: Target,
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 3,
    title: "Generate Platform-Optimized Content",
    description: "Our AI analyzes each platform's requirements and creates tailored content that stands out.",
    icon: Sparkles,
    color: "from-cyan-500 to-cyan-700",
  },
  {
    id: 4,
    title: "Customize and Launch",
    description: "Review, edit if needed, and launch your optimized profiles across all platforms with one click.",
    icon: Rocket,
    color: "from-purple-500 to-cyan-500",
  },
]

export const features = [
  {
    title: "AI-Powered Platform Optimization",
    description:
      "Our AI analyzes each platform's unique requirements to create tailored content that ranks higher and converts better.",
    icon: Sparkles,
    color: "bg-gradient-to-br from-purple-500 to-purple-700",
  },
  {
    title: "Time-Saving Tools",
    description:
      "Import your CV, generate content with one click, and manage all your freelance profiles from a single dashboard.",
    icon: Clock,
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    title: "Professional Polish",
    description:
      "Adjust tone, incorporate industry-specific language, and generate professional cover letters that impress clients.",
    icon: Award,
    color: "bg-gradient-to-br from-cyan-500 to-cyan-700",
  },
  {
    title: "Content Management",
    description: "Store multiple profile versions, track revision history, and export your content in various formats.",
    icon: Library,
    color: "bg-gradient-to-br from-purple-500 to-cyan-500",
  },
  {
    title: "Keyword Optimization",
    description:
      "Automatically identify and incorporate high-performing keywords that help your profile appear in more search results.",
    icon: Zap,
    color: "bg-gradient-to-br from-purple-500 to-blue-500",
  },
  {
    title: "Multi-Platform Support",
    description:
      "Generate optimized content for Fiverr, Upwork, Freelancer, Toptal, LinkedIn and more from a single source profile.",
    icon: Layers,
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    title: "Proposal Templates",
    description:
      "Access customizable proposal templates that help you respond to client requests quickly and professionally.",
    icon: FileText,
    color: "bg-gradient-to-br from-purple-500 to-indigo-500",
  },
  {
    title: "Performance Analytics",
    description:
      "Track which profiles and content perform best, with insights to continuously improve your freelance presence.",
    icon: BarChart3,
    color: "bg-gradient-to-br from-cyan-500 to-blue-500",
  },
]

export const benefits = [
  {
    title: "Save 5+ Hours Per Platform",
    description:
      "Stop wasting time rewriting your profile for each platform. Our AI does the heavy lifting so you can focus on client work.",
    icon: Clock,
    stat: "5+",
    statLabel: "Hours Saved",
  },
  {
    title: "73% of Freelancers Blend In",
    description:
      "Most freelancers use generic profiles that get lost in the crowd. Stand out with platform-optimized content that gets noticed.",
    icon: Users,
    stat: "73%",
    statLabel: "Blend In",
  },
  {
    title: "First Impressions Convert",
    description:
      "Profiles optimized with our AI receive 3.4× more client inquiries than generic profiles. Make every word count.",
    icon: ThumbsUp,
    stat: "3.4×",
    statLabel: "More Inquiries",
  },
  {
    title: "End Copy-Paste Fatigue",
    description:
      "Manage all your freelance profiles from one dashboard. Update once, and push changes everywhere with a single click.",
    icon: Repeat,
    stat: "1",
    statLabel: "Dashboard",
  },
]

export const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out the platform",
    features: [
      "1 base profile",
      "2 platform exports",
      "Basic AI optimization",
      "Standard templates",
      "Manual updates",
      "Community support",
    ],
    missingFeatures: [
      "Advanced AI optimization",
      "Unlimited platform exports",
      "Revision history",
      "Analytics dashboard",
      "Priority support",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline",
    popular: false,
  },
  {
    name: "Pro",
    price: "$12.99",
    period: "per month",
    description: "Everything you need for freelance success",
    features: [
      "Unlimited base profiles",
      "Unlimited platform exports",
      "Advanced AI optimization",
      "Premium templates",
      "One-click updates",
      "Revision history",
      "Analytics dashboard",
      "Priority support",
      "Custom branding",
    ],
    missingFeatures: [],
    buttonText: "Get Pro",
    buttonVariant: "default",
    popular: true,
  },
  {
    name: "Lifetime Deal",
    price: "$199",
    period: "one-time payment",
    description: "Early bird special - limited time offer",
    features: [
      "All Pro features",
      "Lifetime access",
      "Future updates included",
      "Early access to new features",
      "1-on-1 onboarding call",
      "VIP support",
    ],
    missingFeatures: [],
    buttonText: "Get Lifetime Access",
    buttonVariant: "default",
    popular: false,
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "UX/UI Designer",
    avatar: "/profile/pro1.jpg",
    content:
      "Freelancer Profile Launcher transformed my freelance business. I was struggling to get noticed on Upwork, but after optimizing my profile with this tool, I started receiving inquiries within days. The platform-specific optimization is truly game-changing!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Full-Stack Developer",
    avatar: "/profile/pro2.png",
    content:
      "As someone who works across multiple freelance platforms, keeping my profiles consistent and optimized was a nightmare. This tool saved me countless hours and helped me land higher-quality clients. The AI-generated content is surprisingly good and sounds like me!",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Content Writer",
    avatar: "/profile/pro3.png",
    content:
      "I was skeptical at first, but the results speak for themselves. My Fiverr gigs are ranking higher, and I've seen a 40% increase in client messages. The platform understands the nuances of different freelance marketplaces and tailors content perfectly for each one. Worth every penny!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Video Editor",
    avatar: "/profile/pro4.jpg",
    content:
      "I've tried several profile optimization tools, but none compare to Freelancer Profile Launcher. The ability to generate platform-specific content from a single source profile is brilliant. My Upwork JSS score improved by 15% within two months of using this tool.",
    rating: 4,
  },
  {
    id: 5,
    name: "Emma Thompson",
    role: "Digital Marketer",
    avatar: "/profile/avatar.jpg",
    content:
      "This tool helped me break into the top-rated seller category on Fiverr much faster than I expected. The keyword optimization is spot-on, and the proposal templates have significantly improved my response rate. Highly recommended for serious freelancers!",
    rating: 5,
  },
]

export const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Profile Input", href: "/profile-input", icon: FileInput },
  { name: "Generated Content", href: "/generated-content", icon: FileOutput },
  { name: "Export Center", href: "/export-center", icon: Download },
  { name: "Settings", href: "/settings", icon: Settings2 },
]
