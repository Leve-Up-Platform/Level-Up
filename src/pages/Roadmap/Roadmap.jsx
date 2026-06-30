import WindingRoadmap from "./components/WindingRoadmap";
import PathVelocityPanel from "./components/PathVelocityPanel";
import PromoBanner from "./components/PromoBanner";
import {
  pathInfo,
  pathVelocity,
  nextUnlock,
  recentBadge,
  promo,
  milestones,
} from "./roadmapData";

export default function Roadmap() {
  return (
    <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-6 lg:p-8">
      <div className="flex gap-8 items-start">
        {/* العمود الرئيسي: عنوان المسار + المسار المتعرج */}
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-extrabold text-on-surface mb-2">
            {pathInfo.title}
          </h2>
          <div className="flex items-center gap-2 mb-8">
            {pathInfo.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-tertiary/10 text-tertiary"
              >
                {tag}
              </span>
            ))}
          </div>

          <WindingRoadmap milestones={milestones} />
        </div>

        {/* العمود الجانبي: الإحصائيات + البانر */}
        <div className="space-y-4">
          <PathVelocityPanel
            velocity={pathVelocity}
            nextUnlock={nextUnlock}
            recentBadge={recentBadge}
          />
          <PromoBanner promo={promo} />
        </div>
      </div>
    </div>
  );
}