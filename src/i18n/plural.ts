import type { Lang } from '../types/content'
import { formatNumber } from './useI18n'

/**
 * Proper plural forms. Arabic has six (zero, one, two, few, many, other),
 * so we lean on Intl.PluralRules instead of string hacks.
 */
type Forms = Partial<Record<Intl.LDMLPluralRule, string>> & { other: string }

const nouns = {
  question: {
    ar: { one: 'سؤال واحد', two: 'سؤالان', few: '{n} أسئلة', many: '{n} سؤالًا', other: '{n} سؤال' },
    en: { one: '1 question', other: '{n} questions' },
  },
  idea: {
    ar: { one: 'فكرة واحدة', two: 'فكرتان', few: '{n} أفكار', many: '{n} فكرة', other: '{n} فكرة' },
    en: { one: '1 idea', other: '{n} ideas' },
  },
  minute: {
    ar: {
      one: 'دقيقة واحدة',
      two: 'دقيقتان',
      few: '{n} دقائق',
      many: '{n} دقيقة',
      other: '{n} دقيقة',
    },
    en: { one: '1 min', other: '{n} min' },
  },
  saved: {
    ar: {
      one: 'عنصر محفوظ',
      two: 'عنصران محفوظان',
      few: '{n} عناصر محفوظة',
      many: '{n} عنصرًا محفوظًا',
      other: '{n} عنصر محفوظ',
    },
    en: { one: '1 saved', other: '{n} saved' },
  },
} satisfies Record<string, Record<Lang, Forms>>

export type PluralNoun = keyof typeof nouns

const rules: Record<Lang, Intl.PluralRules> = {
  ar: new Intl.PluralRules('ar'),
  en: new Intl.PluralRules('en'),
}

export function plural(noun: PluralNoun, count: number, lang: Lang): string {
  const forms: Forms = nouns[noun][lang]
  const template = forms[rules[lang].select(count)] ?? forms.other
  return template.replace('{n}', formatNumber(count, lang))
}
