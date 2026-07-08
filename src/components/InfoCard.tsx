import type { ReactElement } from 'react'
import { CursorFollow } from './CursorFollow'
import { CursorCapture } from './CursorCapture'
import { cn } from '../lib/cn'

export function InfoCard({
  description,
  followsCursor = false,
  capturesCursor = false,
  className,
}: {
  description: string | ReactElement
  followsCursor?: boolean
  capturesCursor?: boolean
  className?: string
}) {
  let content = (
    <div
      className={cn(
        'w-fit max-w-[340px] px-5 py-4 rounded-[8px] bg-accent border border-foreground shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center',
        className,
      )}
    >
      <span className="text-foreground">{description}</span>
    </div>
  )

  if (capturesCursor) {
    content = <CursorCapture>{content}</CursorCapture>
  }

  if (followsCursor) {
    content = <CursorFollow>{content}</CursorFollow>
  }

  return content
}
