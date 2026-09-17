import { PageHeader } from '../components/PageHeader.jsx'
import { ThumbPlaceholder } from '../components/ThumbPlaceholder.jsx'

// =============================================================================
//  ADD YOUR LOGOS HERE
// =============================================================================
//  Copy a whole { ... } block to add another card, then change the values.
//  Leave a field out (or set it to '') and that part of the card is hidden, so
//  you can fill the grid in one file at a time.
//
//    title       Name of the logo or mark -> shown as the card heading
//    category    Short label, e.g. 'Logo mark', 'Wordmark', 'Brand kit'
//    description One or two sentences about the idea behind it
//    image       File in public/designs/ -> '/designs/my-logo.png'
//    imageAlt    What the image shows (used by screen readers)
//    tags        Optional tools and skills you used
//
//  With no image the card shows a gradient cover printing its title and its
//  category, so the grid still looks finished while you collect the files.
// =============================================================================
const logos = [
  {
    title: 'Personal monogram',
    category: 'Logo mark',
    description:
      'My own mark: the letters J and V set solid so the shape still reads at favicon size.',
    image: '/jev-logo.png',
    imageAlt: 'Monogram of the letters J and V in light grey on a black background',
    tags: ['Logo design', 'Typography'],
  },
  {
    title: 'Client logo',
    category: 'Logo mark',
    description:
      'Replace this card with a client mark: say who it was for and what the shape is meant to suggest.',
    // image: '/designs/client-logo.png',
    image: '',
    imageAlt: '',
    tags: ['Logo design', 'Figma'],
  },
  {
    title: 'Wordmark',
    category: 'Wordmark',
    description:
      'Use a card like this for a name set in type, plus the weights and spacing you settled on.',
    image: '',
    imageAlt: '',
    tags: ['Typography', 'Brand'],
  },
  {
    title: 'Brand kit',
    category: 'Brand kit',
    description:
      'A page from a brand sheet: logo variations, colour swatches, and the type scale in one view.',
    image: '',
    imageAlt: '',
    tags: ['Brand kit', 'Colour'],
  },
]

// =============================================================================
//  ADD YOUR DESIGNS HERE
// =============================================================================
//  Same fields as the logos above. Keep 'category' to label the kind of work,
//  for example 'UI concept', 'Poster', 'Social kit', or 'Motion'.
// =============================================================================
const designs = [
  {
    title: 'Interface concept',
    category: 'UI concept',
    description:
      'A screen or flow you designed in Figma: describe the problem it solves and the layout you chose.',
    image: '',
    imageAlt: '',
    tags: ['UI/UX design', 'Figma'],
  },
  {
    title: 'Poster or layout',
    category: 'Print layout',
    description:
      'Posters, banners, or page layouts. Note the format and the size you designed for.',
    image: '',
    imageAlt: '',
    tags: ['Layout', 'Typography'],
  },
  {
    title: 'Social media kit',
    category: 'Social kit',
    description:
      'A set of matching graphics for a page or campaign, with the sizes and the template you built.',
    image: '',
    imageAlt: '',
    tags: ['Figma', 'Brand'],
  },
  {
    title: 'Animation loop',
    category: 'Motion',
    description:
      'A short animation or micro-interaction. Say how long it runs and what it is meant to emphasise.',
    image: '',
    imageAlt: '',
    tags: ['Animation', 'Motion design'],
  },
]

const DesignCard = ({ item }) => {
  return (
    <li className="design-card">
      {item.image ? (
        <a className="design-thumb" href={item.image} target="_blank" rel="noreferrer">
          <img
            alt={item.imageAlt || `${item.title} design`}
            decoding="async"
            loading="lazy"
            src={item.image}
          />
          <span className="visually-hidden">Open the full-size image in a new tab</span>
        </a>
      ) : (
        <ThumbPlaceholder className="design-thumb" label={item.category} title={item.title} />
      )}

      <div className="design-body">
        <p className="design-category">{item.category}</p>
        <h3>{item.title}</h3>
        <p className="design-note">{item.description}</p>

        {item.tags?.length ? (
          <ul className="tag-list">
            {item.tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  )
}

const DesignGrid = ({ items }) => {
  return (
    <ul className="design-grid">
      {items.map((item) => (
        <DesignCard item={item} key={item.title} />
      ))}
    </ul>
  )
}

export const Designs = () => {
  return (
    <>
      <PageHeader
        eyebrow="Designs"
        headingId="designs-heading"
        title="Logos and design work"
        lead="Marks, layouts, and motion pieces I have made alongside the code. Any card with an image opens the full-size file in a new tab."
      />

      <section className="section-block" aria-labelledby="designs-logos-title">
        <h2 className="section-title" id="designs-logos-title">
          Logos and brand marks
        </h2>
        <p className="section-intro">
          Marks and wordmarks, with a short note on the thinking behind each shape.
        </p>

        <DesignGrid items={logos} />
      </section>

      <section className="section-block" aria-labelledby="designs-gallery-title">
        <h2 className="section-title" id="designs-gallery-title">
          Other design work
        </h2>
        <p className="section-intro">
          Interface concepts, print layouts, and animation experiments.
        </p>

        <DesignGrid items={designs} />
      </section>

      <section className="section-block" aria-labelledby="designs-cta-title">
        <h2 className="section-title" id="designs-cta-title">
          Need a logo or a design refresh?
        </h2>
        <p className="section-intro">
          I can put together a mark, a small brand kit, or a set of layouts that match your
          project.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary btn-lg" href="#contact">
            Ask about design work
          </a>
          <a className="btn btn-outline-light btn-lg" href="#projects">
            See my projects
          </a>
        </div>
      </section>
    </>
  )
}

export default Designs