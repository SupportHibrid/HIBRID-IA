import { Activity, ShieldCheck, Heart, UserPlus, Clock, ArrowUpRight, CheckCircle2, Star } from "lucide-react";

interface HibridHealthProps {
  onCtaclick: () => void;
}

export default function HibridHealth({ onCtaclick }: HibridHealthProps) {
  const clinicalUseCases = [
    {
      title: "Preenchimento de Vagas Ociosas por Desistência",
      desc: "Quando um paciente cancela uma consulta por meio do WhatsApp Conversacional da HIBRID, a IA varre a fila de espera do CRM e oferece a vaga aos pacientes prioritários de forma autônoma.",
      kpi: "Preenchimento de 88% das vagas em < 12 minutos"
    },
    {
      title: "Reativação Preventiva de Pacientes Sumidos (Recall)",
      desc: "Nossos módulos preditivos detectam pacientes crônicos ou check-ups periódicos vencidos (ex. cardiologia, oftalmologia) e oferecem reagendamento proativo focado no cuidado continuado.",
      kpi: "+21% agendamentos adicionais mensais"
    },
    {
      title: "Voice AI de Confirmação em Lote",
      desc: "Nossa IA faz chamadas ativas por voz natural para confirmar a agenda de amanhã das secretárias. Ela entende respostas livres, remarca se necessário e libera a recepção para focar no acolhimento físico.",
      kpi: "Até 14 horas salvas por secretária por semana"
    }
  ];

  return (
    <section id="health" className="py-24 bg-gradient-to-r from-[#050b14] via-[#09152b] to-[#0f1d33] text-white overflow-hidden relative">
      {/* Background aesthetic blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper label and Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20">
              <Activity className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider">HIBRID HEALTH IA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Acelerando a Eficiência de Clínicas, Consultórios e Hospitais
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl font-medium leading-relaxed">
              Traga previsibilidade financeira para a sua clínica de saúde. Reduza a ociosidade médica, elimine furos de agenda e garanta um acompanhamento resolutivo do paciente em todo o ciclo de cuidados.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-left w-full max-w-xs">
              <span className="block text-[11px] text-gray-400 uppercase font-bold tracking-widest">RESULTADO ANUAL MÉDIO</span>
              <div className="text-4xl font-extrabold text-[#00B67A] font-sans mt-2">+34.8%</div>
              <span className="block text-xs font-semibold text-gray-200 mt-1">Aumento médio de faturamento</span>
              <p className="text-[10px] text-gray-400 mt-2 leading-relaxed">Demonstrado em auditorias de CRO de clínicas de cardiologia, oftalmologia e pediatria parceiras.</p>
            </div>
          </div>
        </div>

        {/* Use Cases Bento layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 font-sans">
          {clinicalUseCases.map((uc, idx) => (
            <div key={idx} className="bg-white/5 hover:bg-white/10 border border-white/10 p-6 md:p-8 rounded-2xl text-left transition-all flex flex-col justify-between hover:-translate-y-1">
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400">
                  <span className="font-bold text-xs">0{idx + 1}</span>
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{uc.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed font-medium">{uc.desc}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <span className="block text-[9px] text-gray-450 uppercase font-bold tracking-wider">MÉTRICA COMPROVADA</span>
                <span className="text-xs font-bold text-[#00B67A] block mt-1">{uc.kpi}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial & Trust segment */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
          
          <div className="md:col-span-7 space-y-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
            </div>
            <p className="italic text-xs md:text-sm text-gray-200 font-medium leading-relaxed">
              &ldquo;Antes da HIBRID HEALTH, nossa clínica de oftalmologia lidava com uma taxa de faltas insustentável de 26%. Após configurarmos os disparadores do WhatsApp Ativo da HIBRID, reduzimos esse número para menos de 7% em 30 dias. A IA renegocia consultas canceladas sozinha. Recuperamos cerca de R$ 18.000,00 mensais logo no primeiro trimestre!&rdquo;
            </p>
            <div>
              <span className="block text-xs font-bold text-white">Dra. Letícia Ramos</span>
              <span className="block text-[10px] text-gray-400">Diretora Clínica - Ramos Oftalmologia Integrada</span>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
              <div>
                <span className="block text-xs font-bold">100% LGPD compliant</span>
                <span className="block text-[10px] text-gray-400">Hospedagem em nuvem segura com criptografia ponta a ponta para dados médicos.</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-red-450 shrink-0" />
              <div>
                <span className="block text-xs font-bold">Empatia Médica Digital</span>
                <span className="block text-[10px] text-gray-400">Abordagens amigáveis que respeitam as regulamentações éticas do CFM.</span>
              </div>
            </div>

            <button
              onClick={onCtaclick}
              className="mt-2 w-full px-5 py-3 text-xs font-bold text-center text-slate-900 bg-white hover:bg-gray-100 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-lg"
            >
              <span>Simular Retorno HIBRID HEALTH</span>
              <ArrowUpRight className="w-4 h-4 text-slate-800" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
