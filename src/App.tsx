import { motion } from "motion/react";
import { 
  Bot, 
  MessageSquare, 
  Globe, 
  Zap, 
  BarChart3, 
  Activity,
  Users, 
  Calendar, 
  ShieldCheck,
  ChevronRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Network,
  Smartphone
} from "lucide-react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TermsOfUse from "./TermsOfUse";
import PrivacyPolicy from "./PrivacyPolicy";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-4 glass border-b" : "py-6 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="https://i.ibb.co/BH2DV8BH/Logo.png" 
            alt="HIBRID Soluções em IA" 
            className="object-contain brightness-110 drop-shadow-[0_0_15px_rgba(100,255,218,0.3)]" 
            style={{ width: '100.9933px', height: '61.9933px' }}
            referrerPolicy="no-referrer" 
          />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#solucoes" className="hover:text-brand-cyan transition-colors">Soluções</a>
          <a href="#nichos" className="hover:text-brand-cyan transition-colors">Nichos</a>
          <a href="#como-funciona" className="hover:text-brand-cyan transition-colors">Como Funciona</a>
          <a href="#planos" className="hover:text-brand-cyan transition-colors">Planos</a>
          <a 
            href="https://wa.me/message/CSZDAET27ARKB1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-brand-cyan text-brand-blue rounded-full font-bold hover:scale-105 transition-transform glow-cyan cursor-pointer inline-block"
          >
            Falar com Especialista
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass border-b py-6 px-6 flex flex-col gap-4 md:hidden"
        >
          <a href="#solucoes" className="text-lg text-white" onClick={() => setIsMobileMenuOpen(false)}>Soluções</a>
          <a href="#nichos" className="text-lg text-white" onClick={() => setIsMobileMenuOpen(false)}>Nichos</a>
          <a href="#como-funciona" className="text-lg text-white" onClick={() => setIsMobileMenuOpen(false)}>Como Funciona</a>
          <a href="#planos" className="text-lg text-white" onClick={() => setIsMobileMenuOpen(false)}>Planos</a>
          <a 
            href="https://wa.me/message/CSZDAET27ARKB1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-3 bg-brand-cyan text-brand-blue rounded-xl font-bold inline-block text-center"
          >
            Falar com Especialista
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-pattern">
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-cyan/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} /> Inteligência Artificial de Alto Nível
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-gradient">
            Automação com IA para empresas que querem crescer com inteligência.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
            Transforme atendimento, vendas e operação em um sistema inteligente que responde mais rápido, vende melhor e funciona 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/message/CSZDAET27ARKB1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-cyan text-brand-blue rounded-xl font-bold text-lg hover:scale-105 transition-transform glow-cyan flex items-center justify-center gap-2 cursor-pointer"
            >
              Solicitar diagnóstico <ChevronRight size={20} />
            </a>
            <a 
              href="https://wa.me/message/CSZDAET27ARKB1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 glass text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              Falar com especialista
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 glass-premium rounded-3xl p-4 overflow-hidden">
            <img 
              src="https://i.postimg.cc/tRhtQmsW/Banner.png" 
              alt="HIBRID IA Dashboard" 
              className="rounded-2xl w-full h-auto shadow-2xl transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-cyan/10 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-brand-cyan/5 rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

