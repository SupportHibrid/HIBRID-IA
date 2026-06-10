import { useState, useEffect } from "react";
import { ArrowRight, Play, Sparkles, TrendingUp, Bot, MessageSquare, CheckCircle, ShieldCheck, Users, Activity } from "lucide-react";

interface HeroSectionProps {
  onNavigateToSolutions: () => void;
  onNavigateToCalculator: () => void;
}

export default function HeroSection({ onNavigateToSolutions, onNavigateToCalculator }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<"clinic" | "pharma">("clinic");
  const [tickerValue, setTickerValue] = useState(1420580);
  const [recAtivaPulse, setRecAtivaPulse] = useState(15);
  const [chatTurn, setChatTurn] = useState(0);

  // Auto-increment reclaimed value slightly to simulate active AI recovery
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerValue((prev) => prev + Math.floor(Math.random() * 45) + 5);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // Cycling dialog turns to simulate HIBRID WhatsApp active bot re-engaging a cold patient
  useEffect(() => {
    const timer = setInterval(() => {
      setChatTurn((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const chatDialoguesClinics = [
    { sender: "bot", text: "Olá Ricardo! Identificamos que já fazem 6 meses desde o seu último check-up cardiológico com o Dr. Marcos Silveira. Deseja reativar suas guias preventivas automáticas hoje dadas as suas coberturas vigentes?" },
    { sender: "user", text: "Nossa, sim! Mas só posso de terça ou quinta após as 17h..." },
    { sender: "bot", text: "Excelente. Tenho o dia 16/06 (Terça) às 17h30 disponível ou dia 18/06 (Quinta) às 18h. Qual prefere?" },
    { sender: "user", text: "Terça às 17h30 fica perfeito! Confirmado!" }
  ];

  const chatDialoguesPharmas = [
    { sender: "bot", text: "Olá Marina! Notamos que o seu tratamento prescrito de Glifage 500mg está a 5 dias do fim. Gostaria de autorizar nossa entrega expressa do refil inteligente com desconto em 1-clique pelo HIBRID Delivery?" },
    { sender: "user", text: "Olá! Sim, por favor. Pode mandar no endereço padrão?" },
    { sender: "bot", text: "Perfeito! Pagamento via PIX enviado para faturamento de Marina. O motoboy chegará em até 40 min." },
    { sender: "user", text: "Muito prático, obrigado!" }
  ];

  const dialogues = activeTab === "clinic" ? chatDialoguesClinics : chatDialoguesPharmas;

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://i.postimg.cc/h42z350b/chip-fundo.png')" }}
    >
      {/* Absolute Decorative Tech Background Lines */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute top-20 right-0 w-96 h-96 bg-[#0057D9]/5 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#00B67A]/5 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Sales / Value Presentation */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/50">
              <Sparkles className="w-3.5 h-3.5 text-[#0057D9]" />
              <span className="text-[11px] font-semibold text-[#0057D9] uppercase tracking-wider">
                Exclusivo para Clínicas Médicas e Redes de Farmácias
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.05]">
              Transformamos Atendimento, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-950 via-[#00FF87] to-emerald-700 drop-shadow-[0_2px_10px_rgba(0,255,135,0.4)] font-black">Fidelização</span> e <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-950 via-[#00FF87] to-emerald-700 drop-shadow-[0_2px_10px_rgba(0,255,135,0.4)] font-black">Receita</span> com <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-950 via-[#00D9FF] to-[#0057D9] drop-shadow-[0_2px_10px_rgba(0,217,255,0.5)] font-black relative inline-block">Inteligência Artificial<span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-[#00D9FF] opacity-80"></span></span>
            </h1>

            {/* Subheadline detailing tangible CRO objectives */}
            <p className="text-base sm:text-lg text-gray-650 max-w-xl font-medium leading-relaxed">
              A HIBRID <strong className="text-gray-900 font-semibold">não vende softwares estáticos</strong>. Nós estruturamos <strong className="text-gray-900 font-semibold">crescimento previsível</strong>, automatizando agendamentos, reativando pacientes inativos e maximizando o ciclo de recompra farmacêutica através de IA conversacional ativa por voz e texto.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="https://wa.me/554598592085"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-[#000000] hover:bg-neutral-800 rounded-xl transition-all shadow-lg hover:shadow-black/10 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Agendar Demonstração</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </a>

              <button
                onClick={onNavigateToSolutions}
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200/40 rounded-xl transition-all cursor-pointer"
              >
                <span>Conhecer Soluções</span>
              </button>
            </div>

            {/* Micro proof factors */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/80">
              <div>
                <span className="block text-2xl font-bold font-sans text-gray-900">-72%</span>
                <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">No-shows em Clínicas</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-sans text-gray-900">+34%</span>
                <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Recompra de Farmácia</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-sans text-[#00B67A]">Real-time</span>
                <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Mapeamento de KPIs</span>
              </div>
            </div>
          </div>

          {/* Column 2: Deeply Interactive, Living HTML Dashboard Mock */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0057D9]/10 to-[#00B67A]/10 rounded-2xl blur-3xl opacity-50 transform rotate-12"></div>
            
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl p-5 overflow-hidden font-sans">
              
              {/* Fake Chrome window bar */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  <span className="text-[10px] font-mono text-gray-400 ml-2">hibrid.ai/core-live</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[9px] font-mono font-bold text-emerald-700 uppercase">HIBRID HUB ATIVO</span>
                </div>
              </div>

              {/* Sub-Header with Sector Toggles */}
              <div className="flex items-center justify-between mb-4 bg-gray-55 p-1 rounded-xl">
                <button
                  onClick={() => { setActiveTab("clinic"); setChatTurn(0); }}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                    activeTab === "clinic"
                      ? "bg-white text-[#0057D9] shadow-xs border border-gray-150"
                      : "text-gray-550 hover:text-gray-800"
                  }`}
                >
                  <Activity className="w-3 h-3" />
                  <span>HIBRID HEALTH IA</span>
                </button>
                <button
                  onClick={() => { setActiveTab("pharma"); setChatTurn(0); }}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                    activeTab === "pharma"
                      ? "bg-white text-emerald-600 shadow-xs border border-gray-150"
                      : "text-gray-550 hover:text-gray-800"
                  }`}
                >
                  <Bot className="w-3 h-3" />
                  <span>HIBRID PHARMA IA</span>
                </button>
              </div>

              {/* KPI Counter Widget */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-[#0057D9]/5 rounded-xl border border-[#0057D9]/10 p-3.5 relative">
                  <TrendingUp className="absolute top-2 right-2 w-4 h-4 text-[#0057D9] opacity-70" />
                  <span className="text-[9px] font-bold text-[#0057D9] uppercase tracking-wider">Faturamento Recuperado</span>
                  <div className="text-base sm:text-lg font-bold font-sans text-gray-900 mt-1">
                    R$ {tickerValue.toLocaleString("pt-BR")}
                  </div>
                  <span className="text-[8px] text-gray-500 block mt-0.5">Incrementado via IA ativa 24h</span>
                </div>

                <div className="bg-[#00B67A]/5 rounded-xl border border-[#00B67A]/10 p-3.5 relative">
                  <CheckCircle className="absolute top-2 right-2 w-4 h-4 text-emerald-600 opacity-70" />
                  <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-wider">Conversão HIBRID</span>
                  <div className="text-base sm:text-lg font-bold font-sans text-gray-900 mt-1">
                    84.2% <span className="text-[10px] text-emerald-600 font-semibold">↑ 14%</span>
                  </div>
                  <span className="text-[8px] text-gray-500 block mt-0.5">Score de resolutividade autônoma</span>
                </div>
              </div>

              {/* Simulated active HIBRID Conversational flow */}
              <div className="border border-gray-100 rounded-xl bg-gray-50/50 p-3.5 mb-4 relative min-h-[175px] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-bold text-gray-500 uppercase flex items-center gap-1">
                    <MessageSquare className="w-3 h-3 text-[#0057D9]" /> Simulated WhatsApp Agent (Conversão ao Vivo)
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00B67A] animate-ping"></div>
                </div>

                <div className="space-y-2 flex-grow overflow-y-auto mb-2 text-[11px] leading-relaxed">
                  {dialogues.map((item, idx) => {
                    const isVisible = idx <= chatTurn;
                    return (
                      <div
                        key={idx}
                        className={`p-2 rounded-lg max-w-[85%] transition-all duration-500 ${
                          isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-2 select-none"
                        } ${
                          item.sender === "bot"
                            ? "bg-[#0057D9] text-white self-start rounded-tl-none mr-auto"
                            : "bg-white text-gray-900 self-end rounded-tr-none border border-gray-200 ml-auto"
                        }`}
                      >
                        <p className="font-medium text-[10px]">{item.text}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-gray-200/50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    <span className="text-[9px] font-mono text-gray-400">Canal ativo: WhatsApp Business API</span>
                  </div>
                  <button 
                    onClick={() => setChatTurn((prev) => (prev + 1) % 4)}
                    className="text-[9px] text-blue-600 hover:underline font-bold"
                  >
                    Próxima resposta ↓
                  </button>
                </div>
              </div>

              {/* Real-Time Platform Status and Trust indicators */}
              <div className="flex items-center justify-between text-[10px] text-gray-500 font-medium">
                <span className="flex items-center gap-1 text-[#00B67A]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00B67A]" /> Criptografado &amp; 100% LGPD Compliant
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" /> +2M Interações Realizadas
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
