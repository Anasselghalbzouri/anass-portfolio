import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Contact',  href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer
      style={{
        background: 'var(--color-text-dark)',
        color: 'rgba(255,255,255,0.75)',
        padding: '3rem 0 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gradient top border */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: 'linear-gradient(90deg, transparent, var(--color-primary-light), transparent)',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '2rem',
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 260 }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                color: 'white',
                marginBottom: '0.75rem',
              }}
            >
              AEG<span style={{ color: 'var(--color-primary-light)' }}>.</span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)' }}>
              Full Stack Developer specializing in React &amp; Laravel.
              Building fast, beautiful, and functional web experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
              }}
            >
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                  style={{
                    fontSize: '0.88rem',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary-light)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
              }}
            >
              Connect
            </h4>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <Github size={18} />,   href: 'https://github.com/Anasselghalbzouri',             label: 'GitHub'  },
                { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/anass-el-ghalabzouri',     label: 'LinkedIn' },
                { icon: <Mail size={18} />,     href: 'mailto:anassreda88@gmail.com',                     label: 'Email'   },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.07)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(21,101,192,0.3)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'rgba(21,101,192,0.5)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '1.5rem 0' }} />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} Anass El Ghalabzouri · Built with React &amp; Laravel
          </p>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: 'rgba(21,101,192,0.25)',
              border: '1px solid rgba(21,101,192,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary-light)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(21,101,192,0.25)'; e.currentTarget.style.color = 'var(--color-primary-light)' }}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
