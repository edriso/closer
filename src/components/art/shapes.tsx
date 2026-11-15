/** Reusable SVG primitives for the hand-drawn illustration set. */
import type { CSSProperties } from 'react'

export const HEART_PATH = 'M0 13C-17 2-23-9-17-17-12-23-4-22 0-15 4-22 12-23 17-17 23-9 17 2 0 13Z'

export const SPARKLE_PATH = 'M0-7Q1.2-1.2 7 0 1.2 1.2 0 7-1.2 1.2-7 0-1.2-1.2 0-7Z'

interface PlacedProps {
  x: number
  y: number
  scale?: number
  className?: string
  style?: CSSProperties
}

export function Sparkle({ x, y, scale = 1, className = 'art-twinkle', style }: PlacedProps) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d={SPARKLE_PATH} className={className} style={{ fill: 'var(--art-star)', ...style }} />
    </g>
  )
}

export function Heart({ x, y, scale = 1, className, style }: PlacedProps) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d={HEART_PATH} className={className} style={style} />
    </g>
  )
}

/** A soft cloud built from overlapping circles, with a gentle shadow underneath. */
export function Cloud({ x, y, scale = 1, className }: PlacedProps) {
  const puffs = (
    <>
      <circle cx="-30" cy="4" r="18" />
      <circle cx="-4" cy="-10" r="26" />
      <circle cx="24" cy="2" r="19" />
      <rect x="-46" y="0" width="88" height="22" rx="11" />
    </>
  )
  // The animation class sits on an outer group: a CSS transform would otherwise
  // replace the SVG transform attribute that positions the cloud.
  return (
    <g className={className}>
      <g transform={`translate(${x} ${y}) scale(${scale})`}>
        <g transform="translate(0 5)" style={{ fill: 'var(--art-cloud-shadow)', opacity: 0.6 }}>
          {puffs}
        </g>
        <g style={{ fill: 'var(--art-cloud)' }}>{puffs}</g>
      </g>
    </g>
  )
}
