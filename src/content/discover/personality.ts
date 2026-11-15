import type { Topic } from '../../types/content'

export const personality: Topic = {
  id: 'personality',
  section: 'discover',
  tone: 'lilac',
  title: { ar: 'الشخصية', en: 'Personality' },
  description: {
    ar: 'نظرة أقرب إلى طباع كلٍّ منكما: طاقته ومشاعره وطريقة تفكيره.',
    en: 'A closer look at how each of you recharges, feels and thinks.',
  },
  subtopics: [
    { id: 'energy', title: { ar: 'الطاقة والمزاج', en: 'Energy & mood' } },
    { id: 'emotions', title: { ar: 'المشاعر', en: 'Emotions' } },
    { id: 'decisions', title: { ar: 'التفكير والقرارات', en: 'Thinking & decisions' } },
  ],
  questions: [
    {
      id: 'personality-001',
      subtopic: 'energy',
      depth: 'light',
      text: {
        ar: 'ما الذي يُعيد إليك طاقتك بعد يوم مُرهِق؟',
        en: 'What recharges you after a draining day?',
      },
      followUps: [
        {
          ar: 'هل يختلف ذلك بين أيام العمل وأيام العطلة؟',
          en: 'Is it different on workdays and days off?',
        },
        {
          ar: 'كيف يمكنني أن أساعدك على ذلك؟',
          en: 'How can I help with that?',
        },
      ],
    },
    {
      id: 'personality-002',
      subtopic: 'energy',
      depth: 'light',
      text: {
        ar: 'في أيّ ساعات اليوم تبلغ طاقتك ذروتها؟',
        en: 'At what time of day is your energy at its peak?',
      },
      followUps: [
        {
          ar: 'وما الساعات التي يحسن ألّا يُطلب منك فيها أمر مهم؟',
          en: 'And when is it best not to ask you for anything important?',
        },
      ],
    },
    {
      id: 'personality-003',
      subtopic: 'energy',
      depth: 'medium',
      text: {
        ar: 'بعد سهرة طويلة مع الناس، ما الأقرب إليك: مزيد من الصحبة أم ساعة من الهدوء؟',
        en: 'After a long evening with people, what suits you more: more company or an hour of quiet?',
      },
      followUps: [
        {
          ar: 'هل تغيّر ذلك مع السنوات؟',
          en: 'Has that changed over the years?',
        },
        {
          ar: 'كيف يمكننا أن نوازن بين احتياجاتنا في ذلك؟',
          en: 'How could we balance our needs here?',
        },
      ],
    },
    {
      id: 'personality-004',
      subtopic: 'energy',
      depth: 'medium',
      text: {
        ar: 'ما الذي يُعكّر مزاجك بهدوء، دون أن يلاحظه الآخرون غالبًا؟',
        en: 'What quietly spoils your mood, often without others noticing?',
      },
      followUps: [
        {
          ar: 'ما العلامة التي تدلّ على ذلك عندك؟',
          en: "What's the sign that it's happening?",
        },
        {
          ar: 'وما الذي يُعيد إليك صفاءك بعدها؟',
          en: 'And what brings you back afterward?',
        },
      ],
    },
    {
      id: 'personality-005',
      subtopic: 'energy',
      depth: 'deep',
      text: {
        ar: 'ما الجانب من طباعك أو مزاجك الذي يُساء فهمه أحيانًا؟',
        en: 'Which part of your temperament or moods sometimes gets misunderstood?',
      },
      followUps: [
        {
          ar: 'كيف يمكن أن يُفهم على حقيقته؟',
          en: 'How could it be understood for what it really is?',
        },
        {
          ar: 'هل حدث سوء فهم كهذا بيننا من قبل؟',
          en: 'Has that ever happened between us?',
        },
      ],
    },
    {
      id: 'personality-006',
      subtopic: 'emotions',
      depth: 'light',
      text: {
        ar: 'حين يغمرك الفرح، كيف يظهر ذلك عليك؟',
        en: 'When you are really happy, how does it show?',
      },
      followUps: [
        {
          ar: 'ومتى غمرك هذا الشعور آخر مرة؟',
          en: 'When did you last feel that way?',
        },
        {
          ar: 'من أكثر من يُفرحك بسهولة؟',
          en: 'Who makes you happy most easily?',
        },
      ],
    },
    {
      id: 'personality-007',
      subtopic: 'emotions',
      depth: 'medium',
      text: {
        ar: 'ما الذي يحرّك مشاعرك بسهولة، حتى في فيلم أو أغنية؟',
        en: 'What moves you easily, even in a film or a song?',
      },
      followUps: [
        {
          ar: 'ما آخر مشهد حرّك قلبك؟',
          en: "What's the last scene that touched your heart?",
        },
        {
          ar: 'هل يريحك أن يرى الآخرون هذا الجانب منك؟',
          en: 'Are you comfortable letting others see that side of you?',
        },
      ],
    },
    {
      id: 'personality-008',
      subtopic: 'emotions',
      depth: 'medium',
      text: {
        ar: 'كيف يبدو القلق عندك من الداخل، وكيف يبدو من الخارج؟',
        en: 'What does worry feel like inside you, and what does it look like from the outside?',
      },
      followUps: [
        {
          ar: 'هل يُخفي هدوؤك أحيانًا قلقًا لا يراه أحد؟',
          en: 'Does your calm sometimes hide worry no one sees?',
        },
        {
          ar: 'ما أكثر ما يشغل بالك هذه الأيام؟',
          en: "What's on your mind most these days?",
        },
      ],
    },
    {
      id: 'personality-009',
      subtopic: 'emotions',
      depth: 'medium',
      text: {
        ar: 'كيف يمرّ بك الغضب: كعاصفة سريعة أم كغيمة تبقى طويلًا؟',
        en: 'How does anger pass through you: a quick storm or a cloud that lingers?',
      },
      followUps: [
        {
          ar: 'ما الذي يساعده على المرور أسرع؟',
          en: 'What helps it pass sooner?',
        },
        {
          ar: 'هل يشبه ذلك أحدًا من عائلتك؟',
          en: 'Is that like anyone in your family?',
        },
      ],
    },
    {
      id: 'personality-010',
      subtopic: 'emotions',
      depth: 'deep',
      text: {
        ar: 'ما الشعور الذي يصعب عليك الاعتراف به، حتى بينك وبين نفسك؟',
        en: 'Which feeling is hardest for you to admit, even to yourself?',
      },
      followUps: [
        {
          ar: 'ما الذي يجعل البوح به أسهل؟',
          en: 'What would make it easier to share?',
        },
        {
          ar: 'كيف يمكنني أن أستقبله بلطف؟',
          en: 'How could I receive it gently?',
        },
      ],
    },
    {
      id: 'personality-011',
      subtopic: 'decisions',
      depth: 'light',
      text: {
        ar: 'أمام قائمة طعام طويلة، هل يأتي قرارك سريعًا أم بعد تردّد؟',
        en: 'Faced with a long menu, are you quick to decide or do you take your time?',
      },
      followUps: [
        {
          ar: 'وهل تشبه قراراتك الكبيرة قراراتك الصغيرة؟',
          en: 'Are your big decisions like your small ones?',
        },
      ],
    },
    {
      id: 'personality-012',
      subtopic: 'decisions',
      depth: 'medium',
      text: {
        ar: 'في القرارات المهمة، ما الذي يقودك أكثر: الحدس أم الحسابات الدقيقة؟',
        en: 'In big decisions, what leads you more: gut feeling or careful reasoning?',
      },
      followUps: [
        {
          ar: 'ما القرار الذي يشهد على ذلك؟',
          en: 'Which decision shows that best?',
        },
        {
          ar: 'هل خذلك حدسك يومًا؟',
          en: 'Has your gut ever let you down?',
        },
      ],
    },
    {
      id: 'personality-013',
      subtopic: 'decisions',
      depth: 'medium',
      text: {
        ar: 'من أول من يخطر ببالك عند الحاجة إلى مشورة؟',
        en: 'Who is the first person that comes to mind when you need advice?',
      },
      followUps: [
        {
          ar: 'ما الذي يجعل رأيه مهمًّا لك؟',
          en: 'What makes their opinion matter to you?',
        },
        {
          ar: 'وفي أيّ الأمور يهمّك رأيي أولًا؟',
          en: 'And where do you want my opinion first?',
        },
      ],
    },
    {
      id: 'personality-014',
      subtopic: 'decisions',
      depth: 'medium',
      text: {
        ar: 'كيف يكون تعاملك مع التغيير المفاجئ في الخطط؟',
        en: 'How do you handle sudden changes of plan?',
      },
      followUps: [
        {
          ar: 'ما الذي يجعل التغيير أسهل عليك؟',
          en: 'What makes change easier for you?',
        },
        {
          ar: 'ما الفرق بين مفاجأة جميلة ومفاجأة مزعجة في نظرك؟',
          en: "What's the difference between a lovely surprise and an annoying one, for you?",
        },
      ],
    },
    {
      id: 'personality-015',
      subtopic: 'decisions',
      depth: 'deep',
      text: {
        ar: 'كيف يكون حديثك مع نفسك بعد قرار لم يُوفَّق؟',
        en: "How do you talk to yourself after a decision that didn't work out?",
      },
      followUps: [
        {
          ar: 'هل يميل هذا الحديث إلى القسوة أم إلى اللين؟',
          en: 'Does that inner voice lean harsh or gentle?',
        },
        {
          ar: 'ما الذي يُعيد إليك الثقة بعدها؟',
          en: 'What restores your confidence afterward?',
        },
      ],
    },
  ],
}
