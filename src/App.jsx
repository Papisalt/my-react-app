import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './pages.css'
import { NavBar } from './components/NavBar.jsx'
import { ScrollToTop } from './components/ScrollToTop.jsx' 
import { SiteFooter } from './components/SiteFooter.jsx'
import { About } from './pages/About.jsx'
import { Contact } from './pages/Contact.jsx'
import { Home } from './pages/Home.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Projects } from './pages/Projects.jsx'
import { Skills } from './pages/Skills.jsx'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="app-shell">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>

        <NavBar />

        <main className="container py-5" id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <SiteFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
