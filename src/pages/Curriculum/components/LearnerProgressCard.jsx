// كارت دائرة الـ Level/XP اللي بيبان تحت كارت الـ Resources مباشرة
export default function LearnerProgressCard({ progress }) {
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - progress.progressPercent / 100);

    return (
        <div className="bg-primary-container/15 border border-primary-container/20 rounded-2xl p-6 text-center">
            {/* الدائرة (SVG progress ring) */}
            <div className="relative w-28 h-28 mx-auto mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    {/* الخلفية الرمادية للدائرة */}
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="6"
                        className="text-on-surface-variant/10"
                    />
                    {/* الدائرة الملونة اللي بتعبر عن نسبة التقدم */}
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        className="text-tertiary transition-all duration-500"
                    />
                </svg>

                {/* النص في نص الدائرة */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-extrabold text-on-surface">
                        Lvl {progress.level}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant/70">
                        {progress.levelLabel}
                    </span>
                </div>
            </div>

            {/* اسم المسار التعليمي */}
            <p className="text-base font-bold text-on-surface mb-1">
                {progress.pathName}
            </p>

            {/* الـ XP المتبقي للمستوى التالي */}
            <p className="text-xs font-semibold text-tertiary">
                {progress.xpToNextLevel} XP to Level {progress.nextLevel}
            </p>
        </div>
    );
}