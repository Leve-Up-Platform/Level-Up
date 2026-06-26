import { useNavigate } from "react-router-dom";
import { pricingPlans } from "../landingData";

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Invest in Your Potential</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Choose the plan that matches your ambition.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`p-8 rounded-3xl flex flex-col ${
                plan.highlight
                  ? "bg-primary-container text-white shadow-2xl shadow-primary/30 scale-105 z-10 relative overflow-hidden"
                  : "border border-outline-variant/20"
              }`}
              style={
                !plan.highlight
                  ? { background: "rgba(45,52,73,0.2)", backdropFilter: "blur(16px)" }
                  : {}
              }
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="text-5xl font-black mb-6">
                {plan.price}
                <span className={`text-lg font-normal ${plan.highlight ? "opacity-70" : "text-on-surface-variant"}`}>
                  {plan.period}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-10 grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-xl">done</span>
                    <span className={plan.highlight ? "text-white" : "text-on-surface-variant"}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate("/login")}
                className={`w-full py-4 rounded-xl font-bold transition-all ${plan.btnClass}`}
              >
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
