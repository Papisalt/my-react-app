import { NavLink } from 'react-router-dom'

export const SiteFooter = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <p className="site-footer-note">
          © {year} John Errol Valdez. Built with React, Vite, and Bootstrap.
        </p>

        <nav aria-label="Footer">
          <ul className="site-footer-links">
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <a href="https://github.com/Papisalt" target="_blank" rel="noreferrer">
                GitHub
                {' '}
                <span className="visually-hidden">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default SiteFooter