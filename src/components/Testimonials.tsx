"use client";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    init: "R",
    text: '"I applied for a business loan through LoanCare and within 3 days the money was in my account. The team was very helpful. My shop has doubled in size — No tension, only sanction is exactly true!"',
    name: "Ramesh Patel",
    role: "Grocery Store Owner, Ahmedabad",
  },
  {
    init: "P",
    text: '"LoanCare made the whole process so easy. I never imagined getting a ₹10 lakh loan could be this simple. Zero collateral, fast approval, and the EMI is very comfortable for my budget."',
    name: "Priya Mehta",
    role: "Boutique Owner, Surat",
  },
  {
    init: "A",
    text: '"As an MSME owner, I struggled with traditional banks. LoanCare connected me with the right lender and the entire process was transparent. I got my funds in 4 working days!"',
    name: "Arvind Shah",
    role: "Manufacturing Unit Owner, Rajkot",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

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

  const t = testimonials[idx];

  return (
    <section className="lc-sec lc-sec-white" id="testimonials" ref={ref} aria-label="Customer testimonials">
      <div className="lc-container">
        <div className="lc-sec-hd anim anim-up">
          <p className="lc-eyebrow">Success Stories</p>
          <h2 className="lc-title">What Our Customers Say</h2>
        </div>

        <div className="lc-testi-wrap anim anim-up">
          <button className="lc-t-nav" onClick={() => setIdx((p) => (p - 1 + testimonials.length) % testimonials.length)} id="testi-prev" aria-label="Previous">←</button>

          <div className="lc-testi-card" id="testi-card">
            <div className="lc-t-avatar" id="testi-avatar">{t.init}</div>
            <p className="lc-t-text" id="testi-text">{t.text}</p>
            <div className="lc-t-name" id="testi-name">{t.name}</div>
            <div className="lc-t-role" id="testi-role">{t.role}</div>
            <div className="lc-t-stars">★★★★★</div>
          </div>

          <button className="lc-t-nav" onClick={() => setIdx((p) => (p + 1) % testimonials.length)} id="testi-next" aria-label="Next">→</button>
        </div>

        <div className="lc-dots" id="testi-dots">
          {testimonials.map((_, i) => (
            <span key={i} className={`lc-dot${idx === i ? " on" : ""}`} onClick={() => setIdx(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
