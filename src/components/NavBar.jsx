export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <a className="navbar-brand brand-mark" href="#">
          <span className="brand-badge">Jv</span>
          John Errol Valdez
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item ms-lg-3">
              <a className="btn btn-primary btn-sm" href="#">Book a call</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
