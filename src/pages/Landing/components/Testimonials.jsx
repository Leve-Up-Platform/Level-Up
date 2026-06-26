import useScrollReveal from "../useScrollReveal";
import { testimonials } from "../landingData";

const TestimonialCard = ({ t, i }) => {
  const ref = useScrollReveal({ delay: i * 150 });
  return (
    <div ref={ref} className="p-8 rounded-3xl border border-outline-variant/20"
      style={{ background: "rgba(45,52,73,0.2)", backdropFilter: "blur(16px)" }}>
      <div className="flex gap-1 text-yellow-500 mb-6">
        {[...Array(5)].map((_, j) => (
          <span key={j} className="material-symbols-outlined text-lg"
            style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        ))}
      </div>
      <p className="text-on-surface-variant italic mb-8 leading-relaxed">"{t.text}"</p>
      <div className="flex items-center gap-4">
        <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full bg-surface-container-high" />
        <div>
          <h4 className="font-bold text-on-surface">{t.name}</h4>
          <p className="text-xs text-primary font-bold uppercase tracking-widest">{t.role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const headerRef = useScrollReveal();
  return (
    <section className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef}>
          <h2 className="text-4xl font-black text-center mb-16">Voices of the Scholar</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => <TestimonialCard key={i} t={t} i={i} />)}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
