import { NavLink } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

const profileImage = '/IMG_6285.jpeg'

const services = [
  {
    title: 'Strategy',
    description: 'Clarify your goals and define a path that feels clear, focused, and measurable.',
  },
  {
    title: 'Design',
    description:
      'Build interfaces that feel premium, readable, and easy to navigate on every screen.',
  },
  {
    title: 'Delivery',
    description: 'Ship fast with modern tools and components that are ready for real users.',
  },
]

const exploreLinks = [
  {
    to: '/skills',
    title: 'Skills',
    description: 'The languages, frameworks, and design tools I reach for every day.',
  },
  {
    to: '/projects',
    title: 'Projects',
    description: 'Selected work, from portfolio sites to interface experiments.',
  },
  {
    to: '/about',
    title: 'About',
    description: 'How I got into development, plus the way I like to work.',
  },
  {
    to: '/contact',
    title: 'Contact',
    description: 'Tell me about your project and I will reply as soon as I can.',
  },
]

export const Home = () => {
  useDocumentTitle('Home')

  return (
    <>
      <section className="hero-panel" aria-labelledby="home-title">
        <div className="hero-layout">
          <div className="hero-copy">
            <span className="eyebrow">Welcome I am</span>
            <h1 id="home-title">John Errol Valdez.</h1>
            <p>
              Aspiring Full-Stack Developer, Web Designer, UI/UX Designer, Logo and Animation
              Designer.
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

      <section className="section-block" aria-labelledby="home-services-title">
        <h2 className="section-title" id="home-services-title">
          How I can help
        </h2>
        <p className="section-intro">
          Three steps I follow on every project, whether it is a landing page or a full web app.
        </p>

        <ul className="info-grid">
          {services.map((service) => (
            <li className="info-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-block" aria-labelledby="home-explore-title">
        <h2 className="section-title" id="home-explore-title">
          Explore
        </h2>
        <p className="section-intro">Jump straight to the part of the site you need.</p>

        <ul className="info-grid">
          {exploreLinks.map((link) => (
            <li className="info-card" key={link.to}>
              <h3>
                <NavLink className="card-link" to={link.to}>
                  {link.title}
                </NavLink>
              </h3>
              <p>{link.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Home