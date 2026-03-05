'use client';

import { useParams } from 'next/navigation';
import { diaryEntries } from '../../data/content';
import Link from 'next/link';

export default function DiaryDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  const entry = diaryEntries.find(e => e.id === id);
  
  if (!entry) {
    return (
      <div className="min-h-screen bg-[#FDF6F0] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">日记不存在</h1>
          <Link href="/diary" className="text-[#E85A4F] hover:underline">
            ← 返回日记列表
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
          <Link href="/diary" className="text-[#E85A4F] hover:underline mb-4 inline-block">
            ← 返回日记列表
          </Link>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-4xl">🐯</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Day {entry.day}: {entry.title}
              </h1>
              <p className="text-gray-500 mt-1">{entry.date}</p>
            </div>
          </div>
          {entry.tag && (
            <span className="inline-block mt-3 bg-[#E85A4F]/10 text-[#E85A4F] px-3 py-1 rounded-full text-sm">
              {entry.tag}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
          {entry.image && (
            <img 
              src={entry.image} 
              alt={entry.title}
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
          )}
          
          <p className="text-xl text-gray-600 italic mb-8 border-l-4 border-[#E85A4F] pl-4">
            {entry.subtitle}
          </p>

          {entry.content ? (
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-strong:text-[#E85A4F] prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded"
              dangerouslySetInnerHTML={{ 
                __html: entry.content
                  .replace(/## (.*)/g, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>')
                  .replace(/\n/g, '<br/>')
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