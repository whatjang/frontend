export const TERMS = [
  {
    id: "service",
    title: "왓장 서비스 이용약관",
    label: "왓장 서비스 이용약관 동의",
    required: true,
    content: [
      {
        heading: "제1조 목적",
        body: "이 약관은 왓장 서비스의 이용 조건 및 절차, 회원과 회사의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.",
      },
      {
        heading: "제2조 서비스 이용",
        body: "회원은 본 약관에 동의함으로써 왓장 서비스를 이용할 수 있습니다. 회사는 안정적인 서비스 제공을 위해 필요한 조치를 취할 수 있습니다.",
      },
      {
        heading: "제3조 회원의 의무",
        body: "회원은 서비스를 이용함에 있어 관련 법령 및 본 약관을 준수해야 하며, 타인의 권리를 침해하거나 서비스 운영을 방해해서는 안 됩니다.",
      },
    ],
  },
  {
    id: "privacy",
    title: "개인정보 수집 및 이용 동의",
    label: "개인정보 수집 및 이용 동의",
    required: true,
    content: [
      {
        heading: "수집 항목",
        body: "회사는 회원가입 및 서비스 제공을 위해 닉네임, 소셜 로그인 식별자 등의 정보를 수집할 수 있습니다.",
      },
      {
        heading: "이용 목적",
        body: "수집된 개인정보는 회원 식별, 서비스 제공, 고객 문의 대응, 부정 이용 방지 목적으로 사용됩니다.",
      },
      {
        heading: "보유 기간",
        body: "개인정보는 회원 탈퇴 시까지 보관되며, 관련 법령에 따라 일정 기간 보관이 필요한 경우 해당 기간 동안 보관됩니다.",
      },
    ],
  },
  {
    id: "location",
    title: "위치기반 서비스 이용약관",
    label: "위치기반 서비스 이용약관 동의",
    required: true,
    content: [
      {
        heading: "위치정보 이용 목적",
        body: "회사는 사용자 주변의 왓장 서비스 제공을 위해 위치정보를 활용할 수 있습니다.",
      },
      {
        heading: "위치정보 보관",
        body: "위치정보는 서비스 제공 목적 범위 내에서만 사용되며, 불필요한 경우 즉시 파기됩니다.",
      },
    ],
  },
  {
    id: "marketing",
    title: "마케팅 정보 수신 동의",
    label: "마케팅 정보 수신 동의",
    required: false,
    content: [
      {
        heading: "수신 항목",
        body: "이벤트, 혜택, 서비스 업데이트 등 마케팅 정보를 앱 알림 또는 이메일 등으로 받을 수 있습니다.",
      },
      {
        heading: "동의 철회",
        body: "마케팅 정보 수신 동의는 언제든지 설정 화면에서 철회할 수 있습니다.",
      },
    ],
  },
] as const;

export type TermId = (typeof TERMS)[number]["id"];

export const findTermById = (termId: string) => {
  return TERMS.find((term) => term.id === termId);
};
