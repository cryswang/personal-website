import { PageFade } from '../components/PageFade'

const links = [
  {
    prefix: 'github: ',
    label: '@cryswang',
    href: 'https://github.com/cryswang',
    external: true,
  },
  {
    prefix: 'linkedin: ',
    label: '/in/cryswang',
    href: 'https://www.linkedin.com/in/cryswang/',
    external: true,
  },
  { prefix: '', label: 'resume', href: '/resume.pdf', external: true },
]

export function Contact() {
  return (
    <PageFade>
      <h1 className="text-4xl font-semibold">contact</h1>

      <div className="flex flex-col items-center gap-2 text-[16px]">
        {links.map(({ prefix, label, href, external }) => (
          <p key={label} className="font-normal text-foreground">
            {prefix}
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="font-semibold underline transition-colors hover:text-secondary"
            >
              {label}
            </a>
          </p>
        ))}
      </div>
    </PageFade>
  )
}
