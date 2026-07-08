import { Code2, Cpu, Server, Brain, type LucideIcon } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'
import { skillGroups, type SkillGroup } from '@/data/resume'
import { cn } from '@/lib/utils'

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  cpu: Cpu,
  server: Server,
  brain: Brain,
}

const levelConfig = {
  proficient: {
    label: '熟练',
    className:
      'border-primary/30 bg-primary/10 text-primary hover:bg-primary/20',
    dot: 'bg-primary',
  },
  familiar: {
    label: '熟悉',
    className:
      'border-indigo-300/30 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/15',
    dot: 'bg-indigo-400',
  },
  learning: {
    label: '学习中',
    className:
      'border-slate-300/30 bg-slate-500/5 text-slate-600 dark:text-slate-400 hover:bg-slate-500/15',
    dot: 'bg-slate-400',
  },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle title="技能栈" subtitle="Skills" />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group: SkillGroup) => {
            const Icon = iconMap[group.icon] || Code2
            return (
              <div
                key={group.category}
                className="glass-card group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl md:p-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => {
                    const cfg = levelConfig[skill.level]
                    return (
                      <div
                        key={skill.name}
                        className={cn(
                          'group/badge flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-all hover:scale-105',
                          cfg.className
                        )}
                      >
                        <span className={cn('h-2 w-2 rounded-full', cfg.dot)} />
                        <span>{skill.name}</span>
                        <span className="text-xs opacity-60">{cfg.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          {Object.entries(levelConfig).map(([key, cfg]) => (
            <div key={key} className="flex items-center gap-2">
              <span className={cn('h-2.5 w-2.5 rounded-full', cfg.dot)} />
              {cfg.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
