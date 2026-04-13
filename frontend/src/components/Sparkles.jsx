import { useMemo } from 'react'

const CHARS = ['✦', '✧', '+', '·', '⋆', '✸']

export default function Sparkles({ count = 10 }) {
  const sparkles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
        style: {
          top:  `${5 + Math.random() * 90}%`,
          left: `${2 + Math.random() * 96}%`,
          '--size':         `${9 + Math.random() * 18}px`,
          '--duration':     `${3 + Math.random() * 5}s`,
          '--delay':        `${Math.random() * 6}s`,
          '--base-opacity': `${0.2 + Math.random() * 0.5}`,
        },
      })),
    [count]
  )

  return (
    <>
      {sparkles.map((s) => (
        <span key={s.id} className="sparkle" style={s.style} aria-hidden="true">
          {s.char}
        </span>
      ))}
    </>
  )
}
