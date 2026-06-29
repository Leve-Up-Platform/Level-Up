import { useState } from "react";
import {
  MessageSquare, UserPlus, Zap, Lock,
  ExternalLink, Heart, MessageCircle
} from "lucide-react";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";     

// ── البيانات ──────────────────────────────────────────────────────────────
const trophies = [
  {
    id: "1",
    Icon: () => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#4edea3" strokeWidth="2" />
        <path d="M14 9l1.5 4.5H20l-3.7 2.7 1.4 4.3L14 18l-3.7 2.5 1.4-4.3L8 13.5h4.5z" fill="#4edea3" />
      </svg>
    ),
    name: "Top Scholar",
    subtitle: "Batch '23 Alpha",
    locked: false,
    iconBg: "rgba(78,222,163,0.12)",
  },
  {
    id: "2",
    Icon: () => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="14" rx="2" stroke="#818cf8" strokeWidth="2" />
        <path d="M10 13l3 3 5-5" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: "React Master",
    subtitle: "Curriculum Completion",
    locked: false,
    iconBg: "rgba(129,140,248,0.12)",
  },
  {
    id: "3",
    Icon: () => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.5 7.5H24l-6.5 4.7 2.5 7.8L14 19.5l-6 4.5 2.5-7.8L4 11.5h7.5z" stroke="#c084fc" strokeWidth="1.5" fill="none"/>
        <circle cx="14" cy="14" r="3" fill="#c084fc" />
      </svg>
    ),
    name: "UI Ninja",
    subtitle: "Design Sprint Winner",
    locked: false,
    iconBg: "rgba(192,132,252,0.12)",
  },
  {
    id: "4",
    Icon: () => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#fb923c" strokeWidth="2" />
        <path d="M14 8v6l4 2" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    name: "Fast Learner",
    subtitle: "7 Day Streak",
    locked: false,
    iconBg: "rgba(251,146,60,0.12)",
  },
  {
    id: "5",
    Icon: Lock,
    name: "Locked",
    subtitle: "Next Milestone",
    locked: true,
    iconBg: "rgba(100,116,139,0.10)",
  },
];

const projects = [
  {
    id: "1",
    title: "Kinetic Pulse OS",
    description: "A futuristic operating system concept focusing on fluid transitio...",
    tags: ["#Figma", "#SwiftUI"],
    image: "https://picsum.photos/seed/kineticOS/600/340",
    featured: true,
    large: false,
    version: null,
  },
  {
    id: "2",
    title: "Neural Link Dashboard",
    description: "Data visualization tool for tracking synaptic responses in real-time...",
    tags: ["#React", "#D3.js"],
    image: "https://picsum.photos/seed/neural/600/340",
    featured: false,
    large: false,
    version: null,
  },
  {
    id: "3",
    title: "Scholar Quest Mobile",
    description: "Gamified learning platform that turns curriculum milestones into epic dungeon crawls and boss battles.",
    tags: [],
    image: "https://picsum.photos/seed/scholarquest/600/400",
    featured: false,
    large: true,
    version: "V3 RELEASE",
  },
];

const feedPosts = [
  {
    id: "1",
    user: "Sarah Jenkins",
    avatar: "https://picsum.photos/seed/sarah99/80/80",
    time: "Just now",
    label: "Milestone Shared",
    body: "Finally finished the Advanced Python module! 🐍 The decorator section was tough but worth it. On to the Capstone project!",
    tags: ["#Python", "#Backend", "#LevelUp"],
    likes: 24,
    comments: 8,
    image: null,
  },
  {
    id: "2",
    user: "Marcus Thorne",
    avatar: "https://picsum.photos/seed/marcus55/80/80",
    time: "2h ago",
    label: "Portfolio Update",
    body: "Just pushed a new version of my weather app using the Kinetic Scholar UI guidelines. Thoughts on the color contrast?",
    tags: [],
    likes: 152,
    comments: 42,
    image: "https://picsum.photos/seed/weatherapp/400/180",
  },
];

// ── المكونات المصغرة ─────────────────────────────────────────────────────────

