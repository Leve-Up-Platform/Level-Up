// ============================================
// landingData.js
// كل الـ Data بتاعة الـ Landing Page هنا
// بدل ما تكون متفرقة في كل component
// ============================================

export const features = [
  {
    icon: "map",
    color: "text-primary bg-primary/10",
    title: "Interactive Roadmaps",
    desc: "Visual paths that adapt to your progress, showing exactly what to learn next and why it matters.",
  },
  {
    icon: "terminal",
    color: "text-tertiary bg-tertiary/10",
    title: "Course Management",
    desc: "Organize your external tutorials, books, and videos into a single unified workspace for focus.",
  },
  {
    icon: "monitoring",
    color: "text-secondary bg-secondary/10",
    title: "Progress Tracking",
    desc: "Real-time data visualization of your XP, streaks, and skill mastery with professional analytics.",
  },
  {
    icon: "workspace_premium",
    color: "text-white bg-gradient-to-tr from-yellow-400 to-orange-500",
    title: "Gamification Engine",
    desc: "Earn badges, climb leaderboards, and unlock perks as you hit major learning milestones.",
    tags: ["+500 XP", "Level 12"],
  },
  {
    icon: "work",
    color: "text-tertiary bg-tertiary/10",
    title: "Career Guidance",
    desc: "AI-powered mentorship matching and interview prep tailored specifically to your roadmap progress.",
  },
  {
    icon: "groups",
    color: "text-secondary bg-secondary/10",
    title: "Expert Community",
    desc: "Connect with peers on the same path, share insights, and get peer-reviews on your work.",
  },
];

export const steps = [
  {
    num: "01",
    colorClass: "border-primary/20 text-primary hover:bg-primary",
    title: "Choose Your Destiny",
    desc: "Pick from dozens of vetted career paths—from AI Engineer to Product Design—and we'll build your custom trajectory.",
  },
  {
    num: "02",
    colorClass: "border-secondary/20 text-secondary hover:bg-secondary",
    title: "Analyze Your Gap",
    desc: "Complete a quick technical assessment. Level Up identifies what you already know and skips the basics you don't need.",
  },
  {
    num: "03",
    colorClass: "border-tertiary/20 text-tertiary hover:bg-tertiary",
    title: "Execute the Roadmap",
    desc: "Follow structured modules. Each node contains curated resources, hands-on tasks, and real-world project requirements.",
  },
  {
    num: "04",
    colorClass: "border-primary/20 text-primary hover:bg-primary",
    title: "Build the Portfolio",
    desc: "Everything you learn transforms into a tangible project. We track your progress so recruiters can see your evolution in real time.",
  },
  {
    num: "05",
    colorClass: "border-secondary/20 text-secondary hover:bg-secondary",
    title: "Get Certified & Hired",
    desc: "Earn verifiable credentials, unlock our career network. We connect high-XP users directly with partners hiring managers.",
  },
];

export const testimonials = [
  {
    text: "The roadmap structure is unlike anything I've used. It gave me a game plan for my career that I actually followed and it worked.",
    name: "Sarah Jenkins",
    role: "Frontend Engineer @ Google",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    text: "The theoretical foundation of Level Up is under XP. My reputation with startups has skyrocketed because of how personalized it is.",
    name: "Marcus Thorne",
    role: "Senior AI Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
  },
  {
    text: "I landed my dream job at a top startup through their hiring network. The XP system actually meant something to the recruiters.",
    name: "Elena Rodriguez",
    role: "UX Designer @ Figma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
  },
];

export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    features: ["Access to 3 Roadmaps", "Basic Progress Tracking", "Public Community Access"],
    btnText: "Get Started",
    btnClass: "border border-outline-variant text-on-surface hover:bg-white/5",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    features: [
      "Unlimited Roadmaps",
      "Advanced Performance Analytics",
      "Private Mentor Discord",
      "Verified Achievement Badges",
      "Career Matching Engine",
    ],
    btnText: "Level Up Now",
    btnClass: "bg-white text-primary-container font-black hover:scale-[1.02] active:scale-95 shadow-xl",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Custom Team Roadmaps",
      "Admin Dashboards & Reporting",
      "SSO & Advanced Security",
      "Dedicated Success Manager",
    ],
    btnText: "Contact Sales",
    btnClass: "border border-outline-variant text-on-surface hover:bg-white/5",
    highlight: false,
  },
];

export const faqs = [
  {
    q: "Is Level Up a course provider?",
    a: "We curate the best resources from around the web—including YouTube, Coursera, and documentation—and wrap them into a structured, achievement-based roadmap so you know exactly what to do next.",
  },
  {
    q: "How does the XP system work?",
    a: "XP is earned by completing lesson nodes, passing assessments, and submitting project milestones. It acts as a verifiable proof of effort that companies in our network use to find top talent.",
  },
  {
    q: "Can I switch roadmaps at any time?",
    a: "Yes! You can explore and switch between any roadmaps in our library. Your base XP remains constant, while skill-specific XP is tracked per path.",
  },
];

export const footerLinks = [
  {
    title: "Product",
    links: ["Roadmaps", "Features", "Pricing", "Integrations"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Community", "Blog", "Roadmap Beta"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Security"],
  },
];

export const notifications = [
  {
    icon: "emoji_events",
    iconColor: "text-yellow-400",
    title: "New Badge Earned!",
    desc: "You unlocked the 'Fast Learner' badge",
    time: "2m ago",
    unread: true,
  },
  {
    icon: "trending_up",
    iconColor: "text-tertiary",
    title: "Rank Up!",
    desc: "You moved to #42 on the leaderboard",
    time: "1h ago",
    unread: true,
  },
  {
    icon: "school",
    iconColor: "text-primary",
    title: "Module Completed",
    desc: "You finished 'React Advanced Hooks'",
    time: "3h ago",
    unread: false,
  },
];
