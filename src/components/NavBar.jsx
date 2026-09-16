import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/', end: true },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
]

export const NavBar = () => {
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
        <NavLink className="navbar-brand brand-mark" to="/" onClick={closeMenu}>
          <span className="brand-badge" aria-hidden="true">
            Jv
          </span>
          Uncle Johns
        </NavLink>

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
            {navItems.map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  end={item.end}
                  onClick={closeMenu}
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-lg-3">
              <NavLink className="btn btn-primary btn-sm" onClick={closeMenu} to="/contact">
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
