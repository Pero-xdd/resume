import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-12 flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {subtitle}
      </span>
      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
    </div>
  )
}
