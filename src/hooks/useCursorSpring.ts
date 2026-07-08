import { useMotionValue, useSpring, useTransform } from 'motion/react'

export function useCursorSpring(strength: number) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const spring = { stiffness: 150, damping: 15, mass: 0.5 }
  const moveX = useSpring(useTransform(x, [-1, 1], [-strength, strength]), spring)
  const moveY = useSpring(useTransform(y, [-1, 1], [-strength, strength]), spring)

  return { x, y, moveX, moveY }
}
