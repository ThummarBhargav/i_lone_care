"use client";
import { useEffect, useRef } from "react";

const beliefs = [
  {
    icon: "🙏",
    title: "God is the Ultimate Performer",
    text: "We operate with humility, knowing our strength comes from a higher purpose — to serve every customer with integrity.",
  },
  {
    icon: "💡",
    title: "Innovation",
    text: "We continuously innovate our platform and processes to make loan access faster, smarter, and more accessible for all.",
  },
  {
    icon: "📖",
    title: "Transparency",
    text: "No hidden charges, no fine print surprises. Every step of your loan journey is clear, honest, and straightforward.",
  },
  {
    icon: "🤝",
    title: "Trust",
    text: "We build long-term relationships. Your data is secure, your interests come first, and our advisors are always accountable.",
  },
  {
    icon: "⚡",
    title: "Speed",
    text: "Time is money. We process applications fast — from profile assessment to fund disbursal — with zero unnecessary delays.",
  },
  {
    icon: "👥",
    title: "Customer-Centric Solutions",
    text: "Every loan plan is personalized to your unique needs, income profile, and financial goals — not one-size-fits-all.",
  },
];

export default function Beliefs() {
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
    <section className="lc-sec lc-sec-light" id="beliefs" ref={ref} aria-label="What we believe in">
      <div className="lc-container">
        <div className="lc-sec-hd anim anim-up">
          <p className="lc-eyebrow">Our Core Values</p>
          <h2 className="lc-title">We Believe In</h2>
          <p className="lc-sub">The foundation on which LoanCare is built</p>
        </div>

        <div className="lc-beliefs-grid anim anim-up">
          {beliefs.map((b, i) => (
            <div className="lc-belief-card" key={i} id={`belief-${i + 1}`}>
              <div className="lc-belief-icon">{b.icon}</div>
              <h4>{b.title}</h4>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
