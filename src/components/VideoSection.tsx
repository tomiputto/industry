import videoPreview from '../../images/video-preview-screen.png'
import iconPlay from '../../icons/icon-play.png'
import './VideoSection.css'

export default function VideoSection() {
  return (
    <section className="video" id="video">
      <div className="video__container">
        <div className="video__player">
          <img
            src={videoPreview}
            alt="Gofore Design Services Showreel"
            className="video__thumbnail"
          />
          <button className="video__play-btn" aria-label="Play showreel">
            <img src={iconPlay} alt="" width={20} height={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
