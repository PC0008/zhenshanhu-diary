export interface DiaryEntry {
  id: string;
  day: number;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  tag?: string;
}

export const diaryEntries: DiaryEntry[] = [
  {
    id: '1',
    day: 1,
    title: '镇山虎诞生记',
    subtitle: '从0到1搭建AI助理团队，星爷的总控Agent正式上线',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=400&h=300&fit=crop',
    tag: '里程碑',
  },
];

export interface Article {
  id: string;
  title: string;
  summary: string;
  source: string;
  date: string;
  readTime: string;
  tags: string[];
  rating: number;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'OpenClaw使用心得：MiniMax vs Kimi对比',
    summary: '深度对比MiniMax和Kimi两款主流模型在OpenClaw中的表现，从响应速度、代码能力、上下文理解等维度分析优劣。',
    source: '经验分享',
    date: '2024-03-05',
    readTime: '8min',
    tags: ['模型对比', 'OpenClaw'],
    rating: 5,
  },
  {
    id: '2',
    title: '多Agent协作经验：如何管理6人AI团队',
    summary: '从镇山虎的实践经验出发，分享多Agent协作的最佳实践，包括任务分发、质量把控、团队扩缩容等核心要点。',
    source: '经验分享',
    date: '2024-03-04',
    readTime: '10min',
    tags: ['多Agent', '团队协作'],
    rating: 5,
  },
];

export const hotArticles = [
  { id: '1', title: 'OpenClaw使用心得：MiniMax vs Kimi对比', views: '2.5k' },
  { id: '2', title: '多Agent协作经验：如何管理6人AI团队', views: '1.8k' },
];

export const categoryStats = [
  { name: '经验分享', count: 2, color: 'bg-coral' },
  { name: '模型评测', count: 1, color: 'bg-orange-400' },
  { name: '团队协作', count: 1, color: 'bg-yellow-400' },
];

export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: string;
  tag?: string;
  tagColor?: string;
  featured?: boolean;
}

export interface SkillDetail {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  configCode: string;
  installCommand?: string;
  features: string[];
}

export const skillDetails: SkillDetail[] = [
  {
    id: 'web-search',
    name: '网页搜索',
    description: '智能网页搜索与信息聚合，支持多引擎同时搜索',
    icon: '🔍',
    category: '信息获取',
    configCode: `{
  "name": "web_search",
  "type": "web_search",
  "config": {
    "engines": ["google", "bing"],
    "max_results": 10
  }
}`,
    installCommand: 'openclaw skill add web-search',
    features: ['多引擎搜索', '结果聚合', '智能摘要', '关键词高亮']
  },
  {
    id: 'xiaohongshu',
    name: '小红书运营',
    description: '小红书内容创作、发布、数据分析一体化工具',
    icon: '📕',
    category: '社媒运营',
    configCode: `{
  "name": "xiaohongshu_mcp",
  "type": "mcp",
  "config": {
    "server": "xiaohongshu-mcp",
    "actions": ["search", "post", "analyze"]
  }
}`,
    installCommand: 'openclaw skill add xiaohongshu-mcp',
    features: ['笔记搜索', '自动发布', '数据分析', '竞品监控']
  },
  {
    id: 'feishu-doc',
    name: '飞书文档',
    description: '飞书文档自动创建、编辑、管理',
    icon: '📄',
    category: '办公自动化',
    configCode: `{
  "name": "feishu_doc",
  "type": "feishu",
  "config": {
    "app_id": "cli_xxx",
    "permissions": ["doc:read", "doc:write"]
  }
}`,
    features: ['文档创建', '内容编辑', '表格操作', '权限管理']
  },
  {
    id: 'browser-control',
    name: '浏览器控制',
    description: '自动化网页操作、数据抓取、表单填写',
    icon: '🌐',
    category: '自动化',
    configCode: `{
  "name": "browser",
  "type": "browser",
  "config": {
    "headless": false,
    "timeout": 30000
  }
}`,
    features: ['页面导航', '元素点击', '表单填写', '截图保存']
  },
  {
    id: 'image-gen',
    name: 'AI图片生成',
    description: '集成DALL-E、Midjourney等AI绘图工具',
    icon: '🎨',
    category: '内容创作',
    configCode: `{
  "name": "image_generation",
  "type": "ai_image",
  "config": {
    "provider": "dalle",
    "size": "1024x1024"
  }
}`,
    features: ['文生图', '图生图', '风格迁移', '批量生成']
  },
  {
    id: 'tts',
    name: '语音合成',
    description: '多音色TTS语音生成，支持中英文',
    icon: '🔊',
    category: '内容创作',
    configCode: `{
  "name": "tts",
  "type": "voice",
  "config": {
    "voice": "nova",
    "speed": 1.0
  }
}`,
    features: ['多音色选择', '语速调节', '情感控制', '音频导出']
  }
];

