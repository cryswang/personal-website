import { NavLink } from 'react-router-dom'
import { motion } from 'motion/react'

export function NavItem({
  to,
  label,
  end = false,
}: {
  to: string
  label: string
  end?: boolean
}) {
  return (
    <NavLink to={to} end={end} className="relative flex w-28 rounded-[12px]">
      {({ isActive }) => (
        <div className="relative flex w-full items-center justify-center rounded-[12px] px-4 py-2 text-[16px] font-normal">
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
        </div>
      )}
    </NavLink>
  )
}
