import { useState, useRef, useEffect, FormEvent } from "react";
import { Bot, Mail, ShieldAlert, Sparkles, Phone, MapPin, Instagram, Linkedin, Facebook, MessageSquare, Zap, Building, AlertTriangle, AlertCircle, CheckCircle, Copy } from "lucide-react";

interface FooterProps {
  onNavigate: (section: string) => void;
  onOpenDocs: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

// Function to validate standard email formats with broad custom domain extensions support
function validateEmailFormat(email: string): boolean {
  const trimmed = email.trim();
  
  // Rule out multiple @ symbols or spaces
  if ((trimmed.match(/@/g) || []).length !== 1) {
    return false;
  }
  if (/\s/.test(trimmed)) {
    return false;
  }
  if (trimmed.includes("@@")) {
    return false;
  }

  const parts = trimmed.split('@');
  const localPart = parts[0];
  const domainPart = parts[1];

  if (!localPart || !domainPart) {
    return false;
  }

  // Domain must contain a dot and not end with a dot
  if (!domainPart.includes('.') || domainPart.startsWith('.') || domainPart.endsWith('.')) {
    return false;
  }

  // No double dots in domain
  if (domainPart.includes('..')) {
    return false;
  }

  const domainParts = domainPart.split('.');
  const extension = domainParts[domainParts.length - 1];

  // Extension must consist only of letters and be at least 2 chars long (e.g., .com, .online, .ai, .br)
  if (!/^[a-zA-Z]+$/.test(extension) || extension.length < 2) {
    return false;
  }

  // Prevent obvious format failures in local part (no blanks, brackets, quotes or parentheses)
  if (
    localPart.includes(",") || 
    localPart.includes("[") || 
    localPart.includes("]") || 
    localPart.includes("(") || 
    localPart.includes(")") || 
    localPart.includes('"')
  ) {
    return false;
  }

  // Ensure it matches general domain regex
  const standardRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,40}$/;
  if (!standardRegex.test(trimmed)) {
    return false;
  }

  return true;
}

// Detect typos in popular providers and suggest the correct domain
function detectKnownProviderTypo(email: string): { typo: string; correction: string } | null {
  const parts = email.trim().split('@');
  if (parts.length !== 2) return null;
  const domain = parts[1].toLowerCase().trim();

  const typoMap: Record<string, string> = {
    'gmial.com': 'gmail.com',
    'gmlail.com': 'gmail.com',
    'gamil.com': 'gmail.com',
    'outlok.com': 'outlook.com',
    'hotmial.com': 'hotmail.com',
    'yaho.com': 'yahoo.com',
    'zho.com': 'zoho.com',
    'yandx.com': 'yandex.com',
  };

  if (typoMap[domain]) {
    return { typo: domain, correction: typoMap[domain] };
  }

  return null;
}

