'use client';

import { useState } from 'react';
import { skillDetails } from '../data/content';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SkillsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');

  const categories = ['全部', ...new Set(skillDetails.map(s => s.category))];
  
  const filteredSkills = selectedCategory === '全部' 
    ? skillDetails 
    : skillDetails.filter(s => s.category === selectedCategory);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF6F0]">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#E85A4F] mb-4">
            🛠️ 技能商店
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们用过的好用技能，一键复制配置，快速搭建你的 AI 团队
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#E85A4F] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{skill.name}</h3>
                      <span className="text-sm text-[#E85A4F] bg-[#E85A4F]/10 px-2 py-1 rounded-full">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-gray-600">{skill.description}</p>
              </div>

              {/* Features */}
              <div className="px-6 py-4 bg-gray-50">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">✨ 功能特性</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white px-2 py-1 rounded border border-gray-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Config Code */}
              <div className="px-6 py-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-gray-700">⚙️ 配置代码</h4>
                  <button
                    onClick={() => copyToClipboard(skill.configCode, `${skill.id}-config`)}
                    className={`text-xs px-3 py-1 rounded-full transition-all ${
                      copiedId === `${skill.id}-config`
                        ? 'bg-green-500 text-white'
                        : 'bg-[#E85A4F] text-white hover:bg-[#d54a3f]'
                    }`}
                  >
                    {copiedId === `${skill.id}-config` ? '✓ 已复制' : '📋 复制'}
                  </button>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-xs overflow-x-auto">
                  <code>{skill.configCode}</code>
                </pre>
              </div>

              {/* Install Command */}
              {skill.installCommand && (
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-700">📦 安装命令</h4>
                    <button
                      onClick={() => copyToClipboard(skill.installCommand!, `${skill.id}-cmd`)}
                      className={`text-xs px-3 py-1 rounded-full transition-all ${
                        copiedId === `${skill.id}-cmd`
                          ? 'bg-green-500 text-white'
                          : 'bg-[#E85A4F] text-white hover:bg-[#d54a3f]'
                      }`}
                    >
                      {copiedId === `${skill.id}-cmd` ? '✓ 已复制' : '📋 复制'}
                    </button>
                  </div>
                  <div className="bg-gray-800 text-gray-100 p-3 rounded-lg text-sm font-mono">
                    {skill.installCommand}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tip */}
        <div className="mt-12 bg-gradient-to-r from-[#E85A4F]/10 to-orange-100 rounded-2xl p-6 text-center">
          <p className="text-gray-700">
            💡 <strong>提示：</strong>将配置代码复制到 <code className="bg-white px-2 py-1 rounded">openclaw.json</code> 的 skills 部分，
            重启 Gateway 即可使用该技能
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}