"use client";
import { useEffect, useRef, useState } from "react";

const data = [
  { icon: "💰", target: 5000, suffix: "Cr+ Disbursed", desc: "Total loans disbursed" },
  { icon: "👥", target: 50000, suffix: "Happy Customers", desc: "Individuals & businesses" },
  { icon: "🤝", target: 20, suffix: "Lending Partners", desc: "RBI-licensed lenders" },
  { icon: "📍", target: 500, suffix: "Cities Covered", desc: "Pan-India presence" },
];

function useCountUp(target: number, started: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const id = setInterval(() => {
      start = Math.min(start + step, target);
      setVal(start);
      if (start >= target) clearInterval(id);
    }, 25);
    return () => clearInterval(id);
  }, [target, started]);
  return val;
}

function StatBox({ item, started }: { item: typeof data[0]; started: boolean }) {
  const count = useCountUp(item.target, started);
  return (
    <div className="lc-stat-box" id={`stat-box-${item.suffix.replace(/\s+/g,"-").toLowerCase()}`}>
      <span className="lc-stat-icon">{item.icon}</span>
      <div className="lc-stat-num">{count.toLocaleString("en-IN")}</div>
      <div className="lc-stat-suf">{item.suffix}</div>
      <p>{item.desc}</p>
    </div>
  );
}

export default function Stats() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { setStarted(true); e.target.classList.add("visible"); }
      }),
      { threshold: 0.2 }
    );
    el.querySelectorAll(".anim").forEach((n) => obs.observe(n));
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="lc-sec lc-sec-light" id="stats" ref={ref} aria-label="Platform statistics">
      <div className="lc-container">
        <div className="lc-sec-hd anim anim-up">
          <h2 className="lc-title">Trusted by Customers, Backed by Data</h2>
        </div>
        <div className="lc-stats-row anim anim-up">
          {data.map((d, i) => <StatBox key={i} item={d} started={started} />)}
        </div>
      </div>
    </section>
  );
}
