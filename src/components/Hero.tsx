"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    el.querySelectorAll(".anim").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="lc-hero" id="hero" ref={ref} aria-label="Homepage hero">

      {/* Animated BG blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      {/* Floating grid pattern */}
      <div className="hero-grid-pattern" />

      <div className="lc-container lc-hero-grid">

        {/* ===== LEFT ===== */}
        <div className="anim anim-up hero-left-col">

          {/* Trust pill */}
          <div className="lc-hero-pill">
            <span className="lc-pulse" />
            Trusted by <strong style={{ margin: "0 4px" }}>5 Lakh+</strong> Customers across India
          </div>

          <h1 className="lc-hero-h1">
            Your Trusted<br />
            <span className="hero-gradient-text">Loan Partner</span>
          </h1>

          {/* Big tagline card */}
          <div className="hero-tagline-card">
            <span className="hero-tagline-emoji">💫</span>
            <span>No Tension — <strong>Only Sanction!</strong></span>
          </div>

          <p className="lc-hero-p">
            We are a digital platform that&apos;s a <strong>one-stop solution</strong> for all loan-related needs.
            We assess your profile, compare options, and connect you with the best financial institutions.
          </p>

          <div className="lc-hero-btns" style={{ gap: '20px' }}>
            <a href="#apply" className="btn btn-gold btn-lg hero-btn-primary" id="hero-apply-btn">
              Apply Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#emi" className="btn btn-outline btn-lg" id="hero-emi-btn">
              EMI Calculator
            </a>
          </div>

          {/* Stats row */}
          <div className="hero-stats-row">
            <div className="hero-stat-pill">
              <span className="hero-stat-icon">💰</span>
              <div>
                <strong>₹5,000 Cr+</strong>
                <span>Disbursed</span>
              </div>
            </div>
            <div className="hero-stat-sep" />
            <div className="hero-stat-pill">
              <span className="hero-stat-icon">👥</span>
              <div>
                <strong>50,000+</strong>
                <span>Customers</span>
              </div>
            </div>
            <div className="hero-stat-sep" />
            <div className="hero-stat-pill">
              <span className="hero-stat-icon">🤝</span>
              <div>
                <strong>20+</strong>
                <span>Lenders</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT ===== */}
        <div className="lc-hero-img-wrap anim anim-left">
          <div className="hero-img-frame">
            <Image
              src="/images/finance.png"
              alt="Loan approved cartoon illustration"
              width={500}
              height={520}
              className="lc-hero-img"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="#663399" fillOpacity="0.08"/>
          <path d="M0 55 C400 20 1000 70 1440 45 L1440 80 L0 80 Z" fill="#663399" fillOpacity="0.05"/>
        </svg>
      </div>
    </section>
  );
}
