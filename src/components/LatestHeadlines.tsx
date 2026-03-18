import { useState, useRef, useEffect } from 'react'
import latest1 from '../../images/latest-1.png'
import latest2 from '../../images/Latest-a.png'
import latest3 from '../../images/Latest-3.png'
import { useLanguage } from '../i18n/LanguageContext'
import './LatestHeadlines.css'

const articleImages = [latest1, latest2, latest3]

export default function LatestHeadlines() {
  const [activeIndex, setActiveIndex] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  const articles = articleImages.map((img, i) => ({
    img,
    category: t(`headlines.${i + 1}.category`),
    title: t(`headlines.${i + 1}.title`),
  }))

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
  }, [articles.length])

  return (
    <section className="headlines">
      <div className="headlines__inner">
        <h2 className="headlines__heading">{t('headlines.heading')}</h2>
        <div className="headlines__list" ref={listRef}>
          {articles.map((article, i) => (
            <a key={i} href="#" className="article-card">
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
