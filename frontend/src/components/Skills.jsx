import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Monitor, Server, Wrench, Lightbulb, Globe } from 'lucide-react'
import { getSkills } from '../services/api'
import useScrollReveal from '../hooks/useScrollReveal'

const FALLBACK_SKILLS = [
  {
    category: 'Frontend',
    Icon: Monitor,
    color: '#1E88E5',
    skills: [
      { name: 'React',           level: 85 },
      { name: 'JavaScript ES6+', level: 82 },
      { name: 'Tailwind CSS',    level: 88 },
      { name: 'HTML5 / CSS3',    level: 92 },
      { name: 'Redux Toolkit',   level: 75 },
    ],
  },
  {
    category: 'Backend',
    Icon: Server,
    color: '#0D47A1',
    skills: [
      { name: 'Laravel',         level: 80 },
      { name: 'PHP',             level: 78 },
      { name: 'MySQL',           level: 76 },
      { name: 'REST API',        level: 82 },
      { name: 'Eloquent ORM',    level: 77 },
    ],
  },
  {
    category: 'Tools & Methods',
    Icon: Wrench,
    color: '#1565C0',
    skills: [
      { name: 'Git / GitHub',    level: 85 },
      { name: 'VS Code',         level: 90 },
      { name: 'npm / Composer',  level: 82 },
      { name: 'Scrum / Agile',   level: 72 },
      { name: 'Linux (basics)',  level: 65 },
    ],
  },
  {
    category: 'Soft Skills',
    Icon: Lightbulb,
    color: '#42A5F5',
    skills: [
      { name: 'Problem Solving', level: 88 },
      { name: 'Teamwork',        level: 90 },
      { name: 'Adaptability',    level: 87 },
      { name: 'Autonomy',        level: 85 },
      { name: 'Communication',   level: 80 },
    ],
  },
]

function GlassIcon({ Icon, color }) {
  return (
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: 14,
        background: `linear-gradient(135deg, ${color}33, ${color}18)`,
        border: `1px solid ${color}40`,
        boxShadow: `0 4px 16px ${color}22, inset 0 1px 0 rgba(255,255,255,0.35)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glass shine overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)',
          borderRadius: '14px 14px 0 0',
          pointerEvents: 'none',
        }}
      />
      <Icon size={22} color={color} strokeWidth={1.8} />
    </div>
  )
}

function ProgressBar({ level, color, animate }) {
  return (
    <div className="progress-track">
      <div
        className="progress-fill"
        style={{
          width: animate ? `${level}%` : '0%',
          background: `linear-gradient(90deg, ${color}cc, ${color})`,
        }}
      />
    </div>
  )
}

function SkillCategory({ category, Icon, color, skills, index }) {
  const [ref, isVisible] = useScrollReveal()
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setAnimated(true), index * 120)
      return () => clearTimeout(timer)
    }
  }, [isVisible, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="glass-card"
        style={{ borderRadius: 22, padding: '1.75rem', height: '100%' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
          <GlassIcon Icon={Icon} color={color} />
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                color: 'var(--color-text-dark)',
              }}
            >
              {category}
            </h3>
            <p style={{ fontSize: '0.75rem', color: color, fontWeight: 600 }}>
              {skills.length} skills
            </p>
          </div>
        </div>

        {/* Skills list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {skills.map((skill) => (
            <div key={skill.name}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--color-text-dark)',
                  }}
                >
                  {skill.name}
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: color,
                    background: `${color}12`,
                    padding: '2px 8px',
                    borderRadius: 9999,
                  }}
                >
                  {skill.level}%
                </span>
              </div>
              <ProgressBar level={skill.level} color={color} animate={animated} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [skillGroups, setSkillGroups] = useState(FALLBACK_SKILLS)

  useEffect(() => {
    getSkills()
      .then((res) => {
        if (res.data?.data?.length) {
          const grouped = res.data.data.reduce((acc, skill) => {
            const cat = acc.find((g) => g.category === skill.category)
            if (cat) {
              cat.skills.push({ name: skill.name, level: skill.level })
            } else {
              acc.push({
                category: skill.category,
                Icon: Monitor,
                color: '#1565C0',
                skills: [{ name: skill.name, level: skill.level }],
              })
            }
            return acc
          }, [])
          if (grouped.length) setSkillGroups(grouped)
        }
      })
      .catch(() => { /* use fallback */ })
  }, [])

  return (
    <section
      id="skills"
      style={{ position: 'relative', padding: 'var(--section-padding) 0', background: 'rgba(21,101,192,0.02)' }}
    >
      {/* Subtle top border */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(21,101,192,0.15), transparent)',
        }}
      />

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
            ⚡ Expertise
          </div>
          <h2 className="section-title">
            Technical <span>Skills</span>
          </h2>
          <p
            style={{
              marginTop: '0.75rem',
              fontSize: '1rem',
              color: 'var(--color-text)',
              maxWidth: 500,
              margin: '0.75rem auto 0',
              lineHeight: 1.7,
            }}
          >
            Technologies I work with, continuously learning and improving every day.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillGroups.map((group, i) => (
            <SkillCategory key={group.category} {...group} index={i} />
          ))}
        </div>

        {/* Languages section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: '2.5rem' }}
        >
          <div
            className="glass-card"
            style={{ borderRadius: 22, padding: '1.75rem' }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                color: 'var(--color-text-dark)',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <GlassIcon Icon={Globe} color="#1565C0" />
              Languages
            </h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {[
                { lang: 'Arabic',   level: 'Native', },
                { lang: 'French',   level: 'Intermediate', },
                { lang: 'English',  level: 'Intermediate',},
              ].map(({ lang, level, flag, pct }) => (
                <div
                  key={lang}
                  style={{
                    flex: '1 1 180px',
                    background: 'rgba(21,101,192,0.04)',
                    borderRadius: 14,
                    padding: '1rem',
                    border: '1px solid rgba(21,101,192,0.1)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontWeight: 600, color: 'var(--color-text-dark)', fontSize: '0.88rem' }}>
                   {lang}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                      {level}
                    </span>
                  </div>
                  <ProgressBar level={pct} color="#1565C0" animate={true} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
