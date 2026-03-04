import Image from 'next/image'
import StreamingCard from '@/components/StreamingCard'
import { streamingServices, purchaseServices } from '@/lib/streaming'

const AlbumCard = () => {
    return (
      <div className="mx-auto md:m-4 w-full m-4 relative z-10 max-w-md font-josefin bg-white-trans rounded-lg">
        <div className="relative z-10 flex flex-col text-white mb-1">
          <a
            href="https://open.spotify.com/album/7b0V4nQZGQMOkhSQPHPqxk"
            target="_blank"
            rel="noopener noreferrer"
            className="js-track-clicks main-image"
          >
            <Image
              src="/images/cover2.jpeg"
              alt="Deep End Youth Album Cover"
              width={440}
              height={440}
              className="block w-full aspect-square object-cover"
              priority
            />
          </a>
        </div>

        <div className="block p-4">
          {/* Streaming services */}
          <div className="relative z-10 flex flex-col text-white mb-1">
            <h2 className="text-brand-dark-black italic font-medium uppercase mb-1 pl-1">
              Stream
            </h2>
            {streamingServices.map((service) => (
              <StreamingCard key={service.text} service={service} />
            ))}
          </div>

          {/* Purchase services */}
          <div className="relative z-10 flex flex-col text-white mb-1">
            <h2 className="text-brand-dark-black italic font-medium uppercase mb-1 pl-1">
              Buy
            </h2>
            {purchaseServices.map((service) => (
              <StreamingCard key={service.text} service={service} />
            ))}
          </div>
        </div>
      </div>
    )
}

export default AlbumCard