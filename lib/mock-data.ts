export const featuredJobs = [
  {
    id: 1,
    title: "Frontend Engineering Intern",
    company: "Stripe",
    logo: "S",
    location: "San Francisco, CA (Remote)",
    type: "Internship",
    skills: ["React", "TypeScript", "CSS"],
    match: 95,
    deadline: "3 days left",
    salary: "$45/hr",
    posted: "2h ago",
  },
  {
    id: 2,
    title: "Product Design Intern",
    company: "Figma",
    logo: "F",
    location: "New York, NY (Hybrid)",
    type: "Internship",
    skills: ["Figma", "UI/UX", "Prototyping"],
    match: 88,
    deadline: "5 days left",
    salary: "$40/hr",
    posted: "4h ago",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Linear",
    logo: "L",
    location: "Remote",
    type: "Full-time",
    skills: ["Node.js", "PostgreSQL", "GraphQL"],
    match: 82,
    deadline: "1 week left",
    salary: "$120k/yr",
    posted: "6h ago",
  },
  {
    id: 4,
    title: "ML Research Intern",
    company: "OpenAI",
    logo: "O",
    location: "San Francisco, CA",
    type: "Internship",
    skills: ["Python", "PyTorch", "NLP"],
    match: 91,
    deadline: "2 days left",
    salary: "$60/hr",
    posted: "1h ago",
  },
  {
    id: 5,
    title: "Data Science Intern",
    company: "Vercel",
    logo: "V",
    location: "Remote",
    type: "Internship",
    skills: ["Python", "SQL", "Pandas"],
    match: 85,
    deadline: "4 days left",
    salary: "$50/hr",
    posted: "3h ago",
  },
  {
    id: 6,
    title: "Mobile Developer",
    company: "Notion",
    logo: "N",
    location: "New York, NY",
    type: "Full-time",
    skills: ["React Native", "Swift", "Kotlin"],
    match: 78,
    deadline: "6 days left",
    salary: "$130k/yr",
    posted: "5h ago",
  },
]

export const forYouJobs = [
  {
    id: 7,
    title: "Python Backend Intern",
    company: "Anthropic",
    logo: "A",
    reason: "Based on your Python skills",
    skills: ["Python", "FastAPI", "Redis"],
    match: 94,
  },
  {
    id: 8,
    title: "Full Stack Developer",
    company: "Supabase",
    logo: "S",
    reason: "Similar to your saved jobs",
    skills: ["Next.js", "PostgreSQL", "TypeScript"],
    match: 89,
  },
  {
    id: 9,
    title: "DevOps Engineering Intern",
    company: "GitHub",
    logo: "G",
    reason: "Trending in your field",
    skills: ["Docker", "Kubernetes", "CI/CD"],
    match: 76,
  },
]

export const testimonials = [
  {
    name: "Priya Sharma",
    role: "SDE Intern @ Google",
    avatar: "PS",
    quote: "CareerHub changed the game for me. I found my dream internship in less than a week. The aggregator saved me hours of manual searching across platforms.",
    rating: 5,
  },
  {
    name: "Alex Chen",
    role: "Product Design @ Figma",
    avatar: "AC",
    quote: "The personalized feed is insanely accurate. It felt like the platform understood exactly what I was looking for. Highly recommend to every student.",
    rating: 5,
  },
  {
    name: "Jordan Williams",
    role: "ML Engineer @ Meta",
    avatar: "JW",
    quote: "I went from missing opportunities to getting three offers. The dashboard keeps everything organized and the skill gap analysis is brilliant.",
    rating: 5,
  },
  {
    name: "Sara Patel",
    role: "Backend Dev @ Stripe",
    avatar: "SP",
    quote: "Finally, one place that pulls opportunities from everywhere. No more checking 10 different Discord servers and email chains every morning.",
    rating: 5,
  },
]

export const blogPosts = [
  {
    title: "How to Land a FAANG Internship in 2026",
    excerpt: "A comprehensive guide covering application timelines, interview prep strategies, and insider tips from recent interns at top tech companies.",
    category: "Career Guide",
    readTime: "8 min read",
    date: "Feb 20, 2026",
  },
  {
    title: "The Ultimate Resume Template for Tech Roles",
    excerpt: "Stop using generic resume templates. Learn the format that actually gets past ATS systems and catches the attention of hiring managers.",
    category: "Resume Tips",
    readTime: "5 min read",
    date: "Feb 18, 2026",
  },
  {
    title: "10 Skills Every CS Student Should Learn",
    excerpt: "Beyond DSA: the practical skills that employers actually look for, from system design to communication and everything in between.",
    category: "Skills",
    readTime: "6 min read",
    date: "Feb 15, 2026",
  },
]

export const chatbotResponses: Record<string, string> = {
  "Apply Process": "To apply for a job on CareerHub:\n\n1. Browse or search for opportunities\n2. Click on a job card to view details\n3. Hit 'Apply Now' to be redirected to the application\n4. Track your application in the Dashboard\n\nPro tip: Save jobs to apply later!",
  "Resume Help": "Here are some quick resume tips:\n\n• Keep it to 1 page for internships\n• Use action verbs (Built, Designed, Led)\n• Quantify your achievements\n• Tailor it for each application\n• Use our AI Resume Scorer in the Dashboard!",
  "Dashboard Help": "Your Dashboard includes:\n\n• Application Tracker — monitor all your applications\n• Saved Jobs — bookmarked opportunities\n• Skill Gap Analysis — see what skills to learn\n• Resume Upload — store your resume\n• Recommendations — personalized job feed",
  "Internship Tips": "Top internship tips:\n\n1. Start applying early (Aug-Oct for summer)\n2. Network on LinkedIn and at events\n3. Build projects that showcase your skills\n4. Practice coding challenges regularly\n5. Don't limit yourself to big companies!\n\nSmall startups can offer amazing learning experiences.",
}

export const dashboardSavedJobs = [
  { title: "Frontend Intern", company: "Stripe", status: "Saved", date: "Feb 24" },
  { title: "ML Research Intern", company: "OpenAI", status: "Applied", date: "Feb 22" },
  { title: "Product Design", company: "Figma", status: "Interview", date: "Feb 20" },
  { title: "Backend Dev", company: "Linear", status: "Saved", date: "Feb 19" },
]

export const dashboardNotifications = [
  { text: "New match: Python Intern at Anthropic", time: "2 min ago", unread: true },
  { text: "Application viewed by Stripe", time: "1 hour ago", unread: true },
  { text: "Interview scheduled with Figma", time: "3 hours ago", unread: false },
  { text: "Deadline reminder: OpenAI ML Intern", time: "5 hours ago", unread: false },
]

export const trendingSkills = [
  { name: "React", growth: "+24%", level: 85 },
  { name: "Python", growth: "+18%", level: 72 },
  { name: "TypeScript", growth: "+31%", level: 68 },
  { name: "System Design", growth: "+15%", level: 45 },
  { name: "Docker", growth: "+12%", level: 30 },
]
