import type { SignupStatus } from "@/src/types/auth";

export type ConsentType = "SERVICE" | "PRIVACY" | "LOCATION" | "MARKETING";

export interface MemberInfo {
  member_id: number;
  name: string;
  nickname: string | null;
  signup_status: SignupStatus;
  consents: ConsentType[];
}
