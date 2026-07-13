import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import EMICalculator from "@/components/EMICalculator";
import Vision from "@/components/Vision";
import Beliefs from "@/components/Beliefs";
import Mission from "@/components/Mission";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <EMICalculator />
        <Vision />
        <Beliefs />
        <Mission />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

