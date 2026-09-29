import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import GalleryPage from './pages/Gallery'
import Contact from './pages/Contact'
import TestimonialsPage from './pages/Testimonials'

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </Router>
  )
}
