# Whatjang Frontend

강원도 오일장과 전통시장의 장날, 시장 정보, 먹거리와 주변 관광 정보를 제공하는  
**로컬 장터 여행 서비스 `왓장(Whatjang)`의 Frontend Repository**입니다.

> 현재 개발 진행 중인 프로젝트로 일부 기능은 Mock 데이터를 사용하며 순차적으로 API를 연동하고 있습니다.

---

## 주요 기능

- 시장 검색 및 위치 기반 탐색
- 장날 캘린더 및 날짜별 운영 시장 조회
- 시장 상세 조회 및 즐겨찾기
- 카카오 로그인 및 회원 관리
- 시장 제보·관광·트렌드·공지 콘텐츠

---

## 기술 스택

| 구분 | 기술 |
| --- | --- |
| Framework | Next.js 16 |
| UI | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Server State | TanStack Query |
| Client State | Zustand |
| HTTP Client | Axios |
| Map | Kakao Maps SDK |
| PWA | next-pwa |
| CI/CD | GitHub Actions |
| Deployment | Vercel |

---

## 프로젝트 구조

```text
src/
├── app/          # App Router 기반 페이지 및 도메인 UI
├── components/   # 공통 컴포넌트
├── hooks/        # 공용 Hooks
├── lib/          # API Client 및 공통 모듈
├── mocks/        # Mock 데이터
├── providers/    # 전역 Provider
├── stores/       # 전역 Client State
├── types/        # 도메인 / API 타입
└── utils/        # 공통 유틸리티
```

화면 내부에서만 사용하는 컴포넌트와 Hook은 해당 App Router 경로에 배치하고,  
재사용되는 로직은 공용 영역으로 분리합니다.

---

## 개발 구조

- **TanStack Query**: 시장 검색, 상세, 캘린더, 즐겨찾기 등 서버 상태 관리
- **Zustand**: 인증 등 클라이언트 전역 상태 관리
- **Axios Client**: Authorization Header, Access Token 갱신 및 401 재요청 처리
- **next-pwa**: 이미지 / API 캐싱 및 오프라인 fallback 구성

---

## 시작하기

### 요구사항

- Node.js 22
- npm

```bash
nvm use
```

### 설치 및 실행

```bash
git clone https://github.com/whatjang/frontend.git
cd frontend

npm install
npm run dev
```

기본 실행 주소:

```text
http://localhost:3000
```

### 환경변수

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_KAKAO_REST_API_KEY=
NEXT_PUBLIC_KAKAO_MAP_KEY=
NEXT_PUBLIC_API_BASE_URL=
```

---

## Scripts

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 검사 후 Production Build |
| `npm run lint` | ESLint 검사 |
| `npm run format` | Prettier 적용 |
| `npm run type-check` | TypeScript 타입 검사 |
| `npm run check` | Type Check + ESLint + Prettier 검사 |

PR 생성 전:

```bash
npm run check
npm run build:only
```

---

## CI/CD

GitHub Actions를 통해 코드 검사 및 Vercel 배포를 자동화합니다.

```text
feature / fix / refactor
          ↓
       develop
          ↓
    Vercel Preview
          ↓
        main
          ↓
  Vercel Production
```

- `develop`, `main` 대상 PR에서 Type Check / ESLint / Prettier / Build 수행
- `develop` Push 시 Preview 배포
- `main` Push 시 Production 배포

---

## Commit Convention

```text
✨ Feat: 새로운 기능 추가
🐛 Fix: 버그 수정
♻️ Refactor: 코드 구조 개선
🎨 Design: UI / UX 변경
🔥 Delete: 불필요한 코드 및 파일 제거
⚙️ Chore: 설정 및 기타 작업
```
