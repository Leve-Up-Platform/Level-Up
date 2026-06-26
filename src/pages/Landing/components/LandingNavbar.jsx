import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { notifications } from "../landingData";

const LandingNavbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [scrolled, setScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // عدد الـ notifications الغير مقروءة
  const unreadCount = notifications.filter((n) => n.unread).length;

  const notifRef = useRef(null);

  // Navbar background لما يسكرول
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // لما يضغط برة الـ dropdown يتأغل
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex justify-between items-center px-8 w-full h-16 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-outline-variant/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* ── Logo ── */}
      <div className="flex items-center gap-2">
        <span
          className="material-symbols-outlined text-primary text-3xl"
          style={{ "font-variation-settings": "'FILL' 1" }}
        >
          rocket_launch
        </span>
        <span className="text-xl font-extrabold tracking-tighter text-on-surface">
          Level Up
        </span>
      </div>

      {/* ── Nav Links ── */}
      <div className="hidden md:flex items-center gap-8">
        {[
          { label: "Roadmaps", href: "#features" },
          { label: "How it Works", href: "#how-it-works" },
          { label: "Pricing", href: "#pricing" },
          { label: "Support", href: "#faq" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-on-surface-variant hover:text-primary transition-all font-medium text-sm"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* ── Right Side ── */}
      <div className="flex items-center gap-3">
        {/* Dark / Light Toggle */}
        <button
          onClick={toggleTheme}
          className="w-9 h-9 flex items-center justify-center rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all"
          title="Toggle Theme"
        >
          <span className="material-symbols-outlined text-xl">
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
        </button>

        {/* Notification Bell */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setShowNotifications((prev) => !prev)}
            className="w-9 h-9 flex items-center justify-center rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all relative"
          >
            <span className="material-symbols-outlined text-xl">
              notifications
            </span>
            {/* Badge */}
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[9px] font-black rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Dropdown */}
          {showNotifications && (
            <div className="absolute top-12 right-0 w-80 bg-surface-container border border-outline-variant/20 rounded-2xl shadow-2xl shadow-black/30 overflow-hidden z-50">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-outline-variant/10">
                <span className="font-bold text-sm text-on-surface">
                  Notifications
                </span>
                <span className="text-xs text-primary font-bold cursor-pointer hover:underline">
                  Mark all read
                </span>
              </div>

              {/* List */}
              <div className="divide-y divide-outline-variant/10">
                {notifications.map((notif, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 px-4 py-3 hover:bg-surface-container-high transition-all cursor-pointer ${
                      notif.unread ? "bg-primary/5" : ""
                    }`}
                  >
                    {/* Icon */}
                    <div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                      <span
                        className={`material-symbols-outlined text-lg ${notif.iconColor}`}
                      >
                        {notif.icon}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-on-surface">
                        {notif.title}
                      </p>
                      <p className="text-xs text-on-surface-variant mt-0.5 truncate">
                        {notif.desc}
                      </p>
                      <p className="text-xs text-primary mt-1">{notif.time}</p>
                    </div>

                    {/* Unread dot */}
                    {notif.unread && (
                      <div className="w-2 h-2 bg-primary rounded-full mt-1 shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-4 py-3 border-t border-outline-variant/10 text-center">
                <span className="text-xs text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                  View all notifications
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Auth Buttons */}
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-primary-container text-white px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default LandingNavbar;
