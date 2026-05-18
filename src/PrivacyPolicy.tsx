import { motion } from "motion/react";
import { ChevronLeft, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-navy text-slate-300 font-sans selection:bg-brand-cyan selection:text-brand-blue">
      {/* Header */}
      <nav className="fixed top-0 left-0 w-full z-50 glass py-4 border-b">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-brand-cyan hover:opacity-80 transition-opacity font-bold">
            <ChevronLeft size={20} />
            Voltar para o Início
          </Link>
          <div className="flex items-center gap-2">
            <img 
              src="https://i.ibb.co/BH2DV8BH/Logo.png" 
              alt="HIBRID Soluções em IA" 
              className="h-10 w-auto object-contain brightness-110" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <article className="max-w-4xl mx-auto glass-premium p-8 md:p-16 rounded-[40px] border-brand-cyan/20 shadow-2xl">
          <header className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase tracking-widest mb-6">
              <Lock size={14} /> Privacidade e Proteção
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Política de Privacidade</h1>
            <p className="text-slate-500 italic">Última atualização: Maio de 2026</p>
          </header>

          <div className="space-y-12 text-sm md:text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                1. Introdução
              </h2>
              <p>
                A <strong>HIBRID IA</strong> valoriza a sua privacidade e está comprometida em proteger seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, processamos e protegemos suas informações quando você visita nosso site ou utiliza nossas soluções de automação.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                2. Quem Somos
              </h2>
              <p>
                A HIBRID IA é uma empresa especializada em automações com inteligência artificial, marketing digital e integração de sistemas, operando sob o domínio <strong>hibrid.ia</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                3. Dados Coletados
              </h2>
              <p>
                Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços, divididos entre dados fornecidos por você e dados coletados automaticamente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                4. Dados Fornecidos pelo Usuário
              </h2>
              <p>
                Quando você preenche nossos formulários de contato, assina nossa newsletter ou entra em contato via WhatsApp, podemos coletar:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
                <li>Nome completo;</li>
                <li>Endereço de e-mail;</li>
                <li>Número de telefone/WhatsApp;</li>
                <li>Informações sobre sua empresa ou necessidade de automação.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                5. Dados Coletados Automaticamente
              </h2>
              <p>
                Durante sua navegação, coletamos dados de forma automática via cookies e pixels, como:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
                <li>Endereço IP;</li>
                <li>Tipo de navegador e dispositivo;</li>
                <li>Páginas visitadas e tempo de permanência;</li>
                <li>Origem do tráfego (referral).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                6. Cookies e Tecnologias Similares
              </h2>
              <p>
                Utilizamos cookies para personalizar sua experiência, analisar tráfego e otimizar nossas campanhas publicitárias. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade de certas áreas do site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                7. Google Analytics
              </h2>
              <p>
                Utilizamos o Google Analytics para entender como os visitantes interagem com o site. Esta ferramenta coleta dados de forma agregada e anônima para gerar relatórios de desempenho.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                8. Meta Pixel
              </h2>
              <p>
                O Meta Pixel está instalado em nosso site para rastrear conversões de anúncios no Facebook/Instagram e criar públicos personalizados para remarketing, permitindo que exibamos anúncios mais relevantes para você.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                9. Rastreamento de Anúncios
              </h2>
              <p>
                Participamos de programas de rastreamento de anúncios que podem coletar dados de navegação para fins de marketing direcionado, sempre respeitando as configurações de privacidade do seu dispositivo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                10. Finalidade do Tratamento dos Dados
              </h2>
              <p>
                Os dados coletados são utilizados para:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
                <li>Responder a solicitações de suporte ou orçamento;</li>
                <li>Enviar newsletters e comunicações de marketing (com seu consentimento);</li>
                <li>Melhorar a performance técnica do site e de nossas automações;</li>
                <li>Cumprir obrigações legais e prevenir fraudes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                11. Base Legal segundo LGPD
              </h2>
              <p>
                Tratamos seus dados com base no seu <strong>Consentimento</strong> (Art. 7º, I da LGPD), para o <strong>Cumprimento de Obrigação Legal</strong> ou para o <strong>Legítimo Interesse</strong> da HIBRID IA, garantindo sempre seus direitos elementares.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                12. Consentimento do Usuário
              </h2>
              <p>
                Ao utilizar nossos formulários e aceitar nossa barra de cookies, você fornece consentimento explícito para o tratamento dos dados conforme descrito nesta política. Você pode revogar este consentimento a qualquer momento.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                13. Compartilhamento de Dados
              </h2>
              <p>
                A HIBRID IA não vende seus dados pessoais. Compartilhamos informações com provedores de serviços apenas na medida do necessário para a execução de nossas ferramentas e operações de marketing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                14. Parceiros e Integrações Terceiras
              </h2>
              <p>
                Dados podem ser processados via APIs de terceiros, como:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
                <li>Meta Business (WhatsApp/FB);</li>
                <li>Google Cloud & Workspace;</li>
                <li>Provedores de Hospedagem e CRM.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                15. Armazenamento e Proteção de Dados
              </h2>
              <p>
                Seus dados são armazenados em servidores seguros, com controle de acesso rigoroso e firewalls de última geração, buscando prevenir qualquer acesso não autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                16. Segurança das Informações
              </h2>
              <p>
                Implementamos medidas técnicas e organizacionais de segurança, incluindo criptografia de dados em repouso e em trânsito (SSL/TLS).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                17. Direitos do Titular dos Dados
              </h2>
              <p>
                De acordo com a LGPD, você tem direito a: confirmação da existência de tratamento, acesso aos dados, correção de dados incompletos ou inexatos, anonimização ou eliminação de dados desnecessários.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                18. Exclusão de Dados
              </h2>
              <p>
                Você pode solicitar a exclusão definitiva de seus dados de nossa base a qualquer momento, salvo nos casos em que a lei exija a manutenção das informações.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                19. Solicitação de Acesso aos Dados
              </h2>
              <p>
                Para exercer seus direitos de acesso ou portabilidade, entre em contato com nosso DPO/Encarregado através do e-mail oficial de suporte fornecido ao final deste documento.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                20. Transferência Internacional de Dados
              </h2>
              <p>
                Como utilizamos serviços de nuvem globais (como Google Cloud e Meta), seus dados podem ser processados em outros países, sempre mantendo os padrões de segurança exigidos pela legislação brasileira.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                21. Retenção de Informações
              </h2>
              <p>
                Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados ou conforme exigido por regulamentos legais.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                22. Política de Menores de Idade
              </h2>
              <p>
                Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente dados de crianças ou adolescentes sem o consentimento dos responsáveis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                23. Política Anti-Fraude
              </h2>
              <p>
                Reservamo-nos o direito de processar dados para verificar a identidade de usuários e prevenir atividades fraudulentas em nossas plataformas de automação.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                24. Uso de Inteligência Artificial
              </h2>
              <p>
                Processamos dados via modelos de IA para otimizar fluxos de atendimento e análise. Tais processos são auditados para garantir que não haja decisões automatizadas discriminatórias.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                25. Consentimento de Cookies (Banner)
              </h2>
              <p>
                Ao navegar em nosso site, você será solicitado a gerenciar seu consentimento de cookies, podendo aceitar todos ou apenas os essenciais para o funcionamento básico.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                26. Configuração de Cookies do Navegador
              </h2>
              <p>
                Você pode, a qualquer tempo, alterar as permissões, bloquear ou recusar os cookies diretamente nas configurações de privacidade do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                27. Conformidade com LGPD
              </h2>
              <p>
                Esta política foi redigida em total conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais do Brasil).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                28. Conformidade com GDPR
              </h2>
              <p>
                Respeitamos os princípios do Regulamento Geral sobre a Proteção de Dados (GDPR) da União Europeia para garantir os mais altos padrões globais de privacidade.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                29. Conformidade com Meta Business
              </h2>
              <p>
                Nossas integrações via API de Conversão seguem as diretrizes de termos de uso de dados da Meta Business.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                30. Conformidade com Google Policies
              </h2>
              <p>
                Implementamos o <strong>Google Consent Mode v2</strong> para garantir que os sinais de marketing sejam processados apenas com o consentimento verificado do usuário.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                31. Alterações da Política
              </h2>
              <p>
                Esta Política pode ser alterada a qualquer momento. Recomendamos a visita periódica a esta página para se manter informado sobre como protegemos seus dados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                32. Contato do DPO / Encarregado de Dados
              </h2>
              <p>
                Para questões relacionadas à privacidade:
              </p>
              <ul className="mt-2 text-brand-cyan font-medium">
                <li>Encarregado de Dados (DPO): Equipe de Compliance e Proteção de Dados HIBRID IA</li>
                <li>E-mail: suporthibrid@gmail.com</li>
              </ul>
            </section>

            <section className="p-8 bg-brand-cyan/5 rounded-3xl border border-brand-cyan/10">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                33. Canal Oficial de Suporte
              </h2>
              <p className="mb-4">Informações de contato da HIBRID IA:</p>
              <ul className="space-y-2 text-brand-cyan font-medium">
                <li>E-mail: suporthibrid@gmail.com | contato@inteligenciahibrid.online</li>
                <li>Telefone: +55 (45) 99859-2085 / +55 (45) 99902-2803</li>
                <li>CNPJ: 66.153.809/0001-61</li>
                <li>Endereço: R MACAPA 922, LANCASTER, FOZ DO IGUAÇU, PR 85.861-438, Brasil</li>
                <li>Domínio: inteligenciahibrid.online</li>
              </ul>
            </section>
          </div>
        </article>
      </main>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-600 text-xs">
        <p>© 2026 HIBRID Soluções em IA. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
