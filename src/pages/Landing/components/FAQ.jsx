import { useState } from "react";
import { faqs } from "../landingData";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16">Frequently Asked</h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-outline-variant/20 py-6">
              {/* Question */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left text-xl font-bold hover:text-primary transition-all"
              >
                <span>{faq.q}</span>
                <span
                  className="material-symbols-outlined text-on-surface-variant transition-transform duration-300"
                  style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  expand_more
                </span>
              </button>

              {/* Answer */}
              {openIndex === i && (
                <p className="mt-4 text-on-surface-variant leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
