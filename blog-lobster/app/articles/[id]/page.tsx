'use client';

import { useParams } from 'next/navigation';
import { articles } from '../../data/content';
import Link from 'next/link';

export default function ArticleDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  const article = articles.find(a => a.id === id);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-[#FDF6F0] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">文章不存在</h1>
          <Link href="/articles" className="text-[#E85A4F] hover:underline">
            ← 返回文章列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF6F0]">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/articles" className="text-[#E85A4F] hover:underline mb-4 inline-block">
            ← 返回文章列表
          </Link>
          <div className="mt-4">
            <div className="flex flex-wrap gap-2 mb-3">
              {article.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
              <span>·</span>
              <span className="text-[#E85A4F]">{article.source}</span>
              {article.rating && (
                <>
                  <span>·</span>
                  <span className="text-yellow-500">{'★'.repeat(article.rating)}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
          <p className="text-xl text-gray-600 italic mb-8 border-l-4 border-[#E85A4F] pl-4">
            {article.summary}
          </p>

          {article.content ? (
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-strong:text-[#E85A4F] prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg"
              dangerouslySetInnerHTML={{ 
                __html: article.content
                  .replace(/## (.*)/g, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
                  .replace(/### (.*)/g, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#E85A4F]">$1</strong>')
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>')
                  .replace(/```[\s\S]*?```/g, (match) => {
                    const code = match.replace(/```/g, '').trim();
                    return `<pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code>${code}</code></pre>`;
                  })
                  .replace(/\n/g, '<br/>')
                  .replace(/<br\/><pre/g, '<pre')
                  .replace(/<\/pre><br\/>/g, '</pre>')
              }}
            />
          ) : (
            <p className="text-gray-500 text-center py-8">
              内容正在整理中...
            </p>
          )}
        </div>
      </main>
    </div>
  );
}