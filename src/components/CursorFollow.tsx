import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { useCursorSpring } from '../hooks/useCursorSpring'

export function CursorFollow({
  children,
  className,
  strength = 20,
}: {
  children: ReactNode
  className?: string
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { x, y, moveX, moveY } = useCursorSpring(strength)

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const rect = ref.current?.getBoundingClientRect()
      if (!rect) return
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const nx = (e.clientX - centerX) / (window.innerWidth / 2)
      const ny = (e.clientY - centerY) / (window.innerHeight / 2)
      x.set(Math.max(-1, Math.min(1, nx)))
      y.set(Math.max(-1, Math.min(1, ny)))
    }

    function handleWindowLeave() {
      x.set(0)
      y.set(0)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleWindowLeave)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleWindowLeave)
    }
  }, [x, y])

  return (
    <motion.div ref={ref} style={{ x: moveX, y: moveY }} className={className}>
      {children}
    </motion.div>
  )
}