const PainPoints = () => {
  const pains = [
    { title: "Demora no Atendimento", desc: "Clientes perdem o interesse quando não são respondidos em minutos." },
    { title: "Sobrecarga Operacional", desc: "Sua equipe gasta horas com tarefas repetitivas que poderiam ser automatizadas." },
    { title: "Perda de Vendas", desc: "Leads que chegam fora do horário comercial acabam esfriando." },
    { title: "Falta de Organização", desc: "Informações espalhadas e processos manuais que geram erros." }
  ];

  return (
    <section className="py-24 bg-brand-blue/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-cyan font-bold uppercase tracking-widest text-sm mb-4">O Problema</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Sua empresa ainda opera no modo manual?</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">O mercado não espera. Negócios que não automatizam perdem escala, eficiência e, principalmente, lucro.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl border-l-4 border-l-red-500/50"
            >
              <h4 className="text-xl font-bold text-white mb-3">{pain.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{pain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const solutions = [
    { icon: <MessageSquare />, title: "IA para WhatsApp & Instagram", desc: "Atendimento humanoide que qualifica leads e fecha vendas 24/7." },
    { icon: <Globe />, title: "Multi-idioma Inteligente", desc: "Sua IA atende perfeitamente em Português, Espanhol e Inglês." },
    { icon: <Network />, title: "Integrações n8n & APIs", desc: "Conectamos sua IA com CRMs, agendas e sistemas internos." },
    { icon: <Calendar />, title: "Agendamento Automático", desc: "Sua IA marca reuniões e consultas direto na sua agenda." },
    { icon: <BarChart3 />, title: "Dashboards de Inteligência", desc: "Dados reais sobre performance, conversão e volume de atendimento." },
    { icon: <ShieldCheck />, title: "Follow-up & Reativação", desc: "Nunca mais perca um lead. A IA faz o acompanhamento automático." }
  ];

  return (
    <section id="solucoes" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-cyan font-bold uppercase tracking-widest text-sm mb-4">Soluções HIBRID</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Tecnologia de ponta para resultados reais.</h3>
          </div>
          <p className="text-slate-400 max-w-sm">Implementamos o que há de mais avançado em IA para transformar sua operação.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-premium p-8 rounded-3xl group"
            >
              <div className="w-14 h-14 bg-brand-cyan/10 rounded-2xl flex items-center justify-center text-brand-cyan mb-6 group-hover:bg-brand-cyan group-hover:text-brand-blue transition-all duration-300">
                {sol.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{sol.title}</h4>
              <p className="text-slate-400 leading-relaxed">{sol.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Niches = () => {
  return (
    <section id="nichos" className="py-24 bg-brand-navy/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-cyan font-bold uppercase tracking-widest text-sm mb-4">Nichos Atendidos</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Soluções sob medida para o seu negócio.</h3>
        </div>

        {/* 1st row: Original Segments (Clinics & Pharmacies) */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden flex flex-col"
          >
            <div className="aspect-[388/224] overflow-hidden">
              <img src="https://i.postimg.cc/63712tBY/Gemini-Generated-Image-6e4m056e4m056e4m.png" alt="Clínicas" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="p-8 flex-1">
              <h4 className="text-2xl font-bold text-white mb-6">Clínicas</h4>
              <div className="space-y-4">
                <div>
                  <span className="text-red-400 text-xs font-bold uppercase block mb-1">Problemas + Comuns:</span>
                  <p className="text-slate-300 text-sm">Agendamentos perdidos e dúvidas repetitivas.</p>
                </div>
                <div>
                  <span className="text-brand-cyan text-xs font-bold uppercase block mb-1">A Solução:</span>
                  <p className="text-slate-300 text-sm">IA que explica procedimentos, tira dúvidas e marca consultas 24h.</p>
                </div>
                <div>
                  <span className="text-green-400 text-xs font-bold uppercase block mb-1">BENEFÍCIOS:</span>
                  <p className="text-slate-300 text-sm">Agenda sempre cheia e recepção focada no atendimento presencial.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden flex flex-col"
          >
            <div className="aspect-[388/224] overflow-hidden">
              <img src="https://i.postimg.cc/sgWWM6zP/Banner-Test-(388-x-224-px)-(1).png" alt="Farmácias & Drogarias" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="p-8 flex-1">
              <h4 className="text-2xl font-bold text-white mb-6">Farmácias & Drogarias</h4>
              <div className="space-y-4">
                <div>
                  <span className="text-red-400 text-xs font-bold uppercase block mb-1">Problemas + Comuns:</span>
                  <p className="text-slate-300 text-sm">Dificuldade em gerenciar pedidos via WhatsApp.</p>
                </div>
                <div>
                  <span className="text-brand-cyan text-xs font-bold uppercase block mb-1">A Solução:</span>
                  <p className="text-slate-300 text-sm">IA que recebe pedidos, consulta estoque e agiliza a entrega.</p>
                </div>
                <div>
                  <span className="text-green-400 text-xs font-bold uppercase block mb-1">BENEFÍCIOS:</span>
                  <p className="text-slate-300 text-sm">Operação logística 3x mais rápida e clientes satisfeitos.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2nd Section: NEW PREMIUM IMPACT STUDY */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-premium rounded-[40px] border-brand-cyan/20 p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Activity size={120} className="text-brand-cyan" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-bold uppercase tracking-widest mb-6">
                <BarChart3 size={14} /> Estudo de Impacto Setorial
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                EMPRESAS DA SAÚDE QUE UTILIZAM IA FATURAM MAIS E OPERAM MELHOR<br/>
                <span className="text-brand-cyan mt-2 block">RESULTADOS QUE IMPACTAM O LUCRO</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
                Empresas que automatizam atendimento, vendas e processos operacionais com IA aumentam eficiência, reduzem custos e escalam resultados.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                  <span className="text-3xl font-bold text-brand-cyan block mb-1">78%</span>
                  <p className="text-[11px] text-slate-400 leading-tight">das empresas que utilizam IA relatam aumento direto na eficiência operacional.</p>
                  <p className="text-[9px] text-slate-600 mt-2 italic font-medium">IBM Global AI Adoption Index, 2024</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                  <span className="text-3xl font-bold text-brand-cyan block mb-1">-30%</span>
                  <p className="text-[11px] text-slate-400 leading-tight">de redução média em custos operacionais com automações inteligentes.</p>
                  <p className="text-[9px] text-slate-600 mt-2 italic font-medium">Deloitte Digital Transformation Report, 2024</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                  <span className="text-3xl font-bold text-brand-cyan block mb-1">3,5x ROI</span>
                  <p className="text-[11px] text-slate-400 leading-tight">de retorno sobre investimento em empresas que automatizam atendimento e processos.</p>
                  <p className="text-[9px] text-slate-600 mt-2 italic font-medium">Accenture AI Business Study, 2024</p>
                </div>
              </div>
            </div>
            
            <div className="glass rounded-[32px] p-8 border-brand-cyan/10">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                IMPACTO DIRETO EM FARMÁCIAS, DROGARIAS E CLÍNICAS
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-brand-cyan/5 border border-brand-cyan/10">
                  <span className="text-lg font-bold text-brand-cyan block">+20% a +35%</span>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">de aumento no faturamento com IA aplicada em atendimento, recuperação de leads e automação comercial.</p>
                  <span className="text-[8px] text-slate-600 block mt-2">Salesforce State of AI, 2024</span>
                </div>
                <div className="p-4 rounded-xl bg-red-400/5 border border-red-400/10">
                  <span className="text-lg font-bold text-red-400 block">-25% a -40%</span>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">de redução de custos operacionais com automação de tarefas repetitivas.</p>
                  <span className="text-[8px] text-slate-600 block mt-2">PwC AI Report, 2024</span>
                </div>
                <div className="p-4 rounded-xl bg-green-400/5 border border-green-400/10">
                  <span className="text-lg font-bold text-green-400 block">Até 80%</span>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">dos atendimentos podem ser resolvidos automaticamente por IA 24/7.</p>
                  <span className="text-[8px] text-slate-600 block mt-2">Gartner Customer Service Research, 2024</span>
                </div>
                <div className="p-4 rounded-xl bg-brand-cyan/5 border border-brand-cyan/10">
                  <span className="text-lg font-bold text-brand-cyan block">200% a 350%</span>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">de retorno sobre investimento médio (ROI).</p>
                  <span className="text-[8px] text-slate-600 block mt-2">McKinsey AI Value Creation Report, 2024</span>
                </div>
                <div className="p-4 rounded-xl bg-red-400/5 border border-red-400/10">
                  <span className="text-lg font-bold text-red-500 block">-40% a -60%</span>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">de redução em faltas e cancelamentos em clínicas com lembretes automáticos.</p>
                  <span className="text-[8px] text-slate-600 block mt-2">HealthTech Insights, 2024</span>
                </div>
                <div className="p-4 rounded-xl bg-green-400/5 border border-green-400/10">
                  <span className="text-lg font-bold text-green-500 block">+30% a +50%</span>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">de aumento em retenção e fidelização de clientes.</p>
                  <span className="text-[8px] text-slate-600 block mt-2">Bain & Company CX Report, 2024</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 text-center">
            <p className="text-xl md:text-2xl font-bold text-brand-cyan italic uppercase tracking-[0.2em] mb-4">
              “IA NÃO É CUSTO. É INVESTIMENTO COM RETORNO REAL.”
            </p>
            <p className="text-slate-500 text-base md:text-lg font-medium">
              Empresas que automatizam hoje lideram o mercado amanhã.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Diagnóstico Estratégico", desc: "Analisamos seus processos atuais e identificamos onde a IA terá maior impacto." },
    { num: "02", title: "Desenho da Operação", desc: "Criamos o fluxo lógico e a personalidade da sua IA personalizada." },
    { num: "03", title: "Implantação & Integrações", desc: "Configuramos as ferramentas e conectamos com seus sistemas (CRM, Agenda, etc)." },
    { num: "04", title: "Acompanhamento & Evolução", desc: "Monitoramos os resultados e refinamos a IA para performance máxima." }
  ];

  return (
    <section id="como-funciona" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-cyan font-bold uppercase tracking-widest text-sm mb-4">Metodologia</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Como transformamos sua empresa.</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              <div className="text-6xl font-black text-white/5 absolute -top-8 -left-4">{step.num}</div>
              <div className="relative z-10 glass p-8 rounded-2xl h-full border-t-2 border-t-brand-cyan/30">
                <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-brand-cyan/20">
                  <ChevronRight size={32} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Plans = () => {
  const plans = [
    {
      name: "HIBRID Pulse",
      focus: "Performance",
      features: ["1 Canal (WhatsApp ou Instagram)", "Atendimento 24/7", "Agendamento automático", "CRM Básico", "Dashboard Simples"],
      highlight: false
    },
    {
      name: "HIBRID Flow",
      focus: "Essencial",
      features: ["Tudo do Pulse", "2 Canais (Whatsapp + Instagram)", "Follow-UP Automático", "Reativação de Leads", "CRM Completo + N8N", "Dashboard Avançado"],
      highlight: false
    },
    {
      name: "HIBRID Scale",
      focus: "Elite",
      features: ["Tudo do Flow", "Multi-canais Ilimitados", "Multilíngue (+12 idiomas)", "Automação Comercial Completa", "Api's Customizados", "Gestor Dedicado"],
      highlight: false
    }
  ];

  return (
    <section id="planos" className="py-24 bg-brand-blue/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-cyan font-bold uppercase tracking-widest text-sm mb-4">Formatos de Entrega</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Escolha o nível de inteligência do seu negócio.</h3>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`glass-premium p-10 rounded-3xl flex flex-col relative ${plan.highlight ? "border-brand-cyan/50 glow-cyan scale-105 z-10" : ""}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-cyan text-brand-blue text-[10px] font-black uppercase px-4 py-1 rounded-full">
                  Mais Procurado
                </div>
              )}
              <h4 className="text-3xl font-bold text-white mb-2">{plan.name}</h4>
              <p className="text-brand-cyan text-sm font-bold mb-8 uppercase tracking-widest">{plan.focus}</p>
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 size={18} className="text-brand-cyan shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "A IA substitui o atendimento humano?", a: "Não, ela potencializa. A IA filtra, qualifica e resolve dúvidas simples, deixando sua equipe livre para focar em fechamentos e casos complexos." },
    { q: "É difícil integrar com meu sistema atual?", a: "Nós cuidamos de tudo. Utilizamos N8N e API's para garantir que a IA converse perfeitamente com seu CRM ou agenda." },
    { q: "A IA fala diversas línguas?", a: "Sim! Somos especialistas e configuramos sua IA para atender perfeitamente em diversos idiomas." },
    { q: "Quanto tempo leva para implantar?", a: "Em média, de 7 a 15 dias para termos uma operação rodando com alta qualidade." }
  ];

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-cyan font-bold uppercase tracking-widest text-sm mb-4">Dúvidas Frequentes</h2>
          <h3 className="text-4xl font-bold text-white">Tudo o que você precisa saber.</h3>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl group"
            >
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between text-white font-bold">
                {faq.q}
                <ChevronRight className="group-open:rotate-90 transition-transform text-brand-cyan" />
              </summary>
              <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTAFinal = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-cyan/5" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 relative z-10 glass-premium p-12 md:p-20 rounded-[40px] text-center border-brand-cyan/20"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Estruture uma operação mais inteligente, rápida e lucrativa com a HIBRID.
        </h2>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          O próximo nível do seu negócio começa com uma conversa estratégica. Vamos automatizar seu crescimento?
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="https://wa.me/message/CSZDAET27ARKB1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-5 bg-brand-cyan text-brand-blue rounded-2xl font-black text-xl hover:scale-105 transition-transform glow-cyan cursor-pointer inline-block text-center"
          >
            Quero meu diagnóstico
          </a>
          <a 
            href="https://wa.me/message/CSZDAET27ARKB1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-5 glass text-white rounded-2xl font-black text-xl hover:bg-white/10 transition-colors cursor-pointer inline-block text-center"
          >
            Falar com a HIBRID
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      setError("Digite seu e-mail");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("E-mail inválido");
      return;
    }

    setError("");
    const subject = encodeURIComponent("Automação Inteligente - HIBRID");
    const body = encodeURIComponent(`Olá, gostaria de receber mais informações sobre as soluções de automação com IA da HIBRID para o meu negócio.\n\nE-mail de contato: ${email}`);
    
    const isAndroidOrIOS = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    
    if (isAndroidOrIOS) {
      window.location.href = `mailto:suporthibrid@gmail.com?subject=${subject}&body=${body}`;
    } else {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=suporthibrid@gmail.com&su=${subject}&body=${body}`, '_blank');
    }
  };

  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="https://i.ibb.co/BH2DV8BH/Logo.png" 
                alt="HIBRID Soluções em IA" 
                className="h-20 md:h-28 w-auto object-contain brightness-110 drop-shadow-[0_0_20px_rgba(100,255,218,0.2)]" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Transformando atendimento, vendas e operação em sistemas inteligentes de alto desempenho.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/hibrid.ia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 hover:text-brand-cyan transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587820290584" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 hover:text-brand-cyan transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navegação</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#solucoes" className="hover:text-brand-cyan transition-colors">Soluções</a></li>
              <li><a href="#nichos" className="hover:text-brand-cyan transition-colors">Nichos</a></li>
              <li><a href="#como-funciona" className="hover:text-brand-cyan transition-colors">Como Funciona</a></li>
              <li><a href="#planos" className="hover:text-brand-cyan transition-colors">Planos</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contato</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-3"><Phone style={{ height: '20px', width: '15px' }} className="text-brand-cyan" /> +55 (45) 99859-2085</div>
                <div className="flex items-center gap-3 ml-7">+55 (45) 99902-2803</div>
              </li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-brand-cyan" /> suporthibrid@gmail.com</li>
              <li className="flex items-center gap-3"><Globe size={16} className="text-brand-cyan" /> Brasil </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Entre em contato</h5>
            <p className="text-slate-500 text-xs mb-4">Receba insights sobre como a IA está mudando o mercado.</p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  className={`bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-brand-cyan/50 transition-colors`} 
                />
                <button 
                  onClick={handleSubscribe}
                  className="p-2 bg-brand-cyan text-brand-blue rounded-lg cursor-pointer hover:scale-105 transition-transform"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
              {error && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider animate-pulse">{error}</p>}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
          <p>© 2026 HIBRID Soluções em IA. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/termos" className="hover:text-slate-400">Termos de Uso</Link>
            <Link to="/privacidade" className="hover:text-slate-400">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="font-sans selection:bg-brand-cyan selection:text-brand-blue overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <PainPoints />
              <Solutions />
              <Niches />
              <HowItWorks />
              <Plans />
              <FAQ />
              <CTAFinal />
              <Footer />
            </>
          } />
          <Route path="/termos" element={<TermsOfUse />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}
