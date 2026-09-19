# Whatjang Frontend

강원도 오일장과 전통시장의 장날, 시장 정보, 먹거리와 주변 관광 정보를 제공하는  
**로컬 장터 여행 서비스 `왓장(Whatjang)`의 Frontend Repository**입니다.

> 현재 개발 진행 중인 프로젝트이며, 주요 시장 기능은 실제 API와 연동되어 있습니다. 일부 제보·콘텐츠 영역은 Mock 데이터를 사용하며 순차적으로 전환하고 있습니다.

---

## 주요 기능

### 시장 탐색

- 전체 시장 기본 조회 및 무한 스크롤
- 시장명·지역·주소 기반 검색
- 위치 권한 허용 시 현재 위치 기준 거리순 조회
- 시장 상세 정보, 장날, 편의시설 및 대표 상품 확인
- 시장 즐겨찾기 등록·해제 및 마이페이지 조회

### 장날 정보

- 월별 장날 캘린더 조회
- 날짜별 운영 시장 목록 조회
- 다음 장날 및 오일장 주기 정보 제공

### 관광

- 관광 메뉴에서 시장 검색 후 주변 관광 정보로 이동
- 시장별 음식점·관광지·카페 조회
- 카카오맵 마커와 장소 목록 연동
- 장소 선택 시 지도 중심 이동 및 상세 정보 표시
- 시장 상세와 관광 화면에서 공통 지도 컴포넌트 사용

### 회원 / 기타

- 카카오 로그인 및 회원 온보딩
- Access Token 갱신 및 인증 상태 관리
- 마이페이지 즐겨찾기 시장 조회
- 시장 제보·트렌드·공지 콘텐츠 제공

---

## 기술 스택

| 구분         | 기술           |
| ------------ | -------------- |
| Framework    | Next.js 16     |
| UI           | React 19       |
| Language     | TypeScript 5   |
| Styling      | Tailwind CSS 4 |
| Server State | TanStack Query |
| Client State | Zustand        |
| HTTP Client  | Axios          |
| Map          | Kakao Maps SDK |
| PWA          | next-pwa       |
| CI/CD        | GitHub Actions |
| Deployment   | Vercel         |

---

## 프로젝트 구조

```text
src/
├── app/          # App Router 기반 페이지 및 도메인 UI
├── components/   # 여러 화면에서 재사용하는 공통 컴포넌트
├── constants/    # 메뉴, 카테고리 등 공통 상수
├── hooks/        # 공용 Hooks 및 Query 로직
├── lib/          # API Client, API 함수, 브라우저 유틸리티
├── mocks/        # API 미연동 영역의 Mock 데이터
├── providers/    # 전역 Provider
├── services/     # 화면 공통 데이터 가공 로직
├── stores/       # Zustand 기반 전역 Client State
├── styles/       # 전역 스타일
├── types/        # 도메인 및 API 타입
└── utils/        # 공통 유틸리티
```

화면 내부에서만 사용하는 컴포넌트와 Hook은 해당 App Router 경로에 배치하고,  
여러 화면에서 재사용하는 UI와 로직은 `components`, `hooks`, `services`로 분리합니다.

---

## 데이터 처리 구조

- **TanStack Query**: 시장 전체 조회, 검색, 상세, 캘린더, 즐겨찾기, 주변 관광 등 서버 상태 관리
- **Zustand**: 인증 및 회원 관련 클라이언트 전역 상태 관리
- **Axios Client**: 공통 Base URL, Authorization Header, Access Token 갱신 및 401 재요청 처리
- **Infinite Query**: 시장 목록과 검색 결과를 페이지 단위로 조회하고 무한 스크롤 처리
- **Kakao Maps SDK**: 시장 및 주변 장소 마커, 선택 위치 이동, 오버레이 표시
- **next-pwa**: 정적 리소스 및 API 캐싱, 오프라인 fallback 구성

시장 조회는 검색어 유무에 따라 API를 구분합니다.

```text
검색어 없음
→ GET /api/markets
→ 전체 시장 목록

검색어 있음
→ GET /api/markets/search
→ 검색 결과 목록
```

관광 및 제보 작성의 시장 선택 화면은 공통 시장 검색 컴포넌트를 사용합니다.

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

| 명령어                 | 설명                                |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | 개발 서버 실행                      |
| `npm run build`        | 검사 후 Production Build            |
| `npm run build:only`   | Production Build만 실행             |
| `npm run lint`         | ESLint 검사                         |
| `npm run lint:fix`     | ESLint 자동 수정                    |
| `npm run format`       | Prettier 적용                       |
| `npm run format:check` | Prettier 포맷 검사                  |
| `npm run type-check`   | TypeScript 타입 검사                |
| `npm run check`        | Type Check + ESLint + Prettier 검사 |

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
- `develop` Push 시 Vercel Preview 배포
- `main` Push 시 Vercel Production 배포

---

## Commit Convention

```text
✨ Feat: 새로운 기능 추가
🐛 Fix: 버그 수정
♻️ Refactor: 코드 구조 개선
🎨 Design: UI / UX 변경
🔥 Delete: 불필요한 코드 및 파일 제거
⚙️ Chore: 설정 및 기타 작업
📝 Docs: 문서 수정
```
