import { Lightbulb, ChevronLeft, CheckCircle2 } from "lucide-react";

export default function LessonInfo({ lesson, onPreviousLesson, onMarkComplete }) {
  const isCompleted = lesson.status === "completed";

  return (
    <div className="mt-6">

      {/* Badge + Module info */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full ${
            isCompleted
              ? "bg-tertiary/20 text-tertiary"
              : "bg-primary-container text-white"
          }`}
        >
          {isCompleted ? "Completed" : lesson.status ?? "In Progress"}
        </span>
        <span className="text-xs text-on-surface-variant">
          {lesson.moduleInfo ?? ""}
        </span>
      </div>

      {/* العنوان */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface leading-[1.1] mb-6">
        {lesson.title}
      </h1>

      {/* أول بارجراف — بيشتغل مع descriptionParagraphs أو description */}
      <p className="text-base text-on-surface-variant leading-relaxed mb-6">
        {lesson.descriptionParagraphs?.[0] ?? lesson.description ?? ""}
      </p>

      {/* Key Takeaway — بيظهر بس لو موجود */}
      {lesson.keyTakeaway && (
        <div className="relative bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6 mb-6 overflow-hidden">
          <Lightbulb
            size={90}
            strokeWidth={1.2}
            className="absolute -top-3 right-4 text-on-surface-variant/5 pointer-events-none"
          />
          <div className="relative flex items-center gap-2 mb-3">
            <Lightbulb size={16} className="text-tertiary" />
            <span className="text-xs font-bold text-tertiary uppercase tracking-wide">
              Key Takeaway
            </span>
          </div>
          <p className="relative text-lg font-semibold italic text-on-surface leading-relaxed">
            "{lesson.keyTakeaway}"
          </p>
        </div>
      )}

      {/* باقي البارجرافات — بس لو descriptionParagraphs موجودة */}
      {lesson.descriptionParagraphs?.slice(1).map((paragraph, index) => (
        <p
          key={index}
          className="text-base text-on-surface-variant leading-relaxed mb-6"
        >
          {paragraph}
        </p>
      ))}

      {/* شريط التنقل */}
      <div className="border-t border-outline-variant/10 pt-6 flex items-center justify-between">
        <button
          onClick={onPreviousLesson}
          className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-on-surface-variant hover:text-on-surface transition-colors"
        >
          <ChevronLeft size={16} />
          Previous Lesson
        </button>

        <button
          onClick={onMarkComplete}
          disabled={isCompleted}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wide active:scale-95 transition-all ${
            isCompleted
              ? "bg-tertiary/15 text-tertiary cursor-default"
              : "bg-primary-container text-white hover:bg-opacity-90 shadow-lg shadow-primary-container/30"
          }`}
        >
          <CheckCircle2 size={16} />
          {isCompleted ? "Completed ✓" : "Mark as Complete"}
        </button>
      </div>

    </div>
  );
}
