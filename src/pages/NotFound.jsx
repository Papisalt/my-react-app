import { NavLink } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

export const NotFound = () => {
  useDocumentTitle('Page not found')

  return (
    <>
      <PageHeader
        eyebrow="Error 404"
        title="That page could not be found"
        lead="The link may be out of date, or the page may have moved to a new address."
      />

      <section className="section-block" aria-labelledby="not-found-links-title">
        <h2 className="section-title" id="not-found-links-title">
          Try one of these instead
        </h2>
        <p className="section-intro">
          Everything on this site is one click away from the main menu at the top of the page.
        </p>
        <div className="cta-row">
          <NavLink className="btn btn-primary btn-lg" to="/">
            Back to home
          </NavLink>
          <NavLink className="btn btn-outline-light btn-lg" to="/contact">
            Contact me
          </NavLink>
        </div>
      </section>
    </>
  )
}

export default NotFound