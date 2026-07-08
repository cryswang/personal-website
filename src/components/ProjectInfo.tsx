import { useState } from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CursorFollow } from './CursorFollow'
import { Button } from './Button'
import { cn } from '../lib/cn'

export function ProjectInfo({
  children,
  onHover = false,
  className,
}: {
  children: ReactNode
  onHover?: boolean
  className?: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        'relative w-full aspect-[2/1] overflow-hidden rounded-[16px] border border-foreground bg-background',
        className,
      )}
    >
      <CursorFollow className="absolute -inset-[6%]">
        <div className="h-full w-full">{children}</div>
      </CursorFollow>

      <AnimatePresence>
        {onHover && hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Button variant="primary">View more →</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
