function Hero({ onContact, onDownloadCv }) {
  return (
    <section className="shell hero anchor-offset" id="hero">
      <div>
        <h1 className="hero-heading">
          Ifeoluwa Oworu
          <span className="d-block" style={{ fontSize: '0.6em', marginTop: '12px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
            Full-Stack Developer
          </span>
        </h1>

        <p className="hero-subheading">
          I build scalable, end-to-end web applications with clean interfaces, solid databases, and modern APIs. Focused on creating efficient digital products and streamlining technical workflows.
        </p>

        <div className="hero-cta-row">
          <button type="button" className="btn-primary" onClick={onContact}>
            Get in touch
          </button>
          {onDownloadCv && (
            <button
              type="button"
              className="btn-secondary"
              onClick={onDownloadCv}
            >
              Download CV
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
