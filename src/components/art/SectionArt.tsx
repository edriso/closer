import type { SectionId } from '../../types/content'
import { Heart, Sparkle } from './shapes'

/**
 * Small animated illustrations for the four sections. Colors come from the
 * surrounding card's tone (--tone-ink / --tone-bg), so they adapt to themes.
 */
export function SectionArt({ section, className }: { section: SectionId; className?: string }) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true" focusable="false">
      {section === 'talk' && <TalkArt />}
      {section === 'play' && <PlayArt />}
      {section === 'discover' && <DiscoverArt />}
      {section === 'moments' && <MomentsArt />}
    </svg>
  )
}

const ink = { fill: 'var(--tone-ink)' }
const paper = { fill: 'var(--surface)' }

function TalkArt() {
  return (
    <>
      <g className="art-float">
        <path
          d="M14 22h44a10 10 0 0 1 10 10v18a10 10 0 0 1-10 10H34l-12 9v-9h-8A10 10 0 0 1 4 50V32a10 10 0 0 1 10-10Z"
          style={ink}
        />
        {[22, 34, 46].map((cx, i) => (
          <circle
            key={cx}
            cx={cx}
            cy="41"
            r="3.6"
            className="art-twinkle"
            style={{ ...paper, animationDelay: `${i * 0.35}s` }}
          />
        ))}
      </g>
      <g className="art-float" style={{ animationDelay: '-3s' }}>
        <path
          d="M82 46H50a9 9 0 0 0-9 9v13a9 9 0 0 0 9 9h20l10 8v-8h2a9 9 0 0 0 9-9V55a9 9 0 0 0-9-9Z"
          style={{ fill: 'var(--surface)', stroke: 'var(--tone-ink)', strokeWidth: 2.5 }}
        />
        <Heart x={66} y={61} scale={0.42} className="art-pulse" style={ink} />
      </g>
    </>
  )
}

function PlayArt() {
  return (
    <>
      <g className="art-wiggle" style={{ transformOrigin: '40px 70px' }}>
        <rect
          x="18"
          y="20"
          width="40"
          height="56"
          rx="8"
          transform="rotate(-12 38 48)"
          style={{ ...paper, stroke: 'var(--tone-ink)', strokeWidth: 2.5 }}
        />
        <Heart x={37} y={48} scale={0.5} style={ink} />
      </g>
      <g className="art-wiggle" style={{ animationDelay: '-2s', transformOrigin: '60px 70px' }}>
        <rect
          x="40"
          y="22"
          width="40"
          height="56"
          rx="8"
          transform="rotate(10 60 50)"
          style={ink}
        />
        <Sparkle
          x={60}
          y={50}
          scale={1.3}
          className="art-spin"
          style={{ fill: 'var(--surface)' }}
        />
      </g>
      <Sparkle x={84} y={16} scale={0.8} />
    </>
  )
}

function DiscoverArt() {
  return (
    <>
      <circle
        cx="48"
        cy="48"
        r="34"
        style={{ fill: 'var(--surface)', stroke: 'var(--tone-ink)', strokeWidth: 2.5 }}
      />
      <circle
        cx="48"
        cy="48"
        r="26"
        style={{
          fill: 'none',
          stroke: 'var(--tone-ink)',
          strokeWidth: 1,
          strokeDasharray: '2 5',
          opacity: 0.6,
        }}
        className="art-spin"
      />
      <g className="art-wiggle" style={{ transformOrigin: '48px 48px' }}>
        <path d="M48 20 56 48H40Z" style={ink} />
        <path d="M48 76 40 48h16Z" style={{ fill: 'var(--tone-ink)', opacity: 0.35 }} />
      </g>
      <circle cx="48" cy="48" r="4.5" style={paper} />
      <Sparkle x={84} y={14} scale={0.8} />
      <Sparkle x={12} y={82} scale={0.6} style={{ animationDelay: '1.2s' }} />
    </>
  )
}

function MomentsArt() {
  const steam = (x: number, delay: string) => (
    <path
      d={`M${x} 34c-4-5 4-8 0-14`}
      className="art-float"
      style={{
        fill: 'none',
        stroke: 'var(--tone-ink)',
        strokeWidth: 2.5,
        strokeLinecap: 'round',
        opacity: 0.55,
        animationDelay: delay,
      }}
    />
  )
  return (
    <>
      {steam(30, '0s')}
      {steam(64, '-2s')}
      <path d="M14 42h32v18a14 14 0 0 1-14 14h-4a14 14 0 0 1-14-14Z" style={ink} />
      <path
        d="M46 48h4a6 6 0 0 1 0 12h-4"
        style={{ fill: 'none', stroke: 'var(--tone-ink)', strokeWidth: 3 }}
      />
      <path
        d="M50 42h32v18a14 14 0 0 1-14 14h-4a14 14 0 0 1-14-14Z"
        style={{ ...paper, stroke: 'var(--tone-ink)', strokeWidth: 2.5 }}
      />
      <Heart x={66} y={56} scale={0.38} className="art-pulse" style={ink} />
      <rect
        x="8"
        y="78"
        width="80"
        height="4"
        rx="2"
        style={{ fill: 'var(--tone-ink)', opacity: 0.25 }}
      />
    </>
  )
}
