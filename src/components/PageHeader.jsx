export const PageHeader = ({ eyebrow, title, lead }) => {
  return (
    <header className="page-panel page-header">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p className="page-lead">{lead}</p>
    </header>
  )
}

export default PageHeader
