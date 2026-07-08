import type { ReactNode } from 'react'
import { InfoCard } from './InfoCard'
import { ProjectInfo } from './ProjectInfo'
import { cn } from '../lib/cn'

export function Project({
  image,
  caption,
  title,
  reverse = false,
  onHover = false,
}: {
  image: ReactNode
  caption: string
  title: string
  reverse?: boolean
  onHover?: boolean
}) {
  return (
    <div className="flex w-full flex-col gap-3">
      <ProjectInfo onHover={onHover}>{image}</ProjectInfo>

      <div
        className={cn(
          'flex items-start justify-between gap-4',
          reverse && 'flex-row-reverse',
        )}
      >
        <InfoCard description={caption} />
        <p className="text-[16px] font-semibold text-foreground">{title}</p>
      </div>
    </div>
  )
}
