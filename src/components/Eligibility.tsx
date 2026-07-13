"use client";
import { useState, useEffect, useRef } from "react";

function fmt(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

export default function Eligibility() {
  const [empType, setEmpType] = useState<string>("salaried");
  const [income, setIncome] = useState<number>(50000);
  const [emis, setEmis] = useState<number>(5000);
  const [credit, setCredit] = useState<string>("good");
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

  // FOIR Limit (Fixed Obligation to Income Ratio)
  // Salaried: 50%, Self-employed/Business: 60%
  const foir = empType === "salaried" ? 0.5 : 0.6;
  const maxAllowableEMI = income * foir;
  const netEmiCapacity = Math.max(0, maxAllowableEMI - emis);

  // Credit Score Multiplier
  let creditMultiplier = 1.0;
  let statusText = "Good Approval Chance";
  let statusClass = "lc-el-status-good";
  if (credit === "excellent") {
    creditMultiplier = 1.25;
    statusText = "Excellent! Pre-Approved Offers Available ⚡";
    statusClass = "lc-el-status-excellent";
  } else if (credit === "average") {
    creditMultiplier = 0.75;
    statusText = "Moderate Approval Chance";
    statusClass = "lc-el-status-average";
  } else if (credit === "poor") {
    creditMultiplier = 0;
    statusText = "Low Approval Chance — Improve Credit Score";
    statusClass = "lc-el-status-poor";
  }

  // Calculate maximum eligible loan amount (based on 36-month tenure multiplier)
  const estimatedEMI = netEmiCapacity * creditMultiplier;
  let eligibleLoan = Math.round(estimatedEMI * 32);

  // Cap at max website loan amount (30 Lakhs) and round to nearest 10k
  eligibleLoan = Math.min(3000000, Math.round(eligibleLoan / 10000) * 10000);

  return (
    <section className="lc-sec lc-sec-navy" id="eligibility" ref={ref} aria-label="Who can apply">
      <div className="lc-container lc-elig-grid">
        {/* LEFT */}
        <div className="anim anim-right">
          <p className="lc-eyebrow-lt">Eligibility Checker</p>
          <h2 className="lc-title-w">Check Your Loan Eligibility Instantly</h2>
          <p className="lc-elig-sub">
            We are dedicated to matching every loan customer with the right financial institutions. 
            Adjust your details in the calculator to view your estimated approval limit and probability score in real-time.
          </p>
          <div className="lc-elig-features">
            <div className="lc-ef-item">
              <span className="lc-ef-ic">🚀</span>
              <div>
                <h5>No Credit Score Impact</h5>
                <p>Checking your eligibility on LoanCare uses a soft pull and won&apos;t affect your CIBIL score.</p>
              </div>
            </div>
            <div className="lc-ef-item">
              <span className="lc-ef-ic">🛡️</span>
              <div>
                <h5>Secure &amp; Encrypted</h5>
                <p>Your financial details are safely secured using bank-level 256-bit encryption protocols.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="anim anim-left">
          <div className="lc-elig-card-premium">
            <div className="lc-elig-card-form">
              <h3>Eligibility Estimator</h3>

              {/* Employment Type */}
              <div className="lc-el-toggle-group">
                <button
                  type="button"
                  className={`lc-el-toggle-btn${empType === "salaried" ? " active" : ""}`}
                  onClick={() => setEmpType("salaried")}
                >
                  💼 Salaried
                </button>
                <button
                  type="button"
                  className={`lc-el-toggle-btn${empType === "business" ? " active" : ""}`}
                  onClick={() => setEmpType("business")}
                >
                  📈 Business / Self-Employed
                </button>
              </div>

              {/* Monthly Income Slider */}
              <div className="lc-el-input-group">
                <div className="lc-el-input-header">
                  <label htmlFor="el-income">Net Monthly Income</label>
                  <span>{fmt(income)}</span>
                </div>
                <input
                  id="el-income"
                  type="range"
                  min={15000}
                  max={300000}
                  step={5000}
                  value={income}
                  className="lc-slider-navy"
                  onChange={(e) => setIncome(Number(e.target.value))}
                />
              </div>

              {/* Existing EMIs Slider */}
              <div className="lc-el-input-group">
                <div className="lc-el-input-header">
                  <label htmlFor="el-emis">Existing Monthly EMIs</label>
                  <span>{fmt(emis)}</span>
                </div>
                <input
                  id="el-emis"
                  type="range"
                  min={0}
                  max={150000}
                  step={2000}
                  value={emis}
                  className="lc-slider-navy"
                  onChange={(e) => setEmis(Number(e.target.value))}
                />
              </div>

              {/* Credit Score Range */}
              <div className="lc-el-input-group">
                <label htmlFor="el-credit" className="lc-el-select-label">Credit Score Range (CIBIL)</label>
                <select
                  id="el-credit"
                  value={credit}
                  className="lc-el-select"
                  onChange={(e) => setCredit(e.target.value)}
                >
                  <option value="excellent">Excellent (750+)</option>
                  <option value="good">Good (650 - 749)</option>
                  <option value="average">Average (580 - 649)</option>
                  <option value="poor">Poor (Below 580)</option>
                </select>
              </div>
            </div>

            {/* Live Result display */}
            <div className="lc-elig-card-result">
              <p className="lc-el-res-lbl">Estimated Loan Eligibility Limit</p>
              <div className="lc-el-res-val">{eligibleLoan > 0 ? fmt(eligibleLoan) : "₹0"}</div>
              <div className={`lc-el-status-pill ${statusClass}`}>
                {statusText}
              </div>
              <p className="lc-el-res-note">
                {eligibleLoan > 0 
                  ? "Looking good! You qualify for our competitive partner interest rates." 
                  : "Try lowering your existing monthly EMIs or updating your details to see a positive limit."}
              </p>
              <a href="#apply" className="btn btn-gold btn-full">
                Get Approved Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
