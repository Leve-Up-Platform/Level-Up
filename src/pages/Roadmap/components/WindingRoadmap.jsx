import { CheckCheck, Rocket, Lock, Trophy } from "lucide-react";

// تحويل نقط (x,y) لمسار SVG منحني ناعم (Catmull-Rom -> Bezier)
function buildSmoothPath(points) {
    if (points.length < 2) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i - 1] || points[i];
        const p1 = points[i];
        const p2 = points[i + 1];
        const p3 = points[i + 2] || p2;
        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;
        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;
        d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return d;
}

// أماكن العمودين الجانبيين والنص بالنسبة لعرض الـ viewBox
const COLUMN_X = { left: 70, center: 190, right: 310 };
const ROW_HEIGHT = 150;
const START_Y = 50;
const VIEW_WIDTH = 380;

const icons = { check: CheckCheck, rocket: Rocket, lock: Lock, trophy: Trophy };

export default function WindingRoadmap({ milestones }) {
    const points = milestones.map((m, i) => ({
        ...m,
        x: COLUMN_X[m.align],
        y: START_Y + i * ROW_HEIGHT,
    }));

    const viewHeight = START_Y + (points.length - 1) * ROW_HEIGHT + 90;

    // آخر عقدة متفعلة (completed/active) عشان نقسم المسار: جزء ملون وجزء رمادي للمقفول
    let lastActiveIndex = 0;
    points.forEach((p, i) => {
        if (p.status !== "locked") lastActiveIndex = i;
    });

    const activeSegment = points.slice(0, lastActiveIndex + 1);
    const lockedSegment = points.slice(lastActiveIndex);

    return (
        <div className="relative" style={{ width: VIEW_WIDTH, height: viewHeight, margin: "0 auto" }}>
            <svg
                viewBox={`0 0 ${VIEW_WIDTH} ${viewHeight}`}
                className="absolute inset-0 w-full h-full"
            >
                <defs>
                    <linearGradient id="roadmapGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-primary)" />
                        <stop offset="100%" stopColor="var(--color-tertiary)" />
                    </linearGradient>
                </defs>

                {/* الجزء المقفول من المسار (رمادي متقطع) */}
                <path
                    d={buildSmoothPath(lockedSegment)}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="6 8"
                    strokeLinecap="round"
                    className="text-on-surface-variant/15"
                />

                {/* الجزء المكتمل/النشط من المسار (متدرج بنفسجي لتركواز) */}
                <path
                    d={buildSmoothPath(activeSegment)}
                    fill="none"
                    stroke="url(#roadmapGradient)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                />
            </svg>

            {/* العقد + اللابلز */}
            {points.map((m) => {
                const Icon = icons[m.icon];
                const size = m.large ? 72 : 56;
                const isLocked = m.status === "locked";

                const nodeStyle = isLocked
                    ? "bg-surface-container-high text-on-surface-variant/40 border border-outline-variant/10"
                    : "bg-primary text-white shadow-lg shadow-primary/30";

                // مكان الليبل بالنسبة لمكان العقدة حسب align
                // let labelStyle = {};
                let labelStyle
                // let labelAlign = "text-center";
                let labelAlign
                if (m.align === "right") {
                    labelStyle = { left: 0, width: m.x - size / 2 - 14, textAlign: "right" };
                    labelAlign = "";
                } else if (m.align === "left") {
                    labelStyle = {
                        left: m.x + size / 2 + 14,
                        width: VIEW_WIDTH - (m.x + size / 2 + 14),
                        textAlign: "left",
                    };
                    labelAlign = "";
                } else {
                    labelStyle = { left: 0, width: VIEW_WIDTH, top: m.y + size / 2 + 10, textAlign: "center" };
                }

                return (
                    <div key={m.id}>
                        {/* العقدة (الأيقونة) */}
                        <div
                            className={`absolute rounded-2xl flex items-center justify-center transition-transform hover:scale-105 ${nodeStyle}`}
                            style={{
                                width: size,
                                height: size,
                                left: m.x,
                                top: m.y,
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            <Icon size={m.large ? 28 : 22} />
                        </div>

                        {/* اللابل (الستاتس + العنوان) */}
                        <div
                            className={`absolute ${labelAlign}`}
                            style={{
                                ...labelStyle,
                                top: m.align === "center" ? labelStyle.top : m.y,
                                transform: m.align === "center" ? "none" : "translateY(-50%)",
                            }}
                        >
                            {m.statusLabel && (
                                <p
                                    className={`text-[9px] font-bold uppercase tracking-widest mb-0.5 ${isLocked
                                        ? "text-on-surface-variant/40"
                                        : m.status === "active"
                                            ? "text-tertiary"
                                            : "text-primary"
                                        }`}
                                >
                                    {m.statusLabel}
                                </p>
                            )}
                            <p
                                className={`text-sm font-bold ${isLocked ? "text-on-surface-variant/50" : "text-on-surface"
                                    }`}
                            >
                                {m.title}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}