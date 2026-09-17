/**
 * Cover shown on a project or design card until you add your own image.
 * It prints the card's own title and label, so the grid never looks blank, and
 * it disappears on its own as soon as the card's `image` field is filled in.
 */
export const ThumbPlaceholder = ({ className = '', label, title }) => {
  return (
    <div aria-hidden="true" className={`thumb-placeholder ${className}`.trim()}>
      <span className="thumb-placeholder-title">{title}</span>
      {label ? <span className="thumb-placeholder-label">{label}</span> : null}
    </div>
  )
}

export default ThumbPlaceholder