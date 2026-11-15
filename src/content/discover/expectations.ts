import type { Topic } from '../../types/content'

export const expectations: Topic = {
  id: 'expectations',
  section: 'discover',
  tone: 'peach',
  title: { ar: 'التوقعات', en: 'Expectations' },
  description: {
    ar: 'أحاديث هادئة عن المال والعائلة والبيت والمستقبل، لتبنيا تصوّرًا مشتركًا.',
    en: 'Calm conversations about money, family, home and the future, to build a shared picture together.',
  },
  subtopics: [
    { id: 'money', title: { ar: 'المال', en: 'Money' } },
    { id: 'family', title: { ar: 'الأهل', en: 'Family' } },
    { id: 'home', title: { ar: 'البيت والأدوار', en: 'Home & roles' } },
    { id: 'children', title: { ar: 'الأبناء', en: 'Children' } },
  ],
  questions: [
    {
      id: 'expectations-001',
      subtopic: 'money',
      depth: 'light',
      text: {
        ar: 'ما أول ذكرى لك مع المال؟',
        en: "What's your first memory involving money?",
      },
      followUps: [
        {
          ar: 'ماذا علّمتك تلك التجربة؟',
          en: 'What did it teach you?',
        },
        {
          ar: 'هل كان المال حديثًا مريحًا في بيت طفولتك؟',
          en: 'Was money a comfortable topic in your childhood home?',
        },
      ],
    },
    {
      id: 'expectations-002',
      subtopic: 'money',
      depth: 'medium',
      text: {
        ar: 'أيّهما أقرب إلى طبعك: الادّخار للغد أم الاستمتاع باليوم؟',
        en: 'Which is more your nature: saving for tomorrow or enjoying today?',
      },
      followUps: [
        {
          ar: 'ما الذي يستحق عندك أن يُنفق عليه دون تردّد؟',
          en: "What's worth spending on without hesitation, for you?",
        },
        {
          ar: 'وما الذي يبدو لك إسرافًا؟',
          en: 'And what feels wasteful to you?',
        },
      ],
    },
    {
      id: 'expectations-003',
      subtopic: 'money',
      depth: 'medium',
      text: {
        ar: 'كيف نُدير المال بيننا برأيك: مشتركًا، أم منفصلًا، أم مزيجًا من الاثنين؟',
        en: 'How do you picture us handling money: shared, separate or a mix of both?',
      },
      followUps: [
        {
          ar: 'ما الذي يجعل هذا الترتيب مريحًا لكلٍّ منا؟',
          en: 'What would make that comfortable for each of us?',
        },
        {
          ar: 'كيف نتّخذ القرارات المالية الكبيرة معًا؟',
          en: 'How would we make big money decisions together?',
        },
      ],
    },
    {
      id: 'expectations-004',
      subtopic: 'money',
      depth: 'medium',
      text: {
        ar: 'متى يصبح الشراء أمرًا يستحق التشاور قبله في نظرك؟',
        en: 'At what point does a purchase deserve a conversation first, in your view?',
      },
      followUps: [
        {
          ar: 'هل يختلف ذلك بين الضروريات والكماليات؟',
          en: 'Is it different for needs and nice-to-haves?',
        },
        {
          ar: 'وما المساحة المالية التي يحتاجها كلٌّ منا لنفسه؟',
          en: 'And how much money of our own does each of us need?',
        },
      ],
    },
    {
      id: 'expectations-005',
      subtopic: 'money',
      depth: 'deep',
      text: {
        ar: 'ما الذي يُقلقك في أمور المال، وما الذي يُطمئنك؟',
        en: 'What worries you about money, and what puts you at ease?',
      },
      followUps: [
        {
          ar: 'من أين جاء هذا القلق برأيك؟',
          en: 'Where do you think that worry comes from?',
        },
        {
          ar: 'كيف يمكن أن نخفّف هذا الهمّ عن بعضنا؟',
          en: 'How can we ease it for each other?',
        },
      ],
    },
    {
      id: 'expectations-006',
      subtopic: 'family',
      depth: 'light',
      text: {
        ar: 'ما العادة الطريفة في عائلتك التي قد تُدهشني؟',
        en: 'What funny family habit might surprise me?',
      },
      followUps: [
        {
          ar: 'من أكثر من يحرص عليها؟',
          en: 'Who keeps it going the most?',
        },
        {
          ar: 'وهل يمكن أن تصبح عادتنا أيضًا؟',
          en: 'Could it become ours too?',
        },
      ],
    },
    {
      id: 'expectations-007',
      subtopic: 'family',
      depth: 'medium',
      text: {
        ar: 'ما الإيقاع المريح لك في زيارة الأهل: كل أسبوع، أم كل شهر، أم حسب الظروف؟',
        en: 'What feels like a comfortable rhythm for visiting family: weekly, monthly or as life allows?',
      },
      followUps: [
        {
          ar: 'وماذا عن المناسبات والأعياد؟',
          en: 'And what about holidays and special occasions?',
        },
        {
          ar: 'كيف نوزّع وقتنا بعدل بين كل من يهمّنا؟',
          en: 'How can we share our time fairly with everyone who matters to us?',
        },
      ],
    },
    {
      id: 'expectations-008',
      subtopic: 'family',
      depth: 'medium',
      text: {
        ar: 'ما الذي يساعدني على فهم عائلتك أكثر؟',
        en: 'What would help me understand your family better?',
      },
      followUps: [
        {
          ar: 'ما الذي يكسب قلوب أهلك عادةً؟',
          en: "What usually wins your family's heart?",
        },
        {
          ar: 'وهل من موضوع يحسن تجنّبه في الجلسات العائلية؟',
          en: 'Is there a topic best avoided at family gatherings?',
        },
      ],
    },
    {
      id: 'expectations-009',
      subtopic: 'family',
      depth: 'medium',
      text: {
        ar: 'كيف نجمع بين القرب من الأهل والحفاظ على خصوصيتنا؟',
        en: 'How can we stay close to family while keeping our privacy as a couple?',
      },
      followUps: [
        {
          ar: 'ما الأمور التي يحسن أن تبقى بيننا فقط؟',
          en: 'What should stay just between us?',
        },
        {
          ar: 'وكيف نقول ذلك بلطف إن لزم الأمر؟',
          en: 'And how could we say so kindly, if needed?',
        },
      ],
    },
    {
      id: 'expectations-010',
      subtopic: 'family',
      depth: 'deep',
      text: {
        ar: 'إن احتاج أحد أفراد العائلة إلى رعاية أو مساندة يومًا، فكيف نتعامل مع ذلك معًا؟',
        en: 'If someone in the family ever needs care or support, how might we handle it together?',
      },
      followUps: [
        {
          ar: 'هل يشمل ذلك المساعدة المادية أيضًا؟',
          en: 'Would that include financial help, too?',
        },
        {
          ar: 'ما الذي يُطمئن كلًّا منا في هذا الأمر؟',
          en: 'What would reassure each of us about it?',
        },
      ],
    },
    {
      id: 'expectations-011',
      subtopic: 'home',
      depth: 'light',
      text: {
        ar: 'ما المهمة المنزلية الأخفّ عليك، وما الأثقل؟',
        en: 'Which household chore feels lightest to you, and which feels heaviest?',
      },
      followUps: [
        {
          ar: 'هل من مهمة قد تصبح ممتعة لو قمنا بها معًا؟',
          en: 'Is there one that could be fun if we did it together?',
        },
      ],
    },
    {
      id: 'expectations-012',
      subtopic: 'home',
      depth: 'medium',
      text: {
        ar: 'كيف كانت الأدوار موزّعة في بيت طفولتك؟',
        en: 'How were roles divided in your childhood home?',
      },
      followUps: [
        {
          ar: 'ما الذي يناسبنا من ذلك، وما الذي لا يناسبنا؟',
          en: "What from that fits us, and what doesn't?",
        },
      ],
    },
    {
      id: 'expectations-013',
      subtopic: 'home',
      depth: 'medium',
      text: {
        ar: 'كيف نتقاسم المسؤوليات حين يزدحم وقت أحدنا؟',
        en: 'How might we share responsibilities when one of us gets especially busy?',
      },
      followUps: [
        {
          ar: 'كيف يطلب أحدنا المساعدة دون حرج؟',
          en: 'How can either of us ask for help without feeling awkward?',
        },
        {
          ar: 'ما الذي يجعل التقسيم عادلًا في نظر كلٍّ منا؟',
          en: 'What makes a split feel fair to each of us?',
        },
      ],
    },
    {
      id: 'expectations-014',
      subtopic: 'home',
      depth: 'medium',
      text: {
        ar: 'كيف نتّخذ القرارات اليومية في البيت: بالتشاور دائمًا، أم يتولّى كلٌّ منا مجالًا؟',
        en: 'How should we make everyday home decisions: always together, or with each of us owning certain areas?',
      },
      followUps: [
        {
          ar: 'ما المجال الذي يُسعدك أن يكون من نصيبك؟',
          en: 'Which area would you happily take on?',
        },
        {
          ar: 'وما القرارات التي لا بد أن تكون مشتركة؟',
          en: 'And which decisions should always be shared?',
        },
      ],
    },
    {
      id: 'expectations-015',
      subtopic: 'home',
      depth: 'deep',
      text: {
        ar: 'ما الذي يُقلقك قليلًا في فكرة تقاسم الحياة اليومية، وما الذي يُطمئنك؟',
        en: 'What worries you a little about sharing daily life, and what reassures you?',
      },
      followUps: [
        {
          ar: 'ما العادة التي يحسن أن أعرفها عنك مسبقًا؟',
          en: 'Which of your habits should I know about in advance?',
        },
      ],
    },
    {
      id: 'expectations-016',
      subtopic: 'children',
      depth: 'light',
      text: {
        ar: 'ما التجربة الجميلة التي يستحق أن يعيشها كل طفل؟',
        en: 'What lovely experience does every child deserve to have?',
      },
      followUps: [
        {
          ar: 'كيف يمكن أن نصنع لحظة كهذه لطفل في حياتنا؟',
          en: 'How could we create a moment like that for a child in our lives?',
        },
      ],
    },
    {
      id: 'expectations-017',
      subtopic: 'children',
      depth: 'deep',
      text: {
        ar: 'ما شعورك تجاه فكرة الأبناء يومًا ما؟',
        en: 'How do you feel about the idea of children someday?',
      },
      followUps: [
        {
          ar: 'هل تغيّر هذا الشعور مع الوقت؟',
          en: 'Has that feeling changed over time?',
        },
        {
          ar: 'ما الذي يحمّسك في الفكرة، وما الذي يُقلقك؟',
          en: 'What excites you about it, and what worries you?',
        },
      ],
    },
    {
      id: 'expectations-018',
      subtopic: 'children',
      depth: 'medium',
      text: {
        ar: 'إن كان لنا أبناء، الآن أو يومًا ما، فما القيمة الأولى التي يسعدك أن نغرسها فيهم؟',
        en: "If we have children, now or someday, what's the first value you'd love us to pass on to them?",
      },
      followUps: [
        {
          ar: 'كيف نغرسها بالقدوة لا بالكلام؟',
          en: 'How could we teach it by example rather than words?',
        },
      ],
    },
    {
      id: 'expectations-019',
      subtopic: 'children',
      depth: 'medium',
      text: {
        ar: 'إن كان لنا أبناء، الآن أو يومًا ما، فكيف نتقاسم رعايتهم وتربيتهم برأيك؟',
        en: 'If we have children, now or someday, how do you picture us sharing their care and upbringing?',
      },
      followUps: [
        { ar: 'كيف نوازن بين العمل والأسرة؟', en: 'How would we balance work and family?' },
        { ar: 'وما دور العائلة الكبيرة في ذلك؟', en: 'And what role would extended family play?' },
        {
          ar: 'وكيف نتعامل مع اختلاف رأينا في تربيتهم؟',
          en: 'And how would we handle disagreeing about how to raise them?',
        },
      ],
    },
    {
      id: 'expectations-020',
      subtopic: 'children',
      depth: 'medium',
      text: {
        ar: 'ما الأجواء العائلية التي يسعدك أن تملأ بيتنا، مهما كان عدد من فيه؟',
        en: 'What kind of family atmosphere would you love in our home, however many of us there are?',
      },
      followUps: [
        {
          ar: 'ما الذي يستحق أن ينتقل إليه من بيت طفولتك؟',
          en: 'What from your childhood home deserves to carry over into it?',
        },
        {
          ar: 'وما العادة الصغيرة التي تصنع هذه الأجواء كل يوم؟',
          en: 'And what small daily habit would create that feeling?',
        },
      ],
    },
  ],
}
