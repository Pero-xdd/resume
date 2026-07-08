import { Building2, MapPin, Calendar, ChevronRight } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/data/resume'

export default function Experience() {
  return (
    <section id="experience" className="relative bg-secondary/20 py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle title="实习经历" subtitle="Experience" />

        <div className="flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={`${exp.company}-${idx}`}
              className="group glass-card relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-2xl md:p-8"
            >
              {/* Gradient accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-600 transition-all group-hover:w-1.5" />

              <div className="grid gap-4 md:grid-cols-3">
                {/* Left: Company info */}
                <div className="md:col-span-1">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold leading-tight">{exp.company}</h3>
                      <p className="text-sm font-medium text-primary">{exp.role}</p>
                      <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Description + details + tags */}
                <div className="md:col-span-2">
                  <p className="mb-4 text-base font-medium text-foreground/80">
                    {exp.description}
                  </p>
                  <ul className="mb-4 flex flex-col gap-2">
                    {exp.details.map((detail, di) => (
                      <li
                        key={di}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
