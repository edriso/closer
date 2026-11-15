import { HEART_PATH } from './shapes'
import { useSvgId } from './useSvgId'

/** Brand mark: a soft sky-gradient tile holding a heart. Mirrors public/favicon.svg. */
export function LogoMark({ size = 32 }: { size?: number }) {
  const gradient = useSvgId('logo')
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9b87f7" />
          <stop offset="1" stopColor="#6aa8f5" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="20" fill={`url(#${gradient})`} />
      <circle cx="22" cy="44" r="9" fill="#fff" opacity="0.28" />
      <circle cx="44" cy="46" r="7" fill="#fff" opacity="0.2" />
      <g transform="translate(32 31) scale(1.05)">
        <path d={HEART_PATH} fill="#fff" />
      </g>
    </svg>
  )
}
