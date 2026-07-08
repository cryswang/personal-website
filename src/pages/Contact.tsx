import { PageFade } from '../components/PageFade'

export function Contact() {
  return (
    <PageFade>
      <h1 className="text-4xl font-semibold">Contact</h1>
      <p className="text-neutral-600 max-w-md text-center">
        Reach out at{' '}
        <a
          href="mailto:you@example.com"
          className="text-foreground underline"
        >
          you@example.com
        </a>
      </p>
    </PageFade>
  )
}
