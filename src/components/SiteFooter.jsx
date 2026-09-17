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
              <a href="#home">Back to top</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#designs">Designs</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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