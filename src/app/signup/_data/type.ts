import type { UserType } from "@/src/types/signup";

type UserTypeOption = {
  type: UserType;
  title: string;
  description: string;
};

export const USER_TYPES: UserTypeOption[] = [
  {
    type: "customer",
    title: "일반 손님",
    description: "장날과 시장 정보를 둘러보고 싶어요.",
  },
  {
    type: "merchant",
    title: "상인",
    description: "내 가게와 상품을 소개하고 싶어요.",
  },
];
