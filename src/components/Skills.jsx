function Skills({ skills }) {
  return (
    <section className="shell section anchor-offset" id="skills">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <div className="section-line" />
      </div>

      <div className="skills-grid">
        <div className="skills-category">
          <h3 className="skills-category-title">Languages & Frontend</h3>
          <div className="skills-list">
            {skills.frontend.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-category-title">Backend & APIs</h3>
          <div className="skills-list">
            {skills.backend.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-category-title">Databases & ORM</h3>
          <div className="skills-list">
            {skills.databases.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-category-title">Tools & DevOps</h3>
          <div className="skills-list">
            {skills.tools.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
