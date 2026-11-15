import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { useI18n } from '../../i18n/useI18n'
import type { Tone } from '../../types/content'
import card from './Card.module.css'
import styles from './FeatureCard.module.css'

interface FeatureCardProps {
  to: string
  tone: Tone
  icon: ReactNode
  eyebrow: string
  title: string
  description: string
  cta: string
}

/** A wide, highlighted card that leads a section (e.g. the Journey, the Mix). */
export function FeatureCard({
  to,
  tone,
  icon,
  eyebrow,
  title,
  description,
  cta,
}: FeatureCardProps) {
  const { dir } = useI18n()
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight
  return (
    <Link to={to} className={styles.feature} data-tone={tone}>
      <span className={card.badge} aria-hidden="true">
        {icon}
      </span>
      <span className={styles.text}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <span className={styles.title}>{title}</span>
        <span className={styles.body}>{description}</span>
      </span>
      <span className={styles.cta}>
        {cta}
        <Arrow aria-hidden="true" />
      </span>
    </Link>
  )
}
