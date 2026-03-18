import { useState, useRef, useEffect } from 'react'
import latest1 from '../../images/latest-1.png'
import latest2 from '../../images/Latest-a.png'
import latest3 from '../../images/Latest-3.png'
import './LatestHeadlines.css'

const articles = [
  {
    img: latest1,
    category: 'CUSTOMER – dd.mm.yyyy',
    title: 'Ethical design referenssinosto tähän',
  },
  {
    img: latest2,
    category: 'BLOGI - dd.mm.yyyy',
    title: 'Planetary service design nosto',
  },
  {
    img: latest3,
    category: 'CUSTOMER - DD.MM.YYYY',
    title: 'Intelligent Industry refenosto tähän',
  },
]

export default function LatestHeadlines() {
  const [activeIndex, setActiveIndex] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const handleScroll = () => {
      const cardWidth = 300 + 24 // card width + gap
      const index = Math.round(list.scrollLeft / cardWidth)
      setActiveIndex(Math.min(index, articles.length - 1))
    }
    list.addEventListener('scroll', handleScroll, { passive: true })
    return () => list.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="headlines">
      <div className="headlines__inner">
        <h2 className="headlines__heading">See the latest headlines</h2>
        <div className="headlines__list" ref={listRef}>
          {articles.map((article) => (
            <a key={article.title} href="#" className="article-card">
              <div className="article-card__image-wrap">
                <img src={article.img} alt={article.title} className="article-card__image" />
              </div>
              <p className="article-card__category">{article.category}</p>
              <p className="article-card__title">{article.title}</p>
            </a>
          ))}
        </div>
        <div className="headlines__pagination">
          {articles.map((_, i) => (
            <span
              key={i}
              className={`headlines__dot${i === activeIndex ? ' headlines__dot--active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
