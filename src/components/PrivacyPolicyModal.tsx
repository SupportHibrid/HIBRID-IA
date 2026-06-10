import { X, ShieldAlert, CheckCircle, Calendar, Mail, Compass } from "lucide-react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-sm font-sans">
      <div className="relative bg-[#ffffff] w-full max-w-4xl h-[85vh] rounded-2.5xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in text-left">
        
        {/* Header bar */}
        <div className="p-6 border-b border-gray-150 flex items-center justify-between bg-gray-50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-800 flex items-center justify-center border border-emerald-500/20">
              <ShieldAlert className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-gray-950">
                Política de Privacidade
              </h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] text-gray-500 font-medium flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" /> Última atualização: 10 de junho de 2026
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                  100% LGPD Compliant
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
          
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-5 space-y-2">
            <p className="font-semibold text-emerald-950 text-xs">
              A HIBRID Soluções em IA valoriza a privacidade e a segurança dos dados pessoais dos visitantes, clientes, parceiros e usuários de seus canais digitais.
            </p>
            <p className="text-gray-600 font-medium">
              Esta Política de Privacidade explica, de forma simples e transparente, como coletamos, utilizamos, armazenamos e protegemos informações pessoais em nosso site, formulários, canais de atendimento e demais ambientes digitais.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">01.</span> Quem somos
            </h3>
            <p className="text-gray-650 font-medium pl-2.5">
              A HIBRID Soluções em IA é uma empresa especializada em soluções de Inteligência Artificial, automação, atendimento inteligente, CRM, BI, Voice AI, Revenue Intelligence e crescimento previsível para clínicas, consultórios, centros médicos, hospitais, farmácias, drogarias e redes farmacêuticas.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">02.</span> Quais dados podemos coletar
            </h3>
            <p className="text-gray-650 font-medium pl-2.5">
              Podemos coletar informações fornecidas diretamente pelo usuário, como:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2.5 font-semibold text-gray-650">
              <li className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-150">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Nome completo, E-mail e Telefone</span>
              </li>
              <li className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-150">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Empresa, Cargo e Segmento de atuação</span>
              </li>
              <li className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-150">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Cidade, Estado e País</span>
              </li>
              <li className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-150">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Mensagens via formulários ou WhatsApp</span>
              </li>
            </ul>
            <p className="text-gray-600 font-medium pl-2.5 mt-2">
              Também podemos coletar dados técnicos de navegação:
            </p>
            <p className="text-gray-500 pl-2.5 font-mono text-[10px] leading-relaxed">
              Endereço IP, indicador técnico de dispositivo, navegador, páginas visualizadas, métricas de tempo de navegação, referências de origem, cookies de acessibilidade e tecnologias conexas.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">03.</span> Como utilizamos os dados
            </h3>
            <p className="text-gray-655 font-medium pl-2.5">
              Os dados coletados são estritamente direcionados aos seguintes atos institucionais legítimos:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2.5">
              {[
                "Responder solicitações ativas de contato",
                "Agendar simulações estruturadas e demonstrações",
                "Enviar propostas comerciais personalizadas",
                "Prestar suporte operacional e melhorias de software",
                "Personalizar canais e as experiências de acesso no site",
                "Executar análises agregadas de métricas de desempenho",
                "Assegurar conformidades de obrigações legais brasileiras"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2 items-start text-gray-650 font-semibold">
                  <span className="text-[10px] font-mono text-[#0057D9] bg-blue-50 px-1 py-0.5 rounded leading-none mt-0.5">{String(idx + 1).padStart(2, '0')}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-2.5 bg-gray-50 p-4 border border-gray-150 rounded-xl">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-emerald-500 pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-emerald-500">04.</span> Dados de saúde e dados sensíveis
            </h3>
            <p className="text-gray-650 font-semibold leading-relaxed">
              A HIBRID atua com soluções voltadas para clínicas, consultórios, hospitais, farmácias e drogarias. No entanto, o site institucional da HIBRID <strong className="text-gray-950 font-extrabold">não tem como objetivo coletar dados médicos</strong>, prontuários, diagnósticos, prescrições ou informações sensíveis de saúde dos visitantes.
            </p>
            <p className="text-gray-500 text-[10.5px]">
              Caso, em alguma solução contratada, seja necessário tratar dados pessoais sensíveis, esse tratamento deverá ocorrer conforme a legislação aplicável, contratos específicos, bases legais adequadas e medidas de segurança de criptografia de prontuário de nível militar.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">05.</span> Compartilhamento de dados
            </h3>
            <p className="text-gray-655 font-semibold pl-2.5">
              <span className="text-emerald-600 font-extrabold text-[12px] block mb-1">A HIBRID não vende dados pessoais.</span>
              Podemos compartilhar informações apenas quando necessário para a estrita viabilidade da operação (provedores de nuvem, banco de dados ou CRMs internos), para o exercício de direitos próprios, ou por ordem expressa de autoridade legal federal.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">06.</span> Cookies
            </h3>
            <p className="text-gray-650 font-medium pl-2.5">
              Nosso site pode utilizar cookies e tecnologias semelhantes para melhorar a experiência do usuário, analisar desempenho, entender comportamento de navegação e apoiar ações de marketing. O usuário pode configurar seu navegador para bloquear ou remover cookies a qualquer momento.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">07.</span> Armazenamento e segurança
            </h3>
            <p className="text-gray-650 font-medium pl-2.5">
              Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados pessoais contra acesso não autorizado, perda, alteração, divulgação indevida ou uso inadequado. Os dados serão mantidos apenas pelo tempo necessário para as finalidades do canal.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-2.5 bg-blue-50/20 p-4 border border-blue-50 rounded-xl">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">08.</span> Direitos dos titulares
            </h3>
            <p className="text-gray-650 font-semibold mb-2">
              De acordo com as regas de conformidade vigentes no Brasil pela LGPD, o titular poderá requerer:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 font-semibold">
              <div className="flex gap-1.5">• Confirmação de existência do tratamento de dados</div>
              <div className="flex gap-1.5">• Exibição e acesso total aos dados arquivados</div>
              <div className="flex gap-1.5">• Retificação e correção de dados imprecisos</div>
              <div className="flex gap-1.5">• Revogação de consentimentos concedidos anteriormente</div>
              <div className="flex gap-1.5">• Eliminação definitiva de dados, nos moldes da Lei</div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">09.</span> Comunicações comerciais
            </h3>
            <p className="text-gray-650 font-medium pl-2.5">
              Ao preencher formulários de contato ou efetuar interações simuladas, o usuário concorda em receber comunicações comerciais relativas ao ecossistema HIBRID de crescimento, podendo solicitar o opt-out (descadastramento) em qualquer envio informativo.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">10.</span> Links externos
            </h3>
            <p className="text-gray-650 font-medium pl-2.5">
              Nosso site institucional disponibiliza pontes de conexão com redes externas (ex: Instagram, Facebook e WhatsApp). A HIBRID não se responsabiliza pelas práticas ou regras de privacidade exercidas nesses ecossistemas externos de terceiros.
            </p>
          </div>

          {/* Section 11 */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-900 border-l-2 border-[#0057D9] pl-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0057D9]">11.</span> Alterações nesta Política
            </h3>
            <p className="text-gray-655 font-medium pl-2.5">
              Esta Política de Privacidade poderá ser alterada espontaneamente para adequação legislativa federal, alteração de serviços de IA ou otimizações de segurança. A versão pública mais atualizada estará permanentemente disposta no rodapé do endereço institucional.
            </p>
          </div>

          {/* Section 12 */}
          <div className="space-y-4 pt-4 border-t border-gray-150">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-950 border-l-2 border-emerald-500 pl-2">
              12. Canal oficial de contato e encarregado de dados (DPO)
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
            Proteção de Dados Garantida • Plataforma Desenvolvida pela HIBRID
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0057D9] hover:bg-[#004dc4] active:bg-[#0043b0] text-white rounded-lg font-bold transition-all shadow-sm cursor-pointer"
          >
            Entendido e Aceito
          </button>
        </div>

      </div>
    </div>
  );
}
