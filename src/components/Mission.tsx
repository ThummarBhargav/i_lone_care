"use client";
import { useEffect, useRef } from "react";

const pillars = [
  { icon: "🧩", title: "Bridge Knowledge Gaps", desc: "We educate customers about the right loan products for their situation." },
  { icon: "🔍", title: "Personalized Recommendations", desc: "Smart matching with the best lenders for your unique financial profile." },
  { icon: "🛒", title: "End-to-End Support", desc: "From application to disbursement — we are with you every step of the way." },
  { icon: "🌐", title: "Speed & Transparency", desc: "Fast decisions, clear terms, and zero hidden surprises — always." },
];

export default function Mission() {
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
    <section className="lc-sec lc-sec-white" id="mission" ref={ref} aria-label="Our mission">
      <div className="lc-container lc-mission-grid">
        {/* LEFT */}
        <div className="anim anim-right">
          <p className="lc-eyebrow">Our Mission</p>
          <h2 className="lc-title">
            Empowering Every<br />
            <span className="lc-gold">Loan Customer</span>
          </h2>
          <blockquote className="lc-mission-quote">
            &ldquo;To empower individuals and businesses by providing transparent, efficient, and tailored loan solutions through a seamless digital platform.&rdquo;
          </blockquote>
          <p className="lc-mission-p">
            Our mission is to simplify the loan process by bridging knowledge gaps, offering personalized recommendations, and delivering end-to-end support with speed and transparency.
          </p>
          <a href="#apply" className="btn btn-navy btn-lg" id="mission-apply-btn">
            Start Your Journey →
          </a>
        </div>

        {/* RIGHT */}
        <div className="lc-pillars anim anim-left">
          {pillars.map((p, i) => (
            <div className="lc-pillar" key={i} id={`pillar-${i + 1}`}>
              <div className="lc-pillar-icon">{p.icon}</div>
              <div>
                <h5>{p.title}</h5>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
