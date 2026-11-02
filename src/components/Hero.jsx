import React from 'react'

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-shell hero-grid">
        <div className="hero-content">
          <div className="availability">
            <span className="availability-dot" aria-hidden="true" />
            Information Systems Student
          </div>
          <h1 id="hero-title">Building useful digital experiences <span>with code.</span></h1>
          <p className="hero-copy">
            I’m a final-year Information Systems student at Debre Berhan University
            and an aspiring full-stack web developer. I enjoy building practical
            applications with React, Django, and PostgreSQL.
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">Explore my work <span className="button-arrow" aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="#resume">My résumé</a>
          </div>
          <a className="hero-github" href="https://github.com/zewdu1601" target="_blank" rel="noreferrer">
            <span className="github-mark" aria-hidden="true">↗</span>
            github.com/zewdu1601
          </a>
          <div className="hero-stack" aria-label="Main technologies">
            <span>React.js</span><i /><span>Django</span><i /><span>PostgreSQL</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract portfolio illustration">
          <span className="art-orbit" aria-hidden="true" />
          <span className="art-spark" aria-hidden="true">✳</span>
          <div className="art-card">
            <div className="art-card-top">
              <span>Developer profile</span>
              <span className="art-card-mark" aria-hidden="true">IS</span>
            </div>
            <h2>Full-stack<br /><span>developer</span></h2>
            <p className="hero-art-copy">Turning ideas into practical applications.</p>
            <div className="art-card-tags"><span>Frontend</span><span>Backend</span><span>Database</span></div>
            <div className="art-card-bottom">
              <strong>React · Django</strong>
              <span>POSTGRESQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}