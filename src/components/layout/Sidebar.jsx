
import {
  LayoutDashboard,
  Route /* أيقونة المسار التعليمي الأدق */,
  BookOpen,
  Briefcase,
  User,
  Trophy,
  Settings,
  HelpCircle,
} from "lucide-react";

// حولناه لـ JavaScript مبسطة وشيلنا الـ interfaces عشان يشتغل بدون مشاكل
export default function Sidebar({ currentTab, setCurrentTab }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "roadmap", label: "Roadmap", icon: Route },
    { id: "curriculum", label: "Curriculum", icon: BookOpen },
    { id: "career", label: "Career Hub", icon: Briefcase },
    { id: "profile", label: "Profile", icon: User },
    { id: "leaderboard", label: "Leaderboard", icon: Trophy },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col bg-surface w-64 z-50 border-r border-outline-variant/10">
      {/* رأس الـ Sidebar (اللوجو) */}
      <div className="p-8">
        {/* استخدمنا text-primary مع تأثير الـ text-glow الفخم اللي أنت عملته */}
        <span className="text-2xl font-black italic tracking-tighter text-primary-container text-glow">
          Level Up
        </span>
        <p className="text-[10px] uppercase tracking-[0.2em] mt-1 text-on-surface-variant opacity-70">
          The Kinetic Scholar
        </p>
      </div>

      {/* قوائم التنقل والـ Hover والـ Active المتناسق بالملي */}
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                isActive
                  ? "text-primary-container bg-primary-container/20 font-bold scale-[1.02] border-l-4 border-primary shadow-lg shadow-primary-container/10"
                  : "text-on-surface-variant hover:text-primary-container hover:bg-white/5"
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              <span
                className={`text-xs ${isActive ? "font-bold" : "font-semibold"}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* الجزء السفلي (الإعدادات والدعم) */}
      <div className="p-4 space-y-1 border-t border-outline-variant/10 bg-surface-container-low">
        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold text-on-surface-variant hover:text-primary-container hover:bg-white/5 transition-all">
          <Settings size={18} />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold text-on-surface-variant hover:text-primary-container hover:bg-white/5 transition-all">
          <HelpCircle size={18} />
          <span>Support</span>
        </button>
      </div>
    </aside>
  );
}
