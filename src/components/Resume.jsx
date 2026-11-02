import React from 'react'

export default function Resume() {
  return (
    <section className="section resume" id="resume" aria-label="Résumé">
      <div className="section-shell">
        <div className="resume-card">
          <div>
            <span className="section-kicker">Résumé</span>
            <h2>Let’s talk about what I can build.</h2>
            <p>A CV download will be available here once the final PDF is added.</p>
          </div>
          <a className="button resume-contact" href="#contact">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}