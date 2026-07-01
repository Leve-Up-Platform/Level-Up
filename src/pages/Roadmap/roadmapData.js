// ============================================
// roadmapData.js
// كل الـ Data بتاعة صفحة الـ Roadmap هنا
// (Static دلوقتي، هيتم ربطها بالـ API بعدين)
// ============================================

// معلومات المسار الحالي (العنوان + التاجز اللي تحته)
export const pathInfo = {
    title: "Fullstack Mastery",
    tags: ["Active Path", "Advanced Tier"],
};

// إحصائيات "Path Velocity" اللي تظهر في البانel الجنبي
export const pathVelocity = {
    overallPercent: 68,
    totalModules: 12,
    completed: 8,
    timeLeft: "14h 20m",
};

// "Next Unlock" و "Recent Badge"
export const nextUnlock = {
    label: "Next Unlock",
    value: "Specialization: DeFi",
};

export const recentBadge = {
    label: "Recent Badge",
    value: "Architect Tier I",
};

// البانر الإعلاني تحت في البانel الجنبي
export const promo = {
    title: "Master Classes With Industry Leads",
    cta: "Explore Sessions",
};

// محطات المسار (Milestones) بالترتيب من فوق لتحت
// icon: check | rocket | lock | trophy
// status: completed | active | locked
// align: نص الكارد بيتحاذي يمين، شمال، أو نص بالنسبة للخط (لرسم المسار المتعرج)
export const milestones = [
    {
        id: "m1",
        title: "Foundation 101",
        statusLabel: "Completed",
        icon: "check",
        status: "completed",
        align: "right",
    },
    {
        id: "m2",
        title: "System Design",
        statusLabel: "Completed",
        icon: "check",
        status: "completed",
        align: "left",
    },
    {
        id: "m3",
        title: "Modern UI",
        statusLabel: "Recent Module",
        icon: "rocket",
        status: "active",
        align: "right",
    },
    {
        id: "m4",
        title: "AI Integration",
        statusLabel: "Locked",
        icon: "lock",
        status: "locked",
        align: "center",
    },
    {
        id: "m5",
        title: "Career Capstone",
        statusLabel: "",
        icon: "trophy",
        status: "locked",
        align: "center",
        large: true,
    },
];