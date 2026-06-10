import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory array to persist leads during server lifecycle
interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  sector: "health" | "pharma";
  bottleneck: string;
  createdAt: string;
}

const leads: Lead[] = [
  {
    id: "lead-1",
    name: "Ana Beatriz Ramos",
    email: "contato@clinicaramos.med.br",
    phone: "(11) 98765-4321",
    businessName: "Clínicas Ramos - Cardiologia",
    sector: "health",
    bottleneck: "Alta taxa de no-show (faltas) em consultas particulares",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: "lead-2",
    name: "Dr. Marcos Silveira",
    email: "marcos.silveira@hospitaldr.com",
    phone: "(21) 97123-4567",
    businessName: "Rede CheckUp Saúde",
    sector: "health",
    bottleneck: "Lentidão e custos operacionais altos no agendamento telefônico",
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
  },
  {
    id: "lead-3",
    name: "Juliana Mendes",
    email: "juliana@drogariaredemais.com.br",
    phone: "(31) 99112-2334",
    businessName: "Drogaria Rede Mais (5 Lojas)",
    sector: "pharma",
    bottleneck: "Baixa recorrência / clientes compram uma vez e não voltam",
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
  }
];

// Initialize Google GenAI lazily
let aiClient: GoogleGenAI | null = null;
function getAi(): GoogleGenAI | null {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key && key !== "MY_GEMINI_API_KEY") {
      aiClient = new GoogleGenAI({
        apiKey: key,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return aiClient;
}

// Lead API endpoints
app.get("/api/leads", (req, res) => {
  res.json({ success: true, count: leads.length, data: leads });
});

app.post("/api/leads", (req, res) => {
  const { name, email, phone, businessName, sector, bottleneck } = req.body;

  if (!name || !email || !phone || !businessName) {
    return res.status(400).json({
      success: false,
      message: "Por favor, preencha todos os campos obrigatórios (Nome, E-mail, Telefone, Nome da Empresa/Clínica).",
    });
  }

  const newLead: Lead = {
    id: `lead-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    name,
    email,
    phone,
    businessName,
    sector: sector || "health",
    bottleneck: bottleneck || "Geral",
    createdAt: new Date().toISOString(),
  };

  leads.unshift(newLead);
  res.status(201).json({ success: true, data: newLead });
});

// Real AI Diagnostic Tool via Gemini API
app.post("/api/diagnose", async (req, res) => {
  const { sector, name, size, bottleneck } = req.body;

  if (!sector || !name || !bottleneck) {
    return res.status(400).json({
      success: false,
      message: "Dados insuficientes para estruturar o diagnóstico de IA. Sector, name e bottleneck são obrigatórios.",
    });
  }

  const ai = getAi();
  
  if (!ai) {
    // Graceful fallback when the key is omitted or dummy
    console.warn("GEMINI_API_KEY is not defined or is placeholder. Generating high-fidelity fallback response.");
    const fallbackData = getFallbackDiagnosis(sector, name, size, bottleneck);
    return res.json({
      success: true,
      source: "fallback_expert_system",
      data: fallbackData,
      note: "Ative a sua chave de API do Gemini nas configurações do AI Studio (Secrets) para habilitar diagnósticos generativos dinâmicos em tempo real!"
    });
  }

  try {
    const promptText = `Atue como o Diretor de Tecnologia e CRO Principal da HIBRID Soluções em IA, a agência líder global em Inteligência Artificial para Saúde.
Você foi contratado para criar um Diagnóstico de IA e Plano Estratégico de Crescimento Previsível personalizado para a seguinte organização de saúde:
- Nome da Empresa: ${name}
- Segmento de Atuação: ${sector === "health" ? "Clínicas / Consultórios / Hospitais" : "Rede de Farmácias / Drogarias"}
- Porte / Escala: ${size || "Não especificado"}
- Maior Desafio / Gargalo Operacional: ${bottleneck}

Com base nesses dados, gere um plano estratégico focado em soluções práticas:
1. Um resumo focado em receitas e conversão explicando exatamente como a Inteligência Artificial da HIBRID mitigará esse gargalo para gerar Crescimento Previsível.
2. Estimativa realista de Faturamento Recuperado Anualmente ou Mensalmente em reais (indique com clareza a cifra e o indicador em formato numérico e textual estimativo).
3. Uma lista com exatamente 3 ações imediatas prioritárias, cada uma contendo:
   - Título descritivo direto;
   - Impacto estimado (ex. "+25% consultas", "Fidelidade +45%");
   - Linha do tempo (em dias úteis, ex. "15 dias").
4. A lista de tecnologias da suíte HIBRID a serem implantadas (ex. "HIBRID Voice AI", "WhatsApp Conversational Flow", "HIBRID Patient CRM").
5. Uma nota de ROI Score (de 1 a 100), representando o potencial de aceleração de receita por Inteligência Artificial.

A resposta deve ser retornada RIGOROSAMENTE conforme o contrato JSON do responseSchema fornecido. Adapte a linguagem do tom de voz para uma consultoria corporativa premium extremamente persuasiva e assertiva.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText,
      config: {
        systemInstruction: "A HIBRID não vende software, vende crescimento previsível, automação e receita inteligente para o setor da saúde. Responda em Português do Brasil com dados realistas e copywriting de alto nível corporativo.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            strategicSummary: { 
              type: Type.STRING,
              description: "Resumo persuasivo focado em negócios de como a IA HIBRID resolve o gargalo."
            },
            reclaimedFaturamento: { 
              type: Type.STRING,
              description: "Estimativa descritiva do faturamento recuperado, ex: R$ 120.000,00 adicionais por ano."
            },
            actions: {
              type: Type.ARRAY,
              description: "Três ações estratégicas personalizadas imediatas.",
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING, description: "Ação direta de impacto." },
                  impact: { type: Type.STRING, description: "Métrica de conversão esperada." },
                  timeline: { type: Type.STRING, description: "Prazo de implementação ou ramp-up." }
                },
                required: ["title", "impact", "timeline"]
              }
            },
            technicalStack: {
              type: Type.ARRAY,
              description: "Nomes de módulos ou ferramentas HIBRID indicados para o cenário.",
              items: { type: Type.STRING }
            },
            roiScore: { 
              type: Type.INTEGER,
              description: "Pontuação geral de potencial de crescimento IA (0-100)."
            }
          },
          required: ["strategicSummary", "reclaimedFaturamento", "actions", "technicalStack", "roiScore"]
        }
      }
    });

    const parsedData = JSON.parse(response.text?.trim() || "{}");
    res.json({
      success: true,
      source: "gemini_model_live",
      data: parsedData
    });

  } catch (error: any) {
    console.error("Gemini API calculation error:", error);
    // Fallback on error
    const fallbackData = getFallbackDiagnosis(sector, name, size, bottleneck);
    res.json({
      success: true,
      source: "fallback_recovery_system",
      data: fallbackData,
      error: error.message
    });
  }
});

function getFallbackDiagnosis(sector: "health" | "pharma", name: string, size: string, bottleneck: string) {
  const isHealth = sector === "health";
  
  if (isHealth) {
    return {
      strategicSummary: `Para o ${name}, propomos a implantação da Automação Conversacional HIBRID HEALTH. Identificamos que otimizar o gargalo "${bottleneck}" trará eficiência imediata. Ao substituir contatos manuais de confirmação de consultas por fluxos inteligentes de WhatsApp Conversativo e Voice AI integrados ao calendário, eliminamos a dependência da secretaria e estabelecemos um funil de confirmação instantânea 24/7 com inteligência de renegociação amigável na mesma conversa.`,
      reclaimedFaturamento: "Estimamos uma economia e recuperação de receita de R$ 94.800,00 a R$ 156.000,00 anuais para clínicas de médio porte.",
      actions: [
        {
          title: "Implantação de WhatsApp Ativo com Redirecionamento Autônomo de Faltas",
          impact: "Redução imediata em até 72% na taxa de ausências (no-shows)",
          timeline: "10 dias úteis"
        },
        {
          title: "Voice AI Inteligente de Confirmação Automatizada (Voz Natural)",
          impact: "Liberar 14 horas de trabalho semanal da recepção médica",
          timeline: "15 dias úteis"
        },
        {
          title: "Funil Inteligente de Reativação de Pacientes Inativos",
          impact: "+18% novos agendamentos sem custo de publicidade extra",
          timeline: "7 dias úteis"
        }
      ],
      technicalStack: ["HIBRID Health Conversational Flow", "HIBRID Voice Executive AI", "HIBRID Revenue Analytics Dashboard"],
      roiScore: 91
    };
  } else {
    return {
      strategicSummary: `Para a rede de farmácias ${name}, o foco é na ativação do ciclo de vida do consumidor (LTV) combatendo "${bottleneck}". Utilizando o HIBRID PHARMA IA, implantamos disparadores inteligentes baseados em histórico de receitas médicas e tempo estimado de término de medicamentos. Assim que o tratamento atinge 80% do tempo de consumo, o robô realiza uma abordagem amigável no WhatsApp oferecendo reposição em 1-clique pelo Delivery, estabelecendo receitas recorrentes e blindcando a concorrência local.`,
      reclaimedFaturamento: "Estimamos um acréscimo recorrente mensal de R$ 12.400,00 a R$ 28.900,00 por loja física habilitada.",
      actions: [
        {
          title: "Setup de CRM Preditivo de Recompra (Alerta Farmacêutico por IA)",
          impact: "Aumento de 34% no índice de recompra recorrente",
          timeline: "12 dias úteis"
        },
        {
          title: "Assistente Conversacional de Pedidos Rápidos Integrado com ERP",
          impact: "Redução do tempo médio de fechamento de delivery para 90 segundos",
          timeline: "20 dias úteis"
        },
        {
          title: "Funil Ativo Sazonal de Saúde e Nutracêuticos",
          impact: "Ticket médio de compras elevado em R$ 18,50 por transação",
          timeline: "8 dias úteis"
        }
      ],
      technicalStack: ["HIBRID Pharma Predictive Repurchase Engine", "HIBRID Custom Shop Assistant", "HIBRID Delivery Express Bridge"],
      roiScore: 94
    };
  }
}

// Vite integration middleware & static server logic
async function bootstrap() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[HIBRID IA Server] Active and routing successfully on http://0.0.0.0:${PORT}`);
  });
}

bootstrap();
