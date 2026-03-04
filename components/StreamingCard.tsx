'use client'

import { StreamingService } from '@/lib/streaming'

interface StreamingCardProps {
  service: StreamingService
}

export default function StreamingCard({ service }: StreamingCardProps) {
  return (
    <a
      href={service.url}
      className="js-track-clicks card mx-0 my-0.5 flex h-16 items-center justify-between bg-white text-black rounded-lg transition-all hover:scale-[1.025] no-underline"
      target="_blank"
      rel="noopener noreferrer"
      style={{ '--hover-color': service.hoverColor } as React.CSSProperties}
    >
      <span className="card-icon block w-12">
        <img src={service.icon} alt={service.text} className="block mx-auto" />
      </span>
      <span className="card-text relative w-40 mr-2 flex justify-end items-center uppercase text-sm font-medium">
        <span className="block mt-1">
          {service.text}
          </span>
        <span className="relative card-arrow w-5 h-5 transition-all" />
      </span>
    </a>
  )
}
