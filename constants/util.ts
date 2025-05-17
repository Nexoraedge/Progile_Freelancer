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
  { name: "Settings", href: "/setting", icon: Settings2 },
  { name: "Pricing", href: "/pricing", icon: Rocket },
]

export const plan = [
  {
    name: "Free",
    description: "Perfect for trying out the platform",
    price: "$0",
    period: "forever",
    features: [
      "1 base profile",
      "2 platform exports per month",
      "Basic AI optimization",
      "Standard templates",
      "Manual updates",
      "Community support",
    ],
    limitations: [
      "Advanced AI optimization",
      "Unlimited platform exports",
      "Revision history",
      "Analytics dashboard",
      "Priority support",
    ],
    cta: "Get Started",
    popular: false,
    badge: null,
  },
  {
    name: "Pro",
    description: "Everything you need for freelance success",
    price: "$12.99",
    period: "per month",
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
      "Export to PDF/Markdown",
      "Cover letter generator",
    ],
    limitations: [],
    cta: "Upgrade to Pro",
    popular: true,
    badge: "Most Popular",
  },
  {
    name: "Lifetime",
    description: "One-time payment, lifetime access",
    price: "$199",
    period: "one-time payment",
    features: [
      "All Pro features",
      "Lifetime access",
      "Future updates included",
      "Early access to new features",
      "1-on-1 onboarding call",
      "VIP support",
      "Unlimited exports",
      "Advanced analytics",
      "API access (coming soon)",
    ],
    limitations: [],
    cta: "Get Lifetime Access",
    popular: false,
    badge: "Best Value",
  },
]

export const faqs = [
  {
    question: "What happens when I reach my profile limit?",
    answer:
      "On the Free plan, you can create up to 2 platform exports per month. Once you reach this limit, you'll need to wait until the next month or upgrade to the Pro plan for unlimited exports.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your Pro subscription at any time. You'll continue to have access to Pro features until the end of your current billing period.",
  },
  {
    question: "How does the Lifetime plan work?",
    answer:
      "The Lifetime plan is a one-time payment that gives you permanent access to all Pro features, plus some exclusive benefits. You'll also receive all future updates to the platform at no additional cost.",
  },
  {
    question: "Is there a free trial for the Pro plan?",
    answer:
      "We don't offer a free trial for the Pro plan, but our Free plan allows you to test the core functionality. If you're not satisfied with the Pro plan, we offer a 14-day money-back guarantee.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. For the Lifetime plan, we also offer payment via bank transfer.",
  },
  {
    question: "Can I upgrade from Pro to Lifetime later?",
    answer:
      "Yes, you can upgrade from the Pro plan to the Lifetime plan at any time. We'll even provide a pro-rated discount based on your remaining Pro subscription time.",
  },
]

export const skillOptions = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Python",
  "Django",
  "Flask",
  "Java",
  "Spring Boot",
  "C#",
  ".NET",
  "PHP",
  "Laravel",
  "Ruby",
  "Ruby on Rails",
  "Go",
  "Rust",
  "Swift",
  "Kotlin",
  "HTML",
  "CSS",
  "Sass",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Angular",
  "Vue.js",
  "Svelte",
  "GraphQL",
  "REST API",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "AWS",
  "Azure",
  "GCP",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Git",
  "GitHub",
  "GitLab",
  "Figma",
  "Adobe XD",
  "Photoshop",
  "Illustrator",
  "UI/UX Design",
  "Mobile Development",
  "React Native",
  "Flutter",
  "iOS Development",
  "Android Development",
]

export const languageOptions = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Russian",
  "Chinese (Mandarin)",
  "Japanese",
  "Korean",
  "Arabic",
  "Hindi",
  "Bengali",
  "Dutch",
  "Swedish",
  "Norwegian",
  "Finnish",
  "Danish",
  "Polish",
  "Turkish",
  "Greek",
  "Hebrew",
  "Thai",
  "Vietnamese",
]

export const fluencyLevels = ["Basic", "Conversational", "Fluent", "Native"]

 export const serviceCategories = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Full Stack Development",
  "Frontend Development",
  "Backend Development",
  "DevOps",
  "Cloud Architecture",
  "Database Design",
  "API Development",
  "E-commerce Development",
  "CMS Development",
  "Game Development",
  "Blockchain Development",
  "AI/ML Development",
  "Data Science",
  "QA & Testing",
  "Technical Writing",
  "IT Consulting",
]

export const platformContent = {
  fiverr: {
    bio: `Senior Full-Stack Developer with 7+ years of experience specializing in React, Node.js, and modern web technologies. I've helped 50+ clients transform their ideas into polished, high-performing applications that users love.

My approach combines technical excellence with a deep understanding of business needs, ensuring that every project not only works flawlessly but also achieves your strategic goals. I pride myself on clear communication, attention to detail, and delivering projects on time and within budget.`,
    skills: [
      "React",
      "Node.js",
      "TypeScript",
      "Next.js",
      "MongoDB",
      "Express",
      "Redux",
      "GraphQL",
      "Tailwind CSS",
      "REST API",
      "AWS",
      "Docker",
    ],
    services: [
      "Custom web application development",
      "Front-end development with React and Next.js",
      "Back-end development with Node.js and Express",
      "API development and integration",
      "E-commerce solutions",
      "Performance optimization",
      "Code review and refactoring",
    ],
    coverLetter: `Hello [Client Name],

Thank you for your interest in my React development services. I've reviewed your project requirements for [Project Description] and I'm confident I can deliver exactly what you're looking for.

I've worked on similar projects involving [Relevant Experience] and would approach your project by [Brief Approach].

I'd love to discuss your project in more detail. When would be a good time for a quick call?

Best regards,
[Your Name]`,
    proposal: `I will create professional, responsive React applications with modern UI/UX

Are you looking for a seasoned React developer to bring your web application ideas to life?

With 7+ years of experience in building modern, responsive React applications, I deliver clean, maintainable code that scales with your business needs.

What you'll get:
• Custom React application built to your specifications
• Responsive design that works flawlessly on all devices
• Modern UI/UX with attention to detail and user experience
• Clean, well-documented code following best practices
• Integration with APIs and third-party services
• Thorough testing and bug-free delivery

My expertise includes: React, Redux, Next.js, TypeScript, Tailwind CSS, Material UI, and more.

I pride myself on clear communication, meeting deadlines, and exceeding expectations. Let's discuss your project and create something amazing together!`,
    keywords: [
      "react developer",
      "frontend",
      "web application",
      "javascript",
      "responsive design",
      "react.js",
      "custom website",
      "UI/UX",
      "web development",
      "single page application",
    ],
    portfolio: [
      {
        title: "E-commerce Platform",
        description:
          "Built a full-featured e-commerce platform with React, Node.js, and MongoDB. Implemented payment processing, inventory management, and a responsive admin dashboard.",
        link: "https://example.com/project1",
      },
      {
        title: "SaaS Dashboard",
        description:
          "Developed a comprehensive analytics dashboard for a SaaS company using Next.js, TypeScript, and D3.js for data visualization.",
        link: "https://example.com/project2",
      },
    ],
  },
  upwork: {
    bio: `Results-driven Full-Stack Developer with 7+ years of experience building scalable web applications that drive business growth.

I specialize in creating robust, high-performance applications using React, Node.js, and modern JavaScript frameworks. My expertise spans the entire development lifecycle, from initial architecture to deployment and maintenance.

Core competencies:
• Front-end development with React, Redux, and Next.js
• Back-end development with Node.js, Express, and MongoDB
• RESTful API design and implementation
• Performance optimization and responsive design
• Authentication, security, and data protection
• CI/CD pipelines and deployment strategies

I've successfully delivered projects for startups, mid-sized businesses, and enterprise clients across various industries, consistently meeting deadlines and exceeding expectations.`,
    skills: [
      "React.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Redux",
      "REST API",
      "MongoDB",
      "Express.js",
      "Responsive Design",
      "UI/UX",
      "AWS",
    ],
    services: [
      "Full-stack web application development",
      "Front-end architecture and implementation",
      "Back-end API development",
      "Database design and optimization",
      "Authentication and authorization systems",
      "Third-party API integration",
      "Performance optimization",
    ],
    coverLetter: `Hello [Client Name],

I'm reaching out regarding your [Project Type] project. Having worked on similar projects involving [Relevant Technology/Industry], I believe I'm well-positioned to help you achieve your goals.

What caught my attention about your project is [Specific Detail from Job Post]. Based on your requirements, I would approach this by:

1. First, [Initial Approach/Strategy]
2. Then, [Development Process]
3. Finally, [Delivery/Testing Process]

In a recent project, I [Brief Case Study with Results]. I can bring the same level of expertise and attention to detail to your project.

I'd welcome the opportunity to discuss your project in more detail. Would you be available for a quick call this week?

Best regards,
[Your Name]`,
    proposal: `Senior React Developer | Full-Stack JavaScript Expert | Next.js Specialist

I specialize in building modern, scalable web applications using React, Next.js, and Node.js. With 7+ years of experience, I've helped businesses of all sizes create exceptional digital experiences that drive results.

My approach combines technical excellence with a focus on business outcomes. I don't just write code; I build solutions that solve real problems and create value for your business.

Services:
• Custom web application development
• Front-end architecture and implementation
• Back-end API development
• Performance optimization
• Code review and refactoring
• Technical consultation

Recent success: Helped a SaaS startup reduce page load times by 60% and increase conversion rates by 25% through performance optimization and UX improvements.

I'm available to start immediately and can commit [X] hours per week to your project. Let's discuss how I can help you achieve your goals.`,
    keywords: [
      "React.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Redux",
      "REST API",
      "MongoDB",
      "Express.js",
      "Responsive Design",
      "UI/UX",
      "AWS",
    ],
    portfolio: [
      {
        title: "Healthcare Management System",
        description:
          "Developed a HIPAA-compliant healthcare management system with secure patient records, appointment scheduling, and billing integration.",
        link: "https://example.com/project3",
      },
      {
        title: "Real Estate Marketplace",
        description:
          "Built a real estate marketplace with advanced search, filtering, and mapping features using React, Node.js, and PostgreSQL.",
        link: "https://example.com/project4",
      },
    ],
  },
  freelancer: {
    bio: `Top-rated Full-Stack Developer specializing in React and modern JavaScript frameworks with 7+ years of professional experience.

I've successfully delivered 50+ projects for clients ranging from startups to established businesses, consistently meeting deadlines and exceeding expectations. My technical expertise combined with strong problem-solving skills allows me to create efficient, scalable, and user-friendly applications.

Services I offer:
• Custom web application development
• Front-end development with React, Redux, and Next.js
• Back-end development with Node.js and Express
• API development and integration
• E-commerce solutions
• Performance optimization
• Code review and refactoring

Why choose me:
• Proven track record of successful projects
• Clear communication and regular updates
• Clean, well-documented, and maintainable code
• Focus on delivering business value, not just code
• Commitment to meeting deadlines`,
    skills: [
      "React",
      "JavaScript",
      "Node.js",
      "Web Development",
      "Full Stack",
      "Front End",
      "API Development",
      "MongoDB",
      "MySQL",
      "UI/UX",
      "Responsive Design",
      "Git",
    ],
    services: [
      "Web application development",
      "E-commerce solutions",
      "API development",
      "Front-end implementation",
      "Back-end architecture",
      "Database design",
      "Performance optimization",
    ],
    coverLetter: `Hello [Client Name],

I've reviewed your project requirements for [Project Name/Description] and I'm confident I can deliver an exceptional solution that meets all your needs.

Why I'm the right developer for this project:
• I have [X years/relevant experience] with [specific technologies mentioned in the project]
• I've successfully completed similar projects, including [brief example]
• I understand the importance of [key project requirement] and know how to implement it effectively

My approach to your project:
1. [Initial phase - planning, requirements gathering]
2. [Development phase - key implementation details]
3. [Testing and delivery phase]

I'm available to start immediately and can deliver the project within [timeframe]. I'd be happy to discuss the details further and answer any questions you might have.

Looking forward to working with you!

Best regards,
[Your Name]`,
    proposal: `Expert React & Full-Stack Developer | 7+ Years Experience | 100% Client Satisfaction

I specialize in building custom web applications that solve real business problems and deliver measurable results. With expertise in React, Node.js, and modern web technologies, I create solutions that are not only technically excellent but also user-friendly and scalable.

What sets me apart:
• 7+ years of professional development experience
• 50+ successfully completed projects
• Expertise across the full development stack
• Strong focus on communication and collaboration
• Commitment to quality and attention to detail

My process:
1. Thorough understanding of your requirements and goals
2. Detailed planning and architecture design
3. Regular updates and transparent communication
4. Rigorous testing and quality assurance
5. Timely delivery and post-project support

I'm ready to bring your vision to life with clean code, modern design, and exceptional functionality. Let's create something amazing together!`,
    keywords: [
      "React",
      "JavaScript",
      "Node.js",
      "Web Development",
      "Full Stack",
      "Front End",
      "API Development",
      "MongoDB",
      "MySQL",
      "UI/UX",
      "Responsive Design",
      "Git",
    ],
    portfolio: [
      {
        title: "Social Media Dashboard",
        description:
          "Created a comprehensive social media management dashboard with analytics, scheduling, and content management features.",
        link: "https://example.com/project5",
      },
      {
        title: "Inventory Management System",
        description:
          "Developed a real-time inventory management system with barcode scanning, reporting, and supplier management.",
        link: "https://example.com/project6",
      },
    ],
  },
}