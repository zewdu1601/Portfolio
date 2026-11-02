import React from 'react'
import skillGroups from '../data/skills.js'

export default function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="section-shell skills-layout">
        <div>
          <div className="section-kicker">What I work with</div>
          <h2 className="section-heading" id="skills-title">Technical<br />toolkit.</h2>
          <p className="skills-copy">
            Technologies I use or am actively learning as I build practical web applications.
          </p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-pills">
                {group.skills.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}