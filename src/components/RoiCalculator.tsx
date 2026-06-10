import { useState, useId } from "react";
import { DollarSign, ShieldCheck, Activity, BarChart3, TrendingUp, HelpCircle, ArrowUpRight, Zap } from "lucide-react";

export default function RoiCalculator() {
  const [tab, setTab] = useState<"clinic" | "pharma">("clinic");

  // State unique IDs for labels
  const monthlyAppointmentsId = useId();
  const avgTicketId = useId();
  const noShowRateId = useId();
  
  const dailyDeliveriesId = useId();
  const avgCartId = useId();
  const lossRateId = useId();

  // Clinical states
  const [monthlyAppointments, setMonthlyAppointments] = useState(650);
  const [averageConsultationTicket, setAverageConsultationTicket] = useState(380);
  const [noShowRate, setNoShowRate] = useState(24); // e.g. 24%

  // Pharma states
  const [dailyDeliveries, setDailyDeliveries] = useState(45);
  const [averageCartValue, setAverageCartValue] = useState(130);
  const [nonRepurchaseRate, setNonRepurchaseRate] = useState(38); // e.g. 38%

  // 1. Clinical Math
  const totalSlotsLostMonthly = Math.round(monthlyAppointments * (noShowRate / 100));
  const totalValueLostMonthly = totalSlotsLostMonthly * averageConsultationTicket;
  
  // HIBRID cuts no-show down to an average of 6%
  const hibridNoShowRate = 6;
  const hibridReclaimedSlotsMonthly = Math.round(monthlyAppointments * ((noShowRate - hibridNoShowRate) / 100));
  const reclaimedMonthlyRevenueHealth = Math.max(0, hibridReclaimedSlotsMonthly * averageConsultationTicket);
  const reclaimedYearlyRevenueHealth = reclaimedMonthlyRevenueHealth * 12;

  // 2. Pharma Math
  const monthlyDeliveries = dailyDeliveries * 30;
  const monthlyDeliverySales = monthlyDeliveries * averageCartValue;
  const lostSalesMonthly = monthlyDeliverySales * (nonRepurchaseRate / 100);

  // HIBRID cuts non-repurchase down to 14% via LTV refill notification and rapid WhatsApp checkout
  const hibridNonRepurchaseRate = 14;
  const reclaimedMonthlyRevenuePharma = Math.max(0, monthlyDeliverySales * ((nonRepurchaseRate - hibridNonRepurchaseRate) / 100) * 0.85); // 85% recapture efficacy
  const reclaimedYearlyRevenuePharma = reclaimedMonthlyRevenuePharma * 12;

  const currentReclaimedMonthly = tab === "clinic" ? reclaimedMonthlyRevenueHealth : reclaimedMonthlyRevenuePharma;
  const currentReclaimedYearly = tab === "clinic" ? reclaimedYearlyRevenueHealth : reclaimedYearlyRevenuePharma;
  const curLostMonthly = tab === "clinic" ? totalValueLostMonthly : lostSalesMonthly;

  return (
    <section 
      id="calculator" 
      className="py-24 bg-cover bg-center bg-no-repeat border-b border-gray-200"
      style={{ backgroundImage: "url('https://i.postimg.cc/FR7zt9p7/chip-fundo2.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-250">
            <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Business Case &amp; CRO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Simulador de Impacto Financeiro e Retorno de Investimento (ROI)
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Ajuste os controles abaixo com os dados reais da sua operação para prever o montante financeiro desperdiçado que a Inteligência HIBRID recuperará para sua empresa.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 p-1 rounded-xl border border-gray-200">
            <button
              onClick={() => setTab("clinic")}
              className={`py-2.5 px-5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                tab === "clinic" ? "bg-white text-[#0057D9] shadow-2xs" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              🏥 Calculadora para Clínicas e Consultórios
            </button>
            <button
              onClick={() => setTab("pharma")}
              className={`py-2.5 px-5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                tab === "pharma" ? "bg-white text-emerald-600 shadow-2xs" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              💊 Calculadora para Redes de Farmácias
            </button>
          </div>
        </div>

        {/* Calculator layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch font-sans text-left">
          
          {/* Controls Side (Cols 6) */}
          <div className="lg:col-span-6 bg-[#F5F7FA] rounded-2xl border border-gray-200/80 p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide border-b border-gray-205 pb-3">
                {tab === "clinic" ? "Variáveis da Clínica Médica" : "Variáveis Operacionais da Drogaria"}
              </h3>

              {tab === "clinic" ? (
                // CLINIC CONTROLS
                <div className="space-y-6">
                  {/* Slider 1 */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-gray-700">
                      <label htmlFor={monthlyAppointmentsId}>Consultas Agendadas por Mês</label>
                      <span className="text-[#0057D9] font-mono text-sm">{monthlyAppointments} consultas</span>
                    </div>
                    <input
                      id={monthlyAppointmentsId}
                      type="range"
                      min={100}
                      max={3000}
                      step={50}
                      value={monthlyAppointments}
                      onChange={(e) => setMonthlyAppointments(Number(e.target.value))}
                      className="w-full accent-[#0057D9]"
                    />
                    <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                      <span>100</span>
                      <span>3.000</span>
                    </div>
                  </div>

                  {/* Slider 2 */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-gray-700">
                      <label htmlFor={avgTicketId}>Ticket Médio da Consulta / Particular (R$)</label>
                      <span className="text-[#0057D9] font-mono text-sm">R$ {averageConsultationTicket}</span>
                    </div>
                    <input
                      id={avgTicketId}
                      type="range"
                      min={100}
                      max={1200}
                      step={20}
                      value={averageConsultationTicket}
                      onChange={(e) => setAverageConsultationTicket(Number(e.target.value))}
                      className="w-full accent-[#0057D9]"
                    />
                    <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                      <span>R$ 100</span>
                      <span>R$ 1.200</span>
                    </div>
                  </div>

                  {/* Slider 3 */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-gray-700">
                      <label htmlFor={noShowRateId}>Taxa de No-show Atual (%)</label>
                      <span className="text-red-650 font-mono text-sm">{noShowRate}%</span>
                    </div>
                    <input
                      id={noShowRateId}
                      type="range"
                      min={10}
                      max={45}
                      step={1}
                      value={noShowRate}
                      onChange={(e) => setNoShowRate(Number(e.target.value))}
                      className="w-full accent-red-500"
                    />
                    <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                      <span>10% (Baixo)</span>
                      <span>45% (Crítico)</span>
                    </div>
                  </div>
                </div>
              ) : (
                // PHARMA CONTROLS
                <div className="space-y-6">
                  {/* Slider 1 */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-gray-700">
                      <label htmlFor={dailyDeliveriesId}>Entregas / Delivery Diários</label>
                      <span className="text-emerald-700 font-mono text-sm">{dailyDeliveries} p/ dia</span>
                    </div>
                    <input
                      id={dailyDeliveriesId}
                      type="range"
                      min={10}
                      max={400}
                      step={5}
                      value={dailyDeliveries}
                      onChange={(e) => setDailyDeliveries(Number(e.target.value))}
                      className="w-full accent-emerald-500"
                    />
                    <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                      <span>10</span>
                      <span>400</span>
                    </div>
                  </div>

                  {/* Slider 2 */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-gray-700">
                      <label htmlFor={avgCartId}>Valor Médio do Cupom / Cart (R$)</label>
                      <span className="text-emerald-700 font-mono text-sm">R$ {averageCartValue}</span>
                    </div>
                    <input
                      id={avgCartId}
                      type="range"
                      min={40}
                      max={500}
                      step={10}
                      value={averageCartValue}
                      onChange={(e) => setAverageCartValue(Number(e.target.value))}
                      className="w-full accent-emerald-500"
                    />
                    <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                      <span>R$ 40</span>
                      <span>R$ 500</span>
                    </div>
                  </div>

                  {/* Slider 3 */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-gray-700">
                      <label htmlFor={lossRateId}>Abandono pós 1ª Compra / No-Repurchase (%)</label>
                      <span className="text-red-650 font-mono text-sm">{nonRepurchaseRate}%</span>
                    </div>
                    <input
                      id={lossRateId}
                      type="range"
                      min={15}
                      max={60}
                      step={1}
                      value={nonRepurchaseRate}
                      onChange={(e) => setNonRepurchaseRate(Number(e.target.value))}
                      className="w-full accent-red-500"
                    />
                    <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                      <span>15%</span>
                      <span>60% (Alta perda)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom context block */}
            <div className="pt-8 border-t border-gray-200 text-left mt-6">
              <div className="flex gap-2.5 items-start text-xs text-gray-500 font-medium">
                <ShieldCheck className="w-5 h-5 text-[#00B67A] shrink-0 mt-0.5" />
                <p>
                  Cálculo calibrado com base nos resultados práticos de clientes HIBRID de médio e grande porte, registrando margens reais de segurança.
                </p>
              </div>
            </div>
          </div>

          {/* Results Block with custom SVG graphs (Cols 6) */}
          <div className="lg:col-span-6 bg-slate-905 rounded-2xl border border-slate-800 p-6 md:p-8 text-white flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-[10px] text-emerald-400 uppercase font-mono font-bold tracking-widest block">RELATÓRIO FINANCEIRO PROJETADO</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Captured Value Panel */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-left">
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Perda de Faturamento Atual</span>
                  <div className="text-xl sm:text-2xl font-extrabold text-red-400 font-sans mt-2">
                    R$ {curLostMonthly.toLocaleString("pt-BR")} <span className="text-xs font-normal text-gray-400 block sm:inline">/mês</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">Faturamento que evapora sem acompanhamento de ia.</p>
                </div>

                {/* Recovered Value Panel */}
                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-left">
                  <span className="block text-[10px] text-emerald-300 font-bold uppercase tracking-wider">Faturamento Recuperado</span>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#00B67A] font-sans mt-2">
                    R$ {currentReclaimedMonthly.toLocaleString("pt-BR")} <span className="text-xs font-normal text-emerald-200 block sm:inline">/mês</span>
                  </div>
                  <p className="text-[10px] text-emerald-300 mt-1 leading-relaxed">Capturado via automações da suíte HIBRID.</p>
                </div>

              </div>

              {/* Incremental Annual Projection */}
              <div className="p-6 bg-gradient-to-r from-[#0057D9]/20 to-emerald-550/10 rounded-2xl border border-[#0057D9]/20 text-left">
                <span className="block text-[10px] text-[#00B67A] font-bold uppercase tracking-widest">CRESCIMENTO ANUAL ADICIONAL LÍGIDO PREVISTO</span>
                <div className="text-3xl sm:text-4xl font-black text-white font-sans mt-2">
                  + R$ {currentReclaimedYearly.toLocaleString("pt-BR")}
                </div>
                <p className="text-[10.5px] text-gray-300 mt-1.5 leading-normal font-semibold">
                  Isso equivale a um aumento de receita pura sem necessidade de novos investimentos em anúncios ou contratação de mais pessoal.
                </p>
              </div>

              {/* Comparative Custom Chart (SVG elements for responsive pixel perfection) */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 font-mono text-[10px]">
                <span className="block text-[8.5px] text-gray-400 uppercase tracking-widest pb-3 border-b border-white/10 text-left">
                  MÉTRICA COMPARATIVA: {tab === "clinic" ? "NO-SHOW DE PACIENTES" : "CONVERSÃO DE RECOMPRADO (LTV)"}
                </span>

                <div className="py-6 flex flex-col gap-5 text-left font-sans">
                  
                  {/* Left Column Before */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-gray-300 font-semibold">
                      <span>Antes da Inteligência HIBRID</span>
                      <span className="text-red-400 font-bold">{tab === "clinic" ? `${noShowRate}% no-show` : `${nonRepurchaseRate}% abandono`}</span>
                    </div>
                    {/* SVG Progress bar */}
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-red-400 transition-all duration-500 rounded-full"
                        style={{ width: `${tab === "clinic" ? noShowRate : nonRepurchaseRate}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Left Column After */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-emerald-400 font-bold">
                      <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 animate-bounce" /> Com a HIBRID IA</span>
                      <span>{tab === "clinic" ? "6% no-show" : "14% abandono"}</span>
                    </div>
                    {/* SVG Progress bar */}
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 transition-all duration-500 rounded-full"
                        style={{ width: `${tab === "clinic" ? hibridNoShowRate : hibridNonRepurchaseRate}%` }}
                      ></div>
                    </div>
                  </div>

                </div>

                <span className="text-gray-500 block text-[8px] text-left leading-normal font-semibold">
                  A otimização em tempo real no-show reduz as faltas médicas de forma amigável em até 75% em relação ao cenário inicial.
                </span>
              </div>

            </div>

            {/* Bottom CRM CTA */}
            <div className="pt-6 border-t border-white/10 mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span className="text-[10px] text-gray-400 text-left max-w-sm uppercase font-semibold leading-normal">
                Pronto para implementar essa recuperação na sua clínica/rede? Habilite o Diagnóstico.
              </span>
              <a
                href="https://wa.me/554598592085"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 font-bold text-[#0c1b33] bg-[#00B67A] hover:bg-[#00a36d] rounded-lg text-xs transition-all text-center cursor-pointer block"
              >
                Injetar no Diagnostico IA
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
