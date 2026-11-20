import type { Topic } from '../../types/content'

export const marriage: Topic = {
  id: 'marriage',
  section: 'discover',
  tone: 'lilac',
  title: { ar: 'الزواج والبدايات', en: 'Marriage & beginnings' },
  description: {
    ar: 'أحاديث صادقة عن معنى الزواج وأدواره وخطواته الأولى، لتبدآ على وضوح وبركة.',
    en: 'Honest conversations about what marriage means, its roles and first steps, to begin with clarity and blessing.',
  },
  subtopics: [
    { id: 'meaning', title: { ar: 'معنى الزواج', en: 'What marriage means' } },
    { id: 'roles', title: { ar: 'الأدوار والشورى', en: 'Roles & shura' } },
    { id: 'beginnings', title: { ar: 'العقد والعرس', en: 'Nikah & wedding' } },
    { id: 'life', title: { ar: 'حياتنا القادمة', en: 'Our life ahead' } },
  ],
  questions: [
    {
      id: 'marriage-001',
      subtopic: 'meaning',
      depth: 'light',
      text: {
        ar: 'ما الصورة التي تخطر ببالك عند ذكر كلمة «زواج»؟',
        en: 'What picture comes to mind when you hear the word "marriage"?',
      },
      followUps: [
        {
          ar: 'من أين جاءت هذه الصورة؟',
          en: 'Where does that picture come from?',
        },
        {
          ar: 'وهل تغيّرت مع الوقت؟',
          en: 'Has it changed over time?',
        },
      ],
    },
    {
      id: 'marriage-002',
      subtopic: 'meaning',
      depth: 'medium',
      text: {
        ar: 'جعل الله الزواج سكنًا ومودة ورحمة، فأيّ هذه المعاني أقرب إلى قلبك؟',
        en: 'Allah describes marriage as tranquility, affection and mercy. Which feels closest to your heart?',
      },
      followUps: [
        {
          ar: 'كيف يبدو هذا المعنى في يوم عادي؟',
          en: 'What does it look like on an ordinary day?',
        },
        {
          ar: 'وما الذي يحفظه حين تشتدّ الأيام؟',
          en: 'And what keeps it alive when days get hard?',
        },
      ],
    },
    {
      id: 'marriage-003',
      subtopic: 'meaning',
      depth: 'medium',
      text: {
        ar: 'أيّ بيت من حولك يجسّد الزواج الطيب في نظرك، وما الذي يميّزه؟',
        en: 'Which home around you shows a good marriage, in your view, and what sets it apart?',
      },
      followUps: [
        {
          ar: 'ما الذي يمكن أن نأخذه منه لبيتنا؟',
          en: 'What could we take from it for our home?',
        },
      ],
    },
    {
      id: 'marriage-004',
      subtopic: 'meaning',
      depth: 'medium',
      text: {
        ar: 'ما الخُلق الذي يأتي أولًا عندك فيمن يشاركك الحياة؟',
        en: 'Which trait of character comes first for you in a life partner?',
      },
      followUps: [
        {
          ar: 'ولماذا هذا الخُلق تحديدًا؟',
          en: 'Why that one in particular?',
        },
        {
          ar: 'وما الذي يمكنني أن أقدّمه من جهتي؟',
          en: 'And what can I bring from my side?',
        },
      ],
    },
    {
      id: 'marriage-005',
      subtopic: 'meaning',
      depth: 'deep',
      text: {
        ar: 'ما أكثر ما يُفرحك في فكرة الزواج، وما الذي يُقلقك فيها؟',
        en: 'What excites you most about marriage, and what worries you about it?',
      },
      followUps: [
        {
          ar: 'ما الذي يمكنني فعله ليطمئنّ قلبك؟',
          en: 'What could I do to put your heart at ease?',
        },
        {
          ar: 'هل من قلق يحسن أن نتحدث عنه بصراحة الآن؟',
          en: 'Is there a worry worth talking through openly now?',
        },
      ],
    },
    {
      id: 'marriage-006',
      subtopic: 'roles',
      depth: 'light',
      text: {
        ar: 'ما اللفتة الصغيرة بين الزوجين التي تصنع فرقًا كبيرًا في نظرك؟',
        en: 'What small gesture between spouses makes a big difference, in your view?',
      },
      followUps: [
        {
          ar: 'ما الذي يجعل لها هذا الأثر؟',
          en: 'Why does it matter so much?',
        },
        {
          ar: 'وهل يحضرك موقف من لطف النبي ﷺ مع أهله؟',
          en: 'Does a moment of the Prophet ﷺ being kind to his family come to mind?',
        },
      ],
    },
    {
      id: 'marriage-007',
      subtopic: 'roles',
      depth: 'medium',
      text: {
        ar: 'ما الذي تعنيه الشورى بين الزوجين في نظرك؟',
        en: 'What does shura, consulting each other, mean between spouses, in your view?',
      },
      followUps: [
        {
          ar: 'كيف نتصرّف إن تشاورنا ولم نتفق؟',
          en: 'What do we do if we consult and still disagree?',
        },
        {
          ar: 'وكيف نحفظ الودّ حين يأتي القرار على غير ما يريده أحدنا؟',
          en: "And how do we keep the warmth when a decision doesn't go one person's way?",
        },
      ],
    },
    {
      id: 'marriage-008',
      subtopic: 'roles',
      depth: 'medium',
      text: {
        ar: 'ما الحقوق والواجبات بين الزوجين التي يهمّك أن نفهمها جيدًا؟',
        en: 'Which rights and duties between spouses matter to you for us to understand well?',
      },
      followUps: [
        {
          ar: 'من أين نتعلّمها برأيك؟',
          en: 'Where do you think we should learn about them?',
        },
        {
          ar: 'وما المساحة التي نتركها لما يناسبنا نحن؟',
          en: 'And how much room do we leave for what suits us?',
        },
      ],
    },
    {
      id: 'marriage-009',
      subtopic: 'roles',
      depth: 'medium',
      text: {
        ar: 'ما رأيك في أن نحضر دورة أو جلسات عن الزواج قبل أن نبدأ؟',
        en: 'How do you feel about us taking a marriage course or sessions before we begin?',
      },
      followUps: [
        {
          ar: 'ما الموضوع الذي يهمّك أن نتعلّمه فيها؟',
          en: 'Which topic would you most want us to learn about?',
        },
      ],
    },
    {
      id: 'marriage-010',
      subtopic: 'roles',
      depth: 'deep',
      text: {
        ar: 'إن تعثّرنا يومًا في خلاف لا نقدر على حلّه وحدنا، فإلى من نلجأ برأيك؟',
        en: "If we ever get stuck in a disagreement we can't solve alone, who should we turn to?",
      },
      followUps: [
        {
          ar: 'من الحكيم في عائلتينا الذي يمكن أن نثق به؟',
          en: 'Who in our families is wise enough to trust with it?',
        },
        {
          ar: 'وما رأيك في الاستعانة بمستشار أسري متخصّص؟',
          en: 'And how do you feel about seeing a family counselor?',
        },
        {
          ar: 'ومتى يحسن ألّا ننتظر أكثر؟',
          en: 'And when is it better not to wait any longer?',
        },
      ],
    },
    {
      id: 'marriage-011',
      subtopic: 'beginnings',
      depth: 'light',
      text: {
        ar: 'ما التفصيل الذي يجعل عقد القران لحظة لا تُنسى في نظرك؟',
        en: 'What detail would make the nikah a moment to remember, in your view?',
      },
      followUps: [
        {
          ar: 'من يسعدك أن يحضره؟',
          en: 'Who would you love to be there?',
        },
        {
          ar: 'هل من دعاء أو كلمة يسعدك أن تُقال فيه؟',
          en: "Is there a du'a or a word you'd love to hear there?",
        },
      ],
    },
    {
      id: 'marriage-012',
      subtopic: 'beginnings',
      depth: 'medium',
      text: {
        ar: 'كيف يكون العرس بسيطًا ومباركًا ومُبهجًا في آن واحد برأيك؟',
        en: 'How can a wedding be simple, blessed and joyful all at once, in your view?',
      },
      followUps: [
        {
          ar: 'ما الذي يستحق أن نُنفق عليه، وما الذي نستغني عنه؟',
          en: 'What is worth spending on, and what can we do without?',
        },
        {
          ar: 'وكيف نوازن بين رغبتنا وتوقعات العائلتين؟',
          en: 'And how do we balance our wishes with what both families expect?',
        },
      ],
    },
    {
      id: 'marriage-013',
      subtopic: 'beginnings',
      depth: 'medium',
      text: {
        ar: 'ما الإيقاع الذي يريحك في خطوات الطريق: من التعارف، إلى العقد، إلى العرس؟',
        en: 'What pace feels right to you for the steps from getting to know each other, to the nikah, to the wedding?',
      },
      followUps: [
        {
          ar: 'ما الذي يحسن أن يكون جاهزًا قبل كل خطوة؟',
          en: 'What should be ready before each step?',
        },
        {
          ar: 'وما الذي قد يدعونا إلى التعجيل أو التأنّي؟',
          en: 'And what might lead us to speed up or slow down?',
        },
      ],
    },
    {
      id: 'marriage-014',
      subtopic: 'beginnings',
      depth: 'deep',
      text: {
        ar: 'ما علامات الاستعداد للزواج في نظرك؟',
        en: 'What are the signs of being ready for marriage, in your view?',
      },
      followUps: [
        {
          ar: 'وما الذي يحتاج منا إلى مزيد من الوقت؟',
          en: 'And what might still need more time from us?',
        },
      ],
    },
    {
      id: 'marriage-015',
      subtopic: 'beginnings',
      depth: 'deep',
      text: {
        ar: 'ما رأيك في الفحص الطبي قبل الزواج، وكيف نتلقّى نتائجه بهدوء ورحمة؟',
        en: 'How do you feel about the premarital medical check, and how could we receive its results calmly and kindly?',
      },
      followUps: [
        {
          ar: 'هل من عادة صحية أو احتياج يحسن أن أعرفه؟',
          en: 'Is there a health habit or need I should know about?',
        },
        {
          ar: 'وكيف نعتني بصحتنا معًا بعد الزواج؟',
          en: 'And how could we look after our health together after marriage?',
        },
      ],
    },
    {
      id: 'marriage-016',
      subtopic: 'life',
      depth: 'light',
      text: {
        ar: 'أين يسعدك أن يكون بيتنا الأول: قرب الأهل، أم قرب العمل، أم في مكان هادئ؟',
        en: 'Where would you love our first home to be: near family, near work or somewhere quiet?',
      },
      followUps: [
        {
          ar: 'ما رأيك في السكن مع الأهل أو قربهم في البداية؟',
          en: 'How do you feel about living with or near family at first?',
        },
        {
          ar: 'وما الذي لا غنى عنه في البيت الأول؟',
          en: 'And what is a must-have in a first home?',
        },
      ],
    },
    {
      id: 'marriage-017',
      subtopic: 'life',
      depth: 'medium',
      text: {
        ar: 'كيف نرتّب العمل والدراسة في سنواتنا الأولى برأيك؟',
        en: 'How do you picture us arranging work and studies in our first years?',
      },
      followUps: [
        {
          ar: 'هل من دراسة أو شهادة تنتظر الإكمال؟',
          en: 'Is there a degree or course waiting to be finished?',
        },
        {
          ar: 'وكيف يدعم كلٌّ منا الآخر في ذلك؟',
          en: 'And how can we support each other in it?',
        },
      ],
    },
    {
      id: 'marriage-018',
      subtopic: 'life',
      depth: 'medium',
      text: {
        ar: 'ما الذي يسعدك أن نحرص عليه في سنتنا الأولى معًا؟',
        en: 'What would you love us to look after in our first year together?',
      },
      followUps: [
        {
          ar: 'ما العادة التي يحسن أن نبدأ بها من اليوم الأول؟',
          en: 'What habit would be good to start from day one?',
        },
        {
          ar: 'وكيف نتعامل مع ضغوط البدايات؟',
          en: 'And how do we handle the pressures of a new start?',
        },
      ],
    },
  ],
}
