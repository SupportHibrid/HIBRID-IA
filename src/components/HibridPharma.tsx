import { ShoppingBag, Bot, Percent, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, DollarSign } from "lucide-react";

interface HibridPharmaProps {
  onCtaclick: () => void;
}

export default function HibridPharma({ onCtaclick }: HibridPharmaProps) {
  const pharmaUseCases = [
    {
      title: "Recorrência de Recompra Inteligente (LTV)",
      desc: "A IA prediz o tempo de duração das receitas médicas enviadas pelos usuários. Quando o tratamento atinge 80% do período, o sistema envia uma mensagem automatizada no WhatsApp sugerindo a compra do refil em 1-clique.",
      kpi: "Até 34% de aumento na recompra imediata"
    },
    {
      title: "HIBRID Delivery Express Autônomo",
      desc: "Assistente de compras integrado ao estoque ERP da drogaria. Responde cotações em menos de 3 segundos, orça o frete da entrega física e fecha o pedido pelo PIX sem intervenção de equipe humana.",
      kpi: "Redução do tempo médio de checkout para 90s"
    },
    {
      title: "Cross-Selling Clínico inteligente no Checkout",
      desc: "Ao identificar a compra de um antibiótico, por exemplo, o assistente HIBRID sugere amigavelmente a inclusão de um probiótico ou protetor gástrico de interesse correlato, gerando um ganho expressivo de margem.",
      kpi: "Elevação média de R$ 18,50 por ticket médio"
    }
  ];

  return (
    <section id="pharma" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative SVG background grids */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 text-left space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-150">
              <ShoppingBag className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">HIBRID PHARMA IA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-950">
              Gerando Receita Recorrente no Varejo Farmacêutico
            </h2>
            <p className="text-sm sm:text-base text-gray-650 max-w-2xl font-medium leading-relaxed">
              Drogarias perdem milhões toda semana ao deixar o cliente terminar seu medicamento de uso contínuo sem nenhuma lembrança ativa. Automatize a recompra preditiva e simplifique seu delivery pelo WhatsApp.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100 text-left w-full max-w-xs">
              <span className="block text-[11px] text-emerald-800 uppercase font-bold tracking-widest">TICKET MÉDIO &amp; MARGEM</span>
              <div className="text-4xl font-extrabold text-emerald-600 font-sans mt-2">1-Clique</div>
              <span className="block text-xs font-semibold text-gray-800 mt-1">Refil de medicamento simplificado</span>
              <p className="text-[10px] text-gray-500 mt-2 leading-relaxed">Permite que clientes idosos ou ocupados confirmem a recompra de hipertensivos ou hipoglicemiantes com apenas uma confirmação PIX.</p>
            </div>
          </div>
        </div>

        {/* Use cases Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 font-sans">
          {pharmaUseCases.map((uc, idx) => (
            <div key={idx} className="bg-gray-50 hover:bg-emerald-50/20 border border-gray-200/60 p-6 md:p-8 rounded-2xl text-left transition-all flex flex-col justify-between hover:-translate-y-1">
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <span className="font-bold text-xs">0{idx + 1}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 leading-snug">{uc.title}</h3>
                <p className="text-xs text-gray-650 leading-relaxed font-semibold">{uc.desc}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-150">
                <span className="block text-[9px] text-gray-450 uppercase font-bold tracking-wider">MÉTRICA COMPROVADA</span>
                <span className="text-xs font-bold text-[#0057D9] block mt-1">{uc.kpi}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Panel */}
        <div className="bg-emerald-600 rounded-3xl p-8 md:p-12 text-white text-left flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl shadow-emerald-700/10 relative overflow-hidden">
          {/* Subtle design block in background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 border border-white/20 text-[10px] font-bold">
              <Bot className="w-3.5 h-3.5" />
              <span>SaaS PREMIUM FARMACÊUTICO</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans">Pronto para blindar sua rede contra os grandes e-commerces?</h3>
            <p className="text-xs md:text-sm text-emerald-50 leading-relaxed font-semibold">
              Ofereça uma experiência de conveniência imbatível para o seu paciente. Fidelização não se faz com cartão de papelão físico, se faz antecipando autonomamente a necessidade de saúde do cliente no WhatsApp dele.
            </p>
          </div>

          <div className="flex flex-col gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onCtaclick}
              className="px-8 py-4 font-bold text-slate-900 bg-white hover:bg-gray-100 rounded-xl transition-all cursor-pointer text-xs uppercase tracking-wide shadow-md"
            >
              Simular ROI HIBRID PHARMA
            </button>
            <span className="text-[10px] text-emerald-100 text-center uppercase tracking-wider font-mono font-bold">Instalação homologada com ERPs locais</span>
          </div>
        </div>

      </div>
    </section>
  );
}
