import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [activeLink,  setActiveLink]  = useState('#home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const close = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  const handleNavClick = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.35s ease',
        background: scrolled ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.35)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.5)' : '1px solid rgba(255,255,255,0.2)',
        boxShadow: scrolled ? '0 4px 24px rgba(31,38,135,0.1)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.45rem',
            fontWeight: 700,
            color: 'var(--color-text-dark)',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}
        >
          AEG<span style={{ color: 'var(--color-primary)', marginLeft: 1 }}>.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '0.92rem',
                color: activeLink === link.href ? 'var(--color-primary)' : 'var(--color-text)',
                textDecoration: 'none',
                position: 'relative',
                paddingBottom: 2,
                transition: 'color 0.2s',
              }}
            >
              {link.label}
              {activeLink === link.href && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'var(--color-primary)',
                    borderRadius: 9999,
                  }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="https://linkedin.com/in/anass-el-ghalabzouri"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '0.88rem',
              color: 'var(--color-text)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--color-primary)'}
            onMouseLeave={e => e.target.style.color = 'var(--color-text)'}
          >
            LinkedIn
          </a>
          <a
            href="mailto:anassreda88@gmail.com"
            className="btn-primary"
            style={{ padding: '9px 22px', fontSize: '0.85rem' }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="hide-desktop"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-dark)',
            padding: 4,
            display: 'flex',
            alignItems: 'center',
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(255,255,255,0.96)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,255,255,0.4)',
            padding: '1.25rem 1.5rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '1rem',
                color: activeLink === link.href ? 'var(--color-primary)' : 'var(--color-text-dark)',
                textDecoration: 'none',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:anassreda88@gmail.com"
            className="btn-primary"
            style={{ marginTop: '0.5rem', justifyContent: 'center' }}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}
