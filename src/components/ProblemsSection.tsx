import { Activity, ShieldAlert, Ban, Clock, CalendarDays, ShoppingBag, Landmark, ArrowRight, TrendingDown } from "lucide-react";

interface ProblemsSectionProps {
  onLearnMoreHealth: () => void;
  onLearnMorePharma: () => void;
}

export default function ProblemsSection({ onLearnMoreHealth, onLearnMorePharma }: ProblemsSectionProps) {
  return (
    <section id="problemas" className="py-24 bg-gray-50 border-y border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-150">
            <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
            <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">Os Gargalos Ocultos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Softwares tradicionais não evitam a evasão de pacientes ou o abandono de clientes. Nós sim.
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Mais de 80% das clínicas e farmácias operam com vazamentos graves de receita em sua recepção e pós-venda. Entenda os desafios silenciosos de cada setor:
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Sector 1: Clinics (HIBRID HEALTH IA) */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-8 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-155">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0057D9]">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug">HIBRID HEALTH IA</h3>
                    <p className="text-[11px] text-[#0057D9] font-semibold uppercase tracking-wider">Clínicas, Consultórios e Hospitais</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-red-55 border border-red-100 text-red-700 text-[10px] font-bold">
                  <TrendingDown className="w-3 h-3" />
                  <span>Vazamento de Caixa</span>
                </div>
              </div>

              {/* List of Pain Points */}
              <div className="space-y-5 pt-2">
                
                {/* Pain 1 */}
                <div className="flex gap-3 text-left">
                  <div className="flex-none w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-650 mt-0.5">
                    <Ban className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">No-show Crítico (Faltas sem aviso)</h4>
                    <p className="text-xs text-gray-650 mt-1">
                      A taxa média de faltas em consultas particulares oscila entre 20% e 30%. Sem robôs ativos renegociando horários em tempo real, essas lacunas geram prejuízo absoluto imprevisível.
                    </p>
                  </div>
                </div>

                {/* Pain 2 */}
                <div className="flex gap-3 text-left">
                  <div className="flex-none w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-650 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">Recepção Sobrecargada &amp; Atendimento Lento</h4>
                    <p className="text-xs text-gray-650 mt-1">
                      Secretárias gastam o dia ligando ou enviando mensagens manuais de confirmação. Mensagens frias geram respostas frias, gerando congestionamento de recepção e perda de novos leads.
                    </p>
                  </div>
                </div>

                {/* Pain 3 */}
                <div className="flex gap-3 text-left">
                  <div className="flex-none w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-650 mt-0.5">
                    <CalendarDays className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">Inércia em Pacientes Crônicos</h4>
                    <p className="text-xs text-gray-650 mt-1">
                      Pacientes esquecem de agendar seus retornos preventivos, exames de controle e reconsultas. Sua clínica perde o LTV (Lifetime Value) e o paciente perde em qualidade de saúde.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-gray-500 uppercase">Média Geral de Perda anual: <strong className="text-red-600 font-extrabold font-sans">R$ 140K+</strong></span>
              <button
                onClick={onLearnMoreHealth}
                className="flex items-center gap-1.5 text-xs font-bold text-[#0057D9] hover:underline cursor-pointer"
              >
                <span>Ver Soluções HIBRID HEALTH</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Sector 2: Pharmacies (HIBRID PHARMA IA) */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-8 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-155">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-[#00B67A]">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug">HIBRID PHARMA IA</h3>
                    <p className="text-[11px] text-emerald-600 font-semibold uppercase tracking-wider">Redes e Drogarias Independentes</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-red-55 border border-red-100 text-red-700 text-[10px] font-bold">
                  <TrendingDown className="w-3 h-3" />
                  <span>Abandono de Carrinho</span>
                </div>
              </div>

              {/* List of Pain Points */}
              <div className="space-y-5 pt-2">
                
                {/* Pain 1 */}
                <div className="flex gap-3 text-left">
                  <div className="flex-none w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-650 mt-0.5">
                    <Ban className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">Abandono de Clientes Recorrentes (Sem LTV)</h4>
                    <p className="text-xs text-gray-650 mt-1">
                      Clientes compram um medicamento e nunca mais voltam. Sua farmácia não monitora ativamente quando o medicamento vai acabar para assegurar a recompra instantânea do mês subsequente.
                    </p>
                  </div>
                </div>

                {/* Pain 2 */}
                <div className="flex gap-3 text-left">
                  <div className="flex-none w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-650 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">Gargalo no Delivery WhatsApp Padrão</h4>
                    <p className="text-xs text-gray-650 mt-1">
                      O delivery por WhatsApp manual é lento. O cliente espera minutos pelo atendente humano enquanto busca farmácias de aplicativos concorrentes com respostas e fechamentos automatizados.
                    </p>
                  </div>
                </div>

                {/* Pain 3 */}
                <div className="flex gap-3 text-left">
                  <div className="flex-none w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-650 mt-0.5">
                    <Landmark className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">Ausência de Upselling &amp; Cross-selling no Caixa</h4>
                    <p className="text-xs text-gray-650 mt-1">
                      Farmácias perdem de elevar o ticket médio porque os atendentes não lembram de oferecer itens preventivos ou suplementos de interesse correlacionados aos remédios principais que o cliente compra.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-gray-500 uppercase">Perda Recorrente estimada: <strong className="text-red-600 font-extrabold font-sans">18 a 30%</strong> do faturamento</span>
              <button
                onClick={onLearnMorePharma}
                className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:underline cursor-pointer"
              >
                <span>Ver Soluções HIBRID PHARMA</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
