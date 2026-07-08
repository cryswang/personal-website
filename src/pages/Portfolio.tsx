import { PageFade } from '../components/PageFade'
import { Project } from '../components/Project'

const projects = [
  {
    title: 'responsive widget for custom price alerts',
    caption: "hey there. I'm crystal. blah blah blah lorem ipsum",
    image: <div className="h-full w-full bg-secondary" />,
  },
  {
    title: 'placeholder title for project two',
    caption: "hey there. I'm crystal. blah blah blah lorem ipsum",
    image: <div className="h-full w-full bg-secondary" />,
  },
  {
    title: 'placeholder title for project three',
    caption: "hey there. I'm crystal. blah blah blah lorem ipsum",
    image: <div className="h-full w-full bg-secondary" />,
  },
]

export function Portfolio() {
  return (
    <PageFade>
      <h1 className="mt-24 text-4xl font-semibold">portfolio</h1>

      <div className="flex w-full max-w-4xl flex-col gap-16 pb-24">
        {projects.map((project, i) => (
          <Project
            key={project.title}
            title={project.title}
            caption={project.caption}
            reverse={i % 2 === 1}
            onHover
            image={project.image}
          />
        ))}
      </div>
    </PageFade>
  )
}
