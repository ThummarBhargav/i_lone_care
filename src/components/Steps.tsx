"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    no: "01",
    title: "Share Your Details",
    desc: "Enter basic personal or business details and upload bank statements for a personalized loan offer.",
  },
  {
    no: "02",
    title: "Quick Verification",
    desc: "Upload your KYC documents. Our advisors verify and match you to the best lender in minutes.",
  },
  {
    no: "03",
    title: "Receive Your Funds",
    desc: "Sign your loan agreement online. Funds transfer to your account in just 2–4 working days.",
  },
];

export default function Steps() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);

  // Auto-cycle steps
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  // Scroll animations
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

  const pct = active === 2 ? 100 : active === 1 ? 66 : 33;

  return (
    <section className="lc-sec lc-sec-white" id="steps" ref={ref} aria-label="How to apply">
      <div className="lc-container lc-steps-grid">
        {/* LEFT */}
        <div className="anim anim-right">
          <p className="lc-eyebrow">Simple Process</p>
          <h2 className="lc-title">
            Get Your Loan in<br />
            <span className="lc-gold">3 Simple Steps</span>
          </h2>
          <div className="lc-steps-list">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`lc-step-row${active === i ? " active" : ""}`}
                id={`step-row-${i + 1}`}
                onClick={() => setActive(i)}
              >
                <div className="lc-step-no">{s.no}</div>
                <div className="lc-step-info">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Phone mockup */}
        <div className="lc-phone-wrap anim anim-left">
          <div className="lc-phone">
            <div className="lc-phone-scr">
              <div className="lc-phone-logo"><span>Loan</span>Care</div>
              <div className="lc-phone-bar">
                <div className="lc-phone-fill" style={{ width: `${pct}%` }} />
              </div>
              <div className="lc-phone-step">Step {active + 1} of 3</div>
              <div
                className="lc-phone-done"
                style={{ opacity: active === 2 ? 1 : 0 }}
              >
                ✓ Approved!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
