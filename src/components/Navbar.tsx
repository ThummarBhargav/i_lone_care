"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`lc-nav${scrolled ? " scrolled" : ""}`} id="navbar">
      <div className="lc-container lc-nav-inner">
        {/* Logo */}
        <a href="#hero" className="lc-logo" aria-label="LoanCare Home" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/images/logo.png"
            alt="iLoanCare Logo"
            width={154}
            height={36}
            priority
            style={{ objectFit: "contain" }}
          />
        </a>

        {/* Nav links */}
        <nav className={`lc-nav-links${menuOpen ? " open" : ""}`} aria-label="Main navigation">
          <a href="#vision" className="lc-nav-link" id="nav-about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#beliefs" className="lc-nav-link" id="nav-beliefs" onClick={() => setMenuOpen(false)}>We Believe</a>
          <a href="#mission" className="lc-nav-link" id="nav-mission" onClick={() => setMenuOpen(false)}>Mission</a>
          <a href="#contact" className="lc-nav-link" id="nav-contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        {/* CTA + Burger */}
        <div className="lc-nav-right">
          <a href="#apply" className="btn btn-navy" id="nav-apply-btn">Apply Now</a>
          <button
            className="lc-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="burger-btn"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
