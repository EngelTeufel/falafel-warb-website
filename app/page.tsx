import Image from 'next/image'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import Menu from '../components/Menu'
import Features from '../components/Features'
import Location from '../components/Location'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutUs />
      <Menu />
      <Features />
      <Location />
      <Reviews />
      <Footer />
    </main>
  )
}
