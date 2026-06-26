import { Lightbulb, ChevronLeft, CheckCircle2 } from "lucide-react";

export default function LessonInfo({ lesson, onPreviousLesson, onMarkComplete }) {
    return (
        <div className="mt-6">
            {/* Badge + Module info */}
            <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary-container text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                    {lesson.status}
                </span>
                <span className="text-xs text-on-surface-variant">
                    {lesson.moduleInfo}
                </span>
            </div>

            {/* العنوان الكبير */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface leading-[1.1] mb-6">
                {lesson.title}
            </h1>

            {/* أول بارجراف من الوصف (قبل كارت الـ Key Takeaway) */}
            <p className="text-base text-on-surface-variant leading-relaxed mb-6">
                {lesson.descriptionParagraphs[0]}
            </p>

            {/* كارت Key Takeaway بتصميمه المميز (لون أخضر + أيقونة ديكور كبيرة) */}
            <div className="relative bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6 mb-6 overflow-hidden">
                {/* أيقونة اللمبة الكبيرة الشفافة في الخلفية - عنصر ديكوري بحت */}
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

            {/* باقي بارجرافات الوصف (بعد كارت الـ Key Takeaway) */}
            {lesson.descriptionParagraphs.slice(1).map((paragraph, index) => (
                <p
                    key={index}
                    className="text-base text-on-surface-variant leading-relaxed mb-6"
                >
                    {paragraph}
                </p>
            ))}

            {/* خط فاصل + شريط التنقل بين الدروس */}
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
                    className="flex items-center gap-2 bg-primary-container hover:bg-opacity-90 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wide shadow-lg shadow-primary-container/30 active:scale-95 transition-all"
                >
                    <CheckCircle2 size={16} />
                    Mark as Complete
                </button>
            </div>
        </div>
    );
}