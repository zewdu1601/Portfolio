import React, { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header" id="top">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Portfolio, home">
          <span className="wordmark-mark" aria-hidden="true">IS</span>
          <span>Portfolio</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
        </button>
        <div className={`nav-links${menuOpen ? ' is-open' : ''}`} id="primary-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <a
            className="nav-github"
            href="https://github.com/zewdu1601"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            onClick={closeMenu}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.78 2.43 3.04 1.72.1-.73.39-1.23.7-1.51-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.28-2.61 5.23-5.1 5.5.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  )
}