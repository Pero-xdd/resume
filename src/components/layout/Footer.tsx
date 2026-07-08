import { personalInfo, navLinks } from '@/data/resume'
import { Mail, User } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-secondary/30 py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-xs text-white">
                LZ
              </span>
              <span className="text-lg font-bold gradient-text">{personalInfo.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {personalInfo.university} · {personalInfo.lab}
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col items-center gap-2 md:items-end">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              {personalInfo.email}
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              社交：{personalInfo.social}
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            本站采用 GitHub Pages 托管 · React + Vite + Tailwind CSS 构建
          </p>
        </div>
      </div>
    </footer>
  )
}
