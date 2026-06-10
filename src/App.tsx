import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemsSection from "./components/ProblemsSection";
import SolutionsList from "./components/SolutionsList";
import HibridHealth from "./components/HibridHealth";
import HibridPharma from "./components/HibridPharma";
import RoiCalculator from "./components/RoiCalculator";
import HowItWorks from "./components/HowItWorks";
import DeliverablesHub from "./components/DeliverablesHub";
import PrivacyPolicyModal from "./components/PrivacyPolicyModal";
import TermsOfUseModal from "./components/TermsOfUseModal";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isDeliverablesHubOpen, setIsDeliverablesHubOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  // Monitor scrolling to highlight correct navbar items dynamically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "problemas", "solucoes", "health", "pharma", "calculator"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white min-h-screen text-gray-800 antialiased selection:bg-blue-500 selection:text-white relative">
      
      {/* Prime floating header navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenDeliverablesHub={() => setIsDeliverablesHubOpen(true)}
      />

      <main>
        {/* Hero Banner Section with living demo dashboard */}
        <HeroSection
          onNavigateToSolutions={() => handleNavigate("solucoes")}
          onNavigateToCalculator={() => handleNavigate("calculator")}
        />

        {/* Real Pain-point Analysis Block */}
        <ProblemsSection
          onLearnMoreHealth={() => handleNavigate("health")}
          onLearnMorePharma={() => handleNavigate("pharma")}
        />

        {/* Interactive Solutions Bento-explorer */}
        <SolutionsList />

        {/* HIBRID HEALTH clinical solutions block */}
        <HibridHealth
          onCtaclick={() => handleNavigate("calculator")}
        />

        {/* HIBRID PHARMA retail solutions block */}
        <HibridPharma
          onCtaclick={() => handleNavigate("calculator")}
        />

        {/* Intelligent active workflow stepper */}
        <HowItWorks />

        {/* Financial ROI and pricing sliders simulator */}
        <RoiCalculator />
      </main>

      {/* Premium institutional footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDocs={() => setIsDeliverablesHubOpen(true)}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenTerms={() => setIsTermsModalOpen(true)}
      />

      {/* Slide-over interactive 11 deliverables presentation hub */}
      <DeliverablesHub
        isOpen={isDeliverablesHubOpen}
        onClose={() => setIsDeliverablesHubOpen(false)}
      />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      {/* Terms of Use Modal */}
      <TermsOfUseModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />

    </div>
  );
}
