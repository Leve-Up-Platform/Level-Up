import useScrollReveal from "../useScrollReveal";
import { features } from "../landingData";

const Features = () => {
  const headerRef = useScrollReveal({ delay: 0 });

  return (
    <section id="features" className="px-6 py-40 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-on-surface mb-4">
            Precision Engineering for Growth
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Every feature is designed to eliminate friction and maximize cognitive retention.
          </p>
        </div>

        {/* Grid — كل card بـ delay مختلف */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} feature={f} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

// انفصلنا FeatureCard عشان نقدر نستخدم useScrollReveal في كل card
const FeatureCard = ({ feature: f, delay }) => {
  const cardRef = useScrollReveal({ delay });
  return (
    <div
      ref={cardRef}
      className="group p-8 rounded-3xl bg-surface-container hover:bg-surface-container-high border border-outline-variant/10 shadow-xl transition-all duration-300 hover:scale-[1.02]"
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${f.color}`}>
        <span className="material-symbols-outlined text-3xl">{f.icon}</span>
      </div>
      <h3 className="text-xl font-bold text-on-surface mb-3">{f.title}</h3>
      <p className="text-on-surface-variant leading-relaxed">{f.desc}</p>
      {f.tags && (
        <div className="mt-4 flex gap-2">
          {f.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Features;
