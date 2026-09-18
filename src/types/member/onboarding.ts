import type { ConsentType, MemberInfo } from "./member";

export interface OnboardingRequest {
  nickname: string;
  consents: ConsentType[];
}

export type OnboardingResult = MemberInfo;
