import type { Topic } from '../../types/content'

export const love: Topic = {
  id: 'love',
  section: 'talk',
  tone: 'rose',
  title: { ar: 'حبّ وعلاقة', en: 'Love & relationship' },
  description: {
    ar: 'عن التقدير ولغة الحبّ، وعن كل ما يجعلكما أقرب.',
    en: 'Appreciation, love languages and everything that brings you closer.',
  },
  subtopics: [
    { id: 'appreciation', title: { ar: 'التقدير', en: 'Appreciation' } },
    { id: 'love-language', title: { ar: 'لغة الحب', en: 'Love language' } },
    { id: 'us', title: { ar: 'نحن', en: 'Us' } },
  ],
  questions: [
    /* ---------- Appreciation ---------- */
    {
      id: 'love-001',
      subtopic: 'appreciation',
      depth: 'medium',
      text: {
        ar: 'ما أكثر ما يُشعرك بالتقدير؟',
        en: 'What makes you feel most appreciated?',
      },
      followUps: [
        { ar: 'هل يحضرك موقف معيّن؟', en: 'Does a particular moment come to mind?' },
        {
          ar: 'هل يختلف وقعه حين يأتي مني؟',
          en: 'Does it feel different when it comes from me?',
        },
      ],
    },
    {
      id: 'love-002',
      subtopic: 'appreciation',
      depth: 'medium',
      text: {
        ar: 'ما الذي أفعله دون أن أنتبه إلى أنه يُسعدك؟',
        en: 'What do I do, without even realizing it, that makes you happy?',
      },
      followUps: [
        { ar: 'متى حدث ذلك آخر مرة؟', en: 'When did it last happen?' },
        { ar: 'ما الذي يجعله مميزًا بالنسبة إليك؟', en: 'What makes it special to you?' },
      ],
    },
    {
      id: 'love-003',
      subtopic: 'appreciation',
      depth: 'medium',
      text: {
        ar: 'ما الشيء الذي أُتقنه برأيك أكثر من أي أحد آخر؟',
        en: 'What do you think I do better than anyone else?',
      },
      followUps: [
        { ar: 'متى ظهر ذلك آخر مرة؟', en: 'When did it last show?' },
        {
          ar: 'هل وصلني رأيك هذا من قبل؟',
          en: 'Have you ever told me that?',
        },
      ],
    },
    {
      id: 'love-004',
      subtopic: 'appreciation',
      depth: 'deep',
      text: {
        ar: 'ما اللحظة التي كنتُ فيها سندك الحقيقي؟',
        en: 'When was I truly your rock?',
      },
      followUps: [
        {
          ar: 'هل عرفتُ يومها كم كان ذلك مهمًّا لك؟',
          en: 'Did I know back then how much it mattered to you?',
        },
        { ar: 'ما الذي تعنيه لك تلك اللحظة اليوم؟', en: 'What does that moment mean to you now?' },
      ],
    },
    {
      id: 'love-005',
      subtopic: 'appreciation',
      depth: 'medium',
      text: {
        ar: 'ما العادة أو الكلمة التي انتقلت إليك مني دون قصد؟',
        en: 'What habit or phrase have you picked up from me without meaning to?',
      },
      followUps: [
        { ar: 'متى انتبه أحدنا إلى ذلك أول مرة؟', en: 'When did one of us first notice?' },
        { ar: 'وما الذي انتقل منك إليّ؟', en: 'And what have I picked up from you?' },
      ],
    },
    {
      id: 'love-006',
      subtopic: 'appreciation',
      depth: 'deep',
      text: {
        ar: 'ما الذي تغيّر في نظرتك إليّ مع الوقت، ويُسعدك؟',
        en: 'What has changed, in a way you love, in how you see me over time?',
      },
      followUps: [
        { ar: 'متى بدأ هذا التغيّر؟', en: 'When did that shift begin?' },
        { ar: 'هل وصلني ذلك منك من قبل؟', en: 'Have you ever told me?' },
      ],
    },
    {
      id: 'love-007',
      subtopic: 'appreciation',
      depth: 'medium',
      text: {
        ar: 'ما الجهد الخفيّ منك الذي يستحق مني شكرًا أكبر؟',
        en: 'What quiet effort of yours deserves more thanks from me?',
      },
      followUps: [
        {
          ar: 'كيف يمكنني أن أشكرك عليه بطريقة تشبهك؟',
          en: 'How could I thank you for it in a way that feels like you?',
        },
        { ar: 'هل لاحظه أحد من قبل؟', en: 'Has anyone noticed it before?' },
      ],
    },

    /* ---------- Love language ---------- */
    {
      id: 'love-008',
      subtopic: 'love-language',
      depth: 'medium',
      text: {
        ar: 'ما الذي يجعل الوقت معًا وقتًا حقيقيًا، لا مجرد وجود في المكان نفسه؟',
        en: 'What turns time together into real time together, not just being in the same room?',
      },
      followUps: [
        { ar: 'متى حدث ذلك آخر مرة؟', en: 'When did that last happen?' },
        {
          ar: 'وما الذي يسرق هذا الوقت منا عادةً؟',
          en: 'And what usually steals that time from us?',
        },
      ],
    },
    {
      id: 'love-009',
      subtopic: 'love-language',
      depth: 'medium',
      text: {
        ar: 'ما المفاجأة البسيطة التي تُسعدك في يوم عادي: ورقة صغيرة، أم أغنية، أم طبق مفضّل؟',
        en: 'What simple surprise delights you on an ordinary day: a little note, a song or a favorite dish?',
      },
      followUps: [
        { ar: 'متى وصلتك آخر مفاجأة كهذه؟', en: 'When did the last one like that reach you?' },
        {
          ar: 'هل تفقد المفاجأة شيئًا من جمالها حين تكون متوقعة؟',
          en: 'Does a surprise lose some of its charm when it is expected?',
        },
      ],
    },
    {
      id: 'love-010',
      subtopic: 'love-language',
      depth: 'medium',
      text: {
        ar: 'ما الهدية الصغيرة التي تعني لك أكثر من أي هدية ثمينة؟',
        en: 'What small gift would mean more to you than any expensive one?',
      },
      followUps: [
        { ar: 'هل وصلتك هدية كهذه من قبل؟', en: 'Have you ever received one like that?' },
        {
          ar: 'ما الذي يجعل الهدية تلمس القلب في رأيك؟',
          en: 'What makes a gift touch the heart, in your view?',
        },
      ],
    },
    {
      id: 'love-011',
      subtopic: 'love-language',
      depth: 'medium',
      text: {
        ar: 'ما الذي يُشعرك بالقرب حين تفصل بيننا المسافة؟',
        en: 'What makes you feel close when distance keeps us apart?',
      },
      followUps: [
        {
          ar: 'رسالة صوتية، أم مكالمة طويلة، أم شيء آخر؟',
          en: 'A voice note, a long call or something else?',
        },
        {
          ar: 'ما أجمل مفاجأة وصلتك عن بُعد؟',
          en: "What's the sweetest surprise that reached you from afar?",
        },
      ],
    },
    {
      id: 'love-012',
      subtopic: 'love-language',
      depth: 'deep',
      text: {
        ar: 'من أين جاءت طريقتك في التعبير عن الحبّ؟',
        en: 'Where does your way of showing love come from?',
      },
      followUps: [
        { ar: 'ما الذي يستحق أن يبقى منها؟', en: 'What part of it is worth keeping?' },
        { ar: 'وما الذي يسعدك أن يتغيّر؟', en: 'And what would you like to change?' },
      ],
    },
    {
      id: 'love-013',
      subtopic: 'love-language',
      depth: 'medium',
      text: {
        ar: 'كيف يبدو الاحتفال المثالي بيوم ميلادك؟',
        en: 'What does your ideal birthday celebration look like?',
      },
      followUps: [
        {
          ar: 'مفاجأة، أم خطة معروفة مسبقًا؟',
          en: 'A surprise, or a plan you know about in advance?',
        },
        {
          ar: 'وما أجمل يوم ميلاد ما زال في ذاكرتك؟',
          en: 'And which birthday is still your favorite memory?',
        },
      ],
    },
    {
      id: 'love-014',
      subtopic: 'love-language',
      depth: 'medium',
      text: {
        ar: 'ما الذي يجعل الاعتذار يصل إلى قلبك حقًّا؟',
        en: 'What makes an apology truly reach your heart?',
      },
      followUps: [
        { ar: 'هل تكفي الكلمات وحدها؟', en: 'Are words alone enough?' },
        {
          ar: 'وما الذي يجعل الاعتذار يبدو ناقصًا؟',
          en: 'And what makes an apology feel incomplete?',
        },
      ],
    },

    /* ---------- Us ---------- */
    {
      id: 'love-015',
      subtopic: 'us',
      depth: 'medium',
      text: {
        ar: 'ما الذي يجعلنا فريقًا جميلًا؟',
        en: 'What makes us a great team?',
      },
      followUps: [
        { ar: 'في أي موقف ظهر ذلك بوضوح؟', en: 'When did that show most clearly?' },
        { ar: 'وفي أي شيء ما زال الفريق يتدرّب؟', en: 'And what is the team still practicing?' },
      ],
    },
    {
      id: 'love-016',
      subtopic: 'us',
      depth: 'deep',
      text: {
        ar: 'ما الذي علّمك إياه الحبّ منذ بدأت قصتنا؟',
        en: 'What has love taught you since our story began?',
      },
      followUps: [
        { ar: 'هل فاجأك ذلك؟', en: 'Did it surprise you?' },
        { ar: 'متى اتضح لك هذا الدرس أول مرة؟', en: 'When did that lesson first become clear?' },
      ],
    },
    {
      id: 'love-017',
      subtopic: 'us',
      depth: 'medium',
      text: {
        ar: 'ما الكلمة الواحدة التي تصف علاقتنا الآن، ولماذا؟',
        en: 'What one word describes our relationship right now, and why?',
      },
      followUps: [
        {
          ar: 'وما الكلمة التي يسعدك أن تصفها بعد عام؟',
          en: 'And what word would you love to describe it a year from now?',
        },
      ],
    },
    {
      id: 'love-018',
      subtopic: 'us',
      depth: 'deep',
      text: {
        ar: 'متى يكون الحبّ بيننا في أجمل حالاته؟',
        en: 'When is the love between us at its most beautiful?',
      },
      followUps: [
        { ar: 'ما الذي يُعيدنا إلى تلك الحالة؟', en: 'What brings us back there?' },
        { ar: 'هل حدث ذلك مؤخرًا؟', en: 'Has it happened lately?' },
      ],
    },
    {
      id: 'love-019',
      subtopic: 'us',
      depth: 'medium',
      text: {
        ar: 'ما الذي يُشعرك بأنني أفهمك كما لا يفهمك أحد؟',
        en: 'What makes you feel I understand you like no one else does?',
      },
      followUps: [
        { ar: 'متى أدهشك ذلك أول مرة؟', en: 'When did that first amaze you?' },
        {
          ar: 'كيف يبدو هذا الفهم في يوم عادي؟',
          en: 'What does that understanding look like on an ordinary day?',
        },
      ],
    },
    {
      id: 'love-020',
      subtopic: 'us',
      depth: 'deep',
      text: {
        ar: 'ما الوعد الصغير الذي يسعدك أن نتبادله اليوم؟',
        en: 'What small promise would you love for us to exchange today?',
      },
      followUps: [
        {
          ar: 'كيف يمكن أن يبقى حاضرًا في الأيام العادية؟',
          en: 'How could it stay alive on ordinary days?',
        },
        { ar: 'متى يحين موعد تجديده؟', en: 'When should we renew it?' },
      ],
    },
  ],
}
