// ============================================================
// useScrollReveal.js
// Custom Hook — بيعمل Scroll Animation لأي عنصر
// الاستخدام:
//   const ref = useScrollReveal();
//   <div ref={ref}> ... </div>
// ============================================================
import { useEffect, useRef } from "react";

const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  const {
    delay = 0,
    direction = "up",
    threshold = 0.15,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";

    el.style.transform =
      direction === "left"
        ? "translateX(-40px)"
        : direction === "right"
          ? "translateX(40px)"
          : "translateY(30px)";

    el.style.transition = `
      opacity 0.7s ease ${delay}ms,
      transform 0.7s ease ${delay}ms
    `;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0)";
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, direction, threshold]);

  return ref;
};

export default useScrollReveal;
