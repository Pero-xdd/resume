import { FileText, Calendar, Tag, ExternalLink } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'
import { Badge } from '@/components/ui/badge'
import { researchPaper } from '@/data/resume'

export default function Research() {
  return (
    <section id="research" className="relative bg-secondary/20 py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle title="研究成果" subtitle="Research" />

        <div className="mx-auto max-w-4xl">
          <div className="glass-card gradient-border group relative overflow-hidden rounded-2xl p-8 transition-all hover:shadow-2xl md:p-10">
            {/* Decorative gradient */}
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-600/10 blur-3xl" />

            <div className="relative">
              {/* Icon + Year */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
                  <FileText className="h-7 w-7" />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {researchPaper.year}
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold leading-snug md:text-2xl">
                {researchPaper.title}
              </h3>

              {/* Venue */}
              <p className="mb-6 text-sm font-medium text-primary">
                {researchPaper.venue}
              </p>

              {/* Abstract */}
              <div className="mb-6">
                <p className="mb-2 text-sm font-semibold text-foreground/70">摘要</p>
                <p className="leading-relaxed text-muted-foreground">
                  {researchPaper.abstract}
                </p>
              </div>

              {/* Keywords */}
              <div className="mb-6">
                <p className="mb-3 flex items-center gap-1.5 text-sm font-semibold text-foreground/70">
                  <Tag className="h-4 w-4" />
                  关键词
                </p>
                <div className="flex flex-wrap gap-2">
                  {researchPaper.keywords.map((kw) => (
                    <Badge key={kw} variant="default" className="text-xs">
                      {kw}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* DOI / Link placeholder */}
              <div className="flex items-center gap-2 rounded-xl bg-secondary/50 p-4 text-sm text-muted-foreground">
                <ExternalLink className="h-4 w-4 shrink-0" />
                <span>论文链接将在正式发表后更新</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
