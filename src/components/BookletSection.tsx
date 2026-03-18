import highlightImage from '../../icons/Highlight-Image.png'
import './BookletSection.css'

export default function BookletSection() {
  return (
    <section className="booklet" id="booklet">
      <div className="booklet__inner">
        <div className="booklet__text">
          <h2 className="booklet__heading">Industry 5.0 design booklet</h2>
          <p className="booklet__body">
            Our Industry 5.0 booklet provides actionable tools and design principles for
            modern industrial challenges. Learn how to turn emerging technologies into
            usable, impactful solutions.
          </p>
          <a href="#" className="booklet__btn">Download booklet</a>
        </div>
        <div className="booklet__image">
          <img src={highlightImage} alt="Industry 5.0 Design Booklet" />
        </div>
      </div>
    </section>
  )
}
