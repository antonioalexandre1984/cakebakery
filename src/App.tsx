import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Nav } from "./components/Nav"
import { NavMobile } from "./components/NavMobile"
import { ProductCard } from "./components/ProductCard"
import { TopCard } from "./components/TopCard"
import { Social } from "./components/Social"
import { Hero } from "./components/Hero"
import { Banner } from "./components/Banner"
import { Testimonials } from "./components/Testimonials"


function App() {
  return (
    <div className='bg-white relative' style={{ height: '2000px' }}>
      <Header />
      <Hero />
      <TopCard />
      <Banner />
      <ProductCard />
      <About />
      <Testimonials />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
