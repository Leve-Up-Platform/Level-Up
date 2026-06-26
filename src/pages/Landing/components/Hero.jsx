import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-24 pb-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-150 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* ── Text Side ── */}
        <div className="flex-1 text-center lg:text-left z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            The Future of EdTech
          </div>

          {/* Title */}
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-on-surface mb-6 leading-[1.1]">
            Transform Learning Into{" "}
            <span
              style={{
                background: "linear-gradient(to right, #c3c0ff, #4f46e5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Achievement
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed font-light">
            Master complex skills with data-driven roadmaps, real-world
            projects, and a community of high-performers. Stop wandering—start
            ascending.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              onClick={() => navigate("/login")}
              className="w-full sm:w-auto px-8 py-4 font-bold text-lg text-white rounded-full shadow-2xl shadow-indigo-500/30 transition-transform hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(to right, #c3c0ff, #4f46e5)",
              }}
            >
              Get Started Free
            </button>
            <button
              onClick={() => navigate("/roadmap")}
              className="w-full sm:w-auto bg-surface-container border border-outline-variant/30 text-on-surface px-8 py-4 font-bold text-lg transition-all hover:bg-surface-container-high rounded-full"
            >
              Explore Roadmaps
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-sm text-on-surface-variant">
            <div className="flex -space-x-3">
              {["A", "S", "J"].map((letter, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-surface bg-primary/20 flex items-center justify-center text-xs font-bold text-primary"
                >
                  {letter}
                </div>
              ))}
            </div>
            <p>
              Join <span className="text-primary font-bold">12,000+</span>{" "}
              scholars leveling up today.
            </p>
          </div>
        </div>
        {/* ── Visual Side ── */}
        {/* style={{ animation: "float 4s ease-in-out infinite" }} */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end animate-float">
          <div
            className="relative w-full max-w-lg aspect-square"
            style={{ animation: "float 4s ease-in-out infinite" }}
          >
            <img
              alt="Premium Hero Graphic"
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_50px_rgba(79,70,229,0.3)]"
              data-alt="A futuristic 3D isometric illustration of a floating laboratory island with glowing blue data streams and holographic terminals. The scene is set in a dark atmospheric space with nebula-like clouds of deep indigo and violet. A rocket ship icon is integrated into the architecture. The lighting is premium and cinematic with high-contrast neon glows."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkLFo0QwNlzFxKXBg9C-9EVpeIZAdLrKLbJLpnLTbdXKN-G_uE7MdIuO4mNEIjTK2vEEBO21-dOX67fmLvh14ej0yOXxs2eGgH0A6fv3We-3IJTK20nTJciDUSOEvdOZAKPhNT5luQ8andJ7WsaXj10fp6StT5yrfNpmNVB8LsukBeFz-XCkcvJaLslaxaP1AAAz3wAquWtej2ypA4Uqven0PELOfhVDIfJfmG2sWihf42RkWLMTrTKI3RXgBmTMMIs8yDR_sKqar2"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[120px] rounded-full -z-10"></div>
          </div>
        </div>
      </div>

      {/* Float animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
