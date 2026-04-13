import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import TiltCard from './TiltCard'

const EMOJI_MAP = {
  'watch store': '🛍️',
  'gestion clients': '👥',
  'météo': '🌤️',
  'voitures': '🚗',
  default: '💻',
}

const getEmoji = (title = '') => {
  const t = title.toLowerCase()
  for (const [key, val] of Object.entries(EMOJI_MAP)) {
    if (t.includes(key)) return val
  }
  return EMOJI_MAP.default
}

const GRADIENT_PRESETS = [
  'linear-gradient(135deg, #1565C0 0%, #42A5F5 100%)',
  'linear-gradient(135deg, #1B5E20 0%, #66BB6A 100%)',
  'linear-gradient(135deg, #4A148C 0%, #AB47BC 100%)',
  'linear-gradient(135deg, #E65100 0%, #FFA726 100%)',
]

export default function ProjectCard({ project, index = 0 }) {
  const {
    title = 'Project',
    description = '',
    tech_stack = [],
    github_url = 'https://github.com/Anasselghalbzouri',
    demo_url = null,
    year = 2025,
    category = 'Web App',
  } = project

  const gradient = GRADIENT_PRESETS[index % GRADIENT_PRESETS.length]
  const emoji = getEmoji(title)

  return (
    <TiltCard maxTilt={8}>
      <div
        className="glass-card"
        style={{
          borderRadius: 22,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transition: 'box-shadow 0.3s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 60px rgba(31,38,135,0.18)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = ''}
      >
        {/* Cover image */}
        <div
          style={{
            height: 160,
            background: gradient,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Grid texture overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.12,
              backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)',
              backgroundSize: '14px 14px',
            }}
          />
          <span style={{ fontSize: '3.5rem', zIndex: 1, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))' }}>
            {emoji}
          </span>

          {/* Year badge */}
          <div
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: 'rgba(0,0,0,0.35)',
              backdropFilter: 'blur(8px)',
              borderRadius: 9999,
              padding: '3px 10px',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              fontSize: '0.7rem',
              color: 'white',
              fontWeight: 600,
            }}
          >
            <Calendar size={10} />
            {year}
          </div>

          {/* Category badge */}
          <div
            style={{
              position: 'absolute',
              top: 12,
              left: 12,
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(8px)',
              borderRadius: 9999,
              padding: '3px 10px',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              fontSize: '0.68rem',
              color: 'white',
              fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.3)',
            }}
          >
            <Tag size={9} />
            {category}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', gap: '0.9rem', flex: 1 }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              color: 'var(--color-text-dark)',
              lineHeight: 1.3,
            }}
          >
            {title}
          </h3>

          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--color-text)',
              lineHeight: 1.65,
              flex: 1,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </p>

          {/* Tech stack */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {/* FIX [BUG #1]: guard against null tech_stack — null is not undefined so destructuring default doesn't fire */}
          {(Array.isArray(tech_stack) ? tech_stack : (tech_stack || '').split(',')).slice(0, 5).map((t, i) => (
              <span key={i} className="tech-badge">
                {typeof t === 'string' ? t.trim() : t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '0.6rem', marginTop: 'auto' }}>
            <a
              href={github_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                padding: '9px 0',
                borderRadius: 12,
                background: 'rgba(21,101,192,0.07)',
                color: 'var(--color-primary)',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: 600,
                border: '1px solid rgba(21,101,192,0.15)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(21,101,192,0.14)'; e.currentTarget.style.borderColor = 'rgba(21,101,192,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(21,101,192,0.07)'; e.currentTarget.style.borderColor = 'rgba(21,101,192,0.15)' }}
            >
              <Github size={14} />
              Code
            </a>
            {demo_url && (
              <a
                href={demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center', padding: '9px 0', fontSize: '0.8rem', borderRadius: 12 }}
              >
                <ExternalLink size={14} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </TiltCard>
  )
}
