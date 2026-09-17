/**
 * The one-page layout lives in a single place: App.jsx renders one <section>
 * per entry and the navigation in NavBar.jsx links straight to those ids.
 *
 *   id        Matches the <section id="..."> and the #hash in every link
 *   label     Text shown in the navigation and used as the document title
 *   headingId The id of the section heading, used by aria-labelledby
 */
export const siteSections = [
  { id: 'home', label: 'Home', headingId: 'home-heading' },
  { id: 'skills', label: 'Skills', headingId: 'skills-heading' },
  { id: 'projects', label: 'Projects', headingId: 'projects-heading' },
  { id: 'designs', label: 'Designs', headingId: 'designs-heading' },
  { id: 'about', label: 'About', headingId: 'about-heading' },
  { id: 'contact', label: 'Contact', headingId: 'contact-heading' },
]

/** Ids only: the scroll spy observes these and the navigation compares them. */
export const sectionIds = siteSections.map((section) => section.id)

export default siteSections