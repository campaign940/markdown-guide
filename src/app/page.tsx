import { readFile } from 'fs/promises'
import { join } from 'path'
import MarkdownRenderer from '@/components/markdown/MarkdownRenderer'
import TableOfContents from '@/components/markdown/TableOfContents'

export default async function HomePage() {
  const filePath = join(process.cwd(), 'src/content/markdown-guide.md')
  const content = await readFile(filePath, 'utf-8')

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] xl:grid-cols-[1fr_250px] gap-8">
        {/* 메인 콘텐츠 */}
        <article className="max-w-4xl">
          <MarkdownRenderer content={content} />
        </article>

        {/* 오른쪽 목차 (데스크탑) */}
        <aside className="hidden lg:block">
          <TableOfContents content={content} />
        </aside>
      </div>
    </div>
  )
}
