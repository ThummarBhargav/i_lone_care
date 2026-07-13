import Image from "next/image";

export default function Footer() {
  const company = [
    { label: "Our Vision", href: "#vision", id: "fl-vision" },
    { label: "Our Mission", href: "#mission", id: "fl-mission" },
    { label: "We Believe In", href: "#beliefs", id: "fl-beliefs" },
    { label: "Privacy Policy", href: "#", id: "fl-privacy" },
    { label: "Terms & Conditions", href: "#", id: "fl-terms" },
  ];
  const products = [
    { label: "Personal Loan", href: "#", id: "fl-personal" },
    { label: "Business Loan", href: "#", id: "fl-business" },
    { label: "MSME Loan", href: "#", id: "fl-msme" },
    { label: "Home Loan", href: "#", id: "fl-home" },
    { label: "Loan for Women", href: "#", id: "fl-women" },
    { label: "Education Loan", href: "#", id: "fl-edu" },
  ];
  const quick = [
    { label: "EMI Calculator", href: "#emi", id: "fl-emi" },
    { label: "Check Eligibility", href: "#eligibility", id: "fl-elig" },
    { label: "FAQs", href: "#faq", id: "fl-faq" },
    { label: "Our Partners", href: "#partners", id: "fl-part" },
    { label: "Contact Us", href: "#contact", id: "fl-contact" },
  ];

  return (
    <footer className="lc-footer" id="contact" aria-label="Site footer">
      <div className="lc-container lc-footer-grid">
        {/* Brand */}
        <div className="lc-foot-brand">
          <div className="lc-foot-logo" style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <div style={{ background: "var(--white)", padding: "6px 12px", borderRadius: "8px", display: "inline-flex", alignItems: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <Image
                src={`${process.env.NODE_ENV === "production" ? "/i_lone_care" : ""}/images/logo.png`}
                alt="iLoanCare Logo"
                width={128}
                height={30}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <p className="lc-foot-desc">
            LoanCare Financial Services Pvt Ltd<br />
            Your Trusted Loan Partner since 2020.<br /><br />
            Email:{" "}
            <a href="mailto:hello@loancare.com">hello@loancare.com</a>
            <br />
            Mon–Sat: 10 AM to 7 PM
          </p>
          <div className="lc-socials">
            <a href="#" id="soc-fb" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" id="soc-ig" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" id="soc-yt" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98" fill="#0D1B2A"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="lc-foot-col">
          <h5>Company</h5>
          {company.map((l) => <a key={l.id} href={l.href} id={l.id}>{l.label}</a>)}
        </div>
        <div className="lc-foot-col">
          <h5>Loan Products</h5>
          {products.map((l) => <a key={l.id} href={l.href} id={l.id}>{l.label}</a>)}
        </div>
        <div className="lc-foot-col">
          <h5>Quick Links</h5>
          {quick.map((l) => <a key={l.id} href={l.href} id={l.id}>{l.label}</a>)}
        </div>
      </div>

      <div className="lc-foot-bottom">
        <div className="lc-container">
          <p>© 2025 LoanCare Financial Services Pvt Ltd. All rights reserved. | RBI Registered Partner</p>
          <p className="lc-foot-disc">
            *Loan approval subject to lender&apos;s discretion. Interest rates are indicative and may vary based on profile.
          </p>
        </div>
      </div>
    </footer>
  );
}
