import type { Topic } from '../../types/content'

export const dreams: Topic = {
  id: 'dreams',
  section: 'talk',
  tone: 'lilac',
  title: { ar: 'أحلام ومستقبل', en: 'Dreams & future' },
  description: {
    ar: 'أحلام كبيرة وصغيرة، وغدٌ ترسمانه معًا.',
    en: 'Big dreams, small ones, and a tomorrow you sketch together.',
  },
  subtopics: [
    { id: 'personal', title: { ar: 'أحلامي', en: 'My dreams' } },
    { id: 'together', title: { ar: 'غدنا معًا', en: 'Our tomorrow' } },
    { id: 'adventures', title: { ar: 'مغامرات', en: 'Adventures' } },
  ],
  questions: [
    /* ---------- My dreams ---------- */
    {
      id: 'dreams-001',
      subtopic: 'personal',
      depth: 'light',
      text: {
        ar: 'لو أمكن تجربة مهنة أخرى ليوم واحد فقط، فأيّ مهنة تكون؟',
        en: 'If you could try a different job for just one day, which would it be?',
      },
      followUps: [
        { ar: 'ما أول ما يحدث في ذلك اليوم؟', en: 'What happens first that day?' },
        {
          ar: 'وما الذي قد تكشفه عنك هذه التجربة؟',
          en: 'And what might the experience reveal about you?',
        },
      ],
    },
    {
      id: 'dreams-002',
      subtopic: 'personal',
      depth: 'medium',
      text: {
        ar: 'ما الشيء الذي يسعدك أن تصنعه يداك يومًا؟',
        en: 'What would you love to make with your own hands someday?',
      },
      followUps: [
        { ar: 'ما الذي يجذبك إليه؟', en: 'What draws you to it?' },
        {
          ar: 'وهل يحتاج إلى يد ثانية تساعد؟',
          en: 'And does it need a second pair of hands?',
        },
      ],
    },
    {
      id: 'dreams-003',
      subtopic: 'personal',
      depth: 'deep',
      text: {
        ar: 'لو وصلتك رسالة من نفسك بعد عشر سنوات، فما الذي يتمنّى قلبك أن تقوله؟',
        en: 'If a letter arrived from yourself ten years from now, what would your heart hope it says?',
      },
      followUps: [
        {
          ar: 'وما النصيحة التي قد تحملها لك اليوم؟',
          en: 'What advice might it hold for you today?',
        },
        { ar: 'ما الذي يمكن البدء به من اليوم؟', en: 'What could start today?' },
      ],
    },
    {
      id: 'dreams-004',
      subtopic: 'personal',
      depth: 'medium',
      text: {
        ar: 'ما الحلم الصغير الذي تحقّق بعد أن كان يبدو بعيدًا؟',
        en: 'What small dream has come true that once seemed far away?',
      },
      followUps: [
        {
          ar: 'كيف كانت تلك اللحظة؟',
          en: 'What was that moment like?',
        },
      ],
    },
    {
      id: 'dreams-005',
      subtopic: 'personal',
      depth: 'light',
      text: {
        ar: 'ما الحلم البسيط الذي ينتظر يومًا فارغًا فقط ليتحقّق؟',
        en: 'What simple dream is just waiting for a free day to come true?',
      },
      followUps: [
        { ar: 'متى يمكن أن يكون ذلك اليوم؟', en: 'When could that day be?' },
        { ar: 'هل يحتاج إلى رفيق؟', en: 'Does it need a companion?' },
      ],
    },
    {
      id: 'dreams-006',
      subtopic: 'personal',
      depth: 'deep',
      text: {
        ar: 'ما الخوف الذي لو اختفى لتغيّرت أحلامك؟',
        en: 'What fear, if it disappeared, would change your dreams?',
      },
      followUps: [
        { ar: 'ما أول حلم يتحرّر حينها؟', en: 'Which dream would be set free first?' },
        {
          ar: 'كيف يمكنني أن أخفّف منه؟',
          en: 'How could I make it lighter?',
        },
      ],
    },
    {
      id: 'dreams-007',
      subtopic: 'personal',
      depth: 'medium',
      text: {
        ar: 'ما الصفة التي يسعدك أن تكبر فيك مع السنين؟',
        en: 'What quality would you love to see grow in you over the years?',
      },
      followUps: [
        { ar: 'من يجسّد هذه الصفة في نظرك؟', en: 'Who embodies it, in your eyes?' },
        { ar: 'أين يختبرها يومك العادي؟', en: 'Where does everyday life put it to the test?' },
      ],
    },

    /* ---------- Our tomorrow ---------- */
    {
      id: 'dreams-008',
      subtopic: 'together',
      depth: 'light',
      text: {
        ar: 'كيف يبدو صباح مثالي لكما بعد سنوات من الآن؟',
        en: 'What does a perfect morning look like for you two, years from now?',
      },
      followUps: [
        { ar: 'ما الرائحة التي تملأ المكان؟', en: 'What scent fills the air?' },
        {
          ar: 'أيّ جزء منه يمكن أن يتحقّق هذا الأسبوع؟',
          en: 'Which part of it could happen this week?',
        },
      ],
    },
    {
      id: 'dreams-009',
      subtopic: 'together',
      depth: 'medium',
      text: {
        ar: 'ما التقليد الذي يسعدك أن يصبح علامة خاصة بكما؟',
        en: 'What tradition would you love to make your own as a couple?',
      },
      followUps: [
        { ar: 'كل أسبوع أم كل سنة؟', en: 'Weekly or yearly?' },
        { ar: 'من أين جاءت الفكرة؟', en: 'Where did the idea come from?' },
      ],
    },
    {
      id: 'dreams-010',
      subtopic: 'together',
      depth: 'medium',
      text: {
        ar: 'ما الركن الذي لا يكتمل بيت أحلامكما بدونه؟',
        en: 'What corner would your dream home be incomplete without?',
      },
      followUps: [
        { ar: 'ولماذا هذا الركن تحديدًا؟', en: 'Why that one in particular?' },
        { ar: 'هل يتّفق كلاكما عليه؟', en: 'Do you both agree on it?' },
      ],
    },
    {
      id: 'dreams-011',
      subtopic: 'together',
      depth: 'deep',
      text: {
        ar: 'ما الذي يهمّك أن يبقى ثابتًا بينكما مهما تغيّرت الظروف؟',
        en: 'What do you most want to stay constant between you, whatever changes?',
      },
      followUps: [
        { ar: 'ما الذي يحميه في رأيك؟', en: 'What do you think protects it?' },
        {
          ar: 'هل يحضرك موقف ظهر فيه ذلك بوضوح؟',
          en: 'Does a moment come to mind when it showed clearly?',
        },
      ],
    },
    {
      id: 'dreams-012',
      subtopic: 'together',
      depth: 'medium',
      text: {
        ar: 'ما الهدف الذي يمكن أن تعملا عليه معًا هذا العام؟',
        en: "What's one goal you two could work toward together this year?",
      },
      followUps: [
        { ar: 'كيف تتابعان تقدّمكما؟', en: 'How would you keep track of your progress?' },
        { ar: 'وكيف تحتفلان حين تصلان؟', en: 'And how will you celebrate when you get there?' },
      ],
    },
    {
      id: 'dreams-013',
      subtopic: 'together',
      depth: 'deep',
      text: {
        ar: 'كيف تبدو صورتكما بعد ثلاثين عامًا في خيالك؟',
        en: 'How do you picture the two of you thirty years from now?',
      },
      followUps: [
        {
          ar: 'ما العادة التي ما زلتما تحافظان عليها في تلك الصورة؟',
          en: 'What habit are you still keeping in that picture?',
        },
        { ar: 'وما الذي يُضحككما حينها؟', en: "And what's making you laugh then?" },
      ],
    },
    {
      id: 'dreams-014',
      subtopic: 'together',
      depth: 'medium',
      text: {
        ar: 'لو صنعتما معًا شيئًا يبقى بعدكما، فماذا يكون؟',
        en: 'If you two made something together that would outlast you, what would it be?',
      },
      followUps: [
        { ar: 'ما أول خطوة صغيرة نحوه؟', en: "What's a small first step toward it?" },
        { ar: 'ما الذي يضيفه كلٌّ منكما إليه؟', en: 'What would each of you bring to it?' },
      ],
    },

    /* ---------- Adventures ---------- */
    {
      id: 'dreams-015',
      subtopic: 'adventures',
      depth: 'light',
      text: {
        ar: 'ما المشهد الذي يستحق أن تستيقظا قبل الفجر من أجله في رحلة معًا؟',
        en: 'What view would be worth waking up before dawn for, on a trip together?',
      },
      followUps: [
        { ar: 'هل رآه أحدكما من قبل؟', en: 'Has either of you seen it before?' },
        { ar: 'ومن منكما سيوقظ الآخر؟', en: 'And who would wake the other up?' },
      ],
    },
    {
      id: 'dreams-016',
      subtopic: 'adventures',
      depth: 'light',
      text: {
        ar: 'أيّهما أقرب إليك: رحلة بلا خطة أم رحلة محسوبة بالساعة؟',
        en: 'Which is more you: a trip with no plan or one planned to the hour?',
      },
      followUps: [
        {
          ar: 'ما أطرف ما حدث لك في رحلة؟',
          en: "What's the funniest thing that happened to you on a trip?",
        },
        {
          ar: 'كيف يمكن الجمع بين الطريقتين في رحلة لكما؟',
          en: 'How could you blend both styles on a trip together?',
        },
      ],
    },
    {
      id: 'dreams-017',
      subtopic: 'adventures',
      depth: 'light',
      text: {
        ar: 'ما التجربة الجريئة التي يسعدك أن تخوضاها معًا يومًا؟',
        en: 'What bold experience would you love for you two to try one day?',
      },
      followUps: [
        {
          ar: 'ما الذي يجعلها مخيفة وممتعة في آنٍ واحد؟',
          en: 'What makes it scary and fun at the same time?',
        },
        { ar: 'من منكما سيتردّد أولًا؟', en: 'Which of you would hesitate first?' },
      ],
    },
    {
      id: 'dreams-018',
      subtopic: 'adventures',
      depth: 'medium',
      text: {
        ar: 'لو قضيتما شهرًا في مكان لا يعرفكما فيه أحد، فأين يكون؟',
        en: 'If you two spent a month somewhere nobody knew you, where would it be?',
      },
      followUps: [
        { ar: 'كيف تقضيان أيامكما هناك؟', en: 'How would you spend your days there?' },
        {
          ar: 'ما الذي تتركانه خلفكما طوال ذلك الشهر؟',
          en: 'What would you leave behind for that month?',
        },
        { ar: 'وما العادة التي تعودان بها؟', en: 'And what habit would you bring back?' },
      ],
    },
    {
      id: 'dreams-019',
      subtopic: 'adventures',
      depth: 'light',
      text: {
        ar: 'ما الطبق الذي يستحق أن تسافرا من أجله؟',
        en: 'What dish is worth traveling for?',
      },
      followUps: [
        { ar: 'هل تذوّقه أحدكما من قبل؟', en: 'Has either of you tasted it before?' },
        { ar: 'ومن منكما سيحاول طبخه بعد العودة؟', en: 'And who would try to cook it back home?' },
      ],
    },
    {
      id: 'dreams-020',
      subtopic: 'adventures',
      depth: 'medium',
      text: {
        ar: 'ما المغامرة القريبة التي لا تحتاج إلى سفر ولا إلى ميزانية؟',
        en: "What's a nearby adventure that needs no travel and no budget?",
      },
      followUps: [
        {
          ar: 'ما الذي يمنع أن تعيشاها هذا الشهر؟',
          en: "What's stopping it from happening this month?",
        },
        { ar: 'من منكما يتولّى التخطيط؟', en: 'Which of you takes charge of the planning?' },
      ],
    },
  ],
}
