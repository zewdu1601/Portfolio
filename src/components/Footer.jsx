import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <a className="wordmark footer-brand" href="#home">Portfolio<span>.</span></a>
        <p>Designed and built with React.</p>
        <a className="back-to-top" href="https://github.com/zewdu1601" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <span className="footer-copyright">© {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  )
}