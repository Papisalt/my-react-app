import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './pages.css'
import { NavBar } from './components/NavBar.jsx'
import { SiteFooter } from './components/SiteFooter.jsx'
import { sectionIds, siteSections } from './data/siteSections.js'
import { useDocumentTitle } from './hooks/useDocumentTitle.js'
import { useScrollSpy } from './hooks/useScrollSpy.js'
import { About } from './pages/About.jsx'
import { Contact } from './pages/Contact.jsx'
import { Designs } from './pages/Designs.jsx'
import { Home } from './pages/Home.jsx'
import { Projects } from './pages/Projects.jsx'
import { Skills } from './pages/Skills.jsx'

// Every "page" of the old routed site is now one section of the same page.
const sections = {
  home: <Home />,
  skills: <Skills />,
  projects: <Projects />,
  designs: <Designs />,
  about: <About />,
  contact: <Contact />,
}

function App() {
  const activeSectionId = useScrollSpy(sectionIds)
  const activeSection = siteSections.find((section) => section.id === activeSectionId)

  // The tab title follows whichever section is on screen.
  useDocumentTitle(activeSection?.label ?? siteSections[0].label)

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <NavBar activeSectionId={activeSectionId} />

      <main className="container py-5" id="main-content" tabIndex={-1}>
        {siteSections.map((section) => (
          <section
            aria-labelledby={section.headingId}
            className="page-section"
            id={section.id}
            key={section.id}
          >
            {sections[section.id]}
          </section>
        ))}
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
