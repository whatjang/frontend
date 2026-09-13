import type { ApiResponse } from "@/src/types/api";
import type {
  OnboardingRequest,
  OnboardingResult,
} from "@/src/types/member/onboarding";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function completeOnboarding(
  request: OnboardingRequest
): Promise<ApiResponse<OnboardingResult>> {
  return apiClient.put<ApiResponse<OnboardingResult>, OnboardingRequest>(
    API_ENDPOINTS.MEMBER.ONBOARDING,
    request
  );
}
