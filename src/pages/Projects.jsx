import { PageHeader } from '../components/PageHeader.jsx'
import { ThumbPlaceholder } from '../components/ThumbPlaceholder.jsx'

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
//    videoUrl    Demo video or walkthrough -> 'https://youtu.be/your-video'
//    videoLabel  Button text for the video  -> 'Watch on YouTube'
//    sourceUrl   Your repository          -> 'https://github.com/Papisalt/my-project'
//    image       Screenshot in public/projects/ -> '/projects/my-project.png'
//    imageAlt    What the screenshot shows (used by screen readers)
//    highlights  Optional bullet list of the work you did
//    tags        Optional tools and skills you used
// =============================================================================
const projects = [
  {
    title: 'DILG CAR RSPP',
    status: 'Live',
    description: 'The RSPP website for DILG Cordillera, shown here on its test address.',
    liveUrl: 'https://test-rspp.car.dilg.gov.ph/',
    // sourceUrl: 'https://github.com/Papisalt/dilg-rspp',
    sourceUrl: '',
    // Save a screenshot in public/projects/ then point to it here:
    // image: '/projects/dilg-rspp.png',
    image: '',
    imageAlt: '',
    // Say what you did on this project, for example:
    // highlights: [
    //   'Built the responsive layout for the main pages.',
    //   'Checked every section on mobile and desktop browsers.',
    // ],
    // Add the tools you used, for example:
    // tags: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    tags: [],
  },
  {
    title: 'Fallen music video',
    status: 'Video',
    description:
      'A self-made, unofficial music video for Fallen by Lola Amour, published on my YouTube channel.',
    liveUrl: '',
    videoUrl: 'https://youtu.be/6BrG8jik-IA',
    videoLabel: 'Watch on YouTube',
    sourceUrl: '',
    // This is the poster frame from the video itself; swap in your own still,
    // artwork, or a shot from the edit whenever you like.
    image: '/projects/fallen-music-video.jpg',
    imageAlt: 'Title card reading FALLEN in large grey serif letters on a black background',
    tags: [],
  },
  // {
  //   title: 'Gradfolio',
  //   status: 'Live',
  //   description:
  //     'This portfolio site: one scrollable React page with a dark, high-contrast theme, a sticky navigation bar, and a clearly marked section for every part of the story.',
  //   // Paste your deployed address here when the site is online, e.g.
  //   // liveUrl: 'https://your-portfolio.vercel.app',
  //   liveUrl: '',
  //   sourceUrl: 'https://github.com/Papisalt/my-react-app',
  //   // Save a screenshot in public/projects/ then point to it here:
  //   // image: '/projects/gradfolio.png',
  //   image: '',
  //   imageAlt: '',
  //   highlights: [
  //     'Built a single-page layout where the navigation scrolls to each section and highlights the one in view.',
  //     'Added a skip link, shareable #section links, and fully labelled form fields.',
  //   ],
  //   tags: ['React', 'Vite', 'Bootstrap', 'React Router'],
  // },
  // {
  //   title: 'Your next project',
  //   status: 'In progress',
  //   description:
  //     'Describe the project in a sentence or two: what it does, who it is for, and what part you built.',
  //   // liveUrl: 'https://project-name.netlify.app',
  //   liveUrl: '',
  //   // sourceUrl: 'https://github.com/Papisalt/project-name',
  //   sourceUrl: '',
  //   // image: '/projects/project-name.png',
  //   image: '',
  //   imageAlt: '',
  //   tags: ['React', 'CSS Grid'],
  // },
  // {
  //   title: 'Website or landing page',
  //   status: 'Case study',
  //   description:
  //     'Use a card like this for a client site, a group project, or a page you designed and shipped.',
  //   liveUrl: '',
  //   sourceUrl: '',
  //   image: '',
  //   imageAlt: '',
  //   tags: ['HTML', 'CSS', 'Responsive design'],
  // },
]

export const Projects = () => {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        headingId="projects-heading"
        title="Selected projects"
        lead="A mix of shipped work and ongoing experiments. Each card notes the tools involved and where to look next."
      />

      <section className="section-block" aria-labelledby="projects-list-title">
        <h2 className="section-title" id="projects-list-title">
          Portfolio work
        </h2>
        <p className="section-intro">
          Open a live site, watch a walkthrough, or read the source — whichever is useful first.
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
              ) : (
                <ThumbPlaceholder
                  className="project-shot"
                  label={project.status}
                  title={project.title}
                />
              )}

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

              {project.tags?.length ? (
                <>
                  <h4 className="project-subtitle">Built with</h4>
                  <ul className="tag-list">
                    {project.tags.map((tag) => (
                      <li className="tag" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

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

                {project.videoUrl ? (
                  <a
                    className="btn btn-outline-light btn-sm"
                    href={project.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.videoLabel || 'Watch the demo'}
                    {' '}
                    <span className="visually-hidden">
                      for {project.title} on YouTube (opens in a new tab)
                    </span>
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

                {project.liveUrl || project.videoUrl || project.sourceUrl ? null : (
                  <a className="btn btn-outline-light btn-sm" href="#contact">
                    Ask about {project.title}
                  </a>
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
          <a className="btn btn-primary btn-lg" href="#contact">
            Request a walkthrough
          </a>
          <a className="btn btn-outline-light btn-lg" href="#about">
            More about me
          </a>
        </div>
      </section>
    </>
  )
}

export default Projects