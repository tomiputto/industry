import Header from './components/Header'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import StrategySection from './components/StrategySection'
import ServicesGrid from './components/ServicesGrid'
import BookletSection from './components/BookletSection'
import LatestHeadlines from './components/LatestHeadlines'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <StrategySection />
        <ServicesGrid />
        <BookletSection />
        <LatestHeadlines />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
