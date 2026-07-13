"use client";
import { useState, useEffect, useRef } from "react";

const faqs = [
  { q: "What is the minimum loan amount I can apply for?", a: "You can apply for a minimum of ₹50,000 and up to ₹30 Lakhs, based on your eligibility and the lender's criteria." },
  { q: "How long does it take to get loan approval?", a: "Most applications get in-principle approval in minutes. Final disbursement happens in 2–4 working days after document verification." },
  { q: "What documents are required to apply?", a: "Aadhaar Card, PAN Card, last 6–12 months bank statements, and income proof (salary slips or ITR for self-employed). All KYC is done digitally." },
  { q: "Is collateral required for the loan?", a: "No! LoanCare specializes in unsecured loans — no collateral or property pledge required. Your credit profile and income are sufficient." },
  { q: "How much EMI will I need to pay?", a: "Use our free EMI calculator above. EMIs start from as low as ₹2,083 per lakh depending on tenure and interest rate." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
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
    <section className="lc-sec lc-sec-light" id="faq" ref={ref} aria-label="Frequently asked questions">
      <div className="lc-container">
        <div className="lc-sec-hd anim anim-up">
          <p className="lc-eyebrow">Got Questions?</p>
          <h2 className="lc-title">Frequently Asked Questions</h2>
        </div>

        <div className="lc-faq-list anim anim-up">
          {faqs.map((f, i) => (
            <div className={`lc-faq-row${open === i ? " open" : ""}`} key={i} id={`faq-row-${i + 1}`}>
              <button
                className="lc-faq-btn"
                aria-expanded={open === i}
                id={`faq-btn-${i + 1}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {f.q}
                <svg className="lc-faq-arr" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="lc-faq-ans" id={`faq-ans-${i + 1}`}>
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
