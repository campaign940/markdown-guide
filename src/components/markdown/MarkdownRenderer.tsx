'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import rehypeHighlight from 'rehype-highlight'
import { cn } from '@/lib/utils'
import CodeBlock from './CodeBlock'

interface MarkdownRendererProps {
  content: string
  className?: string
}

export default function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  return (
    <div
      className={cn(
        'prose prose-lg dark:prose-invert max-w-none',
        'prose-headings:scroll-mt-20',
        'prose-pre:bg-gray-900 prose-pre:text-gray-100',
        'dark:prose-pre:bg-gray-950',
        className
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[
          rehypeRaw,
          rehypeSanitize,
          rehypeKatex,
          rehypeHighlight,
        ]}
        components={{
          // 코드 블록
          code: CodeBlock,
          // 헤딩에 ID 추가 (목차 링크용)
          h1: ({ children, ...props }) => {
            const id = String(children)
              .toLowerCase()
              .replace(/[^\w\s가-힣-]/g, '')
              .replace(/\s+/g, '-')
            return <h1 id={id} {...props}>{children}</h1>
          },
          h2: ({ children, ...props }) => {
            const id = String(children)
              .toLowerCase()
              .replace(/[^\w\s가-힣-]/g, '')
              .replace(/\s+/g, '-')
            return <h2 id={id} {...props}>{children}</h2>
          },
          h3: ({ children, ...props }) => {
            const id = String(children)
              .toLowerCase()
              .replace(/[^\w\s가-힣-]/g, '')
              .replace(/\s+/g, '-')
            return <h3 id={id} {...props}>{children}</h3>
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
