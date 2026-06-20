import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";

function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-slate-900 relative overflow-hidden scroll-smooth">

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Glow */}
      <div className="absolute top-0 -left-20 size-[450px] bg-pink-500/20 blur-[140px]" />
      <div className="absolute bottom-0 -right-20 size-[450px] bg-cyan-500/20 blur-[140px]" />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <CTASection />
        <Footer />
      </div>

    </div>
  );
}

export default LandingPage;