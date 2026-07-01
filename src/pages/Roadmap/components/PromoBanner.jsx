import { Plus } from "lucide-react";

export default function PromoBanner({ promo }) {
    return (
        <div className="relative w-72 shrink-0 rounded-2xl overflow-hidden h-44 bg-gradient-to-br from-primary-container/40 via-surface-container-low to-tertiary/10 border border-outline-variant/10 p-4 flex flex-col justify-end">
            {/* زرار الإضافة الدائري في الزاوية */}
            <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
                <Plus size={16} />
            </button>

            <p className="text-sm font-extrabold text-on-surface leading-snug mb-3">
                {promo.title}
            </p>
            <button className="self-start text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-high/70 transition-colors">
                {promo.cta}
            </button>
        </div>
    );
}