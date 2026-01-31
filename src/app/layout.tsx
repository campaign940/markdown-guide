import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '마크다운 문법 가이드',
  description: '포괄적인 마크다운 문법 가이드 - 기본부터 고급까지 모든 것을 다룹니다',
  keywords: ['마크다운', 'Markdown', '가이드', '문법', '튜토리얼', 'Mermaid', 'LaTeX'],
  authors: [{ name: 'Markdown Guide' }],
  openGraph: {
    title: '마크다운 문법 가이드',
    description: '포괄적인 마크다운 문법 가이드',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
