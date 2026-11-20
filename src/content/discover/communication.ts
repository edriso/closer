import type { Topic } from '../../types/content'

export const communication: Topic = {
  id: 'communication',
  section: 'discover',
  tone: 'sky',
  title: { ar: 'التواصل', en: 'Communication' },
  description: {
    ar: 'كيف يحبّ كلٌّ منكما أن يُسمَع ويُواسى، وكيف تعودان أقرب بعد الخلاف.',
    en: 'How each of you likes to be heard and comforted, and how you find your way back after a disagreement.',
  },
  subtopics: [
    { id: 'expressing', title: { ar: 'التعبير', en: 'Expressing' } },
    { id: 'disagreements', title: { ar: 'الخلاف', en: 'Disagreements' } },
    { id: 'support', title: { ar: 'الدعم', en: 'Support' } },
  ],
  questions: [
    {
      id: 'communication-001',
      subtopic: 'expressing',
      depth: 'light',
      text: {
        ar: 'أيّهما أسهل عليك: الكتابة عن مشاعرك أم الحديث عنها؟',
        en: 'Which is easier for you: writing about your feelings or talking about them?',
      },
      followUps: [
        {
          ar: 'وهل يختلف ذلك بين الفرح والحزن؟',
          en: 'Is it different for happy and sad feelings?',
        },
      ],
    },
    {
      id: 'communication-002',
      subtopic: 'expressing',
      depth: 'medium',
      text: {
        ar: 'حين يكون في قلبك شيء ثقيل، ما الذي يُسهّل عليك البوح به؟',
        en: 'When something weighs on your heart, what makes it easier to open up?',
      },
      followUps: [
        {
          ar: 'هل يساعدك المكان أو التوقيت؟',
          en: 'Does the place or timing help?',
        },
        {
          ar: 'وما الذي يجعل البوح أصعب؟',
          en: 'And what makes it harder?',
        },
      ],
    },
    {
      id: 'communication-003',
      subtopic: 'expressing',
      depth: 'medium',
      text: {
        ar: 'ما الإشارات التي تكشف أن شيئًا ما يُزعجك، قبل أي كلام؟',
        en: "What signs show something's bothering you, before any words?",
      },
      followUps: [
        {
          ar: 'وما أفضل طريقة لسؤالك عنها؟',
          en: "What's the best way to ask you about it?",
        },
      ],
    },
    {
      id: 'communication-004',
      subtopic: 'expressing',
      depth: 'medium',
      text: {
        ar: 'ما الذي يُشعرك بأن أحدًا يُصغي إليك حقًّا؟',
        en: 'What makes you feel truly listened to?',
      },
      followUps: [
        {
          ar: 'وما الذي يُشعرك بالعكس؟',
          en: 'And what makes you feel the opposite?',
        },
        {
          ar: 'هل يهمّك أن يُعيد المستمع كلامك بطريقته؟',
          en: 'Does it matter to you when someone puts what you said in their own words?',
        },
      ],
    },
    {
      id: 'communication-016',
      subtopic: 'expressing',
      depth: 'medium',
      text: {
        ar: 'ما نوع التشجيع الذي يرفع همّتك حين تتعثّر الأمور؟',
        en: 'What kind of encouragement lifts you when things go wrong?',
      },
      followUps: [
        {
          ar: 'ومن يُحسن تشجيعك بهذه الطريقة؟',
          en: 'Who is good at encouraging you that way?',
        },
        {
          ar: 'وما الذي يبدو تشجيعًا لكنه يُثقل عليك؟',
          en: 'And what sounds like encouragement but weighs on you?',
        },
      ],
    },
    {
      id: 'communication-006',
      subtopic: 'disagreements',
      depth: 'medium',
      text: {
        ar: 'حين يحتدّ النقاش، ما الأقرب إليك: إكماله فورًا أم استراحة قصيرة ثم العودة إليه؟',
        en: 'When a discussion gets heated, would you rather finish it right away or take a short break first?',
      },
      followUps: [
        {
          ar: 'كم من الوقت تكفيك هذه الاستراحة عادةً؟',
          en: 'How long a break is usually enough?',
        },
        {
          ar: 'كيف نطلبها دون أن تبدو هروبًا من الحديث؟',
          en: 'How can we ask for one without it feeling like walking away?',
        },
      ],
    },
    {
      id: 'communication-007',
      subtopic: 'disagreements',
      depth: 'medium',
      text: {
        ar: 'بعد خلاف، ما الذي يُعيد الصفاء إلى قلبك أسرع؟',
        en: 'After a disagreement, what helps you feel at peace again fastest?',
      },
      followUps: [
        {
          ar: 'كلمة طيبة، أم اعتذار واضح، أم وقت قصير للهدوء؟',
          en: 'A kind word, a clear apology or a little time to settle?',
        },
        {
          ar: 'هل يهمّك من يبادر أولًا؟',
          en: 'Does it matter to you who reaches out first?',
        },
      ],
    },
    {
      id: 'communication-008',
      subtopic: 'disagreements',
      depth: 'light',
      text: {
        ar: 'ما الكلمة السرّية التي يمكن أن نتّفق عليها لنقول: لنهدأ قليلًا؟',
        en: 'What could be our code word for "let\'s pause and calm down"?',
      },
      followUps: [
        {
          ar: 'ما الذي يجعلها طريفة بما يكفي لتكسر التوتر؟',
          en: 'What would make it funny enough to break the tension?',
        },
      ],
    },
    {
      id: 'communication-009',
      subtopic: 'disagreements',
      depth: 'medium',
      text: {
        ar: 'ماذا علّمتك سنوات النشأة عن إدارة الخلاف؟',
        en: 'What did growing up teach you about handling disagreements?',
      },
      followUps: [
        {
          ar: 'ما الذي يستحق أن نأخذه من ذلك؟',
          en: "What's worth carrying over?",
        },
        {
          ar: 'وما الذي يستحق أن نفعله بشكل مختلف؟',
          en: "And what's worth doing differently?",
        },
      ],
    },
    {
      id: 'communication-010',
      subtopic: 'disagreements',
      depth: 'deep',
      text: {
        ar: 'ما العبارات أو النبرة التي تجعل الخلاف أصعب عليك؟',
        en: 'What words or tone make a disagreement harder for you?',
      },
      followUps: [
        {
          ar: 'وما الذي يُطمئنك حتى في لحظة الخلاف؟',
          en: 'And what reassures you, even mid-disagreement?',
        },
        {
          ar: 'كيف نتذكّر أننا فريق واحد في تلك اللحظات؟',
          en: "How can we remember we're on the same team in those moments?",
        },
      ],
    },
    {
      id: 'communication-011',
      subtopic: 'support',
      depth: 'light',
      text: {
        ar: 'في يوم صعب، أيّهما أقرب إليك: من يُصغي فقط أم من يقترح الحلول؟',
        en: 'On a hard day, do you want someone who just listens or someone who offers solutions?',
      },
      followUps: [
        {
          ar: 'كيف يمكن أن نعرف أيّهما يناسب اللحظة؟',
          en: 'How can we tell which one the moment needs?',
        },
      ],
    },
    {
      id: 'communication-012',
      subtopic: 'support',
      depth: 'medium',
      text: {
        ar: 'حين يُتعبك المرض أو الإرهاق، كيف يطيب لك أن يُعتنى بك؟',
        en: "When you're sick or worn out, how do you like to be cared for?",
      },
      followUps: [
        {
          ar: 'هل يريحك وجود أحد بقربك أم القليل من الهدوء؟',
          en: 'Do you want company nearby or a bit of quiet?',
        },
        {
          ar: 'ما الشيء الصغير الذي يُشعرك بالعناية حينها؟',
          en: 'What small thing makes you feel cared for then?',
        },
      ],
    },
    {
      id: 'communication-013',
      subtopic: 'support',
      depth: 'medium',
      text: {
        ar: 'حين تصلك أخبار سعيدة، كيف يطيب لك أن يُحتفى بها معك؟',
        en: 'When you get good news, how do you like it to be celebrated with you?',
      },
      followUps: [
        {
          ar: 'من أول من يهمّك أن يعرف؟',
          en: 'Who do you want to tell first?',
        },
        {
          ar: 'احتفال كبير أم لفتة بسيطة؟',
          en: 'A big celebration or a simple gesture?',
        },
      ],
    },
    {
      id: 'communication-014',
      subtopic: 'support',
      depth: 'medium',
      text: {
        ar: 'حين يأتيك الضغط من العمل أو الدراسة أو الناس، كيف يمكنني أن أكون في صفّك؟',
        en: 'When stress comes from work, studies or other people, how can I be on your side?',
      },
      followUps: [
        {
          ar: 'وما الذي يحسن تجنّبه في تلك الأوقات؟',
          en: "And what's best avoided at those times?",
        },
        {
          ar: 'هل يُسعدك السؤال عن الأمر لاحقًا؟',
          en: 'Do you like being asked about it again later?',
        },
      ],
    },
    {
      id: 'communication-015',
      subtopic: 'support',
      depth: 'deep',
      text: {
        ar: 'ما أصدق دعم وصل إليك في حياتك، وممّن؟',
        en: "What's the most genuine support you've ever received, and from whom?",
      },
      followUps: [
        {
          ar: 'ما الذي جعله مختلفًا؟',
          en: 'What made it different?',
        },
        {
          ar: 'كيف يمكن أن نمنح بعضنا شيئًا منه؟',
          en: 'How could we give each other some of that?',
        },
      ],
    },
  ],
}
