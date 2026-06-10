import { useState } from "react";
import { 
  X, Sparkles, FileText, Layout, Copy, Compass, Eye, TrendingUp, Laptop, 
  Palette, Image, Mail, Code, Terminal, CheckCircle 
} from "lucide-react";

interface DeliverablesHubProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeliverablesHub({ isOpen, onClose }: DeliverablesHubProps) {
  const [selectedTopic, setSelectedTopic] = useState(0);

  if (!isOpen) return null;

  const topics = [
    {
      title: "1. Arquitetura do Site",
      icon: Compass,
      intro: "Planejamento estrutural e fluxo de navegação otimizado (Sitemap)",
      content: (
        <div className="space-y-4 text-xs font-sans">
          <span className="block font-bold text-[#0057D9] uppercase tracking-wider text-[10px]">SITEMAP E FLUXO DO USUÁRIO PREMIUM</span>
          <p className="text-gray-650 leading-relaxed font-semibold">
            Desenvolvemos o sitemap com foco estrito em CRO (Conversion Rate Optimization), alternando gatilhos de dor, cases de prova social, e ferramentas de simulação interativas para prender o visitante corporativo.
          </p>
          <div className="bg-gray-50 border border-gray-150 rounded-xl p-4 space-y-2.5">
            <div className="flex gap-2 text-[10.5px]">
              <span className="font-bold text-gray-800 shrink-0 select-none">Nível 1 (Header):</span>
              <span className="text-gray-600 font-semibold">Floating Frosted Glass Navbar com Link direto para simulador e Hub de Portfólio.</span>
            </div>
            <div className="flex gap-2 text-[10.5px]">
              <span className="font-bold text-gray-800 shrink-0 select-none">Nível 2 (Descoberta):</span>
              <span className="text-gray-600 font-semibold">Hero Section Persuasiva → Problemas estruturais separados por segmento (Clínica vs Farmácia).</span>
            </div>
            <div className="flex gap-2 text-[10.5px]">
              <span className="font-bold text-gray-800 shrink-0 select-none">Nível 3 (Interação):</span>
              <span className="text-gray-600 font-semibold">Bento Grid de Soluções com Visualizador de Transcrições de voz e WhatsApp IA.</span>
            </div>
            <div className="flex gap-2 text-[10.5px]">
              <span className="font-bold text-gray-800 shrink-0 select-none">Nível 4 (Engajamento):</span>
              <span className="text-gray-600 font-semibold">Gerador de Diagnósticos Dinâmicos integrado com Gemini + Calculadora Financeira de ROI de 1-Clique.</span>
            </div>
            <div className="flex gap-2 text-[10.5px]">
              <span className="font-bold text-gray-800 shrink-0 select-none">Nível 5 (Conversão):</span>
              <span className="text-gray-600 font-semibold">Formulário integrado com Captura ativa de leads + Agendamento de Demonstração comercial.</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "2. Wireframe Detalhado",
      icon: Layout,
      intro: "Especificação bloco a bloco da interface institucional",
      content: (
        <div className="space-y-4 text-xs font-sans text-left">
          <span className="block font-bold text-[#0057D9] uppercase tracking-wider text-[10px]">PLANEJAMENTO EM BLOCOS SECOS (ANOTAÇÕES)</span>
          <div className="space-y-3">
            <div className="p-3 border border-dashed border-gray-300 rounded-xl bg-gray-50/50">
              <strong className="block text-gray-900 font-bold mb-1">Grid superior de cabeçalho:</strong>
              <p className="text-gray-600 leading-relaxed font-semibold">Logo à esquerda [HIBRID] com brand icon em degradê Royal-Blue. Menu central em links menores sem serifas e botão destacado [CTA] à direita com sombra leve.</p>
            </div>
            <div className="p-3 border border-dashed border-gray-300 rounded-xl bg-gray-50/50">
              <strong className="block text-gray-900 font-bold mb-1">Hero:</strong>
              <p className="text-gray-600 leading-relaxed font-semibold">Coluna esquerda (espaço 7/12) para tipografia display gigante preenchendo o primeiro viewport. Coluna direita (5/12) para card interativo simulador de chat WhatsApp com micro-animação cíclica.</p>
            </div>
            <div className="p-3 border border-dashed border-gray-300 rounded-xl bg-gray-50/50">
              <strong className="block text-gray-900 font-bold mb-1">Seção Problemas comparativos:</strong>
              <p className="text-gray-600 leading-relaxed font-semibold">Fundo cinza claro para criar quebra visual de profundidade. Duas box retangulares independentes. Cantos arredondados de 16px, ícone vermelho e marcador numérico de perda anual de capital em fonte Display.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "3. Copywriting Completo",
      icon: Copy,
      intro: "Textos de alta persuasão orientados para líderes de decisão",
      content: (
        <div className="space-y-4 text-xs font-sans text-left">
          <span className="block font-bold text-[#0057D9] uppercase tracking-wider text-[10px]">ARGUMENTAÇÃO DE VENDA CORPORATIVA</span>
          
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-150 p-4 rounded-xl">
              <span className="block text-[9px] font-bold text-gray-400 uppercase font-mono mb-1">Headline Display Prinicpal:</span>
              <span className="text-sm font-bold text-gray-900 leading-snugblock mb-3">
                &ldquo;Transformamos Atendimento, Fidelização e Receita em Crescimento Previsível com Inteligência Artificial.&rdquo;
              </span>
              <span className="block text-[9px] font-bold text-gray-400 uppercase font-mono mt-2 mb-1">Subheadline:</span>
              <span className="text-gray-600 font-medium block">
                &ldquo;Esqueça softwares estáticos. Na HIBRID, ajudamos clínicas, consultórios médicos e farmácias a automatizarem reativações de clientes, eliminarem faltas com Voice AI e gerarem receita previsível recorrente de forma 100% autônoma.&rdquo;
              </span>
            </div>

            <div className="space-y-2">
              <strong className="block text-gray-800 text-[10.5px] font-bold">Principais Gatilhos de Conversão Aplicados:</strong>
              <ul className="list-disc pl-4 space-y-1 text-gray-600 font-semibold">
                <li>Combatendo o Custo de Inércia (destacando os valores desperdiçados mensalmente).</li>
                <li>Foco em soluções de conversão rápidas, e não em custos técnicos de TI.</li>
                <li>Chamados para ações claros e amigáveis, ex: &ldquo;Agendar Demonstração&rdquo;.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "4. Estrutura UX/UI",
      icon: Eye,
      intro: "Fundamentos de foco visual e ergonomia web",
      content: (
        <div className="space-y-4 text-xs font-sans text-left">
          <span className="block font-bold text-[#0057D9] uppercase tracking-wider text-[10px]">DIRETRIZES DE FLUIDEZ VISUAL</span>
          <p className="text-gray-650 leading-relaxed font-semibold">
            Visando replicar o sucesso das marcas SaaS globais, nosso design adota muito respiro nas margens superiores e inferiores (padding generoso de 96px em seções desktop), eliminando a poluição visual e destacando o conteúdo crítico.
          </p>
          <ul className="list-disc pl-4 space-y-2 text-gray-600 font-semibold">
            <li><strong className="text-gray-800">Hierarquia Tipográfica:</strong> Display H1 de 64px com reduzido espaçamento de linha (tracking-tight) para impacto imediato.</li>
            <li><strong className="text-gray-800">Densidade de Informação:</strong> Widgets pequenos de KPI facilitam a rápida visualização executiva de dados macro.</li>
            <li><strong className="text-gray-800">Ergonomia de Botões:</strong> Cliques proeminentes com dimensões confortáveis (mínimo de 46px de altura) e reações dinâmicas ao pairar.</li>
          </ul>
        </div>
      )
    },
    {
      title: "5. Animações Sugeridas",
      icon: Terminal,
      intro: "Especificações de transições e microinterações de interface",
      content: (
        <div className="space-y-4 text-xs font-sans text-left">
          <span className="block font-bold text-[#0057D9] uppercase tracking-wider text-[10px]">MICRO-ANIMAÇÕES PARA DRIVAR CONVERSÕES</span>
          <div className="space-y-2.5">
            <div className="p-3 bg-gray-50 border border-gray-150 rounded-xl">
              <strong className="block text-gray-900 text-[10.5px]">FADE-IN TRANSITION (SEÇÕES DO SITE):</strong>
              <span className="text-gray-600 block mt-1 font-semibold">Disparo baseado no scroll (Intersection Observer). Deslocamento de 15px para cima em direção ao topo com duração de 0.6s e delay escalonado de 100ms para cards irmãos.</span>
            </div>
            <div className="p-3 bg-gray-50 border border-gray-150 rounded-xl">
              <strong className="block text-gray-900 text-[10.5px]">HOVER ACTION NO FORMULÁRIO / BOTÕES:</strong>
              <span className="text-gray-600 block mt-1 font-semibold">Transformações sutis de escala (scale-102), escurecimento de cor em 10% e transições de cor em 150ms (ease-in-out).</span>
            </div>
            <div className="p-3 bg-gray-50 border border-gray-150 rounded-xl">
              <strong className="block text-gray-900 text-[10.5px]">LOADING TERMINAL PARA RELATÓRIO:</strong>
              <span className="text-gray-600 block mt-1 font-semibold">Sincronização de texto variando opacidade gradualmente a cada 1.4 segundos para dar peso computacional real à análise algorítmica corporativa.</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "6. Estratégia SEO",
      icon: TrendingUp,
      intro: "Planejamento de SEO técnico e palavras-chave de intenção corporativa",
      content: (
        <div className="space-y-4 text-xs font-sans text-left">
          <span className="block font-bold text-[#0057D9] uppercase tracking-wider text-[10px]">SEO GOOGLE CARDIO-VASCULAR E PHARMA</span>
          <p className="text-gray-650 leading-relaxed font-semibold">
            A estratégia SEO foca em responder a dores de gestão e buscas transacionais executivas.
          </p>
          <div className="bg-gray-50 border border-gray-150 rounded-xl p-4 space-y-3">
            <div>
              <strong className="text-gray-800 text-[10.5px] block">Keywords Críticas de Foco:</strong>
              <span className="text-gray-600 block mt-1 font-semibold">&ldquo;redução de no-show clínicas médicas&rdquo;, &ldquo;inteligência artificial para clínicas de saúde&rdquo;, &ldquo;automacao whatsapp farmacias&rdquo;, &ldquo;crm preditivo medicamentos de uso continuo&rdquo;, &ldquo;recuperacao de pacientes inativos&rdquo;.</span>
            </div>
            <div>
              <strong className="text-gray-800 text-[10.5px] block">Tags e Desempenho Técnico:</strong>
              <span className="text-gray-600 block mt-1 font-semibold">Indexagem semântica robusta de cabeçalhos (H1, H2, H3) e tempos de carregamento (LCP) inferiores a 1.2 segundos para garantir excelente pontuação no Core Web Vitals.</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "7. Estrutura Mobile",
      icon: Laptop,
      intro: "Especificações de layout adaptável para viewports reduzidos",
      content: (
        <div className="space-y-4 text-xs font-sans text-left">
          <span className="block font-bold text-[#0057D9] uppercase tracking-wider text-[10px]">PRIORIZAÇÃO TOUCH-FIRST</span>
          <p className="text-gray-650 leading-relaxed font-semibold">
            Em viewports móveis, o layout converge instantaneamente de estruturas em colunas paralelas para uma única esteira vertical ergonômica.
          </p>
          <ul className="list-disc pl-4 space-y-2 text-gray-600 font-semibold">
            <li><strong className="text-gray-800">Toque Mínimo:</strong> Botões de checkout ou simuladores adotam áreas de toque estritas de 46px para eliminar cliques fantasmas.</li>
            <li><strong className="text-gray-800">Menu Sanduíche:</strong> Drawer lateral limpo com efeito de overlay de vidro para fácil navegação móvel de polegar.</li>
            <li><strong className="text-gray-800">Simplificação de Inputs:</strong> inputs de diagnóstico organizados com rádio toggles largos, exigindo o mínimo possível de digitação manual de texto em celular.</li>
          </ul>
        </div>
      )
    },
    {
      title: "8. Design System",
      icon: Palette,
      intro: "Guia de tokens de cores, fontes, bordas e sombras",
      content: (
        <div className="space-y-4 text-xs font-sans text-left">
          <span className="block font-bold text-[#0057D9] uppercase tracking-wider text-[10px]/150">BRANDING E DESIGN ATIVOS</span>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 p-3 bg-gray-50 border border-gray-150 rounded-xl">
              <strong className="block text-gray-900 text-[10px] uppercase font-bold">Paleta de Cores:</strong>
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-md bg-[#0057D9] border border-gray-200" title="Azul Corporativo #0057D9"></div>
                <div className="w-6 h-6 rounded-md bg-[#00B67A] border border-gray-200" title="Verde Inteligência #00B67A"></div>
                <div className="w-6 h-6 rounded-md bg-[#FFFFFF] border border-gray-300" title="Branco Purificado #FFFFFF"></div>
                <div className="w-6 h-6 rounded-md bg-[#F5F7FA] border border-gray-200" title="Cinza Claro #F5F7FA"></div>
              </div>
              <span className="text-[10px] text-gray-500 block leading-normal">Azul de confiança técnica emparelhado à vitalidade do Verde Inteligência de faturamento.</span>
            </div>

            <div className="space-y-2 p-3 bg-gray-50 border border-gray-150 rounded-xl">
              <strong className="block text-gray-900 text-[10px] uppercase font-bold">Tipografias Carregadas:</strong>
              <span className="text-gray-800 font-sans block"><strong className="font-bold">Inter:</strong> Corpo e textos finos de e-mail</span>
              <span className="text-gray-800 font-sans block font-semibold"><strong className="font-bold">Poppins/Manrope:</strong> Headings Display</span>
              <span className="text-gray-500 block text-[9px]">Garante legibilidade premium em relatórios e alta precisão estética.</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "9. Imagens e Ilustrações",
      icon: Image,
      intro: "Padrões de prompts e assets recomendados",
      content: (
        <div className="space-y-4 text-xs font-sans text-left">
          <span className="block font-bold text-[#0057D9] uppercase tracking-wider text-[10px]">DIRETRIZES DE DIREÇÃO DE ARTE</span>
          <p className="text-gray-650 leading-relaxed font-semibold">
            Recomendamos o abandono de fotos genéricas de banco de dados (médicos sorrindo apontando para um monitor) em prol de composições abstratas em 3D de alta qualidade com luz volumétrica.
          </p>
          <div className="bg-gray-50 border border-gray-150 rounded-xl p-3 space-y-2">
            <strong className="block text-gray-800 text-[10px] uppercase">Exemplo de Prompt para Geração de Imagem IA:</strong>
            <p className="text-gray-650 font-mono italic leading-relaxed bg-white p-2.5 rounded border border-gray-200 text-[9.5px]">
              &ldquo;Premium minimalist glass-textured medical tech dashboard background, abstract glowing nodes representing AI neural networks, hospital green and Salesforce blue cybernetic color accents, isometric composition, photorealistic volumetric lighting, raytracing render --ar 16:9&rdquo;
            </p>
          </div>
        </div>
      )
    },
    {
      title: "10. Captação de Leads",
      icon: Mail,
      intro: "Funil integrado de vendas e canais automatizados",
      content: (
        <div className="space-y-4 text-xs font-sans text-left">
          <span className="block font-bold text-[#0057D9] uppercase tracking-wider text-[10px]">ESTRUTURA DE CAPTAÇÃO E CONVERSÃO AUTO</span>
          <p className="text-gray-650 leading-relaxed font-semibold">
            Nossos inputs interativos empurram o lead por três instâncias de conversão:
          </p>
          <div className="space-y-2">
            <div className="flex gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong className="text-gray-800">Etapa 1:</strong> Fornecer diagnóstico gratuito instantâneo para prender a curiosidade do comprador técnico.</span>
            </div>
            <div className="flex gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong className="text-gray-800">Etapa 2:</strong> Bloqueio ativo de PDF de exportação exigindo o preenchimento de Nome/Corporativo/WhatsApp.</span>
            </div>
            <div className="flex gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong className="text-gray-800">Etapa 3:</strong> Envio imediato da chave do lead via webhook para CRM principal, disparando um contato pelo WhatsApp Business API do comercial em até 2 horas.</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "11. Recomendações Dev",
      icon: Code,
      intro: "Estruturas técnicas indicadas para escalonamento comercial",
      content: (
        <div className="space-y-4 text-xs font-sans text-left">
          <span className="block font-bold text-[#0057D9] uppercase tracking-wider text-[10px]">RECOMENDAÇÕES DA AGÊNCIA PARA NO-CODE / FULLSTACK</span>
          <p className="text-gray-650 leading-relaxed font-semibold">
            Dependendo do tamanho da sua equipe interna de marketing e desenvolvimento, indicamos as seguintes esteiras tecnológicas para o deploys finais do site:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 bg-gray-50 border border-gray-150 rounded-xl">
              <strong className="block text-gray-900 font-bold">Framer / Webflow:</strong>
              <span className="text-gray-500 block leading-normal mt-1">Ideais para loops rápidos de marketing e design. Excelente fidelidade visual com zero código requerido de front-end.</span>
            </div>
            <div className="p-3 bg-gray-50 border border-gray-150 rounded-xl">
              <strong className="block text-gray-900 font-bold">Next.js Client SPA:</strong>
              <span className="text-gray-500 block leading-normal mt-1">Nossa indicação se a prioridade for estrita segurança ou rotas integradas de prontuários nativos complexos.</span>
            </div>
            <div className="p-3 bg-gray-50 border border-gray-150 rounded-xl">
              <strong className="block text-gray-900 font-bold">Vite SPA + Express:</strong>
              <span className="text-gray-500 block leading-normal mt-1">A opção construída neste repositório. Ideal para MVP rápido, unindo front ultrarrápido com backend node.</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xs font-sans">
      <div className="relative bg-white w-full max-w-5xl h-[88vh] md:h-[80vh] rounded-2xl shadow-2xl border border-gray-250 flex flex-col overflow-hidden animate-fade-in text-left">
        
        {/* Top Header */}
        <div className="p-5 border-b border-gray-150 flex items-center justify-between bg-gray-50 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-800 flex items-center justify-center border border-emerald-500/20">
              <FileText className="w-5 h-5 text-emerald-600 animate-pulse" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-950 flex items-center gap-1.5">
                Central de Entregáveis UX/UI e Marketing Executivo <span className="text-[10px] font-mono px-2 py-0.5 bg-black rounded text-white tracking-widest leading-none font-bold">DRAFT EXCLUSIVO</span>
              </h2>
              <p className="text-[10px] text-gray-500 font-medium">Assegurando as especificações completas do blueprint da HIBRID Soluções em IA.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Split Body */}
        <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
          
          {/* List Sidebar menu (Left) */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50/50 overflow-y-auto shrink-0 p-3 flex flex-row md:flex-col gap-1.5 scrollbar-thin">
            {topics.map((tp, idx) => {
              const Icon = tp.icon;
              const isSelected = selectedTopic === idx;
              return (
                <button
                  key={tp.title}
                  onClick={() => setSelectedTopic(idx)}
                  className={`flex items-center gap-2.5 py-2.5 px-3 rounded-lg text-[11px] font-semibold text-left transition-colors whitespace-nowrap md:whitespace-normal shrink-0 md:shrink cursor-pointer ${
                    isSelected
                      ? "bg-[#010c22] text-white"
                      : "text-gray-600 hover:bg-gray-200/50 hover:text-gray-900"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? "text-emerald-400 animate-pulse" : "text-gray-400"}`} />
                  <span>{tp.title}</span>
                </button>
              );
            })}
          </div>

          {/* Details Content Panel (Right) */}
          <div className="flex-grow overflow-y-auto p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header inside detailing topic */}
              <div className="space-y-1.5 pb-4 border-b border-gray-150">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">ENTREGÁVEL PROFISSIONAL UX {selectedTopic + 1} DE 11</span>
                <h3 className="text-lg font-bold text-gray-900">{topics[selectedTopic].title}</h3>
                <p className="text-xs text-gray-500 font-semibold italic">{topics[selectedTopic].intro}</p>
              </div>

              {/* Unique React Node code content */}
              <div className="py-2">
                {topics[selectedTopic].content}
              </div>

            </div>

            {/* Micro details on bottom footer */}
            <div className="pt-6 border-t border-gray-150 text-[10px] text-gray-400 flex items-center justify-between flex-wrap gap-2 mt-8">
              <span>HIBRID Soluções em IA • Direção Criativa de Marketing v1.0</span>
              <button
                onClick={onClose}
                className="text-[#0057D9] hover:underline font-bold"
              >
                Voltar ao site primordial →
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
