import type { Topic } from '../../types/content'

export const deen: Topic = {
  id: 'deen',
  section: 'discover',
  tone: 'mint',
  title: { ar: 'الدين في حياتنا', en: 'Faith in our life' },
  description: {
    ar: 'أحاديث هادئة عن العبادة والعلم وبيتٍ يقوم على الإيمان، ليُعين كلٌّ منكما الآخر على الخير.',
    en: 'Gentle conversations about worship, learning and a home built on faith, to help each other toward good.',
  },
  subtopics: [
    { id: 'worship', title: { ar: 'العبادة والقرب من الله', en: 'Worship & closeness to Allah' } },
    { id: 'learning', title: { ar: 'طلب العلم', en: 'Seeking knowledge' } },
    { id: 'home', title: { ar: 'بيت على الإيمان', en: 'A home of faith' } },
    { id: 'together', title: { ar: 'نتعاون على الخير', en: 'Growing together' } },
  ],
  questions: [
    {
      id: 'deen-019',
      subtopic: 'worship',
      depth: 'light',
      text: {
        ar: 'ما الذي يجعل يوم الجمعة مميزًا في نظرك؟',
        en: 'What makes Friday special to you?',
      },
      followUps: [
        {
          ar: 'سورة الكهف، أم الإكثار من الصلاة على النبي ﷺ، أم غداء العائلة؟',
          en: 'Surah al-Kahf, sending extra blessings on the Prophet ﷺ, or a family lunch?',
        },
        {
          ar: 'وكيف يبدو يوم الجمعة في بيتنا برأيك؟',
          en: 'And how do you picture Fridays in our home?',
        },
      ],
    },
    {
      id: 'deen-002',
      subtopic: 'worship',
      depth: 'medium',
      text: {
        ar: 'أيّ عبادة تملأ قلبك سكينة أكثر من غيرها؟',
        en: 'Which act of worship fills your heart with the most peace?',
      },
      followUps: [
        {
          ar: 'متى كان ذلك آخر مرة؟',
          en: 'When did you last feel that?',
        },
        {
          ar: 'كيف نجعلها جزءًا ثابتًا من أيامنا؟',
          en: 'How could we make it a steady part of our days?',
        },
      ],
    },
    {
      id: 'deen-020',
      subtopic: 'worship',
      depth: 'medium',
      text: {
        ar: 'كيف نوازن في رمضان بين العبادة والعمل وزيارات الأهل برأيك؟',
        en: 'How do you think we should balance worship, work and family visits in Ramadan?',
      },
      followUps: [
        {
          ar: 'ما الذي يحسن أن نخفّفه في ذلك الشهر؟',
          en: 'What could we cut back on that month?',
        },
        {
          ar: 'وكيف نتقاسم التحضير للإفطار؟',
          en: 'And how would we share preparing iftar?',
        },
      ],
    },
    {
      id: 'deen-004',
      subtopic: 'worship',
      depth: 'medium',
      text: {
        ar: 'ما الذي يعنيه لك أن نؤدّي الحج أو العمرة معًا يومًا ما؟',
        en: 'What would it mean to you for us to make Hajj or Umrah together someday?',
      },
      followUps: [
        {
          ar: 'ما الذي يحسن أن نستعدّ به من الآن؟',
          en: 'What could we start preparing now?',
        },
        {
          ar: 'وما الدعاء الذي يسعدك أن نحمله معنا؟',
          en: "And which du'a would you love us to carry there?",
        },
      ],
    },
    {
      id: 'deen-005',
      subtopic: 'worship',
      depth: 'deep',
      text: {
        ar: 'حين يفتر الحماس للطاعة أحيانًا، ما الذي يُعيده إليك؟',
        en: 'When the drive to worship dips at times, what brings it back for you?',
      },
      followUps: [
        {
          ar: 'كيف يمكنني أن أكون عونًا لك في تلك الأيام؟',
          en: 'How could I support you on those days?',
        },
        {
          ar: 'وما الذي يحسن أن أتجنّبه حينها؟',
          en: 'And what should I avoid then?',
        },
      ],
    },
    {
      id: 'deen-006',
      subtopic: 'learning',
      depth: 'light',
      text: {
        ar: 'من المعلّم أو الكتاب الذي ترك أثرًا في فهمك للدين؟',
        en: 'Which teacher or book has shaped how you understand your faith?',
      },
      followUps: [
        {
          ar: 'ما الفكرة التي بقيت معك منه؟',
          en: 'What idea from it has stayed with you?',
        },
        {
          ar: 'هل يسعدك أن نقرأه أو نستمع إليه معًا؟',
          en: 'Would you like us to read it or listen to it together?',
        },
      ],
    },
    {
      id: 'deen-021',
      subtopic: 'learning',
      depth: 'light',
      text: {
        ar: 'ما الجانب من ديننا الذي يسعدك أن يزداد فهمك له؟',
        en: 'Which part of our faith would you love to understand more deeply?',
      },
      followUps: [
        {
          ar: 'ما الذي أثار اهتمامك به؟',
          en: 'What sparked your interest in it?',
        },
        {
          ar: 'هل نبحث فيه معًا؟',
          en: 'Shall we look into it together?',
        },
      ],
    },
    {
      id: 'deen-008',
      subtopic: 'learning',
      depth: 'medium',
      text: {
        ar: 'أيّ جانب من القرآن يشدّك إلى التعلّم أكثر: التلاوة، أم الحفظ، أم فهم المعاني؟',
        en: 'Which side of the Quran draws you to learn more: recitation, memorizing or its meanings?',
      },
      followUps: [
        {
          ar: 'هل يمكن أن يكون لنا وِرد أو درس نتشاركه؟',
          en: 'Could we share a daily portion or a lesson?',
        },
        {
          ar: 'وكيف نجعل طلب العلم جزءًا من أسبوعنا؟',
          en: 'And how could learning become part of our week?',
        },
      ],
    },
    {
      id: 'deen-009',
      subtopic: 'learning',
      depth: 'deep',
      text: {
        ar: 'إن اختلف فهمنا لمسألة دينية، فكيف نتعامل مع ذلك برأيك؟',
        en: 'If we understand a religious matter differently, how do you think we should handle it?',
      },
      followUps: [
        {
          ar: 'إلى من نرجع حين نحتاج إلى جواب؟',
          en: 'Who would we turn to for an answer?',
        },
        {
          ar: 'وكيف يبقى الاحترام بيننا حتى نصل إلى رأي؟',
          en: 'And how do we keep respect between us until we settle it?',
        },
      ],
    },
    {
      id: 'deen-010',
      subtopic: 'home',
      depth: 'light',
      text: {
        ar: 'ما الذي يجعل البيت عامرًا بالبركة في نظرك؟',
        en: 'What fills a home with barakah, in your view?',
      },
      followUps: [
        {
          ar: 'هل من بيت في حياتك يجسّد ذلك؟',
          en: 'Is there a home in your life that has it?',
        },
        {
          ar: 'ما العادة الصغيرة التي يمكن أن نبدأ بها؟',
          en: 'What small habit could we start with?',
        },
      ],
    },
    {
      id: 'deen-011',
      subtopic: 'home',
      depth: 'medium',
      text: {
        ar: 'ما الذي يسعدك أن يُسمع ويُرى في بيتنا، كالقرآن والدروس النافعة، وما الذي يحسن أن يبقى خارجه؟',
        en: "What would you love us to hear and see at home, like Quran and beneficial talks, and what's best kept out?",
      },
      followUps: [
        {
          ar: 'كيف نتفق على ذلك دون تشدّد أو تساهل؟',
          en: 'How can we agree on it without being too strict or too lax?',
        },
        {
          ar: 'وماذا عمّا يصل إلينا عبر الهواتف ووسائل التواصل؟',
          en: 'And what about what reaches us through phones and social media?',
        },
      ],
    },
    {
      id: 'deen-012',
      subtopic: 'home',
      depth: 'medium',
      text: {
        ar: 'ما الذي يعنيه الحياء لك في الحياة اليومية؟',
        en: 'What does haya, modesty, mean to you in everyday life?',
      },
      followUps: [
        {
          ar: 'كيف يظهر ذلك في بيتنا ومع ضيوفنا؟',
          en: 'How might it show in our home and with our guests?',
        },
        {
          ar: 'ومن كان قدوتك فيه؟',
          en: 'And who has been your example in it?',
        },
      ],
    },
    {
      id: 'deen-013',
      subtopic: 'home',
      depth: 'medium',
      text: {
        ar: 'ما الذي يعنيه لك أن يكون رزقنا حلالًا طيبًا؟',
        en: 'What does it mean to you for our income to be halal and wholesome?',
      },
      followUps: [
        {
          ar: 'كيف نتصرّف إن ظهرت شبهة في عمل أحدنا؟',
          en: 'What would we do if doubts came up about one of our jobs?',
        },
        {
          ar: 'وما مكان الزكاة والصدقة في مالنا؟',
          en: 'And what place would zakat and sadaqah have in our money?',
        },
      ],
    },
    {
      id: 'deen-014',
      subtopic: 'home',
      depth: 'deep',
      text: {
        ar: 'إن رزقنا الله أبناء، فكيف نحبّب إليهم الدين برأيك؟',
        en: 'If Allah blesses us with children, how could we help them love their faith?',
      },
      followUps: [
        {
          ar: 'ما الذي قرّبك من الدين في طفولتك؟',
          en: 'What drew you closer to faith as a child?',
        },
        {
          ar: 'وما الذي يحسن أن نتجنّبه في ذلك؟',
          en: 'And what should we be careful to avoid?',
        },
      ],
    },
    {
      id: 'deen-022',
      subtopic: 'together',
      depth: 'light',
      text: {
        ar: 'كيف نكون جيرانًا طيبين برأيك؟',
        en: 'How could we be good neighbors, in your view?',
      },
      followUps: [
        {
          ar: 'هل من جار ترك في ذاكرتك أثرًا طيبًا؟',
          en: 'Is there a neighbor who left a good mark on you?',
        },
        {
          ar: 'وما اللفتة البسيطة التي نبدأ بها مع جيراننا؟',
          en: 'And what simple gesture could we start with?',
        },
      ],
    },
    {
      id: 'deen-016',
      subtopic: 'together',
      depth: 'medium',
      text: {
        ar: 'أيّ دور يسعدك أن يكون لنا في مجتمعنا: تطوّع، أم تعليم، أم خدمة المسجد؟',
        en: 'What role would you love us to have in our community: volunteering, teaching or serving the mosque?',
      },
      followUps: [
        {
          ar: 'ما الذي يمكن أن يقدّمه كلٌّ منا؟',
          en: 'What could each of us offer?',
        },
        {
          ar: 'وكيف نوازن بين ذلك ووقت بيتنا؟',
          en: 'And how do we balance it with time for our home?',
        },
      ],
    },
    {
      id: 'deen-017',
      subtopic: 'together',
      depth: 'medium',
      text: {
        ar: 'ما الصحبة التي تُعينك على الخير؟',
        en: 'What kind of company helps you toward good?',
      },
      followUps: [
        {
          ar: 'كيف نحرص على صحبة تقرّبنا من الله؟',
          en: 'How can we keep company that brings us closer to Allah?',
        },
      ],
    },
    {
      id: 'deen-018',
      subtopic: 'together',
      depth: 'deep',
      text: {
        ar: 'كيف نُعين بعضنا على الطاعة دون أن يشعر أحدنا بأنه مُراقَب أو محاسَب؟',
        en: 'How can we help each other grow in faith without one of us feeling watched or judged?',
      },
      followUps: [
        {
          ar: 'ما الكلمة أو الطريقة التي تشجّعك حقًّا؟',
          en: 'What words or approach truly encourage you?',
        },
        {
          ar: 'وما الذي يُبعدك بدل أن يقرّبك؟',
          en: 'And what pushes you away instead of drawing you closer?',
        },
      ],
    },
  ],
}
