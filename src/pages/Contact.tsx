import { PageFade } from '../components/PageFade'

const links = [
  {
    label: 'github: @cryswang',
    href: 'https://github.com/cryswang',
    external: true,
  },
  {
    label: 'linkedin: /in/cryswang',
    href: 'https://www.linkedin.com/in/cryswang/',
    external: true,
  },
  { label: 'resume', href: '/resume.pdf', external: true },
]

export function Contact() {
  return (
    <PageFade>
      <h1 className="text-4xl font-semibold">contact</h1>

      <div className="flex flex-col items-center gap-2">
        {links.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className="text-foreground font-semibold underline"
          >
            {label}
          </a>
        ))}
      </div>
    </PageFade>
  )
}
