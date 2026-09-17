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
    href: '#skills',
    title: 'Skills',
    description: 'The languages, frameworks, and design tools I reach for every day.',
  },
  {
    href: '#projects',
    title: 'Projects',
    description: 'Selected work, from portfolio sites to interface experiments.',
  },
  {
    href: '#designs',
    title: 'Designs',
    description: 'Logos, brand marks, and other visual work I have put together.',
  },
  {
    href: '#about',
    title: 'About',
    description: 'How I got into development, plus the way I like to work.',
  },
  {
    href: '#contact',
    title: 'Contact',
    description: 'Tell me about your project and I will reply as soon as I can.',
  },
]

export const Home = () => {
  return (
    <>
      <section className="hero-panel" aria-labelledby="home-heading">
        <div className="hero-layout">
          <div className="hero-copy">
            <span className="eyebrow">Hello I am</span>
            <h1 id="home-heading">John Errol Valdez.</h1>
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
            <li className="info-card" key={link.href}>
              <h3>
                <a className="card-link" href={link.href}>
                  {link.title}
                </a>
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