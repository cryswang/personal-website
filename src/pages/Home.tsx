import { PageFade } from '../components/PageFade'
import { InfoCard } from '../components/InfoCard'
import { LoadMoreButton } from '../components/LoadMoreButton'

export function Home() {
  return (
    <PageFade>
      <h1 className="text-4xl font-semibold">portfolio</h1>

      <LoadMoreButton text="> Load more <" floatAnimation />

      <InfoCard description="Moves with your cursor" followsCursor capturesCursor />
    </PageFade>
  )
}
