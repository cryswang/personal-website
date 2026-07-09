import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { animate, motion, useMotionValue } from 'motion/react'
import type { Transition } from 'motion/react'

const RELEASE_DELAY = 200
const CAPTURE_RADIUS = 140

const TRACK_SPRING: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1,
}

const BOUNCE_SPRING: Transition = {
  type: 'spring',
  stiffness: 450,
  damping: 5,
  mass: 0.6,
}

export function CursorCapture({
  children,
  className,
  strength = 30,
}: {
  children: ReactNode
  className?: string
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const moveX = useMotionValue(0)
  const moveY = useMotionValue(0)
  const capturedRef = useRef(false)
  const releaseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!capturedRef.current) return
      const rect = ref.current?.getBoundingClientRect()
      if (!rect) return
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const nx = Math.max(-1, Math.min(1, (e.clientX - centerX) / CAPTURE_RADIUS))
      const ny = Math.max(-1, Math.min(1, (e.clientY - centerY) / CAPTURE_RADIUS))
      animate(moveX, nx * strength, TRACK_SPRING)
      animate(moveY, ny * strength, TRACK_SPRING)
    }

    function handleWindowLeave() {
      if (releaseTimeoutRef.current) {
        clearTimeout(releaseTimeoutRef.current)
        releaseTimeoutRef.current = null
      }
      capturedRef.current = false
      animate(moveX, 0, BOUNCE_SPRING)
      animate(moveY, 0, BOUNCE_SPRING)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleWindowLeave)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleWindowLeave)
    }
  }, [moveX, moveY, strength])

  function handleMouseEnter() {
    if (releaseTimeoutRef.current) {
      clearTimeout(releaseTimeoutRef.current)
      releaseTimeoutRef.current = null
    }
    capturedRef.current = true
  }

  function handleMouseLeave() {
    releaseTimeoutRef.current = setTimeout(() => {
      capturedRef.current = false
      animate(moveX, 0, BOUNCE_SPRING)
      animate(moveY, 0, BOUNCE_SPRING)
    }, RELEASE_DELAY)
  }

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ x: moveX, y: moveY }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
