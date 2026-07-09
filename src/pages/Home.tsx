import { PageFade } from '../components/PageFade'
import { InfoCard } from '../components/InfoCard'
import mascot from '../assets/mascot.png'

const messages = {
  about1: "hey! i'm crystal, a frontend engineer at coinbase based in nyc.",
  about2:
    'i like to build in react/react native and do some light prototyping on figma. my other hobby is playing video games. all of them.',
  credit: 'art by chatgpt (for now--stay tuned)',
}

export function Home() {
  return (
    <PageFade>
      <div className="relative w-[clamp(360px,58vw,620px)] aspect-[620/680]">
        <div className="absolute top-[10%] left-[64%] z-[1]">
          <InfoCard
            description={messages.about1}
            followsCursor
            followStrength={6}
            capturesCursor
            className="shadow-none"
          />
        </div>

        <img
          src={mascot}
          alt="Mascot illustration"
          className="pointer-events-none absolute top-1/2 left-1/2 z-[2] w-[clamp(260px,45vw,431px)] -translate-x-1/2 -translate-y-1/2"
        />

        <div className="absolute top-[46%] left-[2%] z-[3]">
          <InfoCard
            description={messages.about2}
            followsCursor
            followStrength={36}
            capturesCursor
          />
        </div>

        <div className="absolute top-[74%] left-[50%] z-[4]">
          <InfoCard
            description={messages.credit}
            followsCursor
            followStrength={18}
            capturesCursor
          />
        </div>
      </div>
    </PageFade>
  )
}
