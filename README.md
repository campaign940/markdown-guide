# 📝 마크다운 문법 가이드

> 모든 마크다운 문법을 한눈에 배울 수 있는 인터랙티브 웹 가이드

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=flat-square)](https://opensource.org/licenses/ISC)

## 🌟 프로젝트 소개

마크다운 문법 가이드는 마크다운의 모든 문법을 실시간으로 확인하고 학습할 수 있는 웹 애플리케이션입니다. 기본 문법부터 고급 기능(Mermaid 다이어그램, LaTeX 수식)까지 한 페이지에서 모두 학습할 수 있습니다.

### ✨ 주요 특징

- **📚 완전한 마크다운 문법 지원**
  - GitHub Flavored Markdown (GFM) 완벽 지원
  - 제목, 강조, 목록, 링크, 이미지, 인용문, 코드, 표, 체크박스
  - 각주(Footnotes), 참조 링크, 앵커 링크

- **🎨 고급 기능**
  - 🖼️ Mermaid 다이어그램 (플로우차트, 시퀀스, 클래스, 상태, 간트, 파이 차트)
  - 🔢 LaTeX 수식 렌더링 (인라인 & 블록)
  - 🎯 구문 강조 코드 블록 (JavaScript, Python, TypeScript 등)
  - 📋 원클릭 코드 복사 버튼

- **🎯 사용자 경험**
  - 🌓 다크 모드 / 라이트 모드 전환
  - 📱 완벽한 반응형 디자인 (모바일/태블릿/데스크탑)
  - 🧭 자동 목차 생성 + 스크롤 스파이
  - ⚡ 부드러운 스크롤 애니메이션

- **⚙️ 개발자 친화적**
  - TypeScript로 타입 안전성 보장
  - Server Components 활용으로 최적화된 성능
  - SEO 최적화
  - 접근성(A11y) 준수

## 🚀 빠른 시작

### 필수 요구사항

- Node.js 18.17 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/campaign940/markdown-guide.git
cd markdown-guide

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3004](http://localhost:3004)를 열어 확인하세요.

### 프로덕션 빌드

```bash
# 프로덕션 빌드 생성
npm run build

# 프로덕션 서버 실행
npm run start
```

## 📂 프로젝트 구조

```
markdown-guide/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # 루트 레이아웃, 테마 프로바이더
│   │   ├── page.tsx                # 메인 페이지
│   │   └── globals.css             # 전역 스타일
│   ├── components/
│   │   ├── markdown/
│   │   │   ├── MarkdownRenderer.tsx    # 마크다운 렌더링 엔진
│   │   │   ├── CodeBlock.tsx           # 코드 블록 + 복사 버튼
│   │   │   ├── MermaidDiagram.tsx      # Mermaid 다이어그램
│   │   │   └── TableOfContents.tsx     # 목차 + 스크롤 스파이
│   │   ├── layout/
│   │   │   ├── Header.tsx              # 헤더 컴포넌트
│   │   │   └── Footer.tsx              # 푸터 컴포넌트
│   │   └── ui/
│   │       ├── ThemeToggle.tsx         # 다크모드 토글
│   │       └── CopyButton.tsx          # 복사 버튼
│   ├── lib/
│   │   └── utils.ts                # 유틸리티 함수
│   └── content/
│       └── markdown-guide.md       # 마크다운 가이드 콘텐츠
├── public/                         # 정적 파일
├── next.config.ts                  # Next.js 설정
├── tailwind.config.ts              # Tailwind CSS 설정
└── package.json                    # 프로젝트 의존성
```

## 🛠️ 기술 스택

### 프레임워크 & 라이브러리

- **[Next.js 15](https://nextjs.org/)** - React 프레임워크 (App Router)
- **[React 18](https://reactjs.org/)** - UI 라이브러리
- **[TypeScript](https://www.typescriptlang.org/)** - 타입 안전성

### 스타일링

- **[Tailwind CSS 3](https://tailwindcss.com/)** - 유틸리티 기반 CSS 프레임워크
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** - 마크다운 prose 스타일링

### 마크다운 렌더링

- **[react-markdown](https://github.com/remarkjs/react-markdown)** - 마크다운 렌더러
- **[remark-gfm](https://github.com/remarkjs/remark-gfm)** - GitHub Flavored Markdown
- **[remark-math](https://github.com/remarkjs/remark-math)** - LaTeX 수식 파싱
- **[rehype-katex](https://github.com/remarkjs/remark-math/tree/main/packages/rehype-katex)** - KaTeX 렌더링
- **[rehype-raw](https://github.com/rehypejs/rehype-raw)** - HTML 태그 지원
- **[rehype-sanitize](https://github.com/rehypejs/rehype-sanitize)** - XSS 방지
- **[rehype-highlight](https://github.com/rehypejs/rehype-highlight)** - 코드 구문 강조

### 고급 기능

- **[Mermaid](https://mermaid.js.org/)** - 다이어그램 생성
- **[KaTeX](https://katex.org/)** - LaTeX 수식 렌더링
- **[highlight.js](https://highlightjs.org/)** - 코드 하이라이팅
- **[next-themes](https://github.com/pacocoursey/next-themes)** - 다크모드 지원
- **[lucide-react](https://lucide.dev/)** - 아이콘 라이브러리

## 🎨 주요 기능 상세

### 1. 마크다운 렌더링

`react-markdown`을 기반으로 모든 표준 마크다운 문법과 GitHub Flavored Markdown을 지원합니다.

```tsx
// src/components/markdown/MarkdownRenderer.tsx
<ReactMarkdown
  remarkPlugins={[remarkGfm, remarkMath]}
  rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeKatex, rehypeHighlight]}
>
  {content}
</ReactMarkdown>
```

### 2. 코드 블록

구문 강조, 언어 표시, 원클릭 복사 기능을 제공합니다.

- 30개 이상의 프로그래밍 언어 지원
- Mermaid 코드 블록 자동 감지 및 다이어그램 렌더링
- 다크모드에 맞춘 테마 자동 전환

### 3. Mermaid 다이어그램

6가지 다이어그램 타입 지원:
- 플로우차트 (Flowchart)
- 시퀀스 다이어그램 (Sequence Diagram)
- 클래스 다이어그램 (Class Diagram)
- 상태 다이어그램 (State Diagram)
- 간트 차트 (Gantt Chart)
- 파이 차트 (Pie Chart)

### 4. LaTeX 수식

KaTeX를 사용한 고품질 수학 수식 렌더링:
- 인라인 수식: `$E = mc^2$`
- 블록 수식: `$$...$$`

### 5. 다크 모드

`next-themes`를 사용한 매끄러운 테마 전환:
- 시스템 설정 자동 감지
- 사용자 선택 저장
- 모든 컴포넌트에 일관된 테마 적용

### 6. 목차 & 스크롤 스파이

Intersection Observer를 활용한 스마트 네비게이션:
- 자동 목차 생성 (H2, H3 헤딩)
- 현재 섹션 하이라이트
- 부드러운 스크롤 애니메이션

## 📱 반응형 디자인

모든 화면 크기에 최적화된 레이아웃:

- **모바일 (< 640px)**: 콘텐츠 전체 화면
- **태블릿 (640-1024px)**: 콘텐츠 + 토글 가능한 목차
- **데스크탑 (> 1024px)**: 콘텐츠 + 고정 사이드바 목차

## 🚢 배포

### Vercel (권장)

1. [Vercel](https://vercel.com)에 GitHub 계정으로 로그인
2. "New Project" 클릭
3. `campaign940/markdown-guide` 저장소 선택
4. 자동으로 빌드 및 배포

또는 Vercel CLI 사용:

```bash
npm i -g vercel
vercel
```

### 기타 플랫폼

Next.js는 다양한 플랫폼에서 배포 가능합니다:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Docker 컨테이너

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/deployment)를 참조하세요.

## 🤝 기여하기

기여를 환영합니다! 다음 방법으로 참여할 수 있습니다:

1. 이 저장소를 포크합니다
2. 새 브랜치를 만듭니다 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋합니다 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성합니다

### 커밋 컨벤션

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 업데이트
- `style`: 코드 포맷팅
- `refactor`: 코드 리팩토링
- `test`: 테스트 추가
- `chore`: 빌드 작업, 패키지 매니저 설정

## 📄 라이선스

이 프로젝트는 [ISC 라이선스](https://opensource.org/licenses/ISC) 하에 배포됩니다.

## 🙏 감사의 글

이 프로젝트는 다음 오픈소스 프로젝트들을 활용합니다:

- [Next.js](https://nextjs.org/) - Vercel
- [React](https://reactjs.org/) - Meta
- [Tailwind CSS](https://tailwindcss.com/) - Tailwind Labs
- [react-markdown](https://github.com/remarkjs/react-markdown) - remarkjs
- [Mermaid](https://mermaid.js.org/) - Mermaid
- [KaTeX](https://katex.org/) - Khan Academy

## 📧 연락처

프로젝트 관련 문의: [GitHub Issues](https://github.com/campaign940/markdown-guide/issues)

---

<div align="center">

**[⬆ 맨 위로 돌아가기](#-마크다운-문법-가이드)**

Made with ❤️ and Next.js

</div>
