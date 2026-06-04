function NavBar({ onNavClick, onContact }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-brand">
          <div className="nav-title">
            <div className="nav-name">Ifeoluwa Oworu</div>
          </div>
        </div>
        <nav className="nav-links" aria-label="Primary">
          <button className="nav-link" type="button" onClick={() => onNavClick('about')}>
            About
          </button>
          <button className="nav-link" type="button" onClick={() => onNavClick('experience')}>
            Experience
          </button>
          <button className="nav-link" type="button" onClick={() => onNavClick('projects')}>
            Projects
          </button>
          <button className="nav-link" type="button" onClick={() => onNavClick('skills')}>
            Skills
          </button>
          <button className="nav-link" type="button" onClick={() => onNavClick('contact')}>
            Contact
          </button>
        </nav>
        <button
          className="nav-cta"
          type="button"
          onClick={onContact}
        >
          <span className="nav-cta-dot" />
          <span>Open to Work</span>
        </button>
      </div>
    </header>
  )
}

export default NavBar
