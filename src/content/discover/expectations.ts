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
    { id: 'family', title: { ar: 'العائلتان', en: 'Our families' } },
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
        ar: 'كيف تتخيّلان إدارة المال بينكما: مشتركًا، أم منفصلًا، أم مزيجًا من الاثنين؟',
        en: 'How do you two picture handling money: shared, separate or a mix of both?',
      },
      followUps: [
        {
          ar: 'ما الذي يجعل هذا الترتيب مريحًا لكلٍّ منكما؟',
          en: 'What would make that comfortable for each of you?',
        },
        {
          ar: 'كيف تُتّخذ القرارات المالية الكبيرة بينكما؟',
          en: 'How would you make big money decisions together?',
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
          ar: 'وما المساحة المالية التي يحتاجها كلٌّ منكما لنفسه؟',
          en: 'And how much money of their own does each of you need?',
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
        ar: 'ما العادة الطريفة في عائلتك التي قد تُدهش نصفك الآخر؟',
        en: 'What funny family habit might surprise your other half?',
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
        ar: 'ما الإيقاع المريح لك في زيارة العائلتين: كل أسبوع، أم كل شهر، أم حسب الظروف؟',
        en: 'What feels like a comfortable rhythm for visiting both families: weekly, monthly or as life allows?',
      },
      followUps: [
        {
          ar: 'وماذا عن المناسبات والأعياد؟',
          en: 'And what about holidays and special occasions?',
        },
        {
          ar: 'كيف نوزّع وقتنا بين العائلتين بعدل؟',
          en: 'How can we share our time fairly between both families?',
        },
      ],
    },
    {
      id: 'expectations-008',
      subtopic: 'family',
      depth: 'medium',
      text: {
        ar: 'ما الذي يُفيد نصفك الآخر أن يعرفه ليفهم عائلتك أكثر؟',
        en: 'What would help your other half understand your family better?',
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
        ar: 'كيف يمكن الجمع بين القرب من العائلتين والحفاظ على خصوصيتكما؟',
        en: 'How can you stay close to both families while keeping your privacy as a couple?',
      },
      followUps: [
        {
          ar: 'ما الأمور التي يحسن أن تبقى بينكما فقط؟',
          en: 'What should stay just between you two?',
        },
        {
          ar: 'وكيف يُقال ذلك بلطف إن لزم الأمر؟',
          en: 'And how could you say so kindly, if needed?',
        },
      ],
    },
    {
      id: 'expectations-010',
      subtopic: 'family',
      depth: 'deep',
      text: {
        ar: 'إن احتاج أحد أفراد العائلة إلى رعاية أو مساندة يومًا، كيف يمكن أن تتعاملا مع ذلك معًا؟',
        en: 'If someone in the family ever needs care or support, how might you handle it together?',
      },
      followUps: [
        {
          ar: 'هل يشمل ذلك المساعدة المادية أيضًا؟',
          en: 'Would that include financial help, too?',
        },
        {
          ar: 'ما الذي يُطمئن كلًّا منكما في هذا الأمر؟',
          en: 'What would reassure each of you about it?',
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
        ar: 'كيف يمكن أن تتقاسما المسؤوليات حين يزدحم وقت أحدكما؟',
        en: 'How might you share responsibilities when one of you gets especially busy?',
      },
      followUps: [
        {
          ar: 'كيف يطلب أحدكما المساعدة دون حرج؟',
          en: 'How can either of you ask for help without feeling awkward?',
        },
        {
          ar: 'ما الذي يجعل التقسيم عادلًا في نظر كلٍّ منكما؟',
          en: 'What makes a split feel fair to each of you?',
        },
      ],
    },
    {
      id: 'expectations-014',
      subtopic: 'home',
      depth: 'medium',
      text: {
        ar: 'كيف تُتّخذ القرارات اليومية في البيت: بالتشاور دائمًا، أم يتولّى كلٌّ منكما مجالًا؟',
        en: 'How should everyday home decisions be made: always together, or with each of you owning certain areas?',
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
          ar: 'ما العادة التي يحسن أن يعرفها نصفك الآخر عنك مسبقًا؟',
          en: 'Which of your habits should your other half know about in advance?',
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
        ar: 'إن كان لكما أبناء يومًا، فما القيمة الأولى التي تتمنّيان غرسها فيهم؟',
        en: "If you have children someday, what's the first value you'd hope to pass on?",
      },
      followUps: [
        {
          ar: 'كيف تُغرس هذه القيمة بالقدوة لا بالكلام؟',
          en: 'How could you teach it by example rather than words?',
        },
      ],
    },
    {
      id: 'expectations-019',
      subtopic: 'children',
      depth: 'medium',
      text: {
        ar: 'إن كان لكما أبناء يومًا، كيف تتخيّلان تقاسم رعايتهم وتربيتهم؟',
        en: 'If you have children someday, how do you picture sharing their care and upbringing?',
      },
      followUps: [
        {
          ar: 'كيف يكون التوازن بين العمل والأسرة حينها؟',
          en: 'How would you balance work and family then?',
        },
        {
          ar: 'وما دور العائلة الكبيرة في ذلك؟',
          en: 'And what role would extended family play?',
        },
      ],
    },
    {
      id: 'expectations-020',
      subtopic: 'children',
      depth: 'medium',
      text: {
        ar: 'إن كان لكما أبناء يومًا، كيف يمكن أن تتعاملا مع اختلاف رأيكما في تربيتهم؟',
        en: 'If you have children someday, how might you handle disagreeing about how to raise them?',
      },
      followUps: [
        {
          ar: 'ما الذي يستحق أن يُتّفق عليه مسبقًا؟',
          en: "What's worth agreeing on in advance?",
        },
        {
          ar: 'كيف يبقى الخلاف بعيدًا عن مسامعهم؟',
          en: 'How could you keep disagreements out of their earshot?',
        },
      ],
    },
  ],
}
