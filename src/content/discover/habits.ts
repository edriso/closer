import type { Topic } from '../../types/content'

export const habits: Topic = {
  id: 'habits',
  section: 'discover',
  tone: 'mint',
  title: { ar: 'العادات والتفضيلات', en: 'Habits & preferences' },
  description: {
    ar: 'التفاصيل الصغيرة التي تصنع أيام كلٍّ منكما، من الصباح حتى آخر الليل.',
    en: 'The small details that shape each of your days, from morning to late at night.',
  },
  subtopics: [
    { id: 'routines', title: { ar: 'الروتين', en: 'Routines' } },
    { id: 'home-life', title: { ar: 'الحياة اليومية', en: 'Daily life' } },
    { id: 'free-time', title: { ar: 'وقت الفراغ', en: 'Free time' } },
  ],
  questions: [
    {
      id: 'habits-001',
      subtopic: 'routines',
      depth: 'light',
      text: {
        ar: 'هل يمضي نومك على مواعيد ثابتة أم يتبدّل مع الأيام؟',
        en: 'Does your sleep keep a steady schedule, or does it shift from day to day?',
      },
      followUps: [
        {
          ar: 'كم ساعة من النوم تكفيك حقًّا؟',
          en: 'How many hours of sleep do you really need?',
        },
        {
          ar: 'ما الذي يحدث لمزاجك حين يقلّ نومك؟',
          en: 'What happens to your mood on too little sleep?',
        },
      ],
    },
    {
      id: 'habits-002',
      subtopic: 'routines',
      depth: 'light',
      text: {
        ar: 'ما الطقس الصغير الذي يختم به يومك؟',
        en: 'What small ritual ends your day?',
      },
      followUps: [
        {
          ar: 'منذ متى يرافقك هذا الطقس؟',
          en: 'How long has it been part of your days?',
        },
        {
          ar: 'ما الذي يُعكّر هدوء آخر الليل عندك؟',
          en: 'What disturbs your late-night calm?',
        },
      ],
    },
    {
      id: 'habits-003',
      subtopic: 'routines',
      depth: 'medium',
      text: {
        ar: 'ما العادة التي يصعب عليك التخلّي عنها حتى في السفر؟',
        en: 'Which habit is hard for you to drop, even when traveling?',
      },
      followUps: [
        {
          ar: 'ما الذي تمنحك إياه هذه العادة؟',
          en: 'What does that habit give you?',
        },
      ],
    },
    {
      id: 'habits-004',
      subtopic: 'routines',
      depth: 'medium',
      text: {
        ar: 'ما الذي يحدث لروتينك حين يبلغ الضغط ذروته؟',
        en: 'What happens to your routines when stress is at its peak?',
      },
      followUps: [
        {
          ar: 'ما أول عادة تسقط من يومك؟',
          en: 'Which habit is first to go?',
        },
        {
          ar: 'وما العادة التي تبقى مهما حدث؟',
          en: 'And which one stays no matter what?',
        },
      ],
    },
    {
      id: 'habits-005',
      subtopic: 'routines',
      depth: 'medium',
      text: {
        ar: 'ما مقدار التنظيم الذي يريحك: جدول واضح أم يوم يمضي على هواه؟',
        en: 'How much structure suits you: a clear schedule or a day that unfolds as it goes?',
      },
      followUps: [
        {
          ar: 'هل تُريحك القوائم والتذكيرات؟',
          en: 'Do lists and reminders help you?',
        },
        {
          ar: 'كيف نلتقي في المنتصف إن اختلف أسلوبانا؟',
          en: 'How can we meet in the middle if our styles differ?',
        },
      ],
    },
    {
      id: 'habits-006',
      subtopic: 'home-life',
      depth: 'light',
      text: {
        ar: 'ما الذي يريحك أكثر: بيت هادئ تمامًا أم موسيقى أو صوت في الخلفية؟',
        en: 'What relaxes you more: a perfectly quiet home or some music or sound in the background?',
      },
      followUps: [
        {
          ar: 'وماذا عن أوقات العمل أو التركيز؟',
          en: 'And when you need to focus?',
        },
      ],
    },
    {
      id: 'habits-007',
      subtopic: 'home-life',
      depth: 'medium',
      text: {
        ar: 'ما درجة الترتيب التي يرتاح لها بالك؟',
        en: 'How tidy does a space need to be for you to feel at ease?',
      },
      followUps: [
        {
          ar: 'ما الفوضى التي لا تُزعجك أبدًا؟',
          en: "What kind of mess doesn't bother you at all?",
        },
        {
          ar: 'وما التفصيل الذي يُزعجك فورًا؟',
          en: 'And what detail bothers you right away?',
        },
      ],
    },
    {
      id: 'habits-008',
      subtopic: 'home-life',
      depth: 'light',
      text: {
        ar: 'ما الوجبة الأهمّ في يومك، وما شكلها المثالي عندك؟',
        en: 'Which meal of the day matters most to you, and what does it look like at its best?',
      },
      followUps: [
        {
          ar: 'أيّهما أقرب إليك: الطبخ في البيت أم الطلب من الخارج؟',
          en: 'Cooking at home or ordering in: which is more you?',
        },
        {
          ar: 'هل يهمّك أن نأكل معًا في وقت ثابت؟',
          en: 'Does eating together at a set time matter to you?',
        },
      ],
    },
    {
      id: 'habits-009',
      subtopic: 'home-life',
      depth: 'medium',
      text: {
        ar: 'ما الأوقات التي يحسن أن تغيب فيها الهواتف عن أيدينا؟',
        en: 'When are the moments phones are best put away?',
      },
      followUps: [
        {
          ar: 'على المائدة، أم قبل النوم، أم في أوقات أخرى؟',
          en: 'At meals, before bed or at other times?',
        },
        {
          ar: 'كيف نذكّر بعضنا بذلك بلطف؟',
          en: 'How can we gently remind each other?',
        },
      ],
    },
    {
      id: 'habits-010',
      subtopic: 'home-life',
      depth: 'medium',
      text: {
        ar: 'ما الذي يجعل استقبال الضيوف متعة بالنسبة إليك أو عبئًا؟',
        en: 'What makes having guests over a joy or a strain for you?',
      },
      followUps: [
        {
          ar: 'كم مرة في الشهر تبدو مناسبة؟',
          en: 'How often feels right in a month?',
        },
        {
          ar: 'هل يُسعدك الضيف المفاجئ أم الموعد المسبق؟',
          en: 'Do you enjoy surprise visitors, or prefer some notice?',
        },
      ],
    },
    {
      id: 'habits-011',
      subtopic: 'free-time',
      depth: 'light',
      text: {
        ar: 'ما الهواية التي ما زالت على قائمة التجربة عندك؟',
        en: 'Which hobby is still on your list to try?',
      },
      followUps: [
        {
          ar: 'ما الذي يجذبك إليها؟',
          en: 'What draws you to it?',
        },
        {
          ar: 'هل يمكن أن نجرّبها معًا يومًا؟',
          en: 'Could we try it together someday?',
        },
      ],
    },
    {
      id: 'habits-012',
      subtopic: 'free-time',
      depth: 'light',
      text: {
        ar: 'ما النشاط الذي يمكن أن يصبح موعدنا الأسبوعي الثابت؟',
        en: 'What activity could become our regular weekly thing?',
      },
      followUps: [
        {
          ar: 'في أيّ يوم وأيّ ساعة؟',
          en: 'Which day, and what time?',
        },
        {
          ar: 'وما البديل في الأسابيع المزدحمة؟',
          en: "And what's the backup for busy weeks?",
        },
      ],
    },
    {
      id: 'habits-013',
      subtopic: 'free-time',
      depth: 'medium',
      text: {
        ar: 'كيف نوازن برأيك بين وقتنا معًا ووقت كلٍّ منا مع أصدقائه؟',
        en: 'How do you think we should balance our time together with time with our own friends?',
      },
      followUps: [
        {
          ar: 'هل من أصدقاء يهمّك أن أعرفهم أكثر؟',
          en: 'Are there friends you would like me to know better?',
        },
        {
          ar: 'ما الذي يجعل وقت الأصدقاء مريحًا لكلينا؟',
          en: 'What makes friend time comfortable for both of us?',
        },
      ],
    },
    {
      id: 'habits-014',
      subtopic: 'free-time',
      depth: 'medium',
      text: {
        ar: 'ما نوع السفر الأقرب إليك: مدن صاخبة، أم طبيعة هادئة، أم زيارة الأهل والأحباب؟',
        en: 'What kind of travel suits you best: lively cities, quiet nature or visiting loved ones?',
      },
      followUps: [
        {
          ar: 'ما الذي لا تكتمل الرحلة بدونه عندك؟',
          en: 'What makes a trip complete for you?',
        },
      ],
    },
    {
      id: 'habits-015',
      subtopic: 'free-time',
      depth: 'deep',
      text: {
        ar: 'ما المتعة البسيطة من طفولتك التي يشتاق إليها قلبك؟',
        en: 'What simple childhood pleasure does your heart miss?',
      },
      followUps: [
        {
          ar: 'ما الذي يحول دون عودتها اليوم؟',
          en: "What's keeping it from coming back today?",
        },
        {
          ar: 'كيف يمكن أن نعيدها معًا؟',
          en: 'How could we bring it back together?',
        },
      ],
    },
  ],
}
