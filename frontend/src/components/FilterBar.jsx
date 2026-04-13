import { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'

const FILTERS = {
  tech: {
    label: 'Technology',
    options: ['All', 'React', 'Laravel', 'JavaScript', 'PHP'],
  },
  type: {
    label: 'Type',
    options: ['All', 'Frontend', 'Backend', 'Full Stack'],
  },
  year: {
    label: 'Year',
    options: ['All', '2026', '2025'],
  },
  category: {
    label: 'Category',
    options: ['All', 'E-commerce', 'Management', 'API', 'Web App'],
  },
}

export default function FilterBar({ activeFilter, setActiveFilter }) {
  const [open, setOpen] = useState(null)

  const handleSelect = (key, value) => {
    setActiveFilter((prev) => ({ ...prev, [key]: value.toLowerCase() }))
    setOpen(null)
  }

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 10,
        marginTop: -32,
        paddingBottom: '3rem',
      }}
    >
      <div className="container">
        <div
          className="glass"
          style={{
            borderRadius: 22,
            padding: '1.25rem 1.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {/* Filters */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', flex: 1 }}>
            {Object.entries(FILTERS).map(([key, { label, options }]) => {
              const currentValue = activeFilter[key] || 'all'
              const displayValue = currentValue === 'all' ? label : options.find(o => o.toLowerCase() === currentValue) || label

              return (
                <div
                  key={key}
                  style={{ position: 'relative' }}
                  onMouseLeave={() => setOpen(null)}
                >
                  <button
                    onClick={() => setOpen(open === key ? null : key)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      background: currentValue !== 'all'
                        ? 'rgba(21,101,192,0.1)'
                        : 'rgba(255,255,255,0.5)',
                      border: `1.5px solid ${currentValue !== 'all' ? 'rgba(21,101,192,0.3)' : 'rgba(255,255,255,0.5)'}`,
                      borderRadius: 10,
                      padding: '8px 14px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: currentValue !== 'all' ? 'var(--color-primary)' : 'var(--color-text)',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-body)',
                      transition: 'all 0.2s',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {displayValue}
                    <ChevronDown
                      size={13}
                      style={{
                        transform: open === key ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                      }}
                    />
                  </button>

                  {/* Dropdown */}
                  {open === key && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 6px)',
                        left: 0,
                        minWidth: 150,
                        background: 'rgba(255,255,255,0.95)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.6)',
                        borderRadius: 14,
                        boxShadow: '0 12px 40px rgba(31,38,135,0.15)',
                        overflow: 'hidden',
                        zIndex: 100,
                      }}
                    >
                      {options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelect(key, opt)}
                          style={{
                            display: 'block',
                            width: '100%',
                            padding: '9px 16px',
                            textAlign: 'left',
                            background:
                              (opt.toLowerCase() === activeFilter[key] ||
                                (opt === 'All' && activeFilter[key] === 'all'))
                                ? 'rgba(21,101,192,0.08)'
                                : 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.82rem',
                            fontWeight: 500,
                            color:
                              (opt.toLowerCase() === activeFilter[key] ||
                                (opt === 'All' && activeFilter[key] === 'all'))
                                ? 'var(--color-primary)'
                                : 'var(--color-text)',
                            fontFamily: 'var(--font-body)',
                            transition: 'background 0.15s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = 'rgba(21,101,192,0.05)'}
                          onMouseLeave={e => {
                            const isSelected = opt.toLowerCase() === activeFilter[key] || (opt === 'All' && activeFilter[key] === 'all')
                            e.currentTarget.style.background = isSelected ? 'rgba(21,101,192,0.08)' : 'transparent'
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Reset + Explore Button */}
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {Object.values(activeFilter).some(v => v !== 'all') && (
              <button
                onClick={() => setActiveFilter({ tech: 'all', type: 'all', year: 'all', category: 'all' })}
                style={{
                  background: 'transparent',
                  border: '1.5px solid rgba(21,101,192,0.2)',
                  borderRadius: 10,
                  padding: '8px 14px',
                  fontSize: '0.82rem',
                  color: 'var(--color-text)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.color = 'var(--color-primary)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(21,101,192,0.2)'; e.currentTarget.style.color = 'var(--color-text)' }}
              >
                Reset
              </button>
            )}
            <button
              className="btn-primary"
              style={{ padding: '9px 22px', fontSize: '0.85rem', gap: 6 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Search size={14} />
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
