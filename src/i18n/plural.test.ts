import { describe, expect, it } from 'vitest'
import { plural } from './plural'

describe('plural', () => {
  it('handles Arabic number agreement', () => {
    expect(plural('question', 1, 'ar')).toBe('سؤال واحد')
    expect(plural('question', 2, 'ar')).toBe('سؤالان')
    expect(plural('question', 5, 'ar')).toBe('٥ أسئلة')
    expect(plural('question', 25, 'ar')).toBe('٢٥ سؤالًا')
    expect(plural('minute', 10, 'ar')).toBe('١٠ دقائق')
    expect(plural('minute', 30, 'ar')).toBe('٣٠ دقيقة')
  })

  it('handles English', () => {
    expect(plural('question', 1, 'en')).toBe('1 question')
    expect(plural('question', 12, 'en')).toBe('12 questions')
  })
})
