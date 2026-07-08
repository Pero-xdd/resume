import { useState } from 'react'
import { Mail, Phone, User, Copy, Check } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'
import { personalInfo } from '@/data/resume'

interface ContactCard {
  icon: typeof Mail
  label: string
  value: string
  href: string
  type: 'email' | 'phone' | 'social'
  gradient: string
}

const contacts: ContactCard[] = [
  {
    icon: Mail,
    label: '邮箱',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    type: 'email',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Phone,
    label: '电话',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    type: 'phone',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: User,
    label: '社交账号',
    value: personalInfo.social,
    href: '#',
    type: 'social',
    gradient: 'from-purple-500 to-pink-600',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle title="联系方式" subtitle="Contact" />

        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          欢迎通过以下方式与我联系，无论是学术交流、求职面试还是技术讨论，期待你的消息。
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {contacts.map((contact) => (
            <div
              key={contact.label}
              className="group glass-card relative overflow-hidden rounded-2xl p-8 text-center transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Decorative gradient orb */}
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${contact.gradient} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}
              />

              {/* Icon */}
              <div
                className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${contact.gradient} text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}
              >
                <contact.icon className="h-8 w-8" />
              </div>

              {/* Label */}
              <p className="mb-1 text-sm font-medium text-muted-foreground">
                {contact.label}
              </p>

              {/* Value */}
              <p className="mb-4 break-all text-base font-semibold">{contact.value}</p>

              {/* Actions */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href={contact.href}
                  className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  {contact.type === 'social' ? '查看' : '联系'}
                </a>
                <button
                  onClick={() => handleCopy(contact.value, contact.label)}
                  className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {copied === contact.label ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-500" />
                      已复制
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      复制
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="glass inline-flex flex-col items-center gap-2 rounded-2xl px-8 py-6">
            <p className="text-sm text-muted-foreground">期待与你交流</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-lg font-bold gradient-text transition-opacity hover:opacity-80"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
