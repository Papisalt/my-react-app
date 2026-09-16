import { NavLink } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

// =============================================================================
//  ADD YOUR PROJECTS HERE
// =============================================================================
//  Copy a whole { ... } block to add another card, then change the values.
//  Leave a field out (or set it to '') and that part of the card is hidden.
//
//    title       Project name -> shown as the card heading
//    status      Short label, e.g. 'Live', 'In progress', 'Case study'
//    description One or two sentences about what it is and what you did
//    liveUrl     Your deployed website    -> 'https://my-project.vercel.app'
//    sourceUrl   Your repository          -> 'https://github.com/Papisalt/my-project'
//    image       Screenshot in public/projects/ -> '/projects/my-project.png'
//    imageAlt    What the screenshot shows (used by screen readers)
//    highlights  Optional bullet list of the work you did
//    tags        The tools and skills you used
// =============================================================================
const projects = [
  {
    title: 'Gradfolio',
    status: 'Live',
    description:
      'This portfolio site: a routed React app with a dark, high-contrast theme, accessible navigation, and a page for every section.',
    // Paste your deployed address here when the site is online, e.g.
    // liveUrl: 'https://your-portfolio.vercel.app',
    liveUrl: '',
    sourceUrl: 'https://github.com/Papisalt/my-react-app',
    // Save a screenshot in public/projects/ then point to it here:
    // image: '/projects/gradfolio.png',
    image: '',
    imageAlt: '',
    highlights: [
      'Built five routed pages with React Router sharing one accessible navigation bar.',
      'Added a skip link, route-change focus handling, and fully labelled form fields.',
    ],
    tags: ['React', 'Vite', 'Bootstrap', 'React Router'],
  },
  {
    title: 'Your next project',
    status: 'In progress',
    description:
      'Describe the project in a sentence or two: what it does, who it is for, and what part you built.',
    // liveUrl: 'https://project-name.netlify.app',
    liveUrl: '',
    // sourceUrl: 'https://github.com/Papisalt/project-name',
    sourceUrl: '',
    // image: '/projects/project-name.png',
    image: '',
    imageAlt: '',
    tags: ['React', 'CSS Grid'],
  },
  {
    title: 'Website or landing page',
    status: 'Case study',
    description:
      'Use a card like this for a client site, a group project, or a page you designed and shipped.',
    liveUrl: '',
    sourceUrl: '',
    image: '',
    imageAlt: '',
    tags: ['HTML', 'CSS', 'Responsive design'],
  },
  {
    title: 'Design work',
    status: 'Ongoing',
    description:
      'Cards also work for non-code work such as logos, brand kits, or animation experiments.',
    liveUrl: '',
    sourceUrl: '',
    image: '',
    imageAlt: '',
    tags: ['Logo design', 'Figma', 'Animation'],
  },
]

export const Projects = () => {
  useDocumentTitle('Projects')

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected projects"
        lead="A mix of shipped work and ongoing experiments. Each card notes the tools involved and where to look next."
      />

      <section className="section-block" aria-labelledby="projects-list-title">
        <h2 className="section-title" id="projects-list-title">
          Portfolio work
        </h2>
        <p className="section-intro">
          These entries are starting points for your own case studies — swap in the projects you
          want to show, along with screenshots and outcomes.
        </p>

        <ul className="project-grid">
          {projects.map((project) => (
            <li className="project-card" key={project.title}>
              {project.image ? (
                <img
                  className="project-shot"
                  src={project.image}
                  alt={project.imageAlt || `${project.title} screenshot`}
                  loading="lazy"
                  decoding="async"
                />
              ) : null}

              <div className="project-head">
                <h3>{project.title}</h3>
                <p className="project-status">{project.status}</p>
              </div>

              <p>{project.description}</p>

              {project.highlights?.length ? (
                <>
                  <h4 className="project-subtitle">What I did</h4>
                  <ul className="project-highlights">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </>
              ) : null}

              <h4 className="project-subtitle">Built with</h4>
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li className="tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="project-actions">
                {project.liveUrl ? (
                  <a
                    className="btn btn-primary btn-sm"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit {project.title}
                    {' '}
                    <span className="visually-hidden">website (opens in a new tab)</span>
                  </a>
                ) : null}

                {project.sourceUrl ? (
                  <a
                    className="btn btn-outline-light btn-sm"
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View source
                    {' '}
                    <span className="visually-hidden">
                      for {project.title} (opens in a new tab)
                    </span>
                  </a>
                ) : null}

                {project.liveUrl || project.sourceUrl ? null : (
                  <NavLink className="btn btn-outline-light btn-sm" to="/contact">
                    Ask about {project.title}
                  </NavLink>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-block" aria-labelledby="projects-next-title">
        <h2 className="section-title" id="projects-next-title">
          Want the full walkthrough?
        </h2>
        <p className="section-intro">
          I am happy to talk through the decisions behind any of these builds, including what I
          would change next time.
        </p>
        <div className="cta-row">
          <NavLink className="btn btn-primary btn-lg" to="/contact">
            Request a walkthrough
          </NavLink>
          <NavLink className="btn btn-outline-light btn-lg" to="/about">
            More about me
          </NavLink>
        </div>
      </section>
    </>
  )
}

export default Projects