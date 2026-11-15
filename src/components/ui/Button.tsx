import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router'
import styles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'ghost' | 'soft'
type Size = 'md' | 'lg' | 'sm'

interface CommonProps {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  /** Icon placed after the label (mirrors automatically in RTL via flex order). */
  trailingIcon?: ReactNode
  /** Square, icon-only button. Requires an aria-label. */
  iconOnly?: boolean
  block?: boolean
  className?: string
  children?: ReactNode
}

function classes({ variant = 'primary', size = 'md', iconOnly, block, className }: CommonProps) {
  return [
    styles.button,
    styles[variant],
    styles[size],
    iconOnly && styles.iconOnly,
    block && styles.block,
    className,
  ]
    .filter(Boolean)
    .join(' ')
}

function Content({ icon, trailingIcon, children }: CommonProps) {
  return (
    <>
      {icon}
      {children != null && <span>{children}</span>}
      {trailingIcon}
    </>
  )
}

export function Button(props: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const { variant, size, icon, trailingIcon, iconOnly, block, className, children, ...rest } = props
  return (
    <button
      type="button"
      className={classes({ variant, size, iconOnly, block, className })}
      {...rest}
    >
      <Content icon={icon} trailingIcon={trailingIcon}>
        {children}
      </Content>
    </button>
  )
}

export function ButtonLink(props: CommonProps & LinkProps) {
  const { variant, size, icon, trailingIcon, iconOnly, block, className, children, ...rest } = props
  return (
    <Link className={classes({ variant, size, iconOnly, block, className })} {...rest}>
      <Content icon={icon} trailingIcon={trailingIcon}>
        {children}
      </Content>
    </Link>
  )
}
