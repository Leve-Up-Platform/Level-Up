import { Sparkles, Award } from "lucide-react";

// دائرة نسبة الـ "Path Velocity" بتدرج بنفسجي -> تركواز
const VelocityRing = ({ percent }) => {
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - percent / 100);

    return (
        <div className="relative w-28 h-28 mx-auto mb-4">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <defs>
                    <linearGradient id="velocityGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="var(--color-primary)" />
                        <stop offset="100%" stopColor="var(--color-tertiary)" />
                    </linearGradient>
                </defs>
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="7"
                    className="text-on-surface-variant/10"
                />
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="url(#velocityGradient)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className="transition-all duration-500"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-extrabold text-on-surface">{percent}%</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant/60">
                    Overall
                </span>
            </div>
        </div>
    );
};

const StatRow = ({ label, value, valueClass }) => (
    <div className="flex items-center justify-between py-2">
        <span className="text-xs text-on-surface-variant">{label}</span>
        <span className={`text-xs font-bold ${valueClass ?? "text-on-surface"}`}>{value}</span>
    </div>
);

export default function PathVelocityPanel({ velocity, nextUnlock, recentBadge }) {
    return (
        <aside className="w-72 shrink-0 space-y-4">
            {/* كارت Path Velocity */}
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5">
                <p className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest mb-4">
                    Path Velocity
                </p>

                <VelocityRing percent={velocity.overallPercent} />

                <div className="divide-y divide-outline-variant/10 border-t border-outline-variant/10 pt-1">
                    <StatRow label="Total Modules" value={velocity.totalModules} />
                    <StatRow
                        label="Completed"
                        value={velocity.completed}
                        valueClass="text-tertiary"
                    />
                    <StatRow label="Est. Time Left" value={velocity.timeLeft} />
                </div>
            </div>

            {/* كارت Next Unlock */}
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Sparkles size={16} />
                </span>
                <div>
                    <p className="text-[9px] font-bold text-on-surface-variant/60 uppercase tracking-widest">
                        {nextUnlock.label}
                    </p>
                    <p className="text-xs font-bold text-on-surface mt-0.5">{nextUnlock.value}</p>
                </div>
            </div>

            {/* كارت Recent Badge */}
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
                    <Award size={16} />
                </span>
                <div>
                    <p className="text-[9px] font-bold text-on-surface-variant/60 uppercase tracking-widest">
                        {recentBadge.label}
                    </p>
                    <p className="text-xs font-bold text-on-surface mt-0.5">{recentBadge.value}</p>
                </div>
            </div>
        </aside>
    );
}