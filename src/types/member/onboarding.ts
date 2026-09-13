import type { SignupStatus } from "@/src/types/auth";

export type ConsentType = "SERVICE" | "PRIVACY" | "LOCATION" | "MARKETING";

export interface OnboardingRequest {
  nickname: string;
  consents: ConsentType[];
}

export interface OnboardingResult {
  member_id: number;
  name: string;
  nickname: string;
  signup_status: SignupStatus;
  consents: ConsentType[];
}
