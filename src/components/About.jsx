import React from 'react'

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="section-shell">
        <div className="about-grid">
          <div>
            <div className="section-kicker">A little about me</div>
            <h2 className="section-heading" id="about-title">Curious mind.<br /><span>Practical builder.</span></h2>
          </div>
          <div className="about-copy">
            <p>
              I’m an Information Systems student interested in software development,
              database design, web technologies, and practical business applications.
            </p>
            <p>
              My goal is to develop reliable software that helps people and
              organizations solve real problems. I enjoy learning across the stack,
              from shaping a clear interface to designing the data and logic behind it.
            </p>
          </div>
        </div>
        <div className="about-highlights">
          <article className="highlight-card">
            <span className="highlight-icon" aria-hidden="true">01</span>
            <h3>Information Systems</h3>
            <p>Final-year student at Debre Berhan University.</p>
          </article>
          <article className="highlight-card">
            <span className="highlight-icon" aria-hidden="true">02</span>
            <h3>Full-Stack Development</h3>
            <p>Building interfaces and server-side applications.</p>
          </article>
          <article className="highlight-card">
            <span className="highlight-icon" aria-hidden="true">03</span>
            <h3>Practical Problem Solving</h3>
            <p>Using technology to address real-world needs.</p>
          </article>
        </div>
      </div>
    </section>
  )
}