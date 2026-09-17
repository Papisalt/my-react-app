/**
 * Heading for one section of the single-page layout. The hero in Home.jsx owns
 * the only <h1> on the site, so every section header is an <h2>.
 */
export const PageHeader = ({ headingId, eyebrow, title, lead }) => {
  return (
    <header className="page-panel page-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={headingId}>{title}</h2>
      <p className="page-lead">{lead}</p>
    </header>
  )
}

export default PageHeader
