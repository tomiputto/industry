import { useState } from 'react'
import videoPreview from '../../images/video-preview-screen.png'
import iconPlay from '../../icons/icon-play.png'
import './VideoSection.css'

const YOUTUBE_ID = 'G4GiR3USDD0'

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="video" id="video">
      <div className="video__container">
        <div className="video__player">
          {playing ? (
            <iframe
              className="video__iframe"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
              title="Gofore Design Services Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src={videoPreview}
                alt="Gofore Design Services Showreel"
                className="video__thumbnail"
              />
              <button
                className="video__play-btn"
                aria-label="Play showreel"
                onClick={() => setPlaying(true)}
              >
                <img src={iconPlay} alt="" width={20} height={20} />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
