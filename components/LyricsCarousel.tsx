'use client'

import { useState } from 'react'
import { lyrics } from '@/lib/lyrics'

export default function LyricsCarousel() {
  const [selectedSong, setSelectedSong] = useState(0)

  return (
    <div className="mx-auto md:m-4 w-full max-w-md md:max-w-xl m-4 text-brand-dark-black text-center font-josefin">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl text-white font-bold mb-6 text-center">Lyrics</h2>
        
        {/* Song selection tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {lyrics.map((song, index) => (
            <button
              key={index}
              onClick={() => setSelectedSong(index)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedSong === index
                  ? 'bg-white text-brand shadow-lg scale-105'
                  : 'bg-white-trans text-brand-black hover:bg-white hover:scale-105'
              }`}
            >
              {song.title}
            </button>
          ))}
        </div>

        {/* Song content */}
        <div className="bg-white-trans rounded-lg p-6 md:p-8 backdrop-blur-sm transition-all">
          <h3 className="text-xl font-medium mb-4 italic">
            {lyrics[selectedSong].title}
          </h3>
          <div className="text-sm leading-relaxed whitespace-pre-wrap">
            {lyrics[selectedSong].copy}
          </div>
        </div>
      </div>
    </div>
  )
}
