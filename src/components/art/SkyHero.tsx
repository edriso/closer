import { Cloud, Heart, Sparkle } from './shapes'
import { useSvgId } from './useSvgId'

/** Home hero: two clouds drifting toward each other, with a heart between them. */
export function SkyHero({ className }: { className?: string }) {
  const glow = useSvgId('glow')
  const heart = useSvgId('heart')
  return (
    <svg viewBox="0 0 360 240" className={className} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={glow}>
          <stop
            offset="0"
            style={{ stopColor: 'var(--art-moon)', stopOpacity: 'var(--art-glow)' }}
          />
          <stop offset="1" style={{ stopColor: 'var(--art-moon)', stopOpacity: 0 }} />
        </radialGradient>
        <linearGradient id={heart} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--heart)' }} />
          <stop offset="1" style={{ stopColor: 'var(--primary)' }} />
        </linearGradient>
      </defs>

      <circle cx="180" cy="118" r="104" fill={`url(#${glow})`} className="art-float-slow" />

      <Sparkle x={62} y={52} scale={1.1} />
      <Sparkle x={300} y={44} scale={0.8} style={{ animationDelay: '0.9s' }} />
      <Sparkle x={258} y={196} scale={0.6} style={{ animationDelay: '1.6s' }} />
      <Sparkle x={96} y={198} scale={0.7} style={{ animationDelay: '2.2s' }} />
      <Sparkle x={196} y={30} scale={0.55} style={{ animationDelay: '0.4s' }} />

      <g className="art-float">
        <Heart
          x={180}
          y={112}
          scale={1.55}
          style={{ fill: `url(#${heart})` }}
          className="art-pulse"
        />
      </g>

      <Cloud x={92} y={140} scale={1.05} className="art-drift" />
      <Cloud x={272} y={128} scale={0.95} className="art-drift-reverse" />
    </svg>
  )
}
