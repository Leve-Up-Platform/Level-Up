// ============================================================
// RoadmapSection.jsx
// Section بيتكلم عن مسار تعليمي معين (Frontend / Backend)
// بيتعرض مرتين — مرة للـ Frontend ومرة للـ Backend
// ============================================================
import useScrollReveal from "../useScrollReveal";

// ── Data ──────────────────────────────────────────────────
const roadmaps = [
  {
    id: "frontend",
    badge: "🎨 Frontend Path",
    title: "The Frontend Developer",
    titleAccent: "Path to 100 XP",
    desc: "Our roadmaps aren't just lists; they are living ecosystems. Watch your avatar move through the neon path as you master each framework.",
    accentColor: "#4edea3",       // tertiary (green)
    glowColor: "rgba(78,222,163,0.15)",
    steps: [
      {
        icon: "check_circle",
        iconColor: "text-tertiary",
        status: "done",
        title: "Basics: HTML5 & CSS3",
        desc: "Master semantic structure and responsive layouts.",
        borderColor: "border-tertiary/30",
      },
      {
        icon: "play_circle",
        iconColor: "text-primary",
        status: "active",
        title: "Advanced JavaScript",
        desc: "Currently Learning: Async/Await & Event Loop.",
        borderColor: "border-primary/50",
        activeBorder: true,
      },
      {
        icon: "lock",
        iconColor: "text-on-surface-variant opacity-40",
        status: "locked",
        title: "React Mastery",
        desc: "Unlock at 65 XP.",
        borderColor: "border-outline-variant/10",
        dimmed: true,
      },
      {
        icon: "lock",
        iconColor: "text-on-surface-variant opacity-40",
        status: "locked",
        title: "Next.js & Performance",
        desc: "Unlock at 80 XP.",
        borderColor: "border-outline-variant/10",
        dimmed: true,
      },
    ],
    xpBadge: { label: "100 XP", sub: "ACHIEVEMENT UNLOCKED" },
    visual: <FrontendVisual />,
    reverse: false,
  },
  {
    id: "backend",
    badge: "⚙️ Backend Path",
    title: "The Backend Engineer",
    titleAccent: "Path to 100 XP",
    desc: "Build the engine that powers the web. From APIs to databases, master the server-side skills companies need most.",
    accentColor: "#c3c0ff",       // primary (purple)
    glowColor: "rgba(195,192,255,0.15)",
    steps: [
      {
        icon: "check_circle",
        iconColor: "text-tertiary",
        status: "done",
        title: "Node.js Fundamentals",
        desc: "Master async programming and the event loop.",
        borderColor: "border-tertiary/30",
      },
      {
        icon: "play_circle",
        iconColor: "text-primary",
        status: "active",
        title: "REST APIs & Express",
        desc: "Currently Learning: Middleware & Route Design.",
        borderColor: "border-primary/50",
        activeBorder: true,
      },
      {
        icon: "lock",
        iconColor: "text-on-surface-variant opacity-40",
        status: "locked",
        title: "Databases: SQL & NoSQL",
        desc: "Unlock at 65 XP.",
        borderColor: "border-outline-variant/10",
        dimmed: true,
      },
      {
        icon: "lock",
        iconColor: "text-on-surface-variant opacity-40",
        status: "locked",
        title: "System Design & DevOps",
        desc: "Unlock at 80 XP.",
        borderColor: "border-outline-variant/10",
        dimmed: true,
      },
    ],
    xpBadge: { label: "100 XP", sub: "ACHIEVEMENT UNLOCKED" },
    visual: <BackendVisual />,
    reverse: true,
  },
];

