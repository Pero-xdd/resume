import { GraduationCap, Award, Briefcase } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'
import { personalInfo } from '@/data/resume'

const stats = [
  {
    icon: GraduationCap,
    label: '学历',
    value: '硕士',
    sub: '哈尔滨工业大学',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Award,
    label: '最高荣誉',
    value: '特等奖学金',
    sub: '前20% · ¥22,000',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Briefcase,
    label: '实习经历',
    value: '3段',
    sub: '含腾讯微信事业部',
    color: 'from-emerald-500 to-teal-500',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle title="关于我" subtitle="About Me" />

        <div className="grid gap-8 md:grid-cols-5">
          {/* Bio */}
          <div className="md:col-span-3">
            <div className="glass-card rounded-2xl p-8">
              <p className="text-lg leading-relaxed text-foreground/80">
                {personalInfo.bio}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                本科就读于哈尔滨工业大学（威海）计算机科学与技术专业，系统学习了计算机组成原理、操作系统、计算机网络、CSAPP
                等核心课程，打下了扎实的计算机系统基础。硕士阶段进入哈工大感知计算实验室，师从导师从事深度图像分割方向的研究，发表论文
                《Spatially Topology-Preserving Deep Image Segmentation via Matched Merge Trees》。
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                实习方面，先后在上海 A 公司参与存储基础设施（Storage Infra）与管控平台的服务端开发，并在腾讯微信事业部参与朋友圈、收藏、小薇助手等核心功能的后台开发。具备从底层基础设施到上层业务的全链路工程能力。
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-4 md:col-span-2">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="glass-card group flex items-center gap-4 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
                >
                  <stat.icon className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground/80">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
