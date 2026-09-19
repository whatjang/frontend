# Whatjang

강원도 전통시장과 오일장의 장날, 먹거리, 주변 관광 정보를 연결하는 로컬 장터 여행 서비스입니다.

사용자의 **위치와 방문 날짜**를 기반으로 시장을 탐색하고,
시장 상세 정보부터 먹거리 트렌드와 주변 관광지까지 하나의 흐름으로 제공합니다.

[서비스 바로가기](https://whatjang.vercel.app)

---

## Features

### Market

- 전통시장 목록 및 키워드 검색
- 현재 위치 기반 가까운 시장 탐색
- 시장별 장날, 대표 상품, 편의시설 및 상세 정보 조회
- 시장 즐겨찾기 및 마이페이지 연동

### Market Calendar

- 월 / 주 단위 장날 캘린더
- 날짜별 운영 시장 조회
- 선택 날짜와 시장 목록 연동

### Weekly Curation

- 주간 먹거리 트렌드 API 연동
- 검색 · 쇼핑 증가율 및 주요 지표 제공
- 데이터 출처와 수집 상태 표시
- 트렌드 기반 추천 시장 제공
- 홈과 트렌드 페이지 간 인사이트 연동

### Local Tour

- 시장 주변 음식점 · 관광지 · 카페 조회
- Kakao Maps 기반 장소 탐색
- 장소 목록과 지도 선택 상태 연동

### Authentication

- Kakao OAuth 로그인
- 회원 온보딩 상태 기반 접근 제어
- Access Token 자동 갱신 및 인증 요청 재처리

---

## Engineering Highlights

### Server State Management

TanStack Query로 서버 상태를 관리하고,
Zustand는 인증 및 회원 정보 등 클라이언트 전역 상태에 사용합니다.

Query Key에 검색 조건, 위치, 날짜 등을 포함해 조건별 캐시를 관리하며,
주간 큐레이션은 홈과 트렌드 페이지에서 동일한 캐시를 공유합니다.

### Authentication Flow

Axios Interceptor에서 인증 헤더 추가, `401` 처리, Token Refresh 및 요청 재시도를 공통화했습니다.

여러 요청에서 동시에 Access Token이 만료되더라도
하나의 Refresh 요청을 공유해 **중복 토큰 갱신을 방지**합니다.

```text id="5fakri"
API Requests
     │
     ▼
401 Unauthorized
     │
     ▼
Single Token Refresh
     │
     ▼
Access Token Update
     │
     ▼
Request Retry
```

### Data Fetching & Pagination

시장 목록과 검색 결과는 **TanStack Infinite Query** 기반으로 조회합니다.

`IntersectionObserver`를 활용한 무한 스크롤과 Debounce 검색을 적용해
불필요한 요청을 줄였습니다.

### Shared Map Component

시장 상세와 관광 기능의 지도 로직을 공통 `KakaoMap` 컴포넌트로 분리했습니다.

```text id="8jhgak"
Market Detail ─┐
               ├── KakaoMap
Local Tour ────┘
```

SDK Loading, Marker, Overlay, 지도 중심 이동 등의 공통 동작을 하나의 컴포넌트에서 관리합니다.

### PWA & Runtime Caching

모바일 환경을 고려해 PWA와 Workbox Runtime Cache를 적용했습니다.

- 정적 이미지 및 폰트 캐싱
- GET API Network First 전략
- Offline Fallback
- Standalone App 지원

---

## Tech Stack

| Category     | Stack                          |
| ------------ | ------------------------------ |
| Framework    | Next.js 16 · App Router        |
| UI           | React 19                       |
| Language     | TypeScript 5                   |
| Styling      | Tailwind CSS 4                 |
| Server State | TanStack Query 5               |
| Client State | Zustand 5                      |
| HTTP Client  | Axios                          |
| Map          | Kakao Maps SDK                 |
| PWA          | @ducanh2912/next-pwa · Workbox |
| CI/CD        | GitHub Actions · Vercel        |

---

## Architecture

```text id="gyzcrs"
                         Next.js App Router
                                │
                ┌───────────────┴───────────────┐
                │                               │
         TanStack Query                      Zustand
          Server State                    Client State
                │
         Hooks / Services
                │
            Domain API
                │
            Axios Client
                │
      Auth / Refresh / Error
                │
           Backend API
```

---

## Project Structure

```text id="4ozcfe"
src/
├── app/          # App Router 기반 페이지 및 페이지 전용 UI
├── components/   # 여러 화면에서 재사용하는 공통 UI
├── hooks/        # 공통 Hook 및 Query 로직
├── lib/
│   ├── api/      # API Client 및 도메인 API
│   ├── browser/  # Geolocation 등 Browser API
│   └── kakao/    # Kakao 연동
├── providers/    # Global Provider
├── services/     # 공통 데이터 가공 로직
├── stores/       # Zustand 기반 Client State
├── types/        # API / Domain Type
├── utils/        # 공통 Utility
├── constants/    # 공통 상수
├── styles/       # Theme / Animation
└── mocks/        # API 미연동 영역 Mock Data
```

페이지 전용 컴포넌트와 Hook은 해당 Route에 배치하고,
여러 화면에서 재사용되는 로직만 공통 영역으로 분리합니다.

---

## CI/CD

GitHub Actions를 기반으로 코드 검증과 Vercel 배포를 자동화했습니다.

```text id="q0qkm7"
                         GitHub Repository
                                │
               ┌────────────────┴────────────────┐
               │                                 │
         Pull Request                          Push
               │                                 │
               ▼                   ┌─────────────┴─────────────┐
        npm run check              │                           │
               │                develop                      main
               ▼                   │                           │
       TypeScript Check            ▼                           ▼
       ESLint / Prettier      Vercel Preview             Vercel Production
               │
               ▼
        Next.js Build
```

---

<details>
<summary><strong>Getting Started</strong></summary>

### Requirements

- Node.js 22
- npm

### Installation

```bash id="bx3ynf"
git clone https://github.com/whatjang/frontend.git

cd frontend

nvm use
npm install
npm run dev
```

개발 서버:

```text id="kqcey5"
http://localhost:3000
```

### Environment Variables

```bash id="1fy0wa"
cp .env.example .env.local
```

```env id="4ijtv6"
NEXT_PUBLIC_KAKAO_REST_API_KEY=
NEXT_PUBLIC_KAKAO_MAP_KEY=
NEXT_PUBLIC_API_BASE_URL=
```

### Validation

```bash id="sppdd8"
npm run check
npm run build:only
```

</details>

---

<details>
<summary><strong>Development Convention</strong></summary>

### Branch

```text id="zx4cqz"
feature/{name}-{description}#{issue}
```

예시:

```text id="0vvw28"
feature/sheepyis-weekly-curation#106
```

### Commit

```text id="zs77j3"
{emoji} {Type}: {description}
```

예시:

```text id="j0oaog"
✨ Feat: 주간 먹거리 트렌드 API 연동
🐛 Fix: 시장 검색 오류 수정
♻️ Refactor: 시장 조회 로직 개선
🎨 Design: 시장 검색 결과 UI 개선
📝 Docs: README 업데이트
```

기능 개발은 `develop` 브랜치를 기준으로 진행하고,
작업 완료 후 Pull Request를 통해 반영합니다.

</details>
