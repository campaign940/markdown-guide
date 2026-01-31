# 마크다운 문법 가이드

Next.js 15 기반의 포괄적인 마크다운 문법 가이드 웹사이트입니다.

## 기능

- ✅ 전체 마크다운 문법 렌더링 (GitHub Flavored Markdown)
- ✅ 코드 하이라이팅 (JavaScript, Python, TypeScript 등)
- ✅ Mermaid 다이어그램 렌더링
- ✅ LaTeX 수식 렌더링 (KaTeX)
- ✅ 다크 모드 지원
- ✅ 반응형 디자인
- ✅ 목차 자동 생성 및 스크롤 스파이
- ✅ 코드 복사 버튼

## 기술 스택

- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS + @tailwindcss/typography
- **마크다운**: react-markdown, remark-gfm, rehype plugins
- **다크모드**: next-themes
- **아이콘**: lucide-react

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 프로덕션 빌드

```bash
npm run build
npm run start
```

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx              # 루트 레이아웃
│   ├── page.tsx                # 메인 페이지
│   └── globals.css             # 전역 스타일
├── components/
│   ├── markdown/
│   │   ├── MarkdownRenderer.tsx    # 마크다운 렌더러
│   │   ├── CodeBlock.tsx           # 코드 블록
│   │   ├── MermaidDiagram.tsx      # Mermaid 다이어그램
│   │   └── TableOfContents.tsx     # 목차
│   ├── layout/
│   │   ├── Header.tsx              # 헤더
│   │   └── Footer.tsx              # 푸터
│   └── ui/
│       ├── ThemeToggle.tsx         # 다크모드 토글
│       └── CopyButton.tsx          # 복사 버튼
├── lib/
│   └── utils.ts                # 유틸리티 함수
└── content/
    └── markdown-guide.md       # 마크다운 가이드 콘텐츠
```

## 마크다운 콘텐츠 수정

`src/content/markdown-guide.md` 파일을 수정하여 가이드 내용을 변경할 수 있습니다.

## 배포

### Vercel (권장)

1. Vercel 계정 생성/로그인
2. GitHub 저장소 연결
3. 자동 배포 설정

또는 Vercel CLI 사용:

```bash
npm i -g vercel
vercel
```

## 라이선스

ISC

## 제작

Made with Next.js 15 and ❤️
