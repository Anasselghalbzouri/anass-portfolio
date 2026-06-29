import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { sendContact } from '../services/api'
import Sparkles from './Sparkles'
import { useTheme } from '../context/ThemeContext'

const SOCIAL_LINKS = [
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    href: 'https://github.com/Anasselghalbzouri',
    color: '#24292e',
    darkColor: '#e6edf3',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/anass-el-ghalabzouri',
    color: '#0A66C2',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    href: 'mailto:anassreda88@gmail.com',
    color: '#EA4335',
  },
]

const CONTACT_INFO = [
  { icon: <Mail size={16} />,    text: 'anassreda88@gmail.com',  href: 'mailto:anassreda88@gmail.com' },
  { icon: <Phone size={16} />,   text: '+212 6 53 02 95 20',     href: 'tel:+212653029520' },
  { icon: <MapPin size={16} />,  text: 'Tanger, Maroc',          href: null },
]

export default function Contact() {
  const { dark } = useTheme()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'
  const btnRef = useRef(null)
  // FIX [BUG #4]: store timer ID so it can be cancelled on unmount to prevent setState on unmounted component
  const statusTimerRef = useRef(null)

  useEffect(() => {
    return () => clearTimeout(statusTimerRef.current)
  }, [])

  const validate = () => {
    const errs = {}
    if (!form.name.trim())                          errs.name    = 'Name is required'
    if (!form.email.trim())                         errs.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email))     errs.email   = 'Invalid email address'
    if (!form.message.trim())                       errs.message = 'Message is required'
    else if (form.message.trim().length < 10)       errs.message = 'Message too short (min 10 chars)'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const handleRipple = (e) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const el = document.createElement('span')
    const size = Math.max(rect.width, rect.height)
    el.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${e.clientX - rect.left - size / 2}px;
      top: ${e.clientY - rect.top - size / 2}px;
    `
    el.classList.add('ripple-effect')
    btn.appendChild(el)
    setTimeout(() => el.remove(), 700)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')
    try {
      await sendContact(form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
    clearTimeout(statusTimerRef.current)
    statusTimerRef.current = setTimeout(() => setStatus(null), 5000)
  }

  return (
    <section
      id="contact"
      style={{ position: 'relative', padding: 'var(--section-padding) 0', overflow: 'hidden' }}
    >
      {/* Blobs */}
      <div className="bg-blob" style={{ width: 500, height: 500, background: 'rgba(21,101,192,0.06)', top: '-5%', right: '-10%', animationDelay: '2s' }} />
      <div className="bg-blob" style={{ width: 350, height: 350, background: dark ? 'rgba(99,179,237,0.05)' : 'rgba(232,245,233,0.5)', bottom: '0', left: '-5%', animationDelay: '0s' }} />
      <Sparkles count={8} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(21,101,192,0.07)',
              border: '1px solid rgba(21,101,192,0.15)',
              borderRadius: 9999,
              padding: '5px 16px',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'var(--color-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1rem',
            }}
          >
            ✉ Get In Touch
          </div>
          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>
          <p
            style={{
              marginTop: '0.75rem',
              fontSize: '1rem',
              color: 'var(--color-text)',
              maxWidth: 480,
              margin: '0.75rem auto 0',
              lineHeight: 1.7,
            }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Two-col layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div className="glass-card" style={{ borderRadius: 22, padding: '2rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  color: 'var(--color-text-dark)',
                  marginBottom: '1.5rem',
                }}
              >
                Contact Info
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {CONTACT_INFO.map(({ icon, text, href }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: 'rgba(21,101,192,0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-primary)',
                        flexShrink: 0,
                      }}
                    >
                      {icon}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          fontSize: '0.88rem',
                          color: 'var(--color-text)',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text)'}
                      >
                        {text}
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.88rem', color: 'var(--color-text)' }}>{text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card" style={{ borderRadius: 22, padding: '1.75rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  color: 'var(--color-text-dark)',
                  marginBottom: '1.25rem',
                }}
              >
                Find me on
              </h3>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {SOCIAL_LINKS.map(({ icon, label, href, color, darkColor }) => {
                  const c = dark && darkColor ? darkColor : color
                  return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: '1 1 100px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      padding: '10px 16px',
                      borderRadius: 14,
                      background: `${c}18`,
                      color: c,
                      textDecoration: 'none',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      border: `1px solid ${c}30`,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${c}28`; e.currentTarget.style.transform = 'translateY(-2px)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = `${c}18`; e.currentTarget.style.transform = 'none' }}
                  >
                    {icon}
                    {label}
                  </a>
                )})}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="glass-card" style={{ borderRadius: 22, padding: '2rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  color: 'var(--color-text-dark)',
                  marginBottom: '1.75rem',
                }}
              >
                Send a Message
              </h3>

              {/* Status banners */}
              {status === 'success' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    background: 'rgba(76,175,80,0.1)',
                    border: '1px solid rgba(76,175,80,0.3)',
                    borderRadius: 12,
                    padding: '12px 16px',
                    marginBottom: '1.25rem',
                    color: '#2E7D32',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle size={18} />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    background: 'rgba(244,67,54,0.08)',
                    border: '1px solid rgba(244,67,54,0.25)',
                    borderRadius: 12,
                    padding: '12px 16px',
                    marginBottom: '1.25rem',
                    color: '#C62828',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                  }}
                >
                  <AlertCircle size={18} />
                  Failed to send. Please try emailing directly.
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: 6 }}
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="glass-input"
                    style={{ borderColor: errors.name ? 'rgba(244,67,54,0.5)' : undefined }}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p style={{ marginTop: 4, fontSize: '0.75rem', color: '#E53935', fontWeight: 500 }}>{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: 6 }}
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="glass-input"
                    style={{ borderColor: errors.email ? 'rgba(244,67,54,0.5)' : undefined }}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p style={{ marginTop: 4, fontSize: '0.75rem', color: '#E53935', fontWeight: 500 }}>{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: 6 }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project"
                    rows={5}
                    className="glass-input"
                    style={{
                      resize: 'vertical',
                      minHeight: 120,
                      borderColor: errors.message ? 'rgba(244,67,54,0.5)' : undefined,
                    }}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p style={{ marginTop: 4, fontSize: '0.75rem', color: '#E53935', fontWeight: 500 }}>{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  ref={btnRef}
                  type="submit"
                  className="btn-primary"
                  onClick={handleRipple}
                  disabled={status === 'sending'}
                  style={{
                    justifyContent: 'center',
                    borderRadius: 14,
                    padding: '14px 28px',
                    fontSize: '0.95rem',
                    opacity: status === 'sending' ? 0.75 : 1,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    width: '100%',
                  }}
                >
                  {status === 'sending' ? (
                    <>Sending…</>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
