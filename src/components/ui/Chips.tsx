import styles from './Chips.module.css'

export interface ChipOption<T extends string> {
  value: T
  label: string
}

interface ChipsProps<T extends string> {
  label: string
  options: ChipOption<T>[]
  value: T
  onChange: (value: T) => void
  size?: 'sm' | 'md'
}

/** A single-select row of pill buttons (filters, depth, mode). */
export function Chips<T extends string>({
  label,
  options,
  value,
  onChange,
  size = 'sm',
}: ChipsProps<T>) {
  return (
    <div role="group" aria-label={label} className={`${styles.chips} ${styles[size]}`}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={styles.chip}
          aria-pressed={option.value === value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
