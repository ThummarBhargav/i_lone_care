export default function Ticker() {
  const items = [
    "Zero Collateral Needed","Fast & Simple Documentation","100% Online Process",
    "Interest from 1% Per Month","Loans up to ₹30 Lakhs","Dedicated Loan Advisor","No Hidden Charges",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="lc-ticker" aria-hidden="true">
      <div className="lc-ticker-track">
        {doubled.map((t, i) => (
          <span key={i}>&#9679; {t}</span>
        ))}
      </div>
    </div>
  );
}
