import { motion } from 'motion/react'
import { Button } from './Button'
import { cn } from '../lib/cn'

export function LoadMoreButton({
  text,
  floatAnimation = false,
  className,
}: {
  text: string
  floatAnimation?: boolean
  className?: string
}) {
  const button = (
    <Button variant="secondary" className={cn('max-w-[250px]', className)}>
      {text}
    </Button>
  )

  if (!floatAnimation) return button

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      className="w-fit"
    >
      {button}
    </motion.div>
  )
}
