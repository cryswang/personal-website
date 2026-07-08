import { motion } from 'motion/react'
import { PageFade } from '../components/PageFade'

const projects = [
  { title: 'Project One', description: 'A short description goes here.' },
  { title: 'Project Two', description: 'A short description goes here.' },
  { title: 'Project Three', description: 'A short description goes here.' },
]

export function Portfolio() {
  return (
    <PageFade>
      <h1 className="text-4xl font-semibold">Portfolio</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-neutral-200 p-6 text-left"
          >
            <h2 className="text-lg font-medium mb-2">{project.title}</h2>
            <p className="text-sm text-neutral-600">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </PageFade>
  )
}
