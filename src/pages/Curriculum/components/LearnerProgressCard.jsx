// كارت دائرة الـ Level/XP اللي بيبان تحت كارت الـ Resources مباشرة
export default function LearnerProgressCard({ progress }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;

  // 1️⃣ فحص نوع الـ progress وتحديد النسبة المئوية بدقة
  const percent =
    typeof progress === "object" && progress !== null
      ? progress?.progressPercent
      : progress;

  const offset = circumference * (1 - (percent || 0) / 100);

  // 2️⃣ تجهيز قيم افتراضية آمنة في حال كان الـ progress مجرد رقم وليس Object
  const isObject = typeof progress === "object" && progress !== null;
  const level = isObject ? progress.level || 1 : 1;
  const levelLabel = isObject ? progress.levelLabel || "Learner" : "Learner";
  const pathName = isObject
    ? progress.pathName || "مسارك التعليمي"
    : "مسارك التعليمي";
  const nextLevel = isObject ? progress.nextLevel || level + 1 : level + 1;
  const xpToNextLevel = isObject ? progress.xpToNextLevel || 0 : 0;

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
            Lvl {level}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant/70">
            {levelLabel}
          </span>
        </div>
      </div>

      {/* اسم المسار التعليمي */}
      <p className="text-base font-bold text-on-surface mb-1">{pathName}</p>

      {/* الـ XP المتبقي للمستوى التالي */}
      <p className="text-xs font-semibold text-tertiary">
        {xpToNextLevel} XP to Level {nextLevel}
      </p>
    </div>
  );
}
