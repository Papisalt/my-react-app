import { useEffect, useState } from 'react'
import { siteSections } from '../data/siteSections.js'
import logo from '/jev-logo.png'

// Contact gets its own button at the end of the list, so leave it out here.
const navLinks = siteSections.filter((section) => section.id !== 'contact')

export const NavBar = ({ activeSectionId }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="navbar navbar-expand-lg custom-navbar" aria-label="Main">
      <div className="container">
        <a className="navbar-brand brand-mark" href="#home" onClick={closeMenu}>
          {/* <span className="brand-badge" aria-hidden="true">
            Jv
          </span> */}
          <img
            src={logo}
            alt="Uncle Johns logo"
            className="brand-badge"
          />
          Uncle Johns
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen((wasOpen) => !wasOpen)}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
        >
          <span className="navbar-toggler-icon" aria-hidden="true" />
        </button>

        <div
          className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`}
          id="primary-navigation"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {navLinks.map((section) => {
              const isActive = section.id === activeSectionId

              return (
                <li className="nav-item" key={section.id}>
                  <a
                    aria-current={isActive ? 'true' : undefined}
                    className={isActive ? 'nav-link active' : 'nav-link'}
                    href={`#${section.id}`}
                    onClick={closeMenu}
                  >
                    {section.label}
                  </a>
                </li>
              )
            })}
            <li className="nav-item ms-lg-3">
              <a className="btn btn-primary btn-sm" href="#contact" onClick={closeMenu}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
