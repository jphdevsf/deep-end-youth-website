import AlbumCard from '@/components/AlbumCard'
import Footer from '@/components/Footer'
import LyricsCarousel from '@/components/LyricsCarousel'

export default function Home() {
  return (
    <>
      {/* Background animation */}
      <div className="bg-image animate-colorShift" />
      
      {/* Header */}
      <header className="relative z-10 flex flex-col lg:flex-row font-josefin justify-center items-center bg-black-trans text-white p-4">
        <h1 className="text-center text-white m-0 mt-8 md:mt-4 p-0 font-light text-[2.25rem] md:text-[3.75rem]">
          DEEP END YOUTH
        </h1>
        <span className="mx-4 hidden mt-8 md:mt-4 lg:inline font-light text-[2.25rem] md:text-[3.75rem]">
          //
        </span>
        <p className="font-light text-xl m-0">ages we flow through aren't candles to right now</p>
      </header>
      <main className="flex flex-col md:flex-row justify-center items-start w-full">
      <AlbumCard />
      <LyricsCarousel />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
