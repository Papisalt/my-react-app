import { useEffect, useState } from 'react'

/**
 * Reports which section of the one-page layout is currently in view, so the
 * navigation can highlight the matching link while the visitor scrolls instead
 * of only after a click.
 */
export const useScrollSpy = (sectionIds) => {
  // A stable string keeps the effect from re-running when the caller passes a
  // freshly built array on every render.
  const sectionKey = sectionIds.join('|')
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionKey
      .split('|')
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      // Narrow the viewport to a thin band around the middle of the screen so a
      // tall section only becomes "active" once it has taken over the view.
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionKey])

  return activeId
}

export default useScrollSpy