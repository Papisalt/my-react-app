import { useEffect, useState } from 'react'

const profileImage = '/IMG_6285.jpeg'

const roles = ['UI/UX Designer', 'Web Developer', 'Logo Designer', 'Animation Designer', 'Web Designer', 'Front-end Developer', 'Back-end Developer', 'Full-stack Developer']

export const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      return undefined
    }

    const rotation = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length)
    }, 3000)

    return () => window.clearInterval(rotation)
  }, [])

  return (
    <>
      <section className="hero-panel" aria-labelledby="home-heading">
        <div className="hero-layout">
          <div className="hero-copy">
            <span className="eyebrow">Hello I am</span>
            <h1 id="home-heading">
              John Errol Valdez.
              <span className="hero-credential">BSIT Graduate.</span>
            </h1>
            <p>
              Aspiring{' '}
              <span className="rotating-role" aria-live="polite" key={roleIndex}>
                {roles[roleIndex]}
              </span>
            </p>
          </div>

          <div className="hero-visual">
            <img
              src={profileImage}
              alt="Portrait of John Errol Valdez wearing a graduation gown and hood"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home