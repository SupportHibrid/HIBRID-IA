import { useState, useEffect } from "react";
import { Sparkles, Bot, Menu, X, Landmark, Layers, FileText } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  onOpenDeliverablesHub: () => void;
}

export default function Navbar({ activeSection, onNavigate, onOpenDeliverablesHub }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Início" },
    { id: "problemas", label: "Desafios" },
    { id: "solucoes", label: "Soluções" },
    { id: "health", label: "HIBRID Health IA" },
    { id: "pharma", label: "HIBRID Pharma IA" },
    { id: "calculator", label: "Calculadora de ROI" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/84 backdrop-blur-md border-b border-gray-200/60 shadow-xs py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Accent */}
          <div 
            onClick={() => onNavigate("hero")} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src="https://i.postimg.cc/LsFWGnQB/Logo-Tipo.png"
              alt="HIBRID Health & Pharma IA"
              className="w-[58px] h-[70px] object-contain transition-transform group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col items-center justify-center transition-opacity group-hover:opacity-90">
              <span className="text-base md:text-lg font-black text-slate-900 tracking-tight leading-none text-center">
                HIBRID
              </span>
              <div className="flex flex-wrap items-center justify-center gap-1.5 mt-1">
                <span className="text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0057D9] border border-blue-100">
                  Soluções em IA
                </span>
                <span className="text-[8.5px] md:text-[9.5px] font-mono font-bold tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  HEALTH & PHARMA IA
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  activeSection === item.id
                    ? "text-[#0057D9] bg-blue-50/70"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/60"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions Button Panel */}
          <div className="hidden lg:flex items-center gap-3">
            {/* CTA action */}
            <button
              onClick={() => onNavigate("calculator")}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0057D9] hover:bg-[#004dc4] active:bg-[#0043b0] rounded-lg transition-all shadow-md shadow-blue-500/10 cursor-pointer"
            >
              Simular ROI
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 px-2 text-gray-600 hover:text-gray-900 bg-gray-100/80 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl transition-all duration-300">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-[#0057D9] bg-blue-50"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  onNavigate("calculator");
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full px-4 py-2.5 rounded-lg text-xs font-semibold text-center text-white bg-[#0057D9] hover:bg-blue-700 transition-colors shadow-xs"
              >
                Simular ROI
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
