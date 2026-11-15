import type { ReactNode } from 'react'
import { Link } from 'react-router'
import type { Tone } from '../../types/content'
import card from './Card.module.css'

interface TopicCardProps {
  to: string
  tone: Tone
  icon: ReactNode
  title: string
  description: string
  meta?: string
}

export function TopicCard({ to, tone, icon, title, description, meta }: TopicCardProps) {
  return (
    <Link to={to} className={card.card} data-tone={tone}>
      <span className={card.badge} aria-hidden="true">
        {icon}
      </span>
      <h3 className={card.title}>{title}</h3>
      <p className={card.description}>{description}</p>
      {meta && <p className={card.meta}>{meta}</p>}
    </Link>
  )
}
