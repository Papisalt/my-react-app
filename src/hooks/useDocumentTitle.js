import { useEffect } from 'react'

/**
 * Gives every route its own document title so browser tabs, history entries,
 * and screen reader announcements describe the page that is actually visible.
 */
export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Uncle Johns`
  }, [title])
}

export default useDocumentTitle
