import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoanCare.com – No Tension, Only Sanction | Your Trusted Loan Partner",
  description:
    "LoanCare.com is a one-stop digital platform for all loan-related needs. We assess your profile, compare options, and recommend the best financial institutions for a smooth and hassle-free loan experience.",
  keywords:
    "loan, personal loan, business loan, MSME loan, instant loan, LoanCare, trusted loan partner, no tension only sanction",
  openGraph: {
    title: "LoanCare.com – No Tension, Only Sanction",
    description:
      "Your Trusted Loan Partner – Fast approvals, transparent process, tailored loan solutions.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
