/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: string;
  category: 'adhd' | 'anxietate_depresie' | 'trauma_seniori' | 'autocunoastere';
  categoryLabel: string;
  clientName: string;
  clientRole: string;
  age: number;
  initialState: string;
  transformation: string;
  quote: string;
  badge: string;
  duration: string;
}

export interface YouthAchievement {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  impact: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  duration: string;
  standardPrice: number;
  fidelityPrice: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface AccreditationStep {
  step: number;
  title: string;
  institution: string;
  description: string;
  status: 'completat' | 'continuu';
}
