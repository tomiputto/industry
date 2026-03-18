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
  return (
    <section className="headlines">
      <div className="headlines__inner">
        <h2 className="headlines__heading">See the latest headlines</h2>
        <div className="headlines__list">
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
      </div>
    </section>
  )
}
