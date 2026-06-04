function Experience() {
  return (
    <section className="shell section anchor-offset" id="experience">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <div className="section-line" />
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-date">Jun 2025 - Present</div>
          <h3 className="timeline-title">System Programmer | IT Support</h3>
          <div className="timeline-subtitle">Tai Solarin Federal University of Education</div>
          <div className="timeline-content">
            <ul>
              <li>Developed internal administrative tools that automated manual workflows and improved departmental efficiency.</li>
              <li>Built and maintained web applications using modern JavaScript technologies.</li>
              <li>Collaborated with staff and stakeholders to gather requirements and implement technical solutions.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-header" style={{ marginTop: '60px' }}>
        <h2 className="section-title">Education & Certificates</h2>
        <div className="section-line" />
      </div>

      <div className="resume-grid">
        <div className="resume-card">
          <div className="timeline-date">2019 - 2023</div>
          <h3 className="resume-card-title">B.Sc. (Ed) Computer Science</h3>
          <p className="resume-card-desc">
            Tai Solarin University of Education<br />
            Ijebu-Ode, Nigeria
          </p>
        </div>

        <div className="resume-card">
          <div className="timeline-date">Certifications</div>
          <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '14px', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>Leadership Certificate</strong> (Jan 2022)<br />
              Chartered Institute of Leadership and Governance (USA)
            </li>
            <li>
              <strong>Backend Development</strong> (Nov 2025)<br />
              TechCrush | Accredited by ACTD
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
