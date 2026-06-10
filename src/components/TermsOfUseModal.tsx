import { X, FileText, CheckCircle, Calendar, Shield, Compass } from "lucide-react";

interface TermsOfUseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsOfUseModal({ isOpen, onClose }: TermsOfUseModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-sm font-sans">
      <div className="relative bg-[#ffffff] w-full max-w-4xl h-[85vh] rounded-2.5xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in text-left">
        
        {/* Header bar */}
        <div className="p-6 border-b border-gray-150 flex items-center justify-between bg-gray-50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#0057D9] flex items-center justify-center border border-blue-500/20">
              <FileText className="w-5 h-5 text-[#0057D9]" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-gray-950">
                Termos de Uso
              </h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] text-gray-500 font-medium flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" /> Última atualização: 10 de junho de 2026
                </span>
                <span className="text-[10px] bg-blue-100 text-[#0057D9] px-2 py-0.5 rounded-full font-bold">
                  Uso Institucional
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-150 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Document Content */}
        <div className="flex-grow overflow-y-auto p-6 md:p-10 space-y-8 text-xs leading-relaxed text-gray-750">
          
          <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5 space-y-2">
            <p className="font-semibold text-blue-950 text-xs">
              Bem-vindo ao site da HIBRID Soluções em IA.
            </p>
            <p className="text-gray-655 font-medium">
              Ao acessar ou utilizar este site, você concorda com os presentes Termos de Uso. Caso não concorde com alguma condição, recomendamos que não utilize este site.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">01.</span> Sobre o site
            </h3>
            <p className="text-gray-650 font-medium pl-2.5">
              Este site tem como finalidade apresentar informações institucionais, comerciais e educacionais sobre a HIBRID Soluções em IA, suas soluções, serviços, conteúdos e canais de contato.
            </p>
            <p className="text-gray-650 font-medium pl-2.5">
              A HIBRID atua com Inteligência Artificial, automação, atendimento inteligente, CRM, BI, Voice AI, ERP, Revenue Intelligence e soluções de crescimento previsível para clínicas, consultórios, centros médicos, hospitais, farmácias, drogarias e redes farmacêuticas.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">02.</span> Uso permitido
            </h3>
            <p className="text-gray-655 font-medium pl-2.5">
              O usuário compromete-se a utilizar este site de forma ética, legal e adequada, não praticando atos que possam:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2.5 font-semibold text-gray-650">
              <div className="flex items-start gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-150">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Violarem leis federais brasileiras ou regulamentos aplicáveis</span>
              </div>
              <div className="flex items-start gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-150">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Prejudicarem de qualquer forma a segurança cibernética do site</span>
              </div>
              <div className="flex items-start gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-150">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Tentarem acessar áreas de rede restritas sem devida credencial</span>
              </div>
              <div className="flex items-start gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-150">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Inserirem vírus, malware ou tecnologia maliciosa hostil</span>
              </div>
              <div className="flex items-start gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-150 col-span-1 md:col-span-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Copiar, reproduzir ou explorar conteúdos sem prévia anuência ou para fins fraudulentos</span>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">03.</span> Informações apresentadas
            </h3>
            <p className="text-gray-650 font-medium pl-2.5">
              A HIBRID busca manter as informações do site atualizadas, claras e corretas. No entanto, não garantimos que todos os conteúdos estejam sempre livres de erros, omissões ou desatualizações estruturais passageiras.
            </p>
            <p className="text-gray-650 font-semibold pl-2.5">
              As informações apresentadas no site não constituem garantia de resultados específicos de conversão de leads ou no-shows. Os resultados obtidos com nossas soluções podem variar conforme o contexto, operação, maturidade digital, volume de atendimento, integrações disponíveis e estratégia singular de cada cliente corporativo.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">04.</span> Serviços e propostas comerciais
            </h3>
            <p className="text-gray-650 font-medium pl-2.5">
              As descrições de serviços, soluções institucionais, funcionalidades descritas, planos, condições estipuladas e valores expostos no site podem ser alterados espontaneamente a qualquer momento, sem aviso prévio legal.
            </p>
            <p className="text-gray-650 font-semibold pl-2.5">
              A contratação comercial de qualquer solução da HIBRID dependerá de análise consultiva prévia, proposta comercial desenhada, aceite formal mútuo e contrato de prestação de serviços específico sob leis de software.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">05.</span> Propriedade intelectual
            </h3>
            <p className="text-gray-650 font-medium pl-2.5">
              Todo o conteúdo deste site, incluindo textos, imagens, marcas, logotipos, layouts de código, elementos visuais, ícones, vídeos, materiais, blueprints de copy e documentos, pertence à HIBRID ou a parceiros terceiros legítimos, protegidos por lei.
            </p>
            <p className="text-gray-650 font-semibold pl-2.5">
              É terminantemente proibida a reprodução, distribuição externa, modificação, cópia, espelhamento, venda ou exploração indevida de qualquer conteúdo sem prévia autorização escrita por um diretor habilitado da HIBRID.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">06.</span> Links para terceiros
            </h3>
            <p className="text-gray-650 font-medium pl-2.5">
              O site disponibiliza de forma opcional conectores para interfaces ou ferramentas e redes de terceiros. A HIBRID não assume qualquer responsabilidade civil pelos termos praticados, segurança, políticas internas ou funcionamento fora do escopo de suas páginas oficiais.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">07.</span> Disponibilidade do site
            </h3>
            <p className="text-gray-650 font-medium pl-2.5">
              A HIBRID poderá livremente modificar, atualizar, suspender temporariamente ou interromper os portais institucionais devido a manutenções técnicas de servidores, otimizações operacionais ou questões de emergência cibernética.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">08.</span> Limitação de responsabilidade
            </h3>
            <p className="text-gray-650 font-medium pl-2.5">
              A HIBRID exime-se de responsabilidade por perdas, danos eventuais, lucros cessantes, lentidões de rede local do usuário, indisponibilidades de banda larga ou incompatibilidade técnica de dispositivos móveis velhos que acessem o ecossistema.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">09.</span> Privacidade e proteção de dados
            </h3>
            <p className="text-gray-650 font-medium pl-2.5">
              O tratamento e resguardo de dados pessoais efetuados em conformidade legal encontram-se regidos de ponta a ponta na nossa respectiva Política de Privacidade, acessível no rodapé institucional.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">10.</span> Alterações nos Termos de Uso
            </h3>
            <p className="text-gray-655 font-medium pl-2.5">
              Reservamo-nos o direito de aperfeiçoar de forma unilateral estes termos em qualquer época, visando o constante alinhamento operacional e em respeito às mudanças federais na legislação de dados.
            </p>
          </div>

          {/* Section 11 */}
          <div className="space-y-2.5 bg-blue-50/20 p-4 border border-blue-50 rounded-xl">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">11.</span> Lei aplicável
            </h3>
            <p className="text-gray-650 font-semibold pl-1.5 mb-1.5">
              Estes Termos de Uso são integralmente regidos e instruídos pelas leis vigentes na República Federativa do Brasil.
            </p>
            <p className="text-gray-500 pl-1.5">
              Para dirimir qualquer questão sobre este termo de forma judicial, elegem-se como preferenciais e competentes os tribunais da comarca da sede fiscal e de desenvolvimento da empresa.
            </p>
          </div>

          {/* Section 12 */}
          <div className="space-y-4 pt-4 border-t border-gray-150">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-950 border-l-2 border-emerald-500 pl-2">
              12. Canal corporativo de dúvidas e informações
            </h3>
            <div className="bg-[#0b101b] text-gray-300 p-5 rounded-2xl border border-gray-800 space-y-3.5">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white">HIBRID Soluções em IA (I.S.)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] font-medium">
                <div className="space-y-1">
                  <span className="text-gray-500 block">E-mails de Apoio:</span>
                  <span className="text-emerald-400 font-bold block">suporthibrid@gmail.com</span>
                  <span className="text-emerald-400 font-bold block">contato@inteligenciahibrid.online</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 block">WhatsApp de Atendimento:</span>
                  <span className="text-white font-bold block">+55 45 99859-2085</span>
                  <span className="text-white font-bold block">+55 45 99902-2803</span>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-800 text-[10px] text-gray-500 font-semibold">
                Sede física corporativa: Avenida José Maria de Brito, 1707 — Bairro Monjolo, Foz do Iguaçu / PR — CEP 85.864-320
              </div>
            </div>
          </div>

        </div>

        {/* Footer actions block */}
        <div className="p-4 bg-gray-50 border-t border-gray-150 flex items-center justify-between shrink-0 text-[10.5px]">
          <span className="text-gray-500 font-semibold">
            Navegação Protegida • HIBRID Soluções em Inteligência Artificial
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0057D9] hover:bg-[#004dc4] active:bg-[#0043b0] text-white rounded-lg font-bold transition-all shadow-sm cursor-pointer"
          >
            Concordo com os Termos
          </button>
        </div>

      </div>
    </div>
  );
}
