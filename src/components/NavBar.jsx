import { useState, useEffect } from 'react'

function NavBar({ onNavClick, onContact }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = (id) => {
    onNavClick(id)
    setMenuOpen(false)
  }

  useEffect(() => {
    if (!menuOpen) return

    const handleOutsideClick = (event) => {
      const navInner = document.querySelector('.nav-inner')
      if (navInner && !navInner.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [menuOpen])

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-brand">
          <div className="nav-name">Ifeoluwa Oworu</div>
        </div>

        <button 
          className={`nav-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`} aria-label="Primary">
          <button className="nav-link" type="button" onClick={() => handleLinkClick('about')}>
            About
          </button>
          <button className="nav-link" type="button" onClick={() => handleLinkClick('experience')}>
            Experience
          </button>
          <button className="nav-link" type="button" onClick={() => handleLinkClick('projects')}>
            Projects
          </button>
          <button className="nav-link" type="button" onClick={() => handleLinkClick('skills')}>
            Skills
          </button>
          <button className="nav-link" type="button" onClick={() => handleLinkClick('contact')}>
            Contact
          </button>
          <button
            className="nav-cta nav-cta-mobile"
            type="button"
            onClick={() => {
              onContact()
              setMenuOpen(false)
            }}
          >
            <span className="nav-cta-dot" />
            <span>Open to Work</span>
          </button>
        </nav>

        <button
          className="nav-cta nav-cta-desktop"
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
