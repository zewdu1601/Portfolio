import React from 'react'

export default function Education() {
  return (
    <section className="section education" id="education" aria-labelledby="education-title">
      <div className="section-shell">
        <div className="education-heading">
          <div className="section-kicker">My background</div>
          <h2 className="section-heading" id="education-title">Education &amp; growth.</h2>
        </div>
        <article className="education-card">
          <span className="education-icon" aria-hidden="true">IS</span>
          <div>
            <span className="project-number">INFORMATION SYSTEMS</span>
            <h3>Debre Berhan University</h3>
            <p>Final-year undergraduate student</p>
          </div>
          <span className="education-status">Currently studying</span>
        </article>
      </div>
    </section>
  )
}