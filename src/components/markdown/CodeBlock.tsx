'use client'

import { CopyButton } from '@/components/ui/CopyButton'
import MermaidDiagram from './MermaidDiagram'

interface CodeBlockProps {
  inline?: boolean
  className?: string
  children?: React.ReactNode
}

export default function CodeBlock({
  inline,
  className,
  children,
  ...props
}: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className || '')
  const language = match ? match[1] : ''
  const code = String(children).replace(/\n$/, '')

  // Mermaid 다이어그램 처리
  if (language === 'mermaid' && !inline) {
    return <MermaidDiagram chart={code} />
  }

  // 인라인 코드
  if (inline) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }

  // 코드 블록
  return (
    <div className="relative group my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900 rounded-t-lg border-b border-gray-700">
        <span className="text-sm font-mono text-gray-300">
          {language || 'plaintext'}
        </span>
        <CopyButton code={code} />
      </div>
      <pre className="!mt-0 !rounded-t-none overflow-x-auto">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    </div>
  )
}
