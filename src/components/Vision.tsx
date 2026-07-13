"use client";
import { useEffect, useRef } from "react";

const cards = [
  {
    icon: "🎯",
    title: "Our Goal",
    text: "By delivering trust, transparency, innovation, speed, and customer-centric solutions that empower aspirations and drive sustainable growth.",
  },
  {
    icon: "🌟",
    title: "Our Promise",
    text: 'To be the foremost name in the loan industry, setting standards of excellence and trust for years to come.',
  },
  {
    icon: "📈",
    title: "Our Impact",
    text: "Empowering individuals and businesses across India with transparent, efficient, and tailored loan solutions through a seamless digital platform.",
  },
];

export default function Vision() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    el.querySelectorAll(".anim").forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="lc-sec lc-sec-navy" id="vision" ref={ref} aria-label="Our vision">
      <div className="lc-container">
        <div className="lc-sec-hd light anim anim-up">
          <p className="lc-eyebrow-lt" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(244,160,18,.9)", marginBottom: 12 }}>
            Our Vision
          </p>
          <h2 className="lc-title-w" style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 14 }}>
            &ldquo;To be the first choice of every loan customer&rdquo;
          </h2>
        </div>

        <div className="lc-vision-grid anim anim-up">
          {cards.map((c, i) => (
            <div className="lc-vision-card" key={i} id={`vision-card-${i + 1}`}>
              <div className="lc-vc-icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