// ── Frontend Visual ───────────────────────────────────────
function FrontendVisual() {
  return (
    <div className="relative w-full flex justify-center items-center">
      {/* XP Badge floating */}
      <div
        className="absolute top-0 left-8 z-10 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl"
        style={{
          background: "rgba(45,52,73,0.8)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(78,222,163,0.3)",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
            emoji_events
          </span>
        </div>
        <div>
          <div className="text-lg font-black text-on-surface">100 XP</div>
          <div className="text-[10px] text-tertiary font-bold uppercase tracking-widest">
            Achievement Unlocked
          </div>
        </div>
      </div>

      {/* Path Visual Card */}
      <div
        className="w-full max-w-md rounded-3xl p-6 mt-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a2540 0%, #0f1a35 100%)",
          border: "1px solid rgba(195,192,255,0.1)",
          boxShadow: "0 0 60px rgba(78,222,163,0.1)",
        }}
      >
        {/* Neon Path */}
        <svg viewBox="0 0 400 200" className="w-full" style={{ filter: "drop-shadow(0 0 8px #4edea3)" }}>
          <path
            d="M 20 180 Q 80 180 100 140 Q 120 100 180 100 Q 240 100 260 60 Q 280 20 380 20"
            fill="none"
            stroke="url(#pathGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c3c0ff" />
              <stop offset="100%" stopColor="#4edea3" />
            </linearGradient>
          </defs>

          {/* Nodes */}
          {[
            { cx: 20,  cy: 180, label: "HTML/CSS",   done: true  },
            { cx: 180, cy: 100, label: "JavaScript", done: true  },
            { cx: 260, cy: 60,  label: "React",      done: false },
            { cx: 380, cy: 20,  label: "Next.js",    done: false },
          ].map((node, i) => (
            <g key={i}>
              <circle
                cx={node.cx}
                cy={node.cy}
                r="16"
                fill={node.done ? "#4edea3" : "#1a2540"}
                stroke={node.done ? "#4edea3" : "#464555"}
                strokeWidth="2"
              />
              {node.done && (
                <text x={node.cx} y={node.cy + 5} textAnchor="middle" fontSize="12" fill="white">✓</text>
              )}
              {/* Labels */}
              <rect
                x={node.cx - 32}
                y={node.cy - 42}
                width="64"
                height="22"
                rx="6"
                fill="rgba(45,52,73,0.9)"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
              <text
                x={node.cx}
                y={node.cy - 26}
                textAnchor="middle"
                fontSize="9"
                fill="#dae2fd"
                fontWeight="bold"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ── Backend Visual ────────────────────────────────────────
function BackendVisual() {
  return (
    <div className="relative w-full flex justify-center items-center">
      {/* XP Badge */}
      <div
        className="absolute top-0 right-8 z-10 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl"
        style={{
          background: "rgba(45,52,73,0.8)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(195,192,255,0.3)",
          animation: "float 3s ease-in-out infinite 0.5s",
        }}
      >
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-secondary-container flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
            emoji_events
          </span>
        </div>
        <div>
          <div className="text-lg font-black text-on-surface">100 XP</div>
          <div className="text-[10px] text-primary font-bold uppercase tracking-widest">
            Achievement Unlocked
          </div>
        </div>
      </div>

      {/* Server Architecture Visual */}
      <div
        className="w-full max-w-md rounded-3xl p-6 mt-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a2540 0%, #0f1a35 100%)",
          border: "1px solid rgba(195,192,255,0.1)",
          boxShadow: "0 0 60px rgba(195,192,255,0.1)",
        }}
      >
        <svg viewBox="0 0 400 200" className="w-full" style={{ filter: "drop-shadow(0 0 8px #c3c0ff)" }}>
          <path
            d="M 20 180 Q 80 180 100 140 Q 120 100 180 100 Q 240 100 260 60 Q 280 20 380 20"
            fill="none"
            stroke="url(#pathGrad2)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="pathGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4edea3" />
              <stop offset="100%" stopColor="#c3c0ff" />
            </linearGradient>
          </defs>

          {[
            { cx: 20,  cy: 180, label: "Node.js",    done: true  },
            { cx: 180, cy: 100, label: "Express",    done: true  },
            { cx: 260, cy: 60,  label: "Databases",  done: false },
            { cx: 380, cy: 20,  label: "DevOps",     done: false },
          ].map((node, i) => (
            <g key={i}>
              <circle
                cx={node.cx}
                cy={node.cy}
                r="16"
                fill={node.done ? "#c3c0ff" : "#1a2540"}
                stroke={node.done ? "#c3c0ff" : "#464555"}
                strokeWidth="2"
              />
              {node.done && (
                <text x={node.cx} y={node.cy + 5} textAnchor="middle" fontSize="12" fill="#1d00a5">✓</text>
              )}
              <rect
                x={node.cx - 32}
                y={node.cy - 42}
                width="64"
                height="22"
                rx="6"
                fill="rgba(45,52,73,0.9)"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
              <text
                x={node.cx}
                y={node.cy - 26}
                textAnchor="middle"
                fontSize="9"
                fill="#dae2fd"
                fontWeight="bold"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ── Single Roadmap Section ────────────────────────────────
const SingleRoadmap = ({ roadmap }) => {
  const textRef  = useScrollReveal({ direction: roadmap.reverse ? "right" : "left", delay: 0   });
  const visualRef = useScrollReveal({ direction: roadmap.reverse ? "left" : "right", delay: 150 });

  return (
    <section
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: roadmap.reverse ? "rgba(11,19,38,0.5)" : "transparent" }}
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 rounded-full pointer-events-none blur-[100px]"
        style={{ background: roadmap.glowColor }}
      />

      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${roadmap.reverse ? "lg:flex-row-reverse" : ""}`}>

          {/* ── Text Side ── */}
          <div ref={textRef} className="flex-1">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border"
              style={{
                color: roadmap.accentColor,
                borderColor: `${roadmap.accentColor}40`,
                background: `${roadmap.accentColor}15`,
              }}
            >
              {roadmap.badge}
            </div>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-on-surface mb-2 leading-tight">
              {roadmap.title}
            </h2>
            <h2
              className="text-4xl lg:text-5xl font-black tracking-tighter mb-6 leading-tight"
              style={{ color: roadmap.accentColor }}
            >
              {roadmap.titleAccent}
            </h2>

            {/* Desc */}
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-lg">
              {roadmap.desc}
            </p>

            {/* Steps */}
            <div className="space-y-4">
              {roadmap.steps.map((step, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                    step.activeBorder
                      ? "bg-surface-container-high"
                      : "bg-surface-container"
                  } ${step.borderColor} ${step.dimmed ? "opacity-50" : ""}`}
                  style={
                    step.activeBorder
                      ? { borderLeft: `3px solid ${roadmap.accentColor}` }
                      : {}
                  }
                >
                  <span className={`material-symbols-outlined text-2xl ${step.iconColor}`}
                    style={{ fontVariationSettings: step.status === "done" ? "'FILL' 1" : "'FILL' 0" }}>
                    {step.icon}
                  </span>
                  <div>
                    <div className={`font-bold text-sm ${step.dimmed ? "text-on-surface-variant" : "text-on-surface"}`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-on-surface-variant mt-0.5">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Visual Side ── */}
          <div ref={visualRef} className="flex-1 relative">
            {roadmap.visual}
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Main Export ───────────────────────────────────────────
const RoadmapSection = () => (
  <>
    {roadmaps.map((roadmap) => (
      <SingleRoadmap key={roadmap.id} roadmap={roadmap} />
    ))}

    {/* Float animation */}
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-10px); }
      }
    `}</style>
  </>
);

export default RoadmapSection;
