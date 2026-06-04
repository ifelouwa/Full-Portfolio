function Contact() {
  return (
    <section className="shell section anchor-offset" id="contact">
      <div className="section-header">
        <h2 className="section-title">Contact</h2>
        <div className="section-line" />
      </div>

      <div className="contact-layout">
        <div>
          <div className="contact-text">
            <p>
              I am open to remote full-stack engineering roles, technical collaborations, and focused freelance projects. If you have an interesting problem to solve, let's talk.
            </p>
            <p>
              Whether you need to <span className="contact-highlight">ship a new product</span>, refine an <span className="contact-highlight">existing codebase</span>, or automate internal operations, feel free to reach out. I typically respond within one business day.
            </p>
          </div>

          <div className="contact-info-list" style={{ marginTop: '32px' }}>
            <div className="contact-info-card">
              <span className="contact-info-label">Email</span>
              <span className="contact-info-value">
                <a href="mailto:ifeoluwaoworu@gmail.com">ifeoluwaoworu@gmail.com</a>
              </span>
            </div>

            <div className="contact-info-card">
              <span className="contact-info-label">Phone</span>
              <span className="contact-info-value">
                <a href="tel:+2348077333385">+234 807 733 3385</a>
              </span>
            </div>
          </div>
        </div>

        <div className="contact-sidebar">
          <div className="sidebar-card">
            <h3 className="sidebar-card-title">Professional Links</h3>
            <div className="sidebar-card-content">
              <p>
                <strong>LinkedIn:</strong><br />
                <a href="https://www.linkedin.com/in/ifeoluwa-oworu-933b7735a/" target="_blank" rel="noreferrer noopener">
                  linkedin.com/in/ifeoluwa-oworu ↗
                </a>
              </p>
              <p style={{ marginTop: '12px' }}>
                <strong>GitHub:</strong><br />
                <a href="https://github.com/ifelouwa" target="_blank" rel="noreferrer noopener">
                  github.com/ifelouwa ↗
                </a>
              </p>
            </div>
          </div>

          <div className="sidebar-card">
            <h3 className="sidebar-card-title">Spoken Languages</h3>
            <div className="sidebar-card-content">
              <p>🗣️ <strong>English</strong> — Fluent</p>
              <p style={{ marginTop: '8px' }}>🗣️ <strong>Japanese</strong> — Intermediate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
