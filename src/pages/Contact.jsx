import { useEffect, useRef, useState } from 'react'
import { PageHeader } from '../components/PageHeader.jsx'

const contactEmail = 'itsmejevjev@gmail.com'
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialValues = {
  name: '',
  email: '',
  topic: '',
  message: '',
  consent: false,
}

const topics = [
  { value: 'internship', label: 'Internship or entry-level role' },
  { value: 'freelance', label: 'Freelance project' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'other', label: 'Something else' },
]

const fieldLabels = {
  name: 'Your name',
  email: 'Email address',
  topic: 'Topic',
  message: 'Message',
  consent: 'Permission to reply',
}

const validate = (values) => {
  const errors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Enter your name using at least 2 characters.'
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter an email address in the format name@example.com.'
  }

  if (!values.topic) {
    errors.topic = 'Choose the option that fits your message best.'
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Add a little more detail - at least 10 characters.'
  }

  if (!values.consent) {
    errors.consent = 'Tick the checkbox so I know I am allowed to reply.'
  }

  return errors
}

export const Contact = () => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [submitCount, setSubmitCount] = useState(0)
  const [submittedName, setSubmittedName] = useState('')
  const errorSummaryRef = useRef(null)

  const errorEntries = Object.entries(errors).filter(([, message]) => Boolean(message))

  useEffect(() => {
    if (submitCount > 0 && status === 'error' && errorSummaryRef.current) {
      errorSummaryRef.current.focus()
    }
  }, [submitCount, status])

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target

    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))

    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validate(values)

    setSubmitCount((count) => count + 1)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('error')
      return
    }

    setErrors({})
    setStatus('success')
    setSubmittedName(values.name.trim())
    setValues(initialValues)
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        headingId="contact-heading"
        title="Contact"
        lead="Have a project in mind? Send me a message."
      />

      <section className="section-block" aria-labelledby="contact-form-title">
        <h2 className="section-title" id="contact-form-title">
          Send a message
        </h2>
        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div
              className={
                errorEntries.length > 0 ? 'form-summary form-summary-error' : 'form-summary'
              }
              ref={errorSummaryRef}
              role="alert"
              tabIndex={-1}
              aria-labelledby="form-summary-title"
            >
              {errorEntries.length > 0 ? (
                <>
                  <h3 id="form-summary-title">Please fix the following</h3>
                  <ul>
                    {errorEntries.map(([field, message]) => (
                      <li key={field}>
                        <a href={`#${field}`}>
                          {fieldLabels[field]}: {message}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="name">
                Your name
                <span className="required-mark" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                className="form-control"
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                autoComplete="name"
                required
                aria-required="true"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : 'name-hint'}
              />
              <p className="form-hint" id="name-hint">
                The name you would like me to use when I reply.
              </p>
              {errors.name ? (
                <p className="form-error" id="name-error">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="email">
                Email address
                <span className="required-mark" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                className="form-control"
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                autoComplete="email"
                required
                aria-required="true"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : 'email-hint'}
              />
              <p className="form-hint" id="email-hint">
                I only use this to reply to your message.
              </p>
              {errors.email ? (
                <p className="form-error" id="email-error">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="topic">
                Topic
                <span className="required-mark" aria-hidden="true">
                  *
                </span>
              </label>
              <select
                className="form-select"
                id="topic"
                name="topic"
                value={values.topic}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={Boolean(errors.topic)}
                aria-describedby={errors.topic ? 'topic-error' : 'topic-hint'}
              >
                <option value="">Choose a topic</option>
                {topics.map((topic) => (
                  <option key={topic.value} value={topic.value}>
                    {topic.label}
                  </option>
                ))}
              </select>
              <p className="form-hint" id="topic-hint">
                Pick the closest match so your message reaches the right place.
              </p>
              {errors.topic ? (
                <p className="form-error" id="topic-error">
                  {errors.topic}
                </p>
              ) : null}
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="message">
                Message
                <span className="required-mark" aria-hidden="true">
                  *
                </span>
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="6"
                value={values.message}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : 'message-hint'}
              />
              <p className="form-hint" id="message-hint">
                A short summary of the project, goals, and timeline is plenty to get started.
              </p>
              {errors.message ? (
                <p className="form-error" id="message-error">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div className="form-field form-field-check">
              <div className="form-check-heading">
                <input
                  className="form-check-input"
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={values.consent}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? 'consent-error' : 'consent-hint'}
                />
                <label className="form-check-label" htmlFor="consent">
                  You may reply to me at the email address above.
                  <span className="required-mark" aria-hidden="true">
                    *
                  </span>
                </label>
              </div>
              <p className="form-hint" id="consent-hint">
                Uncheck this if you would rather not be contacted again.
              </p>
              {errors.consent ? (
                <p className="form-error" id="consent-error">
                  {errors.consent}
                </p>
              ) : null}
            </div>

            <button className="btn btn-primary btn-lg" type="submit">
              Send message
            </button>

            <p className="form-status" role="status">
              {status === 'success'
                ? `Thanks ${submittedName || 'for reaching out'}. Please email ${contactEmail} directly to continue.`
                : ''}
            </p>
          </form>

          <aside className="contact-details" aria-labelledby="contact-details-title">
            <h3 id="contact-details-title">Direct contact</h3>
            <ul className="contact-list">
              <li>
                <span className="contact-label">Email</span>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </li>
              <li>
                <span className="contact-label">GitHub</span>
                <a href="https://github.com/Papisalt" target="_blank" rel="noreferrer">
                  github.com/Papisalt
                  {' '}
                  <span className="visually-hidden">(opens in a new tab)</span>
                </a>
              </li>
              <li>
                <span className="contact-label">Location</span>
                <span>Philippines (remote friendly)</span>
              </li>
              <li>
                <span className="contact-label">Typical reply time</span>
                <span>One to two days</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}

export default Contact
