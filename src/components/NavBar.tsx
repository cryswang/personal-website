import { NavItem } from './NavItem'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/portfolio', label: 'Portfolio', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

export function NavBar() {
  return (
    <nav className="w-fit flex items-center justify-center gap-2 mx-auto rounded-[16px] border border-foreground bg-background shadow-[0_4px_4px_rgba(0,0,0,0.25)] px-4 py-3">
      {links.map(({ to, label, end }) => (
        <NavItem key={to} to={to} label={label} end={end} />
      ))}
    </nav>
  )
}
