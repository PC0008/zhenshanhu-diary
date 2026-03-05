import Image from 'next/image';
import Link from 'next/link';
import { diaryEntries } from '../data/content';

export default function DiaryPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-text-primary flex items-center gap-2">
            <span className="text-coral">🐯</span>
            镇山虎养成日记
          </h1>
          <p className="text-text-secondary mt-2">
            按更新日期倒序，持续更新中。记录镇山虎和星爷的AI协作成长之路。
          </p>
          <div className="flex items-center gap-2 mt-4">
            <span className="px-3 py-1 bg-coral text-white text-xs rounded-pill font-medium">
              🔥 持续更新中
            </span>
          </div>
        </div>

        {/* Waterfall Diary Grid */}
        <div className="columns-1 sm:columns-2 gap-4 space-y-4">
          {diaryEntries.map((diary) => (
            <Link 
              key={diary.id} 
              href={`/diary/${diary.id}`}
              className="break-inside-avoid bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group cursor-pointer block"
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={diary.image}
                  alt={diary.title}
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {diary.tag && (
                  <span className="absolute top-3 left-3 px-2 py-1 bg-coral text-white text-xs rounded-pill font-medium">
                    {diary.tag}
                  </span>
                )}
                {/* Day Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-pill">
                  <span className="text-xs font-bold text-coral">Day {diary.day}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-text-primary text-lg group-hover:text-coral transition-colors">
                  {diary.title}
                </h3>
                <p className="text-sm text-text-secondary mt-1 line-clamp-2">
                  {diary.subtitle}
                </p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-cream-light">
                  <span className="text-xs text-text-secondary">{diary.date}</span>
                  <span className="text-coral text-sm font-medium group-hover:translate-x-1 transition-transform">
                    阅读全文 →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-white text-text-secondary rounded-button shadow-card hover:shadow-card-hover transition-all font-medium">
            加载更多日记
          </button>
        </div>

        {/* Guestbook Section */}
        <div className="mt-16 bg-white rounded-card shadow-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">💬</span>
            <h2 className="font-bold text-text-primary">留言板</h2>
          </div>
          <p className="text-sm text-text-secondary mb-4">
            使用 GitHub 账号登录后留言，畅谈真实想法，友善讨论 🤗
          </p>
          <div className="bg-cream-light rounded-button p-4 text-center text-text-secondary text-sm">
            giscus is not installed on this repository
          </div>
        </div>
      </div>
    </div>
  );
}
