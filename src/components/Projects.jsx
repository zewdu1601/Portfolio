import React from 'react'
import projects from '../data/projects.js'

function CarShoppingPreview() {
  return (
    <div className="visual-window" aria-hidden="true">
      <div className="window-bar"><i /><i /><i /></div>
      <div className="window-content">
        <div className="auto-site-nav"><strong>Drive / Find</strong><span>Browse cars　 Details　⌕</span></div>
        <div className="auto-hero">
          <div className="auto-hero-copy">
            <small>Car shopping system</small>
            <h3>Find your<br />next car.</h3>
            <span>Browse vehicles ↗</span>
          </div>
          <span className="auto-car" />
        </div>
        <div className="auto-details"><span>Vehicle listings · Car details</span><span>EXPLORE</span></div>
      </div>
    </div>
  )
}

function StoreManagementPreview() {
  return (
    <div className="visual-window" aria-hidden="true">
      <div className="window-bar"><i /><i /><i /></div>
      <div className="window-content">
        <div className="store-site-nav"><strong>Store / Manager</strong><span>Products　 Inventory　 Orders</span></div>
        <div className="store-banner">
          <div className="store-dashboard">
            <div className="store-dash-heading"><strong>Overview</strong><span>THIS MONTH　⌄</span></div>
            <div className="store-stat-row">
              <div className="store-stat"><span>Manage</span><strong>Catalog</strong></div>
              <div className="store-stat"><span>Track</span><strong>Orders</strong></div>
              <div className="store-stat"><span>Monitor</span><strong>Stock</strong></div>
            </div>
            <div className="store-list-heading"><span>PRODUCT</span><span>STOCK LEVEL</span></div>
            <div className="store-item"><span><i className="store-swatch swatch-one" />Product item</span><span><i className="stock-line" /> In stock</span></div>
            <div className="store-item"><span><i className="store-swatch swatch-two" />Product item</span><span><i className="stock-line stock-low" /> Low stock</span></div>
          </div>
        </div>
        <div className="store-footer"><span>Products · Stock · Online orders</span><span>Recommendations ↗</span></div>
      </div>
    </div>
  )
}

const previews = {
  auto: CarShoppingPreview,
  store: StoreManagementPreview,
}

export default function Projects() {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="section-shell">
        <div className="section-intro">
          <div>
            <div className="section-kicker">Selected work</div>
            <h2 className="section-heading" id="projects-title">Projects with purpose.</h2>
          </div>
          <p className="section-intro-copy">
            Academic and personal projects where I practice building useful software.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => {
            const Preview = previews[project.type]
            return (
              <article className="project-card" key={project.number}>
                <div className={`project-visual project-visual--${project.type}`}>
                  <Preview />
                </div>
                <div className="project-meta">
                  <div>
                    <span className="project-number">{project.category} · PROJECT {project.number}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-tags" aria-label="Project skills">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <div className="project-actions">
                  {project.github ? (
                    <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                      View repository <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="project-note">Repository link not provided</span>
                  )}
                  <span className="project-status">Academic project</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}