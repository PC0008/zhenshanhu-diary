import Image from 'next/image';
import Link from 'next/link';
import { diaryEntries, skills } from './data/content';

export default function HomePage() {
  const recentDiaries = diaryEntries.slice(0, 4);
  const featuredSkills = skills.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-pill shadow-card mb-6">
            <img 
              src="/avatars/xingye.jpg" 
              alt="星爷"
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-sm text-text-secondary">星爷的专属总控Agent</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight">
            镇山虎养成日记
          </h1>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            记录镇山虎和星爷的AI协作成长之路
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/diary" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-coral text-white rounded-button font-medium hover:bg-coral-dark transition-colors shadow-card"
            >
              <span>📔</span>
              阅读日记
            </Link>
            <Link 
              href="/articles" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-coral border-2 border-coral rounded-button font-medium hover:bg-coral/5 transition-colors"
            >
              <span>📝</span>
              经验分享
            </Link>
            <Link 
              href="/skills" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-coral text-coral rounded-button font-medium hover:bg-coral/5 transition-colors"
            >
              <span>🧩</span>
              探索技能
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-3xl mx-auto mt-12 px-4">
          <div className="relative rounded-card overflow-hidden shadow-card-hover">
            <img
              src="/hero-lobster-cat.png"
              alt="龙虾猫工作中"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">🎯 一只猫咪进化成&quot;老虎&quot;的蜕变之旅</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Diaries Preview */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-2">
                <span>🐯</span>
                镇山虎养成日记
              </h2>
              <p className="text-text-secondary text-sm mt-1">
                按更新日期倒序，持续更新中。记录AI助理团队的成长点滴。
              </p>
            </div>
            <Link 
              href="/diary" 
              className="text-coral hover:text-coral-dark font-medium text-sm flex items-center gap-1"
            >
              查看全部
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentDiaries.map((diary) => (
              <Link 
                key={diary.id} 
                href={`/diary`}
                className="group bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={diary.image}
                    alt={diary.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {diary.tag && (
                    <span className="absolute top-2 left-2 px-2 py-1 bg-coral text-white text-xs rounded-pill font-medium">
                      {diary.tag}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-xs text-coral font-medium">Day {diary.day}</span>
                  <h3 className="font-bold text-text-primary mt-1 line-clamp-1">{diary.title}</h3>
                  <p className="text-sm text-text-secondary mt-1 line-clamp-2">{diary.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What is Zhenshanhu */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">镇山虎是什么？</h2>
          <p className="text-text-secondary mb-8">
            星爷的专属总控Agent，代号镇山虎。威风凛凛，但亲切。（现实世界它是一只短腿小猫咪）
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['总控Agent', '任务分发', '质量把控', '6人团队'].map((tag) => (
              <span 
                key={tag} 
                className="px-4 py-2 bg-white rounded-pill text-sm text-text-secondary shadow-card"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-2">6人Agent团队</h2>
            <p className="text-text-secondary text-sm">专业分工，协同作战，为星爷提供全方位服务</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featuredSkills.map((skill) => (
              <div 
                key={skill.id} 
                className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-text-primary">{skill.name}</h3>
                      {skill.tag && (
                        <span className={`px-2 py-0.5 ${skill.tagColor} text-white text-xs rounded-pill`}>
                          {skill.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-text-secondary mt-2">{skill.description}</p>
                    <button className="mt-4 text-coral text-sm font-medium hover:text-coral-dark">
                      了解更多 →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/skills" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white rounded-button font-medium hover:bg-coral-dark transition-colors shadow-card"
            >
              <span>🧩</span>
              查看全部成员
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary text-center mb-8">星爷怎么说</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { text: '一个人就是一支队伍', desc: '有了镇山虎和团队，我一个人就能搞定从前需要一个团队的事情。', author: '星爷' },
              { text: '专业的事交给专业的Agent', desc: '文案手写文案、设计师做设计，每个任务都能精准匹配到最合适的人。', author: '星爷' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-card shadow-card p-6">
                <h3 className="font-bold text-text-primary mb-2">{item.text}</h3>
                <p className="text-sm text-text-secondary mb-4">{item.desc}</p>
                <div className="flex items-center gap-2">
                  <img 
                    src="/avatars/xingye.jpg" 
                    alt="星爷"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <span className="text-xs text-coral">@{item.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
