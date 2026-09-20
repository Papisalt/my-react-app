import { PageHeader } from '../components/PageHeader.jsx'

const skillGroups = [
  {
    title: 'Fulll-stack web development',
    description: 'Building interfaces that stay readable on every screen size.',
    skills: [
      { name: 'HTML and CSS', note: 'Semantic markup, Flexbox, Grid, responsive layouts.' },
      { name: 'JavaScript', note: 'ES2020+ syntax, modules, async/await, fetch.' },
      { name: 'React', note: 'Components, hooks, state, and routing with React Router.' },
      { name: 'Bootstrap', note: 'Utility layouts and accessible, ready-made components.' },
      { name: 'PHP', note: 'Server-side scripting for dynamic web pages.' },
      { name: 'Laravel', note: 'Full-stack PHP framework for web application development.' },
    ],
  },
  {
    title: 'Design',
    description: 'Turning ideas into layouts, brands, and motion that feel intentional.',
    skills: [
      { name: 'UI/UX design', note: 'Wireframes, user flows, and reusable interface systems.' },
      { name: 'Logo design', note: 'Marks and brand elements with clean, simple geometry.' },
      { name: 'Animation', note: 'Micro-interactions that still respect reduced-motion settings.' },
      { name: 'Figma', note: 'Component libraries, prototypes, and design handoff.' },
      { name: 'Canva', note: 'Design tool for creating visual content.' },
    ],
  },
  {
    title: 'Tools and workflow',
    description: 'The habits that keep a project tidy from first commit to handover.',
    skills: [
      { name: 'Git and GitHub', note: 'Branching, pull requests, and readable history.' },
      { name: 'Vite and npm', note: 'Dev servers, production builds, dependencies.' },
      { name: 'Django and Laravel', note: 'Full-stack Python and PHP frameworks for web application development.' },
      { name: 'Accessibility', note: 'Keyboard support, semantics, and contrast checking.' },
      { name: 'Debugging', note: 'DevTools, console, network, and layout debugging.' },
      { name: 'Troubleshooting', note: 'Identifying and resolving issues in code and systems.' },
    ],
  },
]

const learningNow = [
  'TypeScript for typed React components',
  'Node.js and Express for backend APIs',
  'PostgreSQL and data modelling basics',
]

export const Skills = () => {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        headingId="skills-heading"
        title="Skills and toolset"
        lead="Development, design, and workflow tools."
      />

      <section className="section-block" aria-labelledby="skills-groups-title">
        <h2 className="section-title" id="skills-groups-title">
          What I work with
        </h2>
        <ul className="skill-grid">
          {skillGroups.map((group) => (
            <li className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <dl className="skill-list">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <dt>{skill.name}</dt>
                    <dd>{skill.note}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-block" aria-labelledby="skills-learning-title">
        <h2 className="section-title" id="skills-learning-title">
          Currently learning
        </h2>
        <ul className="value-list">
          {learningNow.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-block" aria-labelledby="skills-cta-title">
        <h2 className="section-title" id="skills-cta-title">
          Let&apos;s work together
        </h2>
        <a className="btn btn-primary btn-lg" href="#contact">
          Start a conversation
        </a>
      </section>
    </>
  )
}

export default Skills