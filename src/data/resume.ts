export const personalInfo = {
  name: '李振洋',
  nameEn: 'Li Zhenyang',
  age: 26,
  gender: '男',
  origin: '江西',
  lab: '哈工大感知计算实验室',
  university: '哈尔滨工业大学',
  degree: '计算机技术 · 硕士在读',
  phone: '18370717877',
  email: 'Lee_the_goat@foxmail.com',
  social: 'Lee the goat',
  tagline: '深耕计算机系统，探索感知计算前沿',
  bio: '哈尔滨工业大学计算机技术硕士研究生，感知计算实验室成员。研究方向为深度图像分割中的拓扑保持方法，致力于将拓扑数据分析与深度学习相结合。拥有腾讯微信事业部及多段服务端开发实习经验，具备扎实的计算机系统基础与工程落地能力。',
} as const

export interface EducationItem {
  period: string
  school: string
  degree: string
  location?: string
  courses: string[]
  honors: string[]
  research?: string
  highlight?: boolean
}

export const education: EducationItem[] = [
  {
    period: '2023.09 - 2026.06',
    school: '哈尔滨工业大学',
    degree: '计算机技术（硕士）',
    location: '哈尔滨',
    courses: ['最优化方法', '人工智能原理及应用', '计算机系统性能评价'],
    honors: ['2025 研究生年度特等奖学金（前20%，¥22,000）'],
    research:
      '《Spatially Topology-Preserving Deep Image Segmentation via Matched Merge Trees》',
    highlight: true,
  },
  {
    period: '2019.09 - 2023.06',
    school: '哈尔滨工业大学（威海）',
    degree: '计算机科学与技术（本科）',
    location: '威海',
    courses: [
      '计算机组成原理',
      '计算机网络',
      '数据结构与算法',
      '操作系统',
      '数据库技术',
      'CSAPP（深入理解计算机系统）',
      '编译原理',
      '计算机体系结构',
      '线性代数',
      '概率论与数理统计',
      '离散数学',
      '近世代数',
    ],
    honors: [
      '2020 哈尔滨工业大学优秀学生',
      '2021 暑期优秀社会实践个人',
      '2021 哈尔滨工业大学优秀学生',
      '2021 社会工作优秀奖学金',
    ],
  },
]

export interface ExperienceItem {
  period: string
  company: string
  role: string
  location: string
  description: string
  details: string[]
  tags: string[]
}

export const experiences: ExperienceItem[] = [
  {
    period: '2026.05 - 2026.06',
    company: '腾讯 · 微信事业部',
    role: '后台开发实习生',
    location: '广州',
    description: '参与微信核心功能模块的后台开发与维护工作',
    details: [
      '参与微信朋友圈功能的后台逻辑开发与性能优化',
      '负责微信收藏功能的存储与检索链路维护',
      '参与小薇助手（AI 辅助工具）相关后台服务开发',
    ],
    tags: ['后台开发', '微信生态', '高并发', '分布式系统'],
  },
  {
    period: '2025.12 - 2026.03',
    company: '上海 A 公司',
    role: '服务端开发实习生',
    location: '上海',
    description: '负责管控平台的开发与服务端架构维护',
    details: [
      '参与管控系统的设计与开发，实现服务资源的统一管理与调度',
      '负责管控平台核心接口的开发与维护，提升系统可用性',
      '协助团队完成管控流程的自动化改造',
    ],
    tags: ['服务端开发', '管控系统', '系统架构', '自动化'],
  },
  {
    period: '2025.06 - 2025.09',
    company: '上海 A 公司',
    role: '服务端开发实习生',
    location: '上海',
    description: '参与存储基础设施（Storage Infra）的开发与维护',
    details: [
      '参与底层存储基础设施的设计与开发',
      '负责存储系统的稳定性保障与性能调优',
      '协助完成存储组件的迭代升级与文档编写',
    ],
    tags: ['Storage Infra', '存储系统', '基础设施', '性能优化'],
  },
]

export interface SkillGroup {
  category: string
  icon: string
  skills: { name: string; level: 'proficient' | 'familiar' | 'learning' }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: '编程语言',
    icon: 'code',
    skills: [
      { name: 'C++', level: 'proficient' },
      { name: 'Java', level: 'proficient' },
      { name: 'Python', level: 'proficient' },
      { name: 'C', level: 'familiar' },
      { name: 'Go', level: 'learning' },
    ],
  },
  {
    category: '计算机基础',
    icon: 'cpu',
    skills: [
      { name: '计算机组成原理', level: 'proficient' },
      { name: '操作系统', level: 'proficient' },
      { name: '计算机网络', level: 'proficient' },
      { name: '数据结构与算法', level: 'proficient' },
      { name: 'CSAPP', level: 'familiar' },
      { name: '编译原理', level: 'familiar' },
      { name: '计算机体系结构', level: 'familiar' },
      { name: '数据库技术', level: 'familiar' },
    ],
  },
  {
    category: '后端开发',
    icon: 'server',
    skills: [
      { name: '服务端开发', level: 'proficient' },
      { name: '存储系统', level: 'familiar' },
      { name: '分布式系统', level: 'familiar' },
      { name: '高并发', level: 'familiar' },
      { name: '系统架构', level: 'learning' },
    ],
  },
  {
    category: 'AI 与计算机视觉',
    icon: 'brain',
    skills: [
      { name: '深度学习', level: 'familiar' },
      { name: '图像分割', level: 'familiar' },
      { name: '拓扑数据分析', level: 'familiar' },
      { name: '最优化方法', level: 'familiar' },
      { name: '人工智能原理', level: 'familiar' },
    ],
  },
]

export const researchPaper = {
  title: 'Spatially Topology-Preserving Deep Image Segmentation via Matched Merge Trees',
  abstract:
    '提出了一种基于匹配合并树（Matched Merge Trees）的深度图像分割方法，在保持分割结果拓扑结构的同时提升分割精度。该方法将拓扑数据分析中的合并树理论与深度学习模型相结合，有效解决了传统分割方法中拓扑结构丢失的问题。',
  venue: '感知计算实验室研究成果',
  year: '2025',
  keywords: ['深度学习', '图像分割', '拓扑保持', '合并树', '拓扑数据分析'],
}

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: '关于', href: '#about' },
  { label: '教育', href: '#education' },
  { label: '经历', href: '#experience' },
  { label: '技能', href: '#skills' },
  { label: '研究', href: '#research' },
  { label: '联系', href: '#contact' },
]
