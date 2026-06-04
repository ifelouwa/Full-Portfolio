function Projects({ projects }) {
  return (
    <section className="shell section anchor-offset" id="projects">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.name}</h3>
              <div className="project-tech-stack">
                {project.stack.join(' • ')}
              </div>
            </div>
            <div className="project-description">
              <ul>
                {project.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="project-links" aria-label={`Links for ${project.name}`}>
              {project.demo && (
                <a
                  className="project-link"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Live Demo ↗
                </a>
              )}
              {project.github && (
                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
