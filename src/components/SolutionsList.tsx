import { useState } from "react";
import { 
  Bot, MessageSquare, PhoneCall, Users, BarChart3, TrendingUp, Zap, 
  CheckCircle, CornerDownRight, Sparkles 
} from "lucide-react";

export default function SolutionsList() {
  const [selectedSolution, setSelectedSolution] = useState(0);

  const solutions = [
    {
      id: "voice",
      title: "Voice AI Inteligente",
      subtitle: "Agentes de voz autônomos com inflexão natural",
      icon: PhoneCall,
      color: "bg-blue-50 border-blue-200 text-[#0057D9]",
      metric: "-72% abandono telefônico",
      description: "Nossa tecnologia de síntese de voz neuronal e processamento de linguagem de ultra-baixa latência é capaz de ligar para pacientes, renegociar faltas na mesma chamada e preencher horários livres imediatamente.",
      bulletPoints: [
        "Confirmação e reagendamento ativo por voz humanizada.",
        "Integração instantânea em agenda médica 24/7.",
        "Mapeamento de desculpas e conversão inteligente de no-show."
      ],
      previewSnippet: {
        title: "Transcrição Live: Agente IA de Voz",
        lines: [
          { speaker: "Hibrid Voice AI", text: "Olá Cláudia! Vi que você tem cirurgia agendada com Dr. André amanhã às 14h, mas ainda não confirmou. Podemos garantir sua vaga?" },
          { speaker: "Cláudia (Paciente)", text: "Nossa, tive um imprevisto na viagem e não vou conseguir chegar a tempo..." },
          { speaker: "Hibrid Voice AI", text: "Sem problemas, Cláudia. Conseguimos remanejar para quinta-feira no mesmo horário ou amanhã às 18h?" },
          { speaker: "Cláudia (Paciente)", text: "Quinta às 14h seria maravilhoso, muito obrigada!" }
        ]
      }
    },
    {
      id: "whatsapp",
      title: "WhatsApp Conversacional",
      subtitle: "Interação fluida de texto sem caminhos de árvore rígidos",
      icon: MessageSquare,
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
      metric: "+84% taxa de resposta",
      description: "Esqueça menus numéricos irritantes ('digite 1 para...'). Nossa inteligência conversa de forma livre e natural via WhatsApp, entendendo o contexto, tirando dúvidas de preparos de exames ou horários em segundos.",
      bulletPoints: [
        "Atendimento imediato e simultâneo para milhares de pacientes.",
        "Identificação automática de intenção de compra e faturamento.",
        "Transição fluida e invisível para o atendente humano se necessário."
      ],
      previewSnippet: {
        title: "Fluxo Conversacional Inteligente",
        lines: [
          { speaker: "Hibrid WhatsApp", text: "Olá João! Notamos que sua prescrição de Clavulin está terminando. Deseja que entreguemos o seu refil de reposição às 15h?" },
          { speaker: "João (Paciente)", text: "Sim, pode mandar. Consigo pagar por PIX?" },
          { speaker: "Hibrid WhatsApp", text: "Com certeza, já gerei sua chave PIX com desconto de LTV. O valor final é R$ 64,90. Só copiar o código abaixo..." },
          { speaker: "João (Paciente)", text: "PIX pago, pode mandar! Valeu!" }
        ]
      }
    },
    {
      id: "revenue",
      title: "Revenue Intelligence",
      subtitle: "Mapeamento ativo de vazamentos financeiros",
      icon: TrendingUp,
      color: "bg-indigo-50 border-indigo-200 text-indigo-650",
      metric: "+24% faturamento recuperado",
      description: "Modelos preditivos que analisam o histórico no prontuário ou ERP. O sistema ativa lembretes inteligentes baseados em intervalos clínicos, otimizando a taxa de ocupação da infraestrutura e melhorando lucros.",
      bulletPoints: [
        "Identificação de furos operacionais e sazonalidades.",
        "Automação de recall inteligente para check-ups periódicos.",
        "Aumento expressivo das receitas recorrentes sem novos gastos com tráfego."
      ],
      previewSnippet: {
        title: "Painel Financeiro HIBRID",
        lines: [
          { speaker: "Módulo Financeiro", text: "Gargalo detectado: Evasão recorrente pós-primeira consulta na ala de Ortopedia." },
          { speaker: "Ação de IA Ativa", text: "Disparado funil amigável para 142 pacientes inativos há mais de 120 dias." },
          { speaker: "Resultado Live", text: "34 pacientes re-agendados nas últimas 48h. R$ 13.600,00 de receita recuperada." }
        ]
      }
    },
    {
      id: "crm",
      title: "CRM Inteligente &amp; Preditivo",
      subtitle: "Automação baseada em ciclo de vida de saúde",
      icon: Users,
      color: "bg-purple-50 border-purple-200 text-purple-600",
      metric: "+34% recompras cíclicas",
      description: "CRM que calcula automaticamente o momento em que o medicamento de uso contínuo de um paciente está terminando, ou quando uma gestante necessita da próxima consulta pré-natal, gerando gatilhos de engajamento.",
      bulletPoints: [
        "Régua de relacionamento 100% individualizada e automatizada.",
        "Geração de valor ao paciente no timing correto de autocuidado.",
        "Conversão preditiva de compras farmacêuticas."
      ],
      previewSnippet: {
        title: "Disparador Preditivo",
        lines: [
          { speaker: "Motor Preditivo", text: "Marina Silva (Diabetes Tipo II) | Previsão de esgotamento de insulina: 3 dias." },
          { speaker: "Mensagem Enviada", text: "Olá Marina, cuidamos da sua saúde. Deseja agendar a entrega do refil para amanhã?" },
          { speaker: "Métrica Monitorada", text: "Recompra efetivada em 18 minutos. Retenção assegurada." }
        ]
      }
    }
  ];

  return (
    <section 
      id="solucoes" 
      className="py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://i.postimg.cc/h42z350b/chip-fundo.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
            <Zap className="w-3.5 h-3.5 text-[#0057D9]" />
            <span className="text-[10px] font-bold text-[#0057D9] uppercase tracking-wider">Suite de Alta Tecnologia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Tecnologia focada em conversão, retenção e satisfação
          </h2>
          <p className="text-base text-gray-650">
            Nossos agentes autônomos integram-se aos seus sistemas legados para preencher lacunas de faturamento silenciosamente.
          </p>
        </div>

        {/* Tab Buttons & Details explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch font-sans">
          
          {/* Tabs Menu (Cols 4) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {solutions.map((sol, index) => {
              const Icon = sol.icon;
              const isSelected = selectedSolution === index;
              return (
                <button
                  key={sol.id}
                  onClick={() => setSelectedSolution(index)}
                  className={`flex items-start gap-4 p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-gray-50 border-gray-300 shadow-xs"
                      : "bg-white border-gray-200/50 hover:bg-gray-50/50 hover:border-gray-200"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${sol.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-gray-950">{sol.title}</span>
                    <span className="block text-[11px] text-gray-500 mt-0.5 leading-snug">{sol.subtitle}</span>
                    {isSelected && (
                      <span className="inline-block mt-2 px-2 py-0.5 rounded-sm bg-emerald-50 text-emerald-700 font-mono text-[9px] font-bold">
                        {sol.metric}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details Dashboard Content (Cols 8) */}
          <div className="lg:col-span-8 bg-gray-50/70 border border-gray-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Text Breakdown */}
              <div className="md:col-span-7 space-y-6 text-left">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold text-[#0057D9] tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#0057D9]" /> DETALHAMENTO DA SOLUÇÃO
                  </span>
                  <h3 className="text-xl font-bold font-sans text-gray-900">{solutions[selectedSolution].title}</h3>
                  <p className="text-xs text-gray-650 leading-relaxed font-semibold">
                    {solutions[selectedSolution].description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-[11px] font-bold text-gray-700 uppercase">Capacidades e Benefícios</span>
                  <div className="space-y-2">
                    {solutions[selectedSolution].bulletPoints.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#00B67A] mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Chat Simulation View */}
              <div className="md:col-span-5 bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between font-mono text-[10px] shadow-sm min-h-[220px]">
                <div>
                  <span className="block text-[8.5px] font-bold text-gray-400 uppercase tracking-widest pb-2 border-b border-gray-100 mb-3">
                    {solutions[selectedSolution].previewSnippet.title}
                  </span>
                  <div className="space-y-3">
                    {solutions[selectedSolution].previewSnippet.lines.map((line, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <span className={`block font-bold uppercase text-[8px] ${
                          line.speaker.includes("Hibrid") || line.speaker.includes("Módulo") || line.speaker.includes("Ação")
                            ? "text-[#0057D9]"
                            : "text-emerald-600"
                        }`}>
                          {line.speaker}
                        </span>
                        <p className="text-gray-700 leading-normal pl-2 border-l border-gray-200 text-[10.5px]">
                          {line.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-emerald-600 font-bold uppercase text-[8px] pt-4 mt-2 border-t border-gray-50">
                  <Zap className="w-3 h-3 text-[#00B67A]" />
                  <span>Módulo ativo &amp; Gerando Conversões</span>
                </div>
              </div>

            </div>

            {/* Bottom Section */}
            <div className="pt-6 mt-6 border-t border-gray-200/80">
              <div className="text-[11px] font-medium text-gray-500 text-center">
                Solução com integração nativa API a sistemas como <strong className="text-gray-800 font-semibold">Tasy, MV, Shosp, Clinicorp, Bemacash e Linx</strong>.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
