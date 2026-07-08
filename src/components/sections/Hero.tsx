import { ArrowDown, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/resume'

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="glow-orb left-[-10%] top-[10%] h-[400px] w-[400px] bg-indigo-500/30 animate-glow" />
        <div
          className="glow-orb right-[-5%] top-[30%] h-[350px] w-[350px] bg-purple-500/30 animate-glow"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="glow-orb bottom-[5%] left-[30%] h-[300px] w-[300px] bg-violet-500/20 animate-glow"
          style={{ animationDelay: '3s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6">
        {/* Left: Text */}
        <div className="flex flex-col items-start gap-6 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            {personalInfo.origin} · {personalInfo.lab}
          </span>

          <div>
            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <p className="mt-3 text-xl font-semibold text-foreground/80 md:text-2xl">
              {personalInfo.degree}
            </p>
          </div>

          <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            {personalInfo.tagline}。{personalInfo.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => scrollTo('#experience')}>
              查看实习经历
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo('#contact')}>
              <Mail className="h-4 w-4" />
              联系我
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Right: Avatar Card */}
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative animate-float">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-500 to-purple-600 opacity-30 blur-2xl" />
            <div className="glass-card gradient-border flex flex-col items-center gap-4 rounded-[2rem] p-8">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-50 blur-xl" />
                <img
                  src="./images/avatar.png"
                  alt={`${personalInfo.name}头像`}
                  className="relative h-44 w-44 rounded-2xl object-cover ring-4 ring-white/30 dark:ring-slate-700/50"
                  loading="eager"
                  width={176}
                  height={176}
                />
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">{personalInfo.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{personalInfo.nameEn}</p>
              </div>
              <div className="flex gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-secondary px-3 py-1">{personalInfo.age}岁</span>
                <span className="rounded-full bg-secondary px-3 py-1">{personalInfo.gender}</span>
                <span className="rounded-full bg-secondary px-3 py-1">{personalInfo.origin}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="向下滚动"
      >
        <span className="text-xs">向下滚动</span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  )
}
