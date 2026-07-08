import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'

export function NavItem({
  to,
  label,
  end = false,
}: {
  to: string
  label: string
  end?: boolean
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 20,
  })

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <NavLink
      ref={ref}
      to={to}
      end={end}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex w-28 rounded-[12px]"
    >
      {({ isActive }) => (
        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 600 }}
          className="relative flex w-full items-center justify-center rounded-[12px] px-4 py-2 text-[16px] font-medium"
        >
          <span
            className={
              isActive
                ? 'relative z-10 text-background'
                : 'relative z-10 text-neutral-600'
            }
          >
            {label}
          </span>
          {isActive && (
            <motion.div
              layoutId="nav-pill"
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="absolute inset-0 rounded-[12px] bg-foreground"
            />
          )}
        </motion.div>
      )}
    </NavLink>
  )
}
