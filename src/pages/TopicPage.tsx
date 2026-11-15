import { useId, useState } from 'react'
import { useParams, useSearchParams } from 'react-router'
import { OptionsButton, OptionsPanel } from '../components/deck/DeckOptions'
import { QuestionDeck } from '../components/deck/QuestionDeck'
import { Chips, type ChipOption } from '../components/ui/Chips'
import { PageHeader } from '../components/ui/PageHeader'
import { getTopic, type QuestionRef } from '../content'
import { useI18n } from '../i18n/useI18n'
import type { Depth, Topic } from '../types/content'
import { NotFound } from './NotFound'
import styles from './TopicPage.module.css'

type DepthFilter = Depth | 'all'

/** One topic's question deck. Filters live in the URL, tucked behind "Options". */
export function TopicPage({ section }: { section: Topic['section'] }) {
  const { topicId } = useParams()
  const topic = getTopic(section, topicId)
  if (!topic) return <NotFound />
  return <TopicDeck topic={topic} />
}

function TopicDeck({ topic }: { topic: Topic }) {
  const { t, l } = useI18n()
  const [params, setParams] = useSearchParams()
  const panelId = useId()
  const sub = params.get('sub') ?? 'all'
  const depth = (params.get('depth') ?? 'all') as DepthFilter
  const activeFilters = Number(sub !== 'all') + Number(depth !== 'all')
  const [open, setOpen] = useState(false)

  const setFilter = (key: 'sub' | 'depth', value: string) => {
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        if (value === 'all') next.delete(key)
        else next.set(key, value)
        return next
      },
      { replace: true },
    )
  }

  const items: QuestionRef[] = topic.questions
    .filter((q) => sub === 'all' || q.subtopic === sub)
    .filter((q) => depth === 'all' || q.depth === depth)
    .map((question) => ({ question, topic }))

  const subOptions: ChipOption<string>[] = [
    { value: 'all', label: t('subtopicAll') },
    ...topic.subtopics.map((s) => ({ value: s.id, label: l(s.title) })),
  ]
  const depthsPresent = new Set(topic.questions.map((q) => q.depth))
  const depthOptions: ChipOption<DepthFilter>[] = [
    { value: 'all', label: t('depthAny') },
    ...(['light', 'medium', 'deep'] as const)
      .filter((d) => depthsPresent.has(d))
      .map((d) => ({
        value: d,
        label: t(d === 'light' ? 'depthLight' : d === 'medium' ? 'depthMedium' : 'depthDeep'),
      })),
  ]

  const sectionTitle = topic.section === 'talk' ? t('talkTitle') : t('discoverTitle')
  const deckKey = `${topic.section}/${topic.id}|${sub}|${depth}`
  // With no matching questions, keep the filters visible so they can be changed.
  const panelOpen = open || items.length === 0

  return (
    <>
      <title>{`${l(topic.title)} · ${t('brand')}`}</title>
      <PageHeader
        title={l(topic.title)}
        lead={l(topic.description)}
        backTo={`/${topic.section}`}
        backLabel={sectionTitle}
        tone={topic.tone}
        action={
          <OptionsButton
            open={panelOpen}
            onToggle={() => setOpen((o) => !o)}
            panelId={panelId}
            active={activeFilters}
          />
        }
      />

      <OptionsPanel id={panelId} open={panelOpen}>
        {!topic.ordered && (
          <>
            <Chips
              label={t('subtopicLabel')}
              options={subOptions}
              value={sub}
              onChange={(v) => setFilter('sub', v)}
            />
            {depthOptions.length > 2 && (
              <Chips
                label={t('depthLabel')}
                options={depthOptions}
                value={depth}
                onChange={(v) => setFilter('depth', v)}
              />
            )}
          </>
        )}
      </OptionsPanel>

      {items.length === 0 ? (
        <p className={styles.empty}>{t('noMatches')}</p>
      ) : (
        <QuestionDeck
          key={deckKey}
          deckKey={deckKey}
          items={items}
          ordered={topic.ordered}
          moreHref={`/${topic.section}`}
        />
      )}
    </>
  )
}
