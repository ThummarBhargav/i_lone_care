"use client";
import { useState, useEffect, useRef } from "react";

function fmt(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

function calcEMI(P: number, rAnn: number, nMon: number) {
  const r = rAnn / 100 / 12;
  if (r === 0) return P / nMon;
  const emi = (P * r * Math.pow(1 + r, nMon)) / (Math.pow(1 + r, nMon) - 1);
  return emi;
}

const presets = [
  { id: "personal", label: "Personal Loan", amount: 500000, rate: 10.5, tenure: 36 },
  { id: "business", label: "Business Loan", amount: 1500000, rate: 14.0, tenure: 24 },
  { id: "home", label: "Home Loan", amount: 2500000, rate: 8.5, tenure: 60 },
];

export default function EMICalculator() {
  const [amount, setAmount] = useState(500000);
  const [tenure, setTenure] = useState(36);
  const [rate, setRate] = useState(10.5);
  const [activePreset, setActivePreset] = useState<string>("personal");
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

  const emi = calcEMI(amount, rate, tenure);
  const total = emi * tenure;
  const interest = total - amount;

  // Chart math
  const radius = 38;
  const circumference = 2 * Math.PI * radius; // ~238.76
  const interestPercent = total > 0 ? (interest / total) * 100 : 0;
  const principalPercent = total > 0 ? (amount / total) * 100 : 100;
  const strokeDashoffset = circumference - (principalPercent / 100) * circumference;

  return (
    <section className="lc-sec lc-sec-light" id="emi" ref={ref} aria-label="EMI Calculator">
      <div className="lc-container">
        <div className="lc-sec-hd anim anim-up">
          <h2 className="lc-title">Know Your EMI Before You Apply — It&apos;s Free!</h2>
          <p className="lc-sub">Select a loan preset or move the sliders to calculate your monthly installment</p>
        </div>

        <div className="lc-calc-box anim anim-up">
          {/* LEFT */}
          <div className="lc-calc-l">
            <h3>Configure Your Capital Needs</h3>
            <p className="lc-calc-desc">Select a preset quick option or customize using the sliders</p>

            <div className="lc-presets-row">
              {presets.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`lc-preset-btn${activePreset === p.id ? " active" : ""}`}
                  onClick={() => {
                    setActivePreset(p.id);
                    setAmount(p.amount);
                    setRate(p.rate);
                    setTenure(p.tenure);
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="lc-sl-grp">
              <div className="lc-sl-row">
                <label htmlFor="sl-amount">Loan Amount</label>
                <span className="lc-sl-val">{fmt(amount)}</span>
              </div>
              <input id="sl-amount" type="range" className="lc-slider"
                min={100000} max={3000000} step={50000} value={amount}
                onChange={(e) => {
                  setAmount(Number(e.target.value));
                  setActivePreset("");
                }} />
            </div>

            <div className="lc-sl-grp">
              <div className="lc-sl-row">
                <label htmlFor="sl-tenure">Tenure</label>
                <span className="lc-sl-val">{tenure} months</span>
              </div>
              <input id="sl-tenure" type="range" className="lc-slider"
                min={6} max={60} step={6} value={tenure}
                onChange={(e) => {
                  setTenure(Number(e.target.value));
                  setActivePreset("");
                }} />
            </div>

            <div className="lc-sl-grp">
              <div className="lc-sl-row">
                <label htmlFor="sl-rate">Interest Rate</label>
                <span className="lc-sl-val">{rate}%</span>
              </div>
              <input id="sl-rate" type="range" className="lc-slider"
                min={8} max={24} step={0.5} value={rate}
                onChange={(e) => {
                  setRate(Number(e.target.value));
                  setActivePreset("");
                }} />
            </div>
          </div>

          {/* RIGHT */}
          <div className="lc-calc-r">
            <div className="lc-calc-r-header">
              <div className="lc-calc-r-info">
                <p className="lc-emi-lbl">Equated Monthly Installment</p>
                <div className="lc-emi-big">{fmt(Math.round(emi))}</div>
              </div>
              <div className="lc-donut-chart">
                <svg width="100" height="100" viewBox="0 0 100 100" aria-label="EMI breakdown chart">
                  <circle cx="50" cy="50" r={radius} fill="transparent" stroke="var(--pink-lt)" strokeWidth="10" />
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="transparent"
                    stroke="var(--purple)"
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    style={{ transition: "stroke-dashoffset 0.3s ease" }}
                  />
                  <text x="50" y="55" textAnchor="middle" fill="var(--purple-dark)" fontSize="16" fontWeight="bold">
                    {Math.round(principalPercent)}%
                  </text>
                </svg>
              </div>
            </div>

            <div className="lc-emi-brkdn">
              <div className="lc-emi-row">
                <span className="lc-legend-label">
                  <span className="lc-legend-dot lc-dot-principal" />
                  Principal Amount
                </span>
                <strong>{fmt(Math.round(amount))}</strong>
              </div>
              <div className="lc-emi-row">
                <span className="lc-legend-label">
                  <span className="lc-legend-dot lc-dot-interest" />
                  Total Interest ({Math.round(interestPercent)}%)
                </span>
                <strong>{fmt(Math.round(interest))}</strong>
              </div>
              <div className="lc-emi-row total-row">
                <span>Total Payable</span>
                <strong>{fmt(Math.round(total))}</strong>
              </div>
            </div>
            <p className="lc-emi-note">
              EMIs start at just ₹2,083 per lakh*. Apply now for a rate tailored to your profile.
            </p>
            <a href="#apply" className="btn btn-gold btn-full" id="emi-apply-btn">Apply Now →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
