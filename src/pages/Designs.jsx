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
    title: 'Startup Project Ubra',
    category: 'Logo mark',
    description:
      'A logo for a startup project called Ubra, designed to access or view works aligned with your profession or desired career.',
    image: '/projects/Ubra_logo.png',
    imageAlt: 'Logo for the startup project Ubra.',
    tags: ['Logo design', 'Canva', 'Typography'],
  },
]

// =============================================================================
//  ADD YOUR DESIGNS HERE
// =============================================================================
//  Same fields as the logos above. Keep 'category' to label the kind of work,
//  for example 'UI concept', 'Poster', 'Social kit', or 'Motion'.
// =============================================================================
const designs = [
]

const DesignCard = ({ item }) => {
  return (
    <li
      className={item.title === 'Startup Project Ubra' ? 'design-card design-card-featured' : 'design-card'}
    >
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
        lead="Logos, layouts, and motion work."
      />

      <section className="section-block" aria-labelledby="designs-logos-title">
        <h2 className="section-title" id="designs-logos-title">
          Logos and brand marks
        </h2>
        <DesignGrid items={logos} />
      </section>

      <section className="section-block" aria-labelledby="designs-gallery-title">
        <h2 className="section-title" id="designs-gallery-title">
          More design work coming soon
        </h2>
        <DesignGrid items={designs} />
      </section>

      <section className="section-block" aria-labelledby="designs-cta-title">
        <h2 className="section-title" id="designs-cta-title">
          Need design work?
        </h2>
        <a className="btn btn-primary btn-lg" href="#contact">
          Ask about design work
        </a>
      </section>
    </>
  )
}

export default Designs