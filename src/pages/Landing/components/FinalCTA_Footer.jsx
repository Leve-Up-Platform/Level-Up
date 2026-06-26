// ============================================================
// FinalCTA.jsx
// ============================================================
import { useNavigate } from "react-router-dom";

export const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 px-6">
      <div
        className="max-w-5xl mx-auto p-12 lg:p-20 rounded-[3rem] relative overflow-hidden text-center shadow-2xl shadow-indigo-500/20"
        style={{ background: "linear-gradient(135deg, #4f46e5, #6001d1)" }}
      >
        {/* Grid Decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter relative z-10">
          Stop Learning Randomly.<br />Start Building Deliberately.
        </h2>
        <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12 relative z-10">
          Join 12,000 scholars today and get your first roadmap for free. No credit card required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <button
            onClick={() => navigate("/login")}
            className="w-full sm:w-auto bg-white text-primary-container px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform active:scale-95 shadow-xl"
          >
            Join the Academy
          </button>
          <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
            <span className="material-symbols-outlined text-tertiary">check_circle</span>
            Full access to 3 roadmaps
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// LandingFooter.jsx
// ============================================================
import { footerLinks } from "../landingData";

export const LandingFooter = () => (
  <footer className="bg-surface-container-low py-20 px-6 border-t border-outline-variant/10">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12">
      {/* Brand */}
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <span
            className="material-symbols-outlined text-primary text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            rocket_launch
          </span>

          <span className="text-2xl font-extrabold tracking-tighter text-on-surface">
            Level Up
          </span>
        </div>
        <p className="text-on-surface-variant max-w-xs mb-8 leading-relaxed">
          Accelerating human potential through structured, data-driven mastery
          paths.
        </p>
        <div className="flex gap-4">
          {["public", "share", "mail"].map((icon) => (
            <div
              key={icon}
              className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined">{icon}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      {footerLinks.map((col) => (
        <div key={col.title}>
          <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">
            {col.title}
          </h4>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            {col.links.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-primary transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Bottom */}
    <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-on-surface-variant">
      <p>© 2024 Level Up Academy. Built for the kinetic scholar.</p>
      <div className="flex gap-8">
        {["Twitter", "LinkedIn", "GitHub"].map((s) => (
          <a key={s} href="#" className="hover:text-primary transition-colors">
            {s}
          </a>
        ))}
      </div>
    </div>
  </footer>
);
