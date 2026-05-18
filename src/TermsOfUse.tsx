import { motion } from "motion/react";
import { ChevronLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const TermsOfUse = () => {
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
              <Shield size={14} /> Documentação Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Termos de Uso</h1>
            <p className="text-slate-500 italic">Última atualização: Maio de 2026</p>
          </header>

          <div className="space-y-12 text-sm md:text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                1. Introdução
              </h2>
              <p>
                Bem-vindo ao site da <strong>HIBRID IA</strong>. Estes Termos de Uso ("Termos") regem o acesso e a utilização dos serviços, plataformas, ferramentas de automação e conteúdos oferecidos pela HIBRID IA. Ao acessar nosso site ou utilizar nossas soluções, você concorda integralmente com as disposições aqui estabelecidas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                2. Aceitação dos Termos
              </h2>
              <p>
                O uso deste site e a contratação de qualquer serviço da HIBRID IA implica na aceitação tácita e irrestrita destes Termos. Caso não concorde com qualquer parte deste documento, recomendamos que interrompa o uso do site imediatamente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                3. Elegibilidade de Uso
              </h2>
              <p>
                Para utilizar nossas plataformas, você deve ter plena capacidade civil. No caso de contratação em nome de pessoa jurídica, você declara possuir poderes legais para vincular a empresa aos presentes Termos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                4. Serviços Oferecidos
              </h2>
              <p>
                A HIBRID IA especializa-se em soluções de tecnologia de ponta, incluindo, mas não se limitando a:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
                <li>Automação de processos com Inteligência Artificial;</li>
                <li>Sistemas de automação para WhatsApp e canais de atendimento;</li>
                <li>Integração de APIs customizadas;</li>
                <li>Desenvolvimento e gestão de Chatbots inteligentes;</li>
                <li>Automação comercial e de marketing digital;</li>
                <li>Integrações avançadas com ecossistemas Meta (Facebook/Instagram) e Google;</li>
                <li>Consultoria técnica em IA para negócios.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                5. Regras de Utilização do Site
              </h2>
              <p>
                O usuário compromete-se a utilizar o site de forma ética, sendo proibido:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
                <li>Violar qualquer lei local, estadual ou nacional;</li>
                <li>Transmitir vírus ou códigos maliciosos;</li>
                <li>Utilizar técnicas de mineração de dados (scraping) sem autorização;</li>
                <li>Fornecer informações falsas nos formulários de contato ou newsletter.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                6. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo deste site, incluindo logotipos, textos, gráficos, ícones, imagens, códigos-fonte e softwares, é de propriedade exclusiva da HIBRID IA ou de seus licenciadores, sendo protegido pelas leis internacionais de direitos autorais e propriedade industrial.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                7. Direitos Autorais
              </h2>
              <p>
                É proibida a reprodução, distribuição ou modificação de qualquer material deste site para fins comerciais sem a autorização prévia por escrito da HIBRID IA.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                8. Uso Indevido da Plataforma
              </h2>
              <p>
                Tentativas de burlar medidas de segurança, acessar áreas restritas do servidor ou interceptar dados serão tratadas como infrações graves, sujeitas às penalidades previstas no Código Penal Brasileiro e na Lei Carolina Dieckmann.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                9. Limitação de Responsabilidade
              </h2>
              <p>
                Embora busquemos a excelência técnica, a HIBRID IA não se responsabiliza por eventuais lucros cessantes, perdas indiretas ou interrupções de serviço causadas por falhas de infraestrutura de terceiros (provedores de internet, APIs de Meta/Google/OpenAI).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                10. Disponibilidade e Manutenção do Sistema
              </h2>
              <p>
                O site e nossas APIs podem passar por manutenções programadas ou emergenciais. Buscaremos sempre minimizar o tempo de inatividade, mas não garantimos disponibilidade de 100% (SLA) para a versão pública do site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                11. Integrações com Terceiros
              </h2>
              <p>
                Nossos serviços podem integrar-se com ferramentas de terceiros. O uso dessas integrações está sujeito aos termos e políticas de privacidade dessas respectivas empresas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                12. Regras Relacionadas ao Meta Business (WhatsApp/FB/IG)
              </h2>
              <p>
                As automações para WhatsApp e Instagram devem seguir estritamente as <strong>Políticas de Soluções para Negócios da Meta</strong>. A HIBRID IA não se responsabiliza por banimentos ou bloqueios de números/contas causados por uso abusivo ou violação das políticas da Meta pelo usuário.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                13. Regras Relacionadas ao Google
              </h2>
              <p>
                O uso de serviços do Google (Cloud, Analytics, Ads) segue as diretrizes da <strong>Google Platform Policy</strong>. O usuário é responsável por garantir que o processamento de dados via integradores Google esteja em conformidade com as leis locais.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                14. Uso de IA e Automações
              </h2>
              <p>
                Nossos sistemas utilizam modelos avançados de processamento de linguagem natural. O usuário compreende que IAs podem apresentar "alucinações" ou respostas imprecisas. Recomendamos supervisão humana periódica para sistemas de alto impacto.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                15. Condutas Proibidas
              </h2>
              <p>
                É terminantemente proibido o uso de nossas ferramentas para: promoção de discursos de ódio, conteúdo adulto ilegal, golpes (scam), venda de substâncias controladas ou qualquer atividade que fira a dignidade humana.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                16. Política Anti-Spam
              </h2>
              <p>
                A HIBRID IA é contra o envio de mensagens não solicitadas. Nossas automações devem ser utilizadas apenas para leads que forneceram consentimento prévio (opt-in).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                17. Segurança Digital
              </h2>
              <p>
                Adotamos protocolos de criptografia e segurança de classe empresarial para proteger os dados trafegados em nossa infraestrutura de automação.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                18. Coleta de Informações (LGPD/GDPR)
              </h2>
              <p>
                Em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD)</strong> e o <strong>GDPR</strong>, informamos que coletamos dados fornecidos voluntariamente via formulários (nome, e-mail, telefone) para fins de comunicação comercial e suporte.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                19. Cookies e Tecnologias de Rastreamento
              </h2>
              <p>
                Utilizamos cookies, Meta Pixel e Google Analytics para melhorar a experiência do usuário e otimizar campanhas de marketing. O usuário pode gerenciar suas preferências de cookies nas configurações do navegador.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                20. Links Externos
              </h2>
              <p>
                Nosso site pode conter links para sites de terceiros. Não exercemos controle sobre o conteúdo ou práticas de privacidade desses sites externos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                21. Privacidade do Usuário
              </h2>
              <p>
                Seus dados nunca serão vendidos para terceiros. A privacidade é um pilar fundamental da HIBRID IA. Detalhes específicos podem ser consultados em nossa Política de Privacidade.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                22. Suspensão ou Cancelamento de Acesso
              </h2>
              <p>
                Reservamo-nos o direito de suspender o acesso ao site ou às ferramentas de automação em caso de violação comprovada destes Termos, sem aviso prévio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                23. Alterações dos Termos
              </h2>
              <p>
                A HIBRID IA poderá atualizar estes Termos periodicamente. As mudanças entrarão em vigor imediatamente após a publicação no site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                24. Legislação Aplicável
              </h2>
              <p>
                Estes Termos são regidos pelas leis da República Federativa do Brasil, especialmente o Marco Civil da Internet e a LGPD.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                25. Foro Jurídico
              </h2>
              <p>
                Fica eleito o foro da comarca da sede da empresa Foz do Iguaçu/PR, com renúncia a qualquer outro por mais privilegiado que seja, para dirimir quaisquer controvérsias oriundas deste documento.
              </p>
            </section>

            <section className="p-8 bg-brand-cyan/5 rounded-3xl border border-brand-cyan/10">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-cyan rounded-full" />
                26. Contato Oficial
              </h2>
              <p className="mb-4">Para dúvidas sobre estes Termos de Uso, entre em contato:</p>
              <ul className="space-y-2 text-brand-cyan font-medium">
                <li>E-mail: suporthibrid@gmail.com | contato@inteligenciahibrid.online</li>
                <li>Telefone: +55 (45) 99859-2085 / +55 (45) 99902-2803</li>
                <li>CNPJ: 66.153.809/0001-61</li>
                <li>Endereço: R MACAPA 922, LANCASTER, FOZ DO IGUAÇU, PR 85.861-438, Brasil</li>
                <li>Site Oficial: inteligenciahibrid.online</li>
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

export default TermsOfUse;
