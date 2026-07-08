import { GraduationCap, MapPin, BookOpen, Award, FileText } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'
import { Badge } from '@/components/ui/badge'
import { education } from '@/data/resume'

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle title="教育背景" subtitle="Education" />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent md:left-1/2" />

          <div className="flex flex-col gap-12">
            {education.map((edu, idx) => (
              <div
                key={edu.period}
                className={`relative flex gap-6 md:gap-0 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 z-10 flex h-4 w-4 -translate-x-[7px] items-center justify-center rounded-full border-2 border-background bg-primary shadow-lg md:left-1/2 md:-translate-x-1/2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <div className="ml-12 flex-1 md:ml-0 md:w-1/2 md:px-8">
                  <div
                    className={`glass-card group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl ${
                      idx % 2 === 0 ? 'md:text-left' : 'md:text-left'
                    } ${edu.highlight ? 'ring-2 ring-primary/30' : ''}`}
                  >
                    {/* Period + Location */}
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {edu.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </span>
                      {edu.highlight && (
                        <Badge variant="success">在读</Badge>
                      )}
                    </div>

                    {/* School + Degree */}
                    <div className="mb-4 flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{edu.school}</h3>
                        <p className="text-sm text-muted-foreground">{edu.degree}</p>
                      </div>
                    </div>

                    {/* Courses */}
                    <div className="mb-4">
                      <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground/70">
                        <BookOpen className="h-4 w-4" />
                        主修课程
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <Badge key={course} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Research */}
                    {edu.research && (
                      <div className="mb-4">
                        <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground/70">
                          <FileText className="h-4 w-4" />
                          研究成果
                        </p>
                        <p className="rounded-lg bg-secondary/50 p-3 text-sm italic leading-relaxed text-foreground/80">
                          {edu.research}
                        </p>
                      </div>
                    )}

                    {/* Honors */}
                    <div>
                      <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground/70">
                        <Award className="h-4 w-4" />
                        校内荣誉
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {edu.honors.map((honor) => (
                          <div
                            key={honor}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                            {honor}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
