import type { Topic } from '../../types/content'

/**
 * The closeness journey: 36 questions in three stages that grow gently deeper.
 * Inspired by the escalating self-disclosure structure of Aron et al. (1997),
 * "36 Questions for Increasing Closeness". All questions are original to Closer
 * and written for couples who already know each other.
 */
export const journey: Topic = {
  id: 'journey',
  section: 'discover',
  tone: 'indigo',
  ordered: true,
  title: { ar: 'رحلة القُرب', en: 'The closeness journey' },
  description: {
    ar: '٣٦ سؤالًا في ثلاث مراحل تزداد عمقًا بلطف. الأجمل أن تكون في جلسة واحدة، مع التناوب على الإجابة.',
    en: '36 questions in three stages that gently grow deeper. Best done in one sitting, taking turns to answer.',
  },
  subtopics: [
    { id: 'stage-1', title: { ar: 'المرحلة الأولى', en: 'Stage one' } },
    { id: 'stage-2', title: { ar: 'المرحلة الثانية', en: 'Stage two' } },
    { id: 'stage-3', title: { ar: 'المرحلة الثالثة', en: 'Stage three' } },
  ],
  questions: [
    /* ---------- Stage one ---------- */
    {
      id: 'journey-001',
      subtopic: 'stage-1',
      depth: 'light',
      text: {
        ar: 'لو أُضيف إلى الأسبوع يوم ثامن مخصّص لك وحدك، فكيف يمضي من الصباح حتى المساء؟',
        en: 'If the week gained an eighth day just for you, how would it go from morning to night?',
      },
      followUps: [{ ar: 'وما أول شيء فيه؟', en: 'What comes first?' }],
    },
    {
      id: 'journey-002',
      subtopic: 'stage-1',
      depth: 'light',
      text: {
        ar: 'لو أمكن إتقان مهارة واحدة بين ليلة وضحاها، فأيّ مهارة تكون؟',
        en: 'If you could master one skill overnight, which would it be?',
      },
      followUps: [{ ar: 'وما أول استخدام لها؟', en: "What's the first thing you'd use it for?" }],
    },
    {
      id: 'journey-003',
      subtopic: 'stage-1',
      depth: 'light',
      text: {
        ar: 'ما الأغنية التي تُعيدك فورًا إلى مرحلة معيّنة من حياتك؟',
        en: 'What song instantly takes you back to a certain time in your life?',
      },
      followUps: [
        { ar: 'ما الذي كان يحدث في حياتك وقتها؟', en: 'What was going on in your life back then?' },
      ],
    },
    {
      id: 'journey-004',
      subtopic: 'stage-1',
      depth: 'light',
      text: {
        ar: 'ما الذي كان يُدهشك في عالم الكبار أيام طفولتك؟',
        en: 'As a child, what fascinated you about the grown-up world?',
      },
      followUps: [{ ar: 'وهل ما زال يُدهشك اليوم؟', en: 'Does it still fascinate you today?' }],
    },
    {
      id: 'journey-005',
      subtopic: 'stage-1',
      depth: 'light',
      text: {
        ar: 'ما الطبق الذي يحمل لك طعم الطفولة؟',
        en: 'What dish tastes like childhood to you?',
      },
      followUps: [{ ar: 'وفي أي مناسبة كان يحضر عادةً؟', en: 'When did it usually show up?' }],
    },
    {
      id: 'journey-006',
      subtopic: 'stage-1',
      depth: 'light',
      text: {
        ar: 'ما العادة الطريفة لديك التي لا يعرفها كثيرون؟',
        en: "What's a quirky habit of yours that few people know about?",
      },
    },
    {
      id: 'journey-007',
      subtopic: 'stage-1',
      depth: 'light',
      text: {
        ar: 'ما آخر شيء أثار فضولك وأخذك في رحلة بحث طويلة؟',
        en: "What's the last thing that sparked your curiosity and sent you down a rabbit hole?",
      },
      followUps: [
        {
          ar: 'وما أغرب معلومة ظهرت في الطريق؟',
          en: "What's the strangest fact that came up along the way?",
        },
      ],
    },
    {
      id: 'journey-008',
      subtopic: 'stage-1',
      depth: 'light',
      text: {
        ar: 'لو أمكن العيش عامًا كاملًا في أي مدينة في العالم، فأيّ مدينة تكون؟',
        en: 'If you could live anywhere in the world for a year, which city would it be?',
      },
      followUps: [{ ar: 'وما الذي يجذبك إليها؟', en: 'What draws you to it?' }],
    },
    {
      id: 'journey-009',
      subtopic: 'stage-1',
      depth: 'light',
      text: {
        ar: 'ما أجمل لحظة عادية مرّت بك هذا الأسبوع؟',
        en: 'What was the loveliest ordinary moment of your week?',
      },
      followUps: [{ ar: 'ما الذي جعلها جميلة؟', en: 'What made it lovely?' }],
    },
    {
      id: 'journey-010',
      subtopic: 'stage-1',
      depth: 'light',
      text: {
        ar: 'ما الأشياء الصغيرة التي تمنحك شعور البيت في أي مكان؟',
        en: 'What little things give you that feeling of home, wherever you are?',
      },
      followUps: [
        { ar: 'وهل يوجد منها شيء حولك الآن؟', en: 'Is one of them around you right now?' },
      ],
    },
    {
      id: 'journey-011',
      subtopic: 'stage-1',
      depth: 'light',
      text: {
        ar: 'ما أول شيء لفت انتباهك في نصفك الآخر؟',
        en: 'What was the first thing you noticed about your other half?',
      },
      followUps: [
        { ar: 'وهل ما زال يلفت انتباهك حتى اليوم؟', en: 'Does it still catch your eye today?' },
      ],
    },
    {
      id: 'journey-012',
      subtopic: 'stage-1',
      depth: 'light',
      text: {
        ar: 'ما الموقف الطريف بينك وبين نصفك الآخر الذي يُضحكك كلما خطر ببالك؟',
        en: 'What funny moment between you two still makes you laugh whenever it comes to mind?',
      },
      followUps: [
        {
          ar: 'وهل يتذكّره نصفك الآخر بالطريقة نفسها؟',
          en: 'Does your other half remember it the same way?',
        },
      ],
    },

    /* ---------- Stage two ---------- */
    {
      id: 'journey-013',
      subtopic: 'stage-2',
      depth: 'medium',
      text: {
        ar: 'ما الحلم القديم الذي ما زال يسكن قلبك، حتى لو لم يتحقق بعد؟',
        en: "What old dream still lives in your heart, even if it hasn't come true yet?",
      },
      followUps: [
        { ar: 'ما الخطوة الصغيرة التي تُقرّبه؟', en: 'What small step would bring it closer?' },
      ],
    },
    {
      id: 'journey-014',
      subtopic: 'stage-2',
      depth: 'medium',
      text: {
        ar: 'ما الإنجاز الذي يملؤك فخرًا أكثر مما يظن الآخرون؟',
        en: 'Which achievement makes you prouder than people realize?',
      },
      followUps: [{ ar: 'مَن كان بجانبك وقتها؟', en: 'Who was by your side back then?' }],
    },
    {
      id: 'journey-015',
      subtopic: 'stage-2',
      depth: 'medium',
      text: {
        ar: 'ما الذكرى التي يعود إليها قلبك كلما احتاج إلى الدفء؟',
        en: 'Which memory does your heart return to whenever it needs warmth?',
      },
      followUps: [
        { ar: 'ما التفاصيل التي ما زالت حاضرة فيها؟', en: 'Which details are still vivid?' },
      ],
    },
    {
      id: 'journey-016',
      subtopic: 'stage-2',
      depth: 'medium',
      text: {
        ar: 'ما الموقف الذي كشف لك معنى الصداقة الحقيقية؟',
        en: 'What moment showed you what true friendship means?',
      },
    },
    {
      id: 'journey-017',
      subtopic: 'stage-2',
      depth: 'medium',
      text: {
        ar: 'ما العادة العائلية من طفولتك التي تستحق مكانًا في حياتكما؟',
        en: 'Which family tradition from your childhood deserves a place in your life together?',
      },
      followUps: [
        {
          ar: 'وما العادة التي يمكن تركها بهدوء؟',
          en: 'And which one could quietly be left behind?',
        },
      ],
    },
    {
      id: 'journey-018',
      subtopic: 'stage-2',
      depth: 'medium',
      text: {
        ar: 'ما الذي تغيّر فيك منذ بداية علاقتكما؟',
        en: 'What has changed in you since your relationship began?',
      },
      followUps: [{ ar: 'وهل هو تغيير يُسعدك؟', en: 'Is it a change you like?' }],
    },
    {
      id: 'journey-019',
      subtopic: 'stage-2',
      depth: 'medium',
      text: {
        ar: 'ما التصرّف الصغير الذي يُشعرك بالحب أكثر من أي كلام؟',
        en: 'What small gesture makes you feel loved more than any words?',
      },
      followUps: [{ ar: 'متى حدث ذلك آخر مرة؟', en: 'When did it last happen?' }],
    },
    {
      id: 'journey-020',
      subtopic: 'stage-2',
      depth: 'medium',
      text: {
        ar: 'كيف يختلف الحب في حياتك اليوم عن صورته في خيالك قبل سنوات؟',
        en: 'How is love in your life today different from how you pictured it years ago?',
      },
    },
    {
      id: 'journey-021',
      subtopic: 'stage-2',
      depth: 'medium',
      text: {
        ar: 'ما القرار الصعب الذي غيّر مسار حياتك نحو الأفضل؟',
        en: 'What hard decision changed the course of your life for the better?',
      },
      followUps: [
        { ar: 'وما الذي منحك الشجاعة لاتخاذه؟', en: 'What gave you the courage to make it?' },
      ],
    },
    {
      id: 'journey-022',
      subtopic: 'stage-2',
      depth: 'medium',
      text: {
        ar: 'مَن صاحب الأثر الأكبر في تكوين شخصيتك؟',
        en: 'Who has shaped who you are the most?',
      },
      followUps: [
        {
          ar: 'وأين يظهر هذا الأثر فيك حتى اليوم؟',
          en: 'Where does that influence still show today?',
        },
      ],
    },
    {
      id: 'journey-023',
      subtopic: 'stage-2',
      depth: 'medium',
      text: {
        ar: 'ما المغامرة التي يحلم بها قلبك لكما معًا يومًا ما؟',
        en: 'What adventure does your heart dream of for you two someday?',
      },
      followUps: [{ ar: 'وما الذي يلزم كي تبدأ؟', en: 'What would it take to begin?' }],
    },
    {
      id: 'journey-024',
      subtopic: 'stage-2',
      depth: 'medium',
      text: {
        ar: 'ما الذي يحتاج إليه يومك الصعب كي يتحسّن؟',
        en: 'What does a hard day of yours need to turn around?',
      },
      followUps: [
        {
          ar: 'وما الذي يمكن لنصفك الآخر فعله حينها؟',
          en: 'What could your other half do in that moment?',
        },
      ],
    },

    /* ---------- Stage three ---------- */
    {
      id: 'journey-025',
      subtopic: 'stage-3',
      depth: 'deep',
      text: {
        ar: 'ما الشيء الذي يجمعكما ولا يراه الآخرون من الخارج؟',
        en: "What connects you two that others can't see from the outside?",
      },
      followUps: [{ ar: 'ومتى يظهر ذلك أكثر؟', en: 'When does it show the most?' }],
    },
    {
      id: 'journey-026',
      subtopic: 'stage-3',
      depth: 'deep',
      text: {
        ar: 'ما الشيء الذي يُسعدك أن يعرفه نصفك الآخر عنك، ولم يُقَل من قبل؟',
        en: "What's something about you that you'd love your other half to know, but haven't said before?",
      },
    },
    {
      id: 'journey-027',
      subtopic: 'stage-3',
      depth: 'deep',
      text: {
        ar: 'ما الأمر الذي يصعب عليك طلبه، حتى من أقرب الناس إليك؟',
        en: 'What do you find hard to ask for, even from the people closest to you?',
      },
      followUps: [{ ar: 'وما الذي يجعل طلبه أسهل؟', en: 'What would make asking easier?' }],
    },
    {
      id: 'journey-028',
      subtopic: 'stage-3',
      depth: 'deep',
      text: {
        ar: 'ما الصفة الجميلة في نصفك الآخر التي تستحق أن تُقال الآن بصوت عالٍ؟',
        en: 'What lovely quality in your other half deserves to be said out loud right now?',
      },
      followUps: [{ ar: 'ومتى ظهرت هذه الصفة بوضوح؟', en: 'When did it shine the brightest?' }],
    },
    {
      id: 'journey-029',
      subtopic: 'stage-3',
      depth: 'deep',
      text: {
        ar: 'ما آخر شيء جميل أثّر فيك حتى الدموع؟',
        en: "What's the last beautiful thing that moved you to tears?",
      },
    },
    {
      id: 'journey-030',
      subtopic: 'stage-3',
      depth: 'deep',
      text: {
        ar: 'ما القلق الصغير الذي يرافقك بصمت ونادرًا ما يُقال؟',
        en: 'What small worry quietly follows you around and rarely gets said?',
      },
      followUps: [
        { ar: 'وما الذي يُطمئنك حين يحضر؟', en: 'What helps settle it when it shows up?' },
      ],
    },
    {
      id: 'journey-031',
      subtopic: 'stage-3',
      depth: 'deep',
      text: {
        ar: 'ما الدرس الذي جاءك من نصفك الآخر دون قصد؟',
        en: 'What has your other half taught you without meaning to?',
      },
    },
    {
      id: 'journey-032',
      subtopic: 'stage-3',
      depth: 'deep',
      text: {
        ar: 'ما الأمر الذي يشغل بالك هذه الأيام ويحتاج إلى رأي نصفك الآخر؟',
        en: "What's on your mind these days that could use your other half's perspective?",
      },
      followUps: [
        {
          ar: 'وما نوع الدعم المطلوب: نصيحة أم إصغاء فقط؟',
          en: 'What would help more: advice, or simply listening?',
        },
      ],
    },
    {
      id: 'journey-033',
      subtopic: 'stage-3',
      depth: 'deep',
      text: {
        ar: 'ما اللحظة التي امتلأ فيها قلبك امتنانًا لوجود نصفك الآخر في حياتك؟',
        en: 'When did your heart feel most grateful to have your other half in your life?',
      },
      followUps: [
        { ar: 'وهل عرف نصفك الآخر بذلك يومها؟', en: 'Did your other half know it at the time?' },
      ],
    },
    {
      id: 'journey-034',
      subtopic: 'stage-3',
      depth: 'deep',
      text: {
        ar: 'ما الذي يمنحك أكبر شعور بالأمان في علاقتكما؟',
        en: 'What gives you the deepest sense of safety in your relationship?',
      },
      followUps: [{ ar: 'وما الذي يزيد هذا الشعور؟', en: 'What would make it even stronger?' }],
    },
    {
      id: 'journey-035',
      subtopic: 'stage-3',
      depth: 'deep',
      text: {
        ar: 'كيف تبدو حياتكما بعد عشر سنوات في أجمل أحلامك؟',
        en: 'In your sweetest dreams, what does life look like for you two ten years from now?',
      },
      followUps: [
        {
          ar: 'ما التفصيل الصغير الأحبّ إليك في تلك الصورة؟',
          en: 'What small detail in that picture do you love most?',
        },
      ],
    },
    {
      id: 'journey-036',
      subtopic: 'stage-3',
      depth: 'deep',
      text: {
        ar: 'ما الجملة التي يستحق نصفك الآخر سماعها منك الآن، لتبقى في ذاكرته طويلًا؟',
        en: "What's one sentence your other half deserves to hear from you now, to keep for a long time?",
      },
    },
  ],
}