function TrophyCard({ t }) {
  const IconComp = t.Icon;
  return (
    <Card className={`p-4 flex flex-col items-center gap-3 transition-transform duration-150 border-outline-variant bg-surface-container-low !rounded-2xl ${t.locked ? 'opacity-50 grayscale cursor-default' : 'hover:scale-105 cursor-pointer'}`}>
      <div 
        className="w-[52px] h-[52px] rounded-xl flex items-center justify-center"
        style={{ background: t.iconBg }}
      >
        {t.locked ? <Lock size={22} className="text-on-surface-variant" /> : <IconComp />}
      </div>
      <div className="text-center">
        <p className="text-on-surface font-bold text-[13px] m-0">{t.name}</p>
        <p className="text-on-surface-variant text-[11px] mt-1">{t.subtitle}</p>
      </div>
    </Card>
  );
}

function ProjectCard({ p }) {
  if (p.large) {
    return (
      <Card className="col-span-full p-0 flex rounded-2xl overflow-hidden border-outline-variant bg-surface-container-low group hover:border-primary-container/50 transition-colors">
        <div className="w-2/5 shrink-0">
          <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-7 flex flex-col justify-center gap-3 flex-1 bg-surface-container-low">
          <h3 className="text-on-surface font-extrabold text-[22px] leading-tight m-0">{p.title}</h3>
          <p className="text-on-surface-variant text-[14px] leading-relaxed m-0">{p.description}</p>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-[10px] font-extrabold tracking-widest text-on-surface-variant border border-outline-variant px-2 py-1 rounded-md">
              {p.version}
            </span>
            <button className="flex items-center gap-1.5 text-on-surface font-bold text-[14px] hover:text-primary transition-colors">
              View Case Study <ExternalLink size={13} />
            </button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-0 rounded-2xl overflow-hidden border-outline-variant bg-surface-container-low hover:border-primary-container/50 transition-colors flex flex-col">
      <div className="relative h-[175px] overflow-hidden">
        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
        {p.featured && (
          <span className="absolute bottom-3 left-3 bg-tertiary text-background text-[10px] font-extrabold tracking-widest px-2.5 py-1 rounded-full">
            FEATURED
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1 bg-surface-container-low">
        <h3 className="text-on-surface font-extrabold text-[15px] m-0">{p.title}</h3>
        <p className="text-on-surface-variant text-[13px] leading-relaxed m-0">{p.description}</p>
        {p.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {p.tags.map(tag => (
              <span key={tag} className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}

function FeedPostCard({ post }) {
  return (
    <div className="py-4 border-b border-outline-variant last:border-0">
      <div className="flex gap-3">
        <img src={post.avatar} alt={post.user} className="w-9 h-9 rounded-full object-cover border border-outline-variant shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-on-surface font-bold text-[13px]">{post.user}</span>
            <span className="text-on-surface-variant text-[11px]">{post.time} · {post.label}</span>
          </div>
          <p className="text-on-surface-variant text-[13px] leading-relaxed mt-1.5 mb-0">{post.body}</p>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-primary text-[11px] cursor-pointer hover:underline">{tag}</span>
              ))}
            </div>
          )}
          {post.image && (
            <div className="mt-2.5 rounded-lg overflow-hidden border border-outline-variant">
              <img src={post.image} alt="preview" className="w-full h-[110px] object-cover" />
            </div>
          )}
          <div className="flex gap-4 mt-2.5">
            <button className="flex items-center gap-1.5 text-on-surface-variant text-[12px] hover:text-on-surface transition-colors">
              <Heart size={12} /> {post.likes}
            </button>
            <button className="flex items-center gap-1.5 text-on-surface-variant text-[12px] hover:text-on-surface transition-colors">
              <MessageCircle size={12} /> {post.comments}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── الصفحة الرئيسية ───────────────────────────────────────────────────────────
export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("portfolio");

  return (
    <div className="min-h-screen bg-background font-sans pb-12">
      
      {/* ── البانر العلوي (Hero) ─────────────────────────────────────────── */}
      <div className="relative h-[240px] overflow-hidden mx-6 mt-6 rounded-[24px]">
        {/* تدرج لوني يناسب الثيم */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container via-primary/60 to-[#c47aa3]" />
        
        {/* رسمة تجريدية */}
        <svg className="absolute right-[5%] top-0 h-full opacity-60" viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="130" rx="80" ry="95" fill="#e8b4a0" />
          <ellipse cx="160" cy="65" rx="82" ry="55" fill="#3b1f8c" />
          <rect x="78" y="65" width="22" height="80" rx="11" fill="#3b1f8c" />
          <rect x="220" y="65" width="22" height="80" rx="11" fill="#3b1f8c" />
          <ellipse cx="130" cy="118" rx="16" ry="20" fill="#c9daf8" />
          <ellipse cx="190" cy="118" rx="16" ry="20" fill="#c9daf8" />
          <ellipse cx="130" cy="120" rx="9" ry="11" fill="#3b1f8c" />
          <ellipse cx="190" cy="120" rx="9" ry="11" fill="#3b1f8c" />
        </svg>

        <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ── معلومات البروفايل ─────────────────────────────────────── */}
      <div className="px-12 -mt-[60px] relative z-10 flex items-end justify-between flex-wrap gap-6">
        <div className="flex items-end gap-5">
          <div className="relative">
            <div className="w-[120px] h-[120px] rounded-2xl border-4 border-background bg-surface-container-high overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/seed/maya/220/220"
                alt="Maya Mohamed"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-tertiary text-background text-[10px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1 shadow-md whitespace-nowrap">
              <Zap size={10} className="fill-background" /> Level 42
            </div>
          </div>
          
          <div className="pb-1">
            <h1 className="text-on-surface font-black text-3xl tracking-tight m-0">
              Maya Mohamed
            </h1>
            <p className="text-on-surface-variant text-sm mt-1.5 leading-relaxed max-w-[340px]">
              Software Developer & Tech Enthusiast.<br />
              Building the next generation of kinetic interfaces at Level Up Academy.
            </p>
          </div>
        </div>

        <div className="flex gap-3 pb-1">
          <Button 
            variant="secondary" 
            className="flex items-center gap-2 !bg-surface-container-low !border-outline-variant !text-on-surface-variant hover:!bg-surface-container-high"
          >
            <MessageSquare size={16} /> Message
          </Button>
          <Button 
            variant="primary" 
            className="flex items-center gap-2 !bg-primary-container !text-white"
          >
            <UserPlus size={16} /> Follow
          </Button>
        </div>
      </div>

      {/* ── الجوائز (Trophy Case) ──────────────────────────────────────────── */}
      <div className="mt-12 px-10">
        <p className="text-[10px] font-bold tracking-[0.18em] text-on-surface-variant uppercase mb-4">
          Digital Trophy Case
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {trophies.map(t => <TrophyCard key={t.id} t={t} />)}
        </div>
      </div>

      {/* ── المحتوى الرئيسي (Main content + Sidebar) ─────────────────────────── */}
      <div className="mt-10 px-10 flex flex-col lg:flex-row gap-8">
        
        {/* اليسار: التبويبات والمحتوى */}
        <div className="flex-1 min-w-0">
          <div className="flex gap-8 border-b border-outline-variant mb-6">
            {["portfolio", "feed"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-[14px] font-bold capitalize transition-all border-b-2 ${
                  activeTab === tab 
                    ? "text-on-surface border-primary-container" 
                    : "text-on-surface-variant border-transparent hover:text-on-surface"
                }`}
              >
                {tab === "portfolio" ? "My Portfolio" : "Community Feed"}
              </button>
            ))}
          </div>

          {activeTab === "portfolio" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects.map(p => <ProjectCard key={p.id} p={p} />)}
            </div>
          )}

          {activeTab === "feed" && (
            <Card className="!bg-surface-container-low !border-outline-variant !p-5">
              {feedPosts.map(post => <FeedPostCard key={post.id} post={post} />)}
            </Card>
          )}
        </div>

        {/* اليمين: الـ Sidebar للـ Feed */}
        <div className="w-full lg:w-[320px] shrink-0">
          <div className="sticky top-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-on-surface font-extrabold text-[15px] m-0">Community Feed</h2>
              <button className="text-primary text-[12px] font-bold hover:underline">
                View All
              </button>
            </div>
            <Card className="!bg-surface-container-low !border-outline-variant !p-5">
              {feedPosts.map(post => <FeedPostCard key={post.id} post={post} />)}
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}