"use client";
import { useEffect, useRef } from "react";

export default function CTABand() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    el.querySelectorAll(".anim").forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="lc-cta" id="apply" ref={ref} aria-label="Apply now">
      <div className="lc-container lc-cta-inner anim anim-up">
        <div className="lc-cta-txt">
          <h2>Ready to Grow Your Business?</h2>
          <p>
            Have questions? Reach us at{" "}
            <a href="mailto:hello@loancare.com" className="mailto">hello@loancare.com</a>
          </p>
        </div>
        <a href="mailto:hello@loancare.com" className="btn btn-gold btn-lg" id="cta-apply-btn">
          Apply Now →
        </a>
      </div>
    </section>
  );
}
