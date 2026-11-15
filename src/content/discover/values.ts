import type { Topic } from '../../types/content'

export const values: Topic = {
  id: 'values',
  section: 'discover',
  tone: 'indigo',
  title: { ar: 'القيم والمبادئ', en: 'Values & beliefs' },
  description: {
    ar: 'ما يهمّ كلًّا منكما حقًّا، والمبادئ التي تهتديان بها.',
    en: 'What truly matters to each of you, and the principles that guide you.',
  },
  subtopics: [
    { id: 'priorities', title: { ar: 'الأولويات', en: 'Priorities' } },
    { id: 'principles', title: { ar: 'المبادئ', en: 'Principles' } },
    { id: 'spirit', title: { ar: 'الروح والمعنى', en: 'Faith & meaning' } },
  ],
  questions: [
    {
      id: 'values-001',
      subtopic: 'priorities',
      depth: 'light',
      text: {
        ar: 'ما الكلمات الثلاث التي تلخّص ما يهمّك في الحياة؟',
        en: 'What three words sum up what matters most to you in life?',
      },
      followUps: [
        {
          ar: 'أيّها الأصعب في الالتزام به؟',
          en: 'Which one is hardest to live by?',
        },
        {
          ar: 'هل كانت الكلمات نفسها قبل خمس سنوات؟',
          en: 'Would they have been the same five years ago?',
        },
      ],
    },
    {
      id: 'values-002',
      subtopic: 'priorities',
      depth: 'medium',
      text: {
        ar: 'حين يتزاحم العمل والعائلة والراحة، ما الذي يأخذ الأولوية عندك عادةً؟',
        en: 'When work, family and rest compete, what usually comes first for you?',
      },
      followUps: [
        {
          ar: 'هل يرضيك هذا الترتيب؟',
          en: 'Are you happy with that order?',
        },
        {
          ar: 'ما الذي قد يغيّره في المستقبل؟',
          en: 'What might change it in the future?',
        },
      ],
    },
    {
      id: 'values-003',
      subtopic: 'priorities',
      depth: 'medium',
      text: {
        ar: 'ما الذي يستحقّ وقتك حتى لو لم يفهم الآخرون السبب؟',
        en: "What deserves your time, even if others don't get why?",
      },
      followUps: [
        {
          ar: 'متى بدأ هذا الشيء يعني لك الكثير؟',
          en: 'When did it start meaning so much to you?',
        },
        {
          ar: 'كيف يمكنني أن أشاركك فيه؟',
          en: 'How could I share in it?',
        },
      ],
    },
    {
      id: 'values-004',
      subtopic: 'priorities',
      depth: 'light',
      text: {
        ar: 'أيّهما أقرب إليك: حياة هادئة مستقرة أم حياة مليئة بالتجارب والمغامرات؟',
        en: 'Which is closer to you: a calm, steady life or one full of new experiences?',
      },
      followUps: [
        {
          ar: 'هل يمكن الجمع بينهما بطريقة ما؟',
          en: 'Could there be a way to have both?',
        },
        {
          ar: 'كيف تبدو هذه الحياة في يوم عادي؟',
          en: 'What would that look like on an ordinary day?',
        },
      ],
    },
    {
      id: 'values-005',
      subtopic: 'priorities',
      depth: 'deep',
      text: {
        ar: 'ما الذي يُخيفك أن يضيع منك وسط زحام الحياة؟',
        en: 'What are you afraid of losing in the rush of life?',
      },
      followUps: [
        {
          ar: 'ما الذي يساعدك على التمسّك به؟',
          en: 'What helps you hold on to it?',
        },
        {
          ar: 'كيف يمكنني أن أذكّرك به؟',
          en: 'How can I remind you of it?',
        },
      ],
    },
    {
      id: 'values-006',
      subtopic: 'principles',
      depth: 'medium',
      text: {
        ar: 'ما القيمة التي يهمّك أن تقوم عليها حياتنا معًا قبل أي شيء آخر؟',
        en: 'What value matters most to you as the foundation of our life together?',
      },
      followUps: [
        {
          ar: 'كيف تظهر هذه القيمة في يوم عادي؟',
          en: 'How would it show on an ordinary day?',
        },
        {
          ar: 'ومن أين جاءت أهميتها عندك؟',
          en: 'Where does its importance come from for you?',
        },
      ],
    },
    {
      id: 'values-007',
      subtopic: 'principles',
      depth: 'medium',
      text: {
        ar: 'ماذا يعني الصدق بالنسبة إليك في التفاصيل الصغيرة؟',
        en: 'What does honesty mean to you in the small details?',
      },
      followUps: [
        {
          ar: 'هل من كذبة بيضاء مقبولة في نظرك؟',
          en: 'Is any white lie acceptable, in your view?',
        },
        {
          ar: 'وما الفرق عندك بين الخصوصية والكتمان؟',
          en: 'And where do you draw the line between privacy and secrecy?',
        },
      ],
    },
    {
      id: 'values-008',
      subtopic: 'principles',
      depth: 'light',
      text: {
        ar: 'ما الصفة التي تكسب احترامك في أي شخص فورًا؟',
        en: 'What quality earns your respect in anyone right away?',
      },
      followUps: [
        {
          ar: 'من أقرب الناس إليك ممن يتّصفون بها؟',
          en: 'Who close to you has it?',
        },
        {
          ar: 'وما الذي يُفقد الشخص احترامك بسرعة؟',
          en: 'And what loses your respect quickly?',
        },
      ],
    },
    {
      id: 'values-009',
      subtopic: 'principles',
      depth: 'medium',
      text: {
        ar: 'ما الذي يجعل المسامحة سهلة عليك أحيانًا وصعبة أحيانًا أخرى؟',
        en: 'What makes forgiveness easy for you sometimes, and hard at other times?',
      },
      followUps: [
        {
          ar: 'هل تعني المسامحة النسيان في نظرك؟',
          en: 'To you, does forgiving mean forgetting?',
        },
        {
          ar: 'ما الذي يساعدك على طيّ صفحة قديمة؟',
          en: 'What helps you turn the page?',
        },
      ],
    },
    {
      id: 'values-010',
      subtopic: 'principles',
      depth: 'deep',
      text: {
        ar: 'ما الموقف الذي اختُبرت فيه مبادئك حقًّا؟',
        en: 'When were your principles truly put to the test?',
      },
      followUps: [
        {
          ar: 'ما الذي ساعدك على الثبات؟',
          en: 'What helped you stand firm?',
        },
        {
          ar: 'هل تغيّر شيء فيك بعدها؟',
          en: 'Did something in you change afterward?',
        },
      ],
    },
    {
      id: 'values-011',
      subtopic: 'spirit',
      depth: 'light',
      text: {
        ar: 'أين يجد قلبك سكينته؟',
        en: 'Where does your heart find its peace?',
      },
      followUps: [
        {
          ar: 'ما آخر لحظة سكينة ما زالت في ذاكرتك؟',
          en: 'What recent moment of peace stays with you?',
        },
        {
          ar: 'هل يمكن أن نصنع لحظات كهذه معًا؟',
          en: 'Could we create moments like that together?',
        },
      ],
    },
    {
      id: 'values-012',
      subtopic: 'spirit',
      depth: 'medium',
      text: {
        ar: 'ما مكان الإيمان أو الروحانية في حياتك اليومية؟',
        en: 'What place does faith or spirituality have in your everyday life?',
      },
      followUps: [
        {
          ar: 'هل تغيّر هذا المكان مع الوقت؟',
          en: 'Has that changed over time?',
        },
        {
          ar: 'ما أمنيتك لهذا الجانب في حياتنا معًا؟',
          en: 'What do you hope for this side of our life together?',
        },
        {
          ar: 'كيف نحترم اختلافنا فيه إن وُجد؟',
          en: 'How can we respect any differences we have here?',
        },
      ],
    },
    {
      id: 'values-013',
      subtopic: 'spirit',
      depth: 'medium',
      text: {
        ar: 'ما الذي يُشعرك بأنك جزء من شيء أكبر منك؟',
        en: 'What makes you feel part of something bigger than yourself?',
      },
      followUps: [
        {
          ar: 'متى حدث ذلك آخر مرة؟',
          en: 'When did that last happen?',
        },
        {
          ar: 'هل يمكن أن نعيش ذلك معًا؟',
          en: 'Could we share that feeling together?',
        },
      ],
    },
    {
      id: 'values-014',
      subtopic: 'spirit',
      depth: 'medium',
      text: {
        ar: 'ما الذي يمنح حياتك معنى في الأيام العادية؟',
        en: 'What gives your life meaning on ordinary days?',
      },
      followUps: [
        {
          ar: 'وما الذي يُبعدك عن هذا المعنى أحيانًا؟',
          en: 'And what pulls you away from it sometimes?',
        },
        {
          ar: 'كيف يمكن أن نذكّر بعضنا به؟',
          en: 'How can we remind each other of it?',
        },
      ],
    },
    {
      id: 'values-015',
      subtopic: 'spirit',
      depth: 'deep',
      text: {
        ar: 'ما السؤال الكبير عن الحياة الذي يشغل بالك أكثر من غيره؟',
        en: 'What big question about life occupies your mind the most?',
      },
      followUps: [
        {
          ar: 'ما أقرب جواب إلى قلبك حتى الآن؟',
          en: 'What answer feels closest to your heart so far?',
        },
        {
          ar: 'متى يعود هذا السؤال إليك عادةً؟',
          en: 'When does it usually come back to you?',
        },
      ],
    },
  ],
}
