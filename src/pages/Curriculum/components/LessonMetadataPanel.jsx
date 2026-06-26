import { Clock, CheckCircle2, Trophy, FileText, Link2, Code2 } from "lucide-react";
import LearnerProgressCard from "./LearnerProgressCard";

const MetaRow = ({ icon: Icon, iconColor, label, value }) => (
    <div className="flex items-start gap-3">
        <span
            className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${iconColor}`}
        >
            <Icon size={16} />
        </span>
        <div>
            <p className="text-[10px] text-on-surface-variant/70 uppercase tracking-wide">
                {label}
            </p>
            <p className="text-sm font-bold text-on-surface mt-0.5">{value}</p>
        </div>
    </div>
);

// خريطة الأيقونة المناسبة لكل نوع مصدر
const resourceIcons = {
    pdf: FileText,
    link: Link2,
    code: Code2,
};

const ResourceLink = ({ resource }) => {
    const Icon = resourceIcons[resource.type] ?? Link2;
    return (
        <a
            href={resource.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg hover:bg-surface-container-high transition-colors group"
        >
            <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Icon size={14} />
                </span>
                <span className="text-xs font-semibold text-on-surface-variant group-hover:text-on-surface transition-colors">
                    {resource.label}
                </span>
            </div>
        </a>
    );
};

export default function LessonMetadataPanel({ metadata, resources, learnerProgress }) {
    return (
        <aside className="w-72 shrink-0 space-y-4">
            {/* كارت المعلومات الأساسية */}
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5">
                <p className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest mb-4">
                    Lesson Metadata
                </p>
                <div className="space-y-4">
                    <MetaRow
                        icon={Clock}
                        iconColor="text-primary bg-primary/10"
                        label="Estimated Time"
                        value={metadata.estimatedTime}
                    />
                    <MetaRow
                        icon={CheckCircle2}
                        iconColor="text-tertiary bg-tertiary/10"
                        label="Prerequisites"
                        value={metadata.prerequisites}
                    />
                    <MetaRow
                        icon={Trophy}
                        iconColor="text-orange-400 bg-orange-400/10"
                        label="Difficulty"
                        value={metadata.difficulty}
                    />
                </div>
            </div>

            {/* كارت Resources */}
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-3">
                <p className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest px-2 pt-2 pb-1">
                    Resources
                </p>
                <div className="space-y-0.5">
                    {resources.map((resource) => (
                        <ResourceLink key={resource.id} resource={resource} />
                    ))}
                </div>
            </div>

            {/* كارت الـ Level/XP */}
            <LearnerProgressCard progress={learnerProgress} />
        </aside>
    );
}