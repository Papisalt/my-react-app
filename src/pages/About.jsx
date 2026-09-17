import { PageHeader } from '../components/PageHeader.jsx'

const aboutImage = '/IMG_6288.jpeg'

const journey = [
  {
    year: '2020',
    title: 'First',
    description:
      'Started with logo and poster layouts for school projects, learning spacing, hierarchy, and colour.',
  },
  {
    year: '2023',
    title: 'From mockups to markup',
    description:
      'Learned HTML, CSS, and JavaScript, then rebuilt my own designs as responsive pages.',
  },
  {
    year: '2024',
    title: 'Building with React',
    description:
      'Moved to component-based React apps and started tracking every change with Git and GitHub.',
  },
  {
    year: 'Now',
    title: 'Working towards full-stack',
    description:
      'Graduated and now deepening backend skills: Node, REST APIs, and database design.',
  },
]

const practices = [
  'Clear communication: I share progress and questions early instead of guessing.',
  'Small, reviewable changes so a design or feature is easy to check and roll back.',
  'Accessibility from the first draft: semantics, keyboard paths, and readable contrast.',
  'Design and code kept in sync, so what you approve is what ships.',
]

export const About = () => {
  return (
    <>
      <PageHeader
        eyebrow="About"
        headingId="about-heading"
        title="About John Errol Valdez"
        lead="Designer turned developer, building interfaces that are simple to use and simple to maintain."
      />

      <section className="section-block" aria-labelledby="about-story-title">
        <h2 className="section-title" id="about-story-title">
          The short version
        </h2>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I am an aspiring full-stack developer and designer. My work usually starts on paper or
              in Figma, then moves into React and Bootstrap so the final build matches the design
              instead of drifting away from it.
            </p>
            <p>
              Alongside development, I keep practising UI/UX, logo, and animation design, because
              the same skills that make a layout clear also make an interface feel finished.
            </p>
            <p>
              Right now I am looking for internships, freelance projects, and collaborations where I
              can grow from front-end work into full-stack delivery.
            </p>
          </div>

          <figure className="about-figure">
            <img
              src={aboutImage}
              alt="Graduation portrait of John Errol Valdez wearing a navy gown with a red hood"
            />
            <figcaption>Graduation portrait, 2026.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-block" aria-labelledby="about-journey-title">
        <h2 className="section-title" id="about-journey-title">
          Journey so far
        </h2>
        <p className="section-intro">Four steps that shaped how I build today.</p>

        <ol className="timeline">
          {journey.map((milestone) => (
            <li className="timeline-item" key={milestone.year}>
              <p className="timeline-year">{milestone.year}</p>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-block" aria-labelledby="about-practices-title">
        <h2 className="section-title" id="about-practices-title">
          How I like to work
        </h2>
        <p className="section-intro">The habits I bring to a team or a client project.</p>
        <ul className="value-list">
          {practices.map((practice) => (
            <li key={practice}>{practice}</li>
          ))}
        </ul>
      </section>

      <section className="section-block" aria-labelledby="about-cta-title">
        <h2 className="section-title" id="about-cta-title">
          Let&apos;s build something together
        </h2>
        <p className="section-intro">
          Tell me what you are working on and I will let you know how I can help.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary btn-lg" href="#contact">
            Contact me
          </a>
          <a className="btn btn-outline-light btn-lg" href="#skills">
            Review my skills
          </a>
        </div>
      </section>
    </>
  )
}

export default About