import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Keeps keyboard and screen reader users in sync after a route change:
 * the page scrolls back to the top and focus moves to the <main> landmark.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation()
  const isInitialRender = useRef(true)

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }

    window.scrollTo({ top: 0, left: 0 })

    const mainRegion = document.getElementById('main-content')

    if (mainRegion) {
      mainRegion.focus({ preventScroll: true })
    }
  }, [pathname])

  return null
}

export default ScrollToTop
