import { HelpCircle, ChevronRight, Sparkles, Settings, Play, TrendingUp, Search } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Diagnóstico Avançado",
      desc: "Nossos engenheiros analisam seu fluxo atual de no-shows, abandono de pós-venda, canais de comunicação e sistemas (CRM/ERP) para mapear os pontos exatos de evasão de caixa.",
      icon: Search,
      badge: "Passo 1"
    },
    {
      num: "02",
      title: "Implantação Integrada",
      desc: "Desenvolvemos robôs humanizados e integramos via webhook direto na sua agenda (Tasy, MV, Shosp, Linx). Sem interromper a operação atual da recepção física.",
      icon: Settings,
      badge: "Passo 2"
    },
    {
      num: "03",
      title: "Automação Conversacional",
      desc: "Nossa IA assume o envio e recepção de mensagens livres via WhatsApp ou ligações telefônicas ativas 24 horas por dia, renegociando vagas vazias e agilizando orçamentos.",
      icon: Play,
      badge: "Passo 3"
    },
    {
      num: "04",
      title: "Escala & Crescimento Previsível",
      desc: "Sua clínica passa a rodar com agenda de alta densidade e fidelização automática. Monitoramos os KPIs em tempo real, retroalimentando as tomadas de decisões de CRO.",
      icon: TrendingUp,
      badge: "Passo 4"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-200/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-150">
            <HelpCircle className="w-3.5 h-3.5 text-[#0057D9]" />
            <span className="text-[10px] font-bold text-[#0057D9] uppercase tracking-wider">Metodologia HIBRID</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Metodologia em Quatro Etapas Rumo à Eficiência Operacional
          </h2>
          <p className="text-xs sm:text-sm text-gray-650 max-w-xl mx-auto">
            Uma esteira testada e validada para estruturar canais de inteligência preditiva com agilidade e total segurança de dados biomédicos.
          </p>
        </div>

        {/* Stepper Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 font-sans text-left">
          {steps.map((st, index) => {
            const Icon = st.icon;
            return (
              <div key={st.num} className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-3xs flex flex-col justify-between relative group hover:border-blue-300 transition-all">
                
                {/* Stepper indicator line on Desktop */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 border-t border-dashed border-gray-300 z-0"></div>
                )}

                <div className="space-y-4">
                  
                  {/* Step visual indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-gray-150 font-mono tracking-tight">{st.num}</span>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0057D9] text-[9px] font-bold uppercase tracking-wider">
                      {st.badge}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-lg bg-gray-55 flex items-center justify-center text-gray-700 group-hover:bg-[#0057D9] group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-gray-900 leading-tight group-hover:text-[#0057D9] transition-colors">{st.title}</h3>
                  <p className="text-xs text-gray-650 leading-relaxed font-semibold">{st.desc}</p>

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA action */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-1 text-xs text-gray-500 font-semibold mb-4 block">
            <span>Duração estimada total para início do piloto conversacional: </span>
            <strong className="text-gray-900 font-extrabold uppercase">15 dias úteis</strong>
          </div>
          <a
            href="#diagnostico"
            className="inline-flex items-center justify-center gap-1.5 px-6 py-3 font-semibold text-white bg-slate-900 hover:bg-neutral-800 rounded-lg text-xs transition-colors cursor-pointer"
          >
            <span>Iniciar Diagnóstico de Passo 1</span>
            <ChevronRight className="w-4 h-4 text-emerald-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
