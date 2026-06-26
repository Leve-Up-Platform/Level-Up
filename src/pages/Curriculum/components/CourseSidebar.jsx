import { useState } from "react";
import { ChevronDown, CheckCircle2, PlayCircle, Lock } from "lucide-react";

// أيقونة حالة الدرس بناءً على status
const LessonStatusIcon = ({ status }) => {
    if (status === "completed") {
        return <CheckCircle2 size={16} className="text-tertiary shrink-0" />;
    }
    if (status === "active") {
        return <PlayCircle size={16} className="text-primary shrink-0" />;
    }
    return <Lock size={14} className="text-on-surface-variant/40 shrink-0" />;
};

const LessonItem = ({ lesson }) => {
    const isActive = lesson.status === "active";
    const isLocked = lesson.status === "locked";

    return (
        <button
            disabled={isLocked}
            className={`w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg text-left transition-all
        ${isActive
                    ? "bg-primary-container/15 border-l-2 border-primary"
                    : "hover:bg-surface-container-high"
                }
        ${isLocked ? "cursor-not-allowed opacity-60" : "cursor-pointer"}
      `}
        >
            <div className="flex items-center gap-2.5 min-w-0">
                <LessonStatusIcon status={lesson.status} />
                <span
                    className={`text-xs truncate ${isActive
                            ? "text-on-surface font-semibold"
                            : isLocked
                                ? "text-on-surface-variant/50"
                                : "text-on-surface-variant"
                        }`}
                >
                    {lesson.title}
                </span>
            </div>
            <span className="text-[10px] text-on-surface-variant/60 shrink-0">
                {lesson.duration}
            </span>
        </button>
    );
};

const ModuleAccordion = ({ module, isOpen, onToggle }) => {
    return (
        <div>
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between px-2 py-3 text-left"
            >
                <span className="text-xs font-bold text-on-surface uppercase tracking-wide">
                    {module.title}
                </span>
                <ChevronDown
                    size={16}
                    className={`text-on-surface-variant transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="space-y-1 pb-2">
                    {module.lessons.map((lesson) => (
                        <LessonItem key={lesson.id} lesson={lesson} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function CourseSidebar({ course, modules }) {
    // نتتبع أي Module مفتوح دلوقتي بـ id بتاعه، نبدأ بالـ defaultOpen
    const [openModuleId, setOpenModuleId] = useState(
        () => modules.find((m) => m.defaultOpen)?.id ?? modules[0]?.id
    );

    const handleToggle = (moduleId) => {
        setOpenModuleId((prev) => (prev === moduleId ? null : moduleId));
    };

    return (
        <aside className="w-80 shrink-0 bg-surface-container-low rounded-2xl border border-outline-variant/10 p-5 h-fit">
            {/* عنوان الكورس + Progress */}
            <div className="mb-5">
                <h2 className="text-lg font-bold text-on-surface mb-3">
                    {course.title}
                </h2>
                <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                        <div
                            className="h-full bg-tertiary rounded-full transition-all duration-500"
                            style={{ width: `${course.progress}%` }}
                        />
                    </div>
                    <span className="text-xs font-semibold text-on-surface-variant">
                        {course.progress}%
                    </span>
                </div>
            </div>

            {/* قائمة الـ Modules */}
            <div className="divide-y divide-outline-variant/10">
                {modules.map((module) => (
                    <ModuleAccordion
                        key={module.id}
                        module={module}
                        isOpen={openModuleId === module.id}
                        onToggle={() => handleToggle(module.id)}
                    />
                ))}
            </div>
        </aside>
    );
}