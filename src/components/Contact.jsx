import React, { useState } from 'react'

const emailAddress = 'YOUR_EMAIL@example.com'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [error, setError] = useState('')

  function updateField(event) {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
    setError('')
  }

  function submit(event) {
    event.preventDefault()

    if (Object.values(form).some((value) => !value.trim())) {
      setError('Please complete every field.')
      return
    }

    if (emailAddress.includes('YOUR_EMAIL')) {
      setError('Add your email address in Contact.jsx before using the contact form.')
      return
    }

    const body = `Name: ${form.name}\nReply email: ${form.email}\n\n${form.message}`
    const mailto = `mailto:${emailAddress}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="section-shell">
        <div className="contact-card">
          <div className="section-kicker">Get in touch</div>
          <h2 id="contact-title">Have a project in mind?</h2>
          <p className="contact-intro">
            For opportunities, collaboration, or questions, feel free to reach out.
            I’m interested in learning and contributing to meaningful software projects.
          </p>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Let’s connect.</h3>
              <p>Find my projects and get in touch through GitHub.</p>
              <a
                className="contact-link"
                href="https://github.com/zewdu1601"
                target="_blank"
                rel="noreferrer"
              >
                <span aria-hidden="true">GH</span>
                github.com/zewdu1601
                <span aria-hidden="true">↗</span>
              </a>
              <p className="contact-note">
                The form opens your email app; it does not send or store messages on a server.
              </p>
            </div>
            <form className="contact-form" onSubmit={submit}>
              <label>
                Name
                <input name="name" value={form.name} onChange={updateField} placeholder="Your name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" value={form.email} onChange={updateField} placeholder="you@example.com" required />
              </label>
              <label>
                Subject
                <input name="subject" value={form.subject} onChange={updateField} placeholder="What is this about?" required />
              </label>
              <label>
                Message
                <textarea name="message" value={form.message} onChange={updateField} placeholder="Write your message..." rows="4" required />
              </label>
              {error && <p className="form-error" role="alert">{error}</p>}
              <button className="button contact-submit" type="submit">
                Continue with email <span aria-hidden="true">↗</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
