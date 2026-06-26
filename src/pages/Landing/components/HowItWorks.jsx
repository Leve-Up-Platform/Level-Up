import useScrollReveal from "../useScrollReveal";
import { steps } from "../landingData";

const StepItem = ({ step, i }) => {
  const ref = useScrollReveal({ direction: "left", delay: i * 120 });
  return (
    <div ref={ref} className="flex flex-col md:flex-row items-center gap-12 group">
      <div className={`w-20 h-20 shrink-0 rounded-full border-4 flex items-center justify-center text-2xl font-black bg-surface-container transition-all group-hover:text-white group-hover:border-transparent ${step.colorClass}`}>
        {step.num}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
        <p className="text-on-surface-variant text-lg leading-relaxed">{step.desc}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const headerRef = useScrollReveal({ delay: 0 });
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef}>
          <h2 className="text-4xl font-black text-center mb-20 tracking-tight">
            The 5 Steps to Mastery
          </h2>
        </div>
        <div className="space-y-16">
          {steps.map((step, i) => <StepItem key={i} step={step} i={i} />)}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
