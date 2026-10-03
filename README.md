# Whatjang

강원도 전통시장과 오일장의 장날, 먹거리, 주변 관광 정보를 연결하는 로컬 장터 여행 서비스입니다.

사용자의 **위치와 방문 날짜**를 기반으로 시장을 탐색하고,
시장 상세 정보부터 먹거리 트렌드, 현장 제보, 주변 관광지와 길찾기까지 하나의 흐름으로 제공합니다.

[서비스 바로가기](https://whatjang.vercel.app)

---

## Features

### Market

- 전통시장 목록 및 키워드 검색
- 현재 위치 기반 가까운 시장 탐색 및 거리 정보 제공
- 시장별 장날, 대표 이미지, 대표 상품, 편의시설 및 상세 정보 조회
- 시장 상세 내 현장 제보 목록 조회
- 시장 즐겨찾기 및 마이페이지 연동

### Market Calendar

- 홈에서 오늘 열리는 시장 탐색
- 월 / 주 단위 장날 캘린더
- 날짜별 운영 시장 조회
- 선택 날짜와 시장 목록 연동

### Weekly Curation

- 주간 먹거리 트렌드 조회
- 검색 · 쇼핑 증가율 및 주요 지표 제공
- 데이터 출처 및 수집 상태 표시
- 트렌드 기반 추천 시장 제공
- 홈에서 선택한 트렌드와 상세 인사이트 연동

### Report

- 시장 이용자 제보 등록 · 조회 · 삭제
- 최대 3장의 제보 이미지 첨부
- 시장명 키워드 및 제보 카테고리 기반 피드 필터링
- 제보 피드 이미지 그리드 및 상세 이미지 캐러셀 제공
- 제보 상세 댓글 · 대댓글 조회, 등록 및 삭제
- 도움됨 · 잘못된 정보 사용자 반응 등록 · 변경 · 취소
- 제보 북마크 등록 · 해제
- 시장 상세 내 제보 목록 연동
- 마이페이지 내 제보 · 북마크 제보 조회 및 페이지 탐색

### Local Tour

- 시장 주변 음식점 · 관광지 · 카페 조회
- Kakao Maps 기반 장소 탐색
- 장소 목록과 지도 선택 상태 연동
- 주변 장소 상세 정보 조회
- 운영시간, 휴무일, 주차, 메뉴, 전화번호 및 홈페이지 정보 제공
- 현재 위치 기반 도보 · 자전거 길찾기
- Kakao Maps 길찾기 연동

### Authentication

- Kakao OAuth 로그인
- 회원 온보딩 상태 기반 접근 제어
- 인증 요청의 Access Token 자동 첨부
- Access Token 만료 시 자동 갱신 및 기존 요청 재처리

---

## Engineering Highlights

### 1. Server State & Cache Synchronization

TanStack Query를 기반으로 서버 상태를 관리하고,
Zustand는 인증과 회원 정보 등 클라이언트 전역 상태에 사용합니다.

Query Key에 검색 조건, 위치, 날짜, 카테고리 등을 포함해
동일한 데이터라도 조회 조건별로 독립적인 캐시를 관리합니다.

공통 Query 설정에서는 `staleTime`을 1분으로 두고
`refetchOnWindowFocus`를 비활성화해 불필요한 재요청을 줄였습니다.

제보 등록 · 삭제, 사용자 반응, 북마크, 댓글 등의 상태 변경 후에는
관련 Query Cache를 함께 갱신해 피드 · 상세 · 시장 상세 · 마이페이지 간 상태를 동기화합니다.

### 2. API Client & Authentication

Axios 기반 공통 API Client에서 인증과 오류 처리를 관리합니다.

- 인증 요청에 Access Token 자동 추가
- 인증이 필요하지 않은 요청 분리
- `401 Unauthorized` 응답 시 Token Refresh
- Refresh 성공 후 기존 요청 자동 재시도
- Refresh 실패 시 인증 상태 초기화
- API 오류를 공통 `ApiError` 형태로 변환

여러 요청에서 동시에 Access Token이 만료되더라도
하나의 Refresh Promise를 공유해 **중복 토큰 갱신 요청을 방지**합니다.

```text
API Requests
     │
     ▼
401 Unauthorized
     │
     ▼
Shared Token Refresh
     │
     ▼
Access Token Update
     │
     ▼
Request Retry
```

### 3. Data Fetching & Request Optimization

시장 목록, 제보 피드, 마이페이지 제보 목록은
TanStack Query를 기반으로 필요한 시점에 데이터를 점진적으로 조회합니다.

시장 목록과 제보 피드는 `IntersectionObserver` 기반 무한 스크롤을 적용하고,
마이페이지의 내 제보 · 북마크 제보는 데이터를 추가 조회하면서
3개 단위 페이지 탐색 UI로 제공합니다.

검색 입력에는 Debounce를 적용해
사용자가 입력하는 동안 발생하는 불필요한 API 요청을 줄였습니다.

관광지 길찾기는 페이지 진입 시 요청하지 않고
사용자가 길찾기 버튼을 선택한 시점에만 현재 위치와 경로 API를 요청합니다.

### 4. Shared Kakao Map

시장 상세와 관광 기능에서 사용하는 지도 로직을
공통 `KakaoMap` 컴포넌트로 분리했습니다.

```text
Market Detail ─┐
               ├── KakaoMap
Local Tour ────┘
```

Kakao Maps SDK Loading, Marker, Custom Overlay,
선택 Marker 표시와 지도 중심 이동 등의 동작을 공통 컴포넌트에서 관리합니다.

### 5. PWA & Runtime Caching

모바일 환경을 고려해 PWA와 Workbox Runtime Cache를 적용했습니다.

| Resource     | Strategy               |
| ------------ | ---------------------- |
| Font         | Cache First            |
| Static Image | Stale While Revalidate |
| GET API      | Network First          |
| Document     | Offline Fallback       |

GET API는 네트워크 응답을 우선 사용하고,
일시적인 네트워크 문제 발생 시 캐시된 데이터를 활용합니다.

이미지는 캐시된 리소스를 우선 표시하면서
백그라운드에서 새로운 데이터를 갱신합니다.

또한 Web App Manifest와 Service Worker를 통해
Standalone App 및 Offline Fallback을 지원합니다.

---

## Tech Stack

| Category     | Stack                             |
| ------------ | --------------------------------- |
| Framework    | Next.js 16.2.9 · App Router       |
| UI           | React 19.2.4                      |
| Language     | TypeScript 5                      |
| Styling      | Tailwind CSS 4                    |
| Server State | TanStack Query 5                  |
| Client State | Zustand 5                         |
| HTTP Client  | Axios                             |
| Map          | react-kakao-maps-sdk · Kakao Maps |
| PWA          | @ducanh2912/next-pwa · Workbox    |
| CI/CD        | GitHub Actions · Vercel           |

---

## Architecture

```text
                      Next.js App Router
                             │
                    Page / Components
                             │
              ┌──────────────┴──────────────┐
              │                             │
         Query Hooks                     Zustand
              │                       Client State
       ┌──────┴───────┐
       │              │
   Services       Domain API
  (when needed)       ▲
       │              │
       └──────────────┘
              │
         Axios Client
              │
   ┌──────────┼───────────┐
   │          │           │
 Auth     Token Refresh  ApiError
   │          │           │
   └──────────┴───────────┘
              │
         Backend API
```

단순 API 요청은 Query Hook에서 Domain API를 직접 사용하고,
여러 API의 조합이나 데이터 가공이 필요한 경우에만 Service 계층을 사용합니다.

---

## Project Structure

```text
src/
├── app/          # App Router 기반 페이지 및 페이지 전용 UI / Hook
├── components/   # 여러 화면에서 재사용하는 공통 UI
├── constants/    # 공통 상수 및 UI 설정
├── hooks/        # 공통 Hook 및 Query 로직
├── lib/
│   ├── api/      # API Client 및 도메인별 API
│   ├── browser/  # Geolocation 등 Browser API
│   └── kakao/    # Kakao 연동
├── mocks/        # 개발용 Mock / 정적 데이터
├── providers/    # Global Provider
├── services/     # API 조합 및 도메인 데이터 가공 로직
├── stores/       # Zustand 기반 Client State
├── styles/       # Theme / Animation
├── types/        # API / Domain Type
└── utils/        # 공통 Utility
```

페이지 전용 컴포넌트와 Hook은 해당 Route 내부에 배치하고,
여러 화면에서 실제로 재사용되는 로직만 공통 영역으로 분리합니다.

---

## CI/CD

GitHub Actions와 Vercel CLI를 기반으로
코드 검증과 Preview / Production 배포를 자동화했습니다.

```text
Pull Request
develop / main
     │
     ▼
     CI
     │
     ├── npm ci
     ├── TypeScript Check
     ├── ESLint
     ├── Prettier Check
     └── Next.js Build


Push develop ────────► Vercel Preview

Push main ───────────► Vercel Production
```

`npm run check`에서 TypeScript, ESLint, Prettier 검증을 수행하고
CI에서 Next.js Build까지 완료되어야 코드 검증이 완료됩니다.

---

<details>
<summary><strong>Getting Started</strong></summary>

### Requirements

- Node.js 22
- npm

### Installation

```bash
git clone https://github.com/whatjang/frontend.git

cd frontend

nvm use
npm install
npm run dev
```

개발 서버:

```text
http://localhost:3000
```

### Environment Variables

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_KAKAO_REST_API_KEY=
NEXT_PUBLIC_KAKAO_MAP_KEY=
NEXT_PUBLIC_API_BASE_URL=
```

### Validation

```bash
npm run check
npm run build:only
```

</details>

---

<details>
<summary><strong>Development Convention</strong></summary>

### Branch

```text
{type}/{name}-{description}#{issue}
```

주요 Branch Type:

```text
feature
fix
refactor
```

예시:

```text
feature/sheepyis-weekly-curation#106
fix/sheepyis-tour-detail-multi-info-ui#157
refactor/sheepyis-market-card-link#155
```

### Commit

```text
{emoji} {Type}: {description}
```

예시:

```text
✨ Feat: 주간 먹거리 트렌드 API 연동
🐛 Fix: 관광지 상세 정보 UI 수정
♻️ Refactor: 시장 조회 로직 개선
🎨 Design: 제보 카테고리 태그 UI 통일
🔥 Delete: 미사용 시장 제보 타입 제거
📝 Docs: README 업데이트
🚀 Release: 프론트 주요 기능 반영
```

기능 개발은 `develop` 브랜치를 기준으로 진행하고,
작업 완료 후 Pull Request를 통해 반영합니다.

</details>