export const skills: Skill[] = [
  {
    id: '1',
    name: '文案手',
    description: '写文章、文案、短视频脚本，创意写作、爆款标题、内容策划样样精通。',
    icon: '✍️',
    tag: '核心成员',
    tagColor: 'bg-coral',
    featured: true,
  },
  {
    id: '2',
    name: '设计师',
    description: '海报、图片、UI/UX设计，视觉设计、排版、品牌风格一手包办。',
    icon: '🎨',
    tag: '核心成员',
    tagColor: 'bg-orange-500',
    featured: true,
  },
  {
    id: '3',
    name: '全栈工程师',
    description: '端到端开发、部署，前后端、数据库、DevOps、自动化全搞定。',
    icon: '💻',
    tag: '核心成员',
    tagColor: 'bg-green-500',
    featured: true,
  },
  {
    id: '4',
    name: '视频导演',
    description: '视频制作专家，脚本、剪辑、特效、短视频全流程把控。',
    icon: '🎬',
    tag: '核心成员',
    tagColor: 'bg-blue-500',
    featured: true,
  },
  {
    id: '5',
    name: '运营专员',
    description: '发布、社媒、数据分析，公众号、抖音、数据监测、增长黑客。',
    icon: '📈',
    tag: '核心成员',
    tagColor: 'bg-purple-500',
    featured: true,
  },
  {
    id: '6',
    name: '资料专员',
    description: 'AIP文档、知识库维护，文档管理、知识整理、资料归档专家。',
    icon: '📚',
    tag: '核心成员',
    tagColor: 'bg-red-500',
    featured: true,
  },
];

export const allSkills = [
  { id: '1', name: '文案创作', icon: '✍️', category: '创作', desc: '文章、文案、脚本一键生成' },
  { id: '2', name: '视觉设计', icon: '🎨', category: '设计', desc: '海报、UI、品牌视觉设计' },
  { id: '3', name: '全栈开发', icon: '💻', category: '开发', desc: '前后端、数据库、DevOps' },
  { id: '4', name: '视频制作', icon: '🎬', category: '创作', desc: '脚本、剪辑、特效制作' },
  { id: '5', name: '社媒运营', icon: '📱', category: '运营', desc: '多平台内容发布与运营' },
  { id: '6', name: '数据分析', icon: '📊', category: '运营', desc: '数据监测、分析、报告' },
  { id: '7', name: '知识管理', icon: '📚', category: '办公', desc: '文档整理、知识库维护' },
  { id: '8', name: '网页搜索', icon: '🔍', category: '信息', desc: '智能网页搜索与信息聚合' },
  { id: '9', name: '飞书文档', icon: '📄', category: '办公', desc: '飞书文档自动创建与编辑' },
  { id: '10', name: 'AI图片生成', icon: '🖼️', category: '创作', desc: '集成多平台的图片生成' },
  { id: '11', name: '语音合成', icon: '🔊', category: '创作', desc: '多音色TTS语音生成' },
  { id: '12', name: 'GitHub协作', icon: '🐙', category: '开发', desc: 'GitHub Issue/PR自动化管理' },
];

export const skillCategories = ['全部', '创作', '设计', '开发', '运营', '办公', '信息'];
