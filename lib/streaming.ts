export interface StreamingService {
  text: string
  url: string
  icon: string
  hoverColor: string
}

export const streamingServices: StreamingService[] = [
  {
    text: 'Spotify',
    url: 'https://open.spotify.com/album/7b0V4nQZGQMOkhSQPHPqxk',
    icon: '/images/spotify.svg',
    hoverColor: '#1DB954',
  },
  {
    text: 'Apple Music',
    url: 'https://music.apple.com/us/album/deep-end-youth-ep/1693681497?app=music',
    icon: '/images/apple.svg',
    hoverColor: '#f94c57',
  },
  {
    text: 'Amazon Music',
    url: 'https://music.amazon.com/albums/B0C8WW6ZCQ',
    icon: '/images/amazon.svg',
    hoverColor: '#0DBFF5',
  },
  {
    text: 'Youtube',
    url: 'https://youtube.com/playlist?list=OLAK5uy_nW-88T61ydLbCFe62IzuQC86NWMFY2uJs',
    icon: '/images/youtube.svg',
    hoverColor: '#FF0000',
  },
  {
    text: 'Pandora',
    url: 'https://www.pandora.com/artist/deep-end-youth/deep-end-youth/ALt3p79fpfnJ6fK',
    icon: '/images/pandora.svg',
    hoverColor: '#00A0EE',
  },
]

export const purchaseServices: StreamingService[] = [
  {
    text: 'Bandcamp',
    url: 'https://deependyouth.bandcamp.com/album/deep-end-youth',
    icon: '/images/bandcamp.svg',
    hoverColor: '#629aa9',
  },
  {
    text: 'Amazon',
    url: 'https://amazon.com/dp/B0C8WW6ZCQ',
    icon: '/images/amazon.svg',
    hoverColor: '#0DBFF5',
  },
]
