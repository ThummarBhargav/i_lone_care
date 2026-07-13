"use client";
import { useEffect, useRef, useState } from "react";

const partners = ["HDFC Bank","ICICI Bank","Axis Bank","Bajaj Finserv","Tata Capital","Poonawalla Fincorp"];

export default function Partners() {
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
    <section className="lc-sec lc-sec-white" id="partners" ref={ref} aria-label="Lending partners">
      <div className="lc-container">
        <div className="lc-sec-hd anim anim-up">
          <p className="lc-eyebrow">Our Network</p>
          <h2 className="lc-title">Trusted Lending Partners</h2>
          <p className="lc-sub">We connect you with 20+ RBI-licensed banks and NBFCs</p>
        </div>
        <div className="lc-partners-grid anim anim-up">
          {partners.map((p, i) => (
            <div className="lc-partner-tile" key={i} id={`partner-${i + 1}`}>
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