export default function Footer({ onNavigate, onOpenDocs, onOpenPrivacy, onOpenTerms }: FooterProps) {
  const [emailVal, setEmailVal] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [typoSuggestion, setTypoSuggestion] = useState<{ typo: string; correction: string } | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const emailInputRef = useRef<HTMLInputElement>(null);

  // Esc listener to dismiss confirmation and return focus
  useEffect(() => {
    if (!showConfirmation) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowConfirmation(false);
        setTimeout(() => {
          emailInputRef.current?.focus();
        }, 50);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showConfirmation]);

  const handleApplyCorrection = (suggestion: { typo: string; correction: string }) => {
    const parts = emailVal.split("@");
    if (parts.length === 2) {
      const corrected = `${parts[0]}@${suggestion.correction}`;
      setEmailVal(corrected);
      setTypoSuggestion(null);
      setErrorMessage(null);
      setTimeout(() => {
        emailInputRef.current?.focus();
      }, 50);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setTypoSuggestion(null);
    setSuccessMessage(null);

    const email = emailVal.trim();
    if (!email) return;

    if (!validateEmailFormat(email)) {
      setErrorMessage("Digite um e-mail válido para que nossa equipe consiga entrar em contato com você.");
      return;
    }

    const typo = detectKnownProviderTypo(email);
    if (typo) {
      setTypoSuggestion(typo);
      return;
    }

    setShowConfirmation(true);
  };

  const handleConfirmSubmit = () => {
    setShowConfirmation(false);
    setSuccessMessage("Recebemos seu contato. Em breve, a equipe HIBRID falará com você.");
    setEmailVal("");
    setErrorMessage(null);
    setTypoSuggestion(null);
    
    // Clear message after 10s
    setTimeout(() => {
      setSuccessMessage(null);
    }, 10000);
  };

  const [copied, setCopied] = useState(false);

  const openEmailContact = () => {
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=suporthibrid%40gmail.com&su=Contato%20pelo%20site%20da%20HIBRID&body=Ol%C3%A1%2C%20equipe%20HIBRID.%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20IA%20para%20cl%C3%ADnicas%20e%20farm%C3%A1cias.";
    const mailtoUrl = "mailto:suporthibrid@gmail.com?subject=Contato%20pelo%20site%20da%20HIBRID&body=Ol%C3%A1%2C%20equipe%20HIBRID.%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20IA%20para%20cl%C3%ADnicas%20e%20farm%C3%A1cias.";

    const newWindow = window.open(gmailUrl, "_blank");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = mailtoUrl;
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("suporthibrid@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 4000);
      });
  };

  return (
    <footer className="bg-[#0b101b] text-gray-400 border-t border-gray-800 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Brand details (Cols 4) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate("hero")}>
              <img
                src="https://i.postimg.cc/LsFWGnQB/Logo-Tipo.png"
                alt="HIBRID Logo"
                className="w-[50px] h-[60px] object-contain"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-lg font-bold text-white tracking-tight block">HIBRID</span>
                <span className="block text-[8.5px] font-mono tracking-widest text-[#00B67A] uppercase">
                  HEALTH & PHARMA IA
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-medium">
              A HIBRID é pioneira em automação conversacional de alta fidelidade e engenharia preditiva para o ecossistema brasileiro de saúde. Alavancamos no-shows e criamos ranhuras de receita recorrente para clínicas e redes de farmácia.
            </p>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5 text-gray-300">
                <Building className="w-4 h-4 text-[#0057D9] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-extrabold text-white text-[11px] leading-tight">
                    HIBRID SOLUÇÕES EM IA (I.S.)
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono font-bold mt-0.5">
                    CNPJ: 66.153.809/0001-61
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-gray-300">
                <MapPin className="w-4 h-4 text-[#00FF87] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-300 text-[11px] leading-tight">
                    Av. José Maria de Brito, 1707
                  </span>
                  <span className="text-[10.5px] text-gray-400">
                    Bairro Monjolo — Foz do Iguaçu / PR
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium">
                    CEP: 85.864-320
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-gray-300">
                <Mail className="w-4 h-4 text-[#00FF87] shrink-0" />
                <a href="mailto:suporthibrid@gmail.com" className="hover:text-white hover:underline font-bold text-[11px]">
                  suporthibrid@gmail.com / contato@inteligenciahibrid.online
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-gray-300">
                <Phone className="w-4 h-4 text-[#0057D9] shrink-0 mt-0.5" />
                <div className="flex flex-col text-[11px]">
                  <span className="font-bold text-gray-300">(45) 9859-2085</span>
                  <span className="font-bold text-gray-300">(45) 9902-2803</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a href="https://www.instagram.com/hibrid.ia/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/share/1JudGoa2Mw/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions Navigation (Cols 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Soluções</h4>
            <div className="flex flex-col gap-2 text-xs">
              <button onClick={() => onNavigate("solucoes")} className="hover:text-white text-left cursor-pointer font-medium">
                IA Conversacional Ativa
              </button>
              <button onClick={() => onNavigate("solucoes")} className="hover:text-white text-left cursor-pointer font-medium">
                WhatsApp Business Avançado
              </button>
              <button onClick={() => onNavigate("solucoes")} className="hover:text-white text-left cursor-pointer font-medium">
                Voice AI Humanizada
              </button>
              <button onClick={() => onNavigate("solucoes")} className="hover:text-white text-left cursor-pointer font-medium">
                CRM Preditivo de Saúde
              </button>
              <button onClick={() => onNavigate("solucoes")} className="hover:text-white text-left cursor-pointer font-medium">
                Revenue Intelligence Dashboard
              </button>
            </div>
          </div>

          {/* Column 3: Verticals & Tools (Cols 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Sistemas</h4>
            <div className="flex flex-col gap-2 text-xs">
              <button onClick={() => onNavigate("health")} className="hover:text-white text-left cursor-pointer font-medium">
                SaaS HIBRID HEALTH IA
              </button>
              <button onClick={() => onNavigate("pharma")} className="hover:text-white text-left cursor-pointer font-medium">
                SaaS HIBRID PHARMA IA
              </button>
              <button onClick={() => onNavigate("calculator")} className="hover:text-white text-left cursor-pointer font-medium">
                Simulador Financeiro de ROI
              </button>

              {/* Direct Contact Email Area */}
              <div className="mt-4 pt-4 border-t border-gray-800/60 flex flex-col gap-3">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Contato Direto</span>
                
                {/* Displayed Email Info Box */}
                <div className="bg-[#0f172a] rounded-xl p-3 border border-gray-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0">
                      <Mail className="w-4 h-4 text-[#0057D9]" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">E-mail Oficial</span>
                      <span className="text-xs font-mono font-bold text-gray-200 block truncate leading-none">
                        suporthibrid@gmail.com
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main Action Callouts */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={openEmailContact}
                    className="w-full bg-[#0057D9] hover:bg-[#004dc4] active:bg-[#0043b0] text-white py-2.5 px-3 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Falar por e-mail</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/15 text-gray-300 py-2 px-3 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar e-mail</span>
                  </button>
                </div>

                {/* Copied Success Message */}
                {copied && (
                  <div className="flex items-center gap-1.5 text-[#00B67A] bg-[#00B67A]/10 border border-[#00B67A]/25 py-1.5 px-2.5 rounded-lg text-[11px] font-medium leading-normal animate-pulse">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00B67A]" />
                    <span>E-mail copiado com sucesso.</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Column 4: Compliance & Trust (Cols 2) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Conformidade</h4>
            <div className="space-y-3.5 text-[10.5px] leading-relaxed">
              <div className="flex gap-2 items-start text-emerald-500">
                <ShieldAlert className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="font-semibold text-gray-300">100% LGPD Compliant</span>
              </div>
              <p className="text-[10px] text-gray-500 font-semibold">
                Nossos robôs operam em infraestrutura de nuvem certificada com segurança de nível médico e total conformidade com as exigências da ANVISA e CFM.
              </p>
              <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-none font-bold">BR_HEALTH_AI SECURE</span>
            </div>
          </div>

        </div>

        {/* Bottom copy row */}
        <div className="border-t border-gray-800 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} HIBRID Soluções em IA. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <button 
              onClick={(e) => {
                e.preventDefault();
                onOpenTerms();
              }}
              className="hover:text-gray-300 bg-transparent border-none p-0 cursor-pointer outline-none font-medium"
            >
              Termos de Uso
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                onOpenPrivacy();
              }}
              className="hover:text-gray-300 bg-transparent border-none p-0 cursor-pointer outline-none font-medium"
            >
              Políticas de Privacidade
            </button>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400 font-semibold flex items-center gap-1">
              <Bot className="w-3.5 h-3.5 text-[#0057D9]" /> Crafted for health growth
            </span>
          </div>
        </div>

      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div 
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-modal-title"
        >
          <div className="bg-[#FFFFFF] w-full max-w-sm rounded-2xl p-6 shadow-2xl border border-gray-200 text-left space-y-5">
            {/* Icon & Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0057D9] flex items-center justify-center border border-blue-105 shrink-0">
                <Mail className="w-5 h-5 text-[#0057D9]" />
              </div>
              <div>
                <h3 id="confirm-modal-title" className="text-sm font-extrabold text-[#1F2937]">
                  Este é realmente o seu e-mail?
                </h3>
                <span className="text-[10px] text-gray-400 font-bold block mt-0.5 uppercase tracking-wider font-sans">
                  Confirmação de Contato HIBRID
                </span>
              </div>
            </div>

            {/* Box with Highlighted Email */}
            <div className="bg-[#F5F7FA] border border-gray-200 p-4 rounded-xl text-center space-y-1">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block font-sans">E-mail Digitado:</span>
              <span className="text-xs font-black text-[#1F2937] tracking-tight block break-all select-all font-mono">
                {emailVal}
              </span>
            </div>

            {/* Warning/Assurance Note */}
            <p className="text-[10.5px] text-gray-500 font-medium leading-relaxed font-sans">
              Nossa equipe usará este e-mail para enviar propostas, análises e agendamentos. Favor verificar se não há erros antes de prosseguir.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 pt-1 font-sans">
              <button
                type="button"
                onClick={handleConfirmSubmit}
                className="flex-1 py-2.5 px-4 bg-[#0057D9] hover:bg-[#004dc4] active:bg-[#0043b0] text-white rounded-lg text-xs font-bold transition-all cursor-pointer text-center"
              >
                Confirmar e enviar
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowConfirmation(false);
                  // Focus back on the input field
                  setTimeout(() => {
                    emailInputRef.current?.focus();
                  }, 50);
                }}
                className="py-2.5 px-4 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-lg text-xs font-bold transition-all cursor-pointer text-center"
              >
                Corrigir e-mail
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
