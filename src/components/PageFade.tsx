import type { ReactNode } from 'react'
import { motion } from 'motion/react'

export function PageFade({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="flex-1 flex flex-col items-center justify-center gap-12 px-6 pb-28"
    >
      {children}
    </motion.div>
  )
}
