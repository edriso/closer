import { Cloud, Sparkle } from './shapes'

/** A quiet crescent moon with a cloud, used for empty and end states. */
export function MoonArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" className={className} aria-hidden="true" focusable="false">
      <g className="art-float-slow">
        <path
          d="M118 28a50 50 0 1 0 34 74 40 40 0 1 1-34-74Z"
          style={{ fill: 'var(--art-moon)', stroke: 'var(--art-star)', strokeWidth: 2 }}
        />
      </g>
      <Sparkle x={52} y={36} />
      <Sparkle x={168} y={48} scale={0.7} style={{ animationDelay: '1s' }} />
      <Sparkle x={150} y={20} scale={0.5} style={{ animationDelay: '1.8s' }} />
      <Cloud x={70} y={124} scale={0.8} className="art-drift" />
    </svg>
  )
}
