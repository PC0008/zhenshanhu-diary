'use client';

import { useState } from 'react';
import Link from 'next/link';
import { articles, hotArticles, categoryStats } from '../data/content';

export default function ArticlesPage() {
  const [selectedTag, setSelectedTag] = useState<string>('全部');
  
  const allTags = ['全部', '模型对比', '多Agent', 'OpenClaw', '踩坑', '权限', '最佳实践'];
  
  const filteredArticles = selectedTag === '全部' 
    ? articles 
    : articles.filter(article => article.tags.includes(selectedTag));

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Articles List */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-text-primary flex items-center gap-2">
                <span>📝</span>
                经验分享
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2 py-1 bg-coral text-white text-xs rounded-pill">AI精选</span>
                <span className="px-2 py-1 bg-cream-light text-text-secondary text-xs rounded-pill">持续更新</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="搜索文章标题、标签..."
                className="w-full px-4 py-3 pl-11 bg-white rounded-card shadow-card focus:outline-none focus:ring-2 focus:ring-coral/30 text-sm"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">🔍</span>
            </div>

            {/* Category Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-pill text-xs font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-coral text-white'
                      : 'bg-white text-text-secondary hover:bg-cream-light'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <p className="text-sm text-text-secondary mb-4">共 {filteredArticles.length} 篇文章</p>

            {/* Articles List */}
            <div className="space-y-4">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 p-5 group cursor-pointer block"
                >
                  {/* Source & Date */}
                  <div className="flex items-center gap-3 text-xs text-text-secondary mb-3">
                    <span className="px-2 py-0.5 bg-cream-light rounded text-coral font-medium">
                      {article.source}
                    </span>
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-text-primary group-hover:text-coral transition-colors mb-2">
                    {article.title}
                  </h2>

                  {/* Summary */}
                  <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                    {article.summary}
                  </p>

                  {/* Tags & Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`text-xs ${
                              i < article.rating ? 'text-yellow-400' : 'text-gray-200'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-coral text-sm font-medium group-hover:translate-x-1 transition-transform">
                        阅读原文 →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Hot Articles */}
            <div className="bg-white rounded-card shadow-card p-5">
              <h3 className="font-bold text-text-primary flex items-center gap-2 mb-4">
                <span className="text-coral">🔥</span>
                热门文章
              </h3>
              <div className="space-y-3">
                {hotArticles.map((article, idx) => (
                  <Link
                    key={article.id}
                    href={`/articles/${article.id}`}
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded flex items-center justify-center text-xs font-bold ${
                        idx < 3
                          ? 'bg-coral text-white'
                          : 'bg-cream-light text-text-secondary'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-text-primary group-hover:text-coral transition-colors line-clamp-2">
                        {article.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Category Stats */}
            <div className="bg-white rounded-card shadow-card p-5">
              <h3 className="font-bold text-text-primary flex items-center gap-2 mb-4">
                <span className="text-yellow-500">📊</span>
                分类统计
              </h3>
              <div className="space-y-3">
                {categoryStats.map((stat) => (
                  <div key={stat.name} className="flex items-center gap-3">
                    <span className="text-sm text-text-secondary w-20">{stat.name}</span>
                    <div className="flex-1 h-2 bg-cream-light rounded-full overflow-hidden">
                      <div
                        className={`h-full ${stat.color} rounded-full`}
                        style={{ width: `${(stat.count / 30) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-text-secondary w-8 text-right">
                      {stat.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-card shadow-card p-5">
              <h3 className="font-bold text-text-primary flex items-center gap-2 mb-4">
                <span className="text-orange-500">🏷️</span>
                热门标签
              </h3>
              <div className="flex flex-wrap gap-2">
                {['OpenClaw', '多Agent', '模型对比', '团队协作'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-cream-light text-text-secondary text-xs rounded-pill hover:bg-coral hover:text-white transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}