/**
 * Types for HIBRID Soluções em IA
 */

export type Sector = "health" | "pharma";

export interface DiagnosticInput {
  sector: Sector;
  businessName: string;
  size: "Pequeno" | "Médio" | "Grande" | "Rede / Nacional";
  bottleneck: string;
}

export interface DiagnosticAction {
  title: string;
  impact: string;
  timeline: string;
}

export interface DiagnosticResult {
  strategicSummary: string;
  reclaimedFaturamento: string;
  actions: DiagnosticAction[];
  technicalStack: string[];
  roiScore: number;
}

export interface HealthRoiInput {
  monthlyAppointments: number;
  averageConsultationTicket: number;
  noShowRate: number; // e.g. 25
  growthTarget: number; // e.g. 15 (percentage increase)
}

export interface PharmaRoiInput {
  dailyDeliveries: number;
  averageCartValue: number;
  repurchasePeriodDays: number; // e.g. 30, 60
  noRepurchaseRate: number; // percentage of clients who do not repurchase, e.g. 40%
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  sector: Sector;
  bottleneck: string;
  createdAt: string;
}

export interface TechnicalCapability {
  title: string;
  description: string;
  fullDetails: string;
  relevance: string;
  iconName: string;
}
