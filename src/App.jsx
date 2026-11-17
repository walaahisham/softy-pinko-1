
import Header from './components/Header'
import Welcome from './components/Welcome'
import Features from './components/Features'
import About from './components/About'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Price from './components/Price'
import Count from './components/Count'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Website Header */}
      <Header />

      {/* Main Website Sections */}
      <main>
        <Welcome />

        <Features />

        <About />

        <Work />

        <Testimonials />

        <Price />

        <Count />

        <Blog />

        <Contact />
      </main>

      {/* Website Footer */}
      <Footer />
    </>
  )
}
