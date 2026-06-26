// ============================================================
// LandingPage.jsx
// بتجمع كل الـ Components — لو عايز تعدل أي section
// روح على الـ Component بتاعه في components/
// ============================================================

import LandingNavbar     from "./components/LandingNavbar";
import Hero              from "./components/Hero";
import Features          from "./components/Features";
import RoadmapSection    from "./components/RoadmapSection";   // ← الجديد
import HowItWorks        from "./components/HowItWorks";
import Testimonials      from "./components/Testimonials";
import Pricing           from "./components/Pricing";
import FAQ               from "./components/FAQ";
import { FinalCTA, LandingFooter } from "./components/FinalCTA_Footer";

const LandingPage = () => (
  <div className="min-h-screen bg-background text-on-surface overflow-x-hidden">
    <LandingNavbar />
    <main>
      <Hero />
      <Features />
      <RoadmapSection />    {/* Frontend + Backend Paths */}
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
    <LandingFooter />
  </div>
);

export default LandingPage;
