import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
// استيراد الأيقونات المودرن من Lucide لتطابق الـ Sidebar
import { Search, Bell, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    // التعديل: ربط الخلفية والبوردر بالتوكينز والـ Variables الجديدة بتاعتك
    <div className="h-20 bg-background/80 backdrop-blur-md border-b border-outline-variant/10 flex items-center justify-between px-8 fixed top-0 right-0 left-64 z-10 transition-colors duration-200">
      {/* شريط البحث المطور */}
      <div className="w-96 relative ">
        <Search
          className="absolute left-4 top-2 text-on-surface-variant/70"
          size={18}
        />
        <input
          type="text"
          placeholder="Search cohorts, projects, or scholars..."
          className="w-full bg-surface-container-low text-on-surface pl-11 pr-4 py-2 rounded-2xl border border-outline-variant/20 focus:outline-none focus:border-primary text-xs placeholder-on-surface-variant/40 transition-all"
        />
      </div>

      {/* الأزرار اليمين */}
      <div className="flex items-center gap-5">
        {/* زرار التنبيهات مع نوتيفيكيشن متناسقة بلون الـ tertiary الأخضر */}
        <button className="text-on-surface-variant hover:text-primary relative p-2 hover:bg-white/5 rounded-xl transition-all">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-tertiary rounded-full"></span>
        </button>

        {/* زرار الـ Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="text-on-surface-variant hover:text-primary p-2 hover:bg-white/5 rounded-xl transition-all"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        {/* زرار الـ Upgrade الموحد البنفسجي الأنيق (أنت كاتب هنا الماتش لـ primary-container) */}
        <button className="bg-primary-container hover:bg-opacity-90 text-white px-5 py-2 rounded-xl text-xs font-bold active:scale-95 transition-all shadow-md shadow-primary-container/10">
          Upgrade
        </button>

        {/* صورة بروفايل الطالب */}
        <div className="w-8 h-8 rounded-full border border-primary/30 overflow-hidden cursor-pointer hover:border-primary transition-all">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
