import type { Topic } from '../../types/content'

export const goals: Topic = {
  id: 'goals',
  section: 'discover',
  tone: 'rose',
  title: { ar: 'أهداف الحياة', en: 'Life goals' },
  description: {
    ar: 'الأحلام والطموحات التي يحملها كلٌّ منكما، والأثر الذي يتمنّى أن يتركه.',
    en: 'The dreams and ambitions each of you carries, and the mark you hope to leave.',
  },
  subtopics: [
    { id: 'work', title: { ar: 'العمل والطموح', en: 'Work & ambition' } },
    { id: 'growth', title: { ar: 'النموّ', en: 'Growth' } },
    { id: 'legacy', title: { ar: 'الأثر', en: 'Legacy' } },
  ],
  questions: [
    {
      id: 'goals-001',
      subtopic: 'work',
      depth: 'light',
      text: {
        ar: 'ما المهنة التي كانت حلم طفولتك؟',
        en: 'What job did you dream of as a child?',
      },
      followUps: [
        {
          ar: 'هل بقي شيء من ذلك الحلم في حياتك اليوم؟',
          en: 'Is there anything of that dream in your life today?',
        },
      ],
    },
    {
      id: 'goals-002',
      subtopic: 'work',
      depth: 'medium',
      text: {
        ar: 'ما الذي يجعل العمل ذا معنى بالنسبة إليك؟',
        en: 'What makes work feel meaningful to you?',
      },
      followUps: [
        {
          ar: 'وأين يجد هذا المعنى مكانه في حياتك الآن؟',
          en: 'Where does that meaning show up in your life right now?',
        },
        {
          ar: 'أيّها يهمّك أكثر: المال، أم الأثر، أم الحرية؟',
          en: 'Which matters most to you: money, impact or freedom?',
        },
      ],
    },
    {
      id: 'goals-003',
      subtopic: 'work',
      depth: 'medium',
      text: {
        ar: 'كيف تبدو حياتك المهنية في أحلامك بعد خمس سنوات؟',
        en: 'What does your working life look like in your dreams five years from now?',
      },
      followUps: [
        {
          ar: 'ما الذي يُبهجك في هذه الصورة أكثر من غيره؟',
          en: 'What part of that picture excites you most?',
        },
        {
          ar: 'ما الذي يحتاجه هذا الحلم من وقت أو تعلّم؟',
          en: 'What would it take, in time or learning?',
        },
      ],
    },
    {
      id: 'goals-004',
      subtopic: 'work',
      depth: 'medium',
      text: {
        ar: 'ما الفرصة التي قد تستحق أن تُغيّرا من أجلها مدينتكما أو نمط حياتكما؟',
        en: 'What kind of opportunity might be worth changing your city or lifestyle for?',
      },
      followUps: [
        {
          ar: 'ما الذي يصعب تركه خلفكما؟',
          en: 'What would be hardest to leave behind?',
        },
        {
          ar: 'كيف يمكن أن تتّخذا قرارًا كهذا معًا؟',
          en: 'How would you make a decision like that together?',
        },
      ],
    },
    {
      id: 'goals-005',
      subtopic: 'work',
      depth: 'deep',
      text: {
        ar: 'ما الحلم المهني الذي يبدو كبيرًا لدرجة أنه لم يُقَل بصوت عالٍ بعد؟',
        en: "What career dream feels so big it hasn't been said out loud yet?",
      },
      followUps: [
        {
          ar: 'ما الذي يجعله يبدو بعيدًا؟',
          en: 'What makes it feel far away?',
        },
        {
          ar: 'ما أصغر خطوة يمكن أن تقرّبك منه؟',
          en: 'What tiny step could bring you closer to it?',
        },
      ],
    },
    {
      id: 'goals-006',
      subtopic: 'growth',
      depth: 'light',
      text: {
        ar: 'ما الكتاب أو البودكاست أو الشخص الذي علّمك شيئًا جديدًا مؤخرًا؟',
        en: 'What book, podcast or person taught you something new recently?',
      },
      followUps: [
        {
          ar: 'ما الفكرة التي بقيت معك؟',
          en: 'What idea stuck with you?',
        },
        {
          ar: 'هل تستحق أن نتحدّث عنها أكثر؟',
          en: 'Is it worth us talking about more?',
        },
      ],
    },
    {
      id: 'goals-007',
      subtopic: 'growth',
      depth: 'medium',
      text: {
        ar: 'ما الجانب من شخصيتك الذي يحتاج إلى عناية ونموّ في هذه الفترة؟',
        en: 'Which side of yourself needs some care and growth right now?',
      },
      followUps: [
        {
          ar: 'ما الذي يُعينك على ذلك؟',
          en: 'What helps you with it?',
        },
        {
          ar: 'كيف يمكن لنصفك الآخر أن يلاحظ تقدّمك ويشجّعه؟',
          en: 'How can your other half notice your progress and cheer you on?',
        },
      ],
    },
    {
      id: 'goals-008',
      subtopic: 'growth',
      depth: 'deep',
      text: {
        ar: 'ما التجربة الصعبة التي جعلتك أقوى؟',
        en: 'Which hard experience made you stronger?',
      },
      followUps: [
        {
          ar: 'ما الدرس الذي بقي معك منها؟',
          en: 'What lesson did it leave you with?',
        },
        {
          ar: 'ومن كان إلى جانبك حينها؟',
          en: 'Who was by your side then?',
        },
      ],
    },
    {
      id: 'goals-009',
      subtopic: 'growth',
      depth: 'medium',
      text: {
        ar: 'ما النقد الذي يصعب عليك سماعه، وكيف يمكن أن يُقال بطريقة تُفيدك؟',
        en: 'What kind of criticism is hard for you to hear, and how could it be said in a way that helps?',
      },
      followUps: [
        {
          ar: 'من يُحسن قول الحقيقة لك بلطف؟',
          en: 'Who is good at telling you the truth kindly?',
        },
      ],
    },
    {
      id: 'goals-010',
      subtopic: 'growth',
      depth: 'medium',
      text: {
        ar: 'ما الذي تغيّر فيك خلال السنوات الأخيرة ويُسعدك؟',
        en: "What has changed in you over the last few years that you're glad about?",
      },
      followUps: [
        {
          ar: 'من لاحظ هذا التغيير أولًا؟',
          en: 'Who noticed it first?',
        },
        {
          ar: 'وما التغيير الذي ما زال في الطريق؟',
          en: 'And what change is still on its way?',
        },
      ],
    },
    {
      id: 'goals-011',
      subtopic: 'legacy',
      depth: 'light',
      text: {
        ar: 'ما لفتتك الصغيرة المفضّلة لإسعاد من حولك؟',
        en: "What's your favorite small gesture for making the people around you happy?",
      },
      followUps: [
        {
          ar: 'ومن أكثر من يستحقها هذه الأيام؟',
          en: 'And who could use it most these days?',
        },
      ],
    },
    {
      id: 'goals-012',
      subtopic: 'legacy',
      depth: 'medium',
      text: {
        ar: 'من الشخص الذي يُلهمك بالأثر الذي تركه في الناس؟',
        en: 'Who inspires you with the mark they have left on people?',
      },
      followUps: [
        {
          ar: 'ما الذي صنع هذا الأثر برأيك؟',
          en: 'What do you think created that impact?',
        },
        {
          ar: 'أيّ جزء منه يشبه ما يتمنّاه قلبك؟',
          en: 'Which part of it echoes what you hope for?',
        },
      ],
    },
    {
      id: 'goals-013',
      subtopic: 'legacy',
      depth: 'medium',
      text: {
        ar: 'ما القضية أو العمل الخيري الأقرب إلى قلبك؟',
        en: 'Which cause or kind of giving is closest to your heart?',
      },
      followUps: [
        {
          ar: 'ما الذي ربطك بها؟',
          en: 'What connected you to it?',
        },
        {
          ar: 'كيف يمكن أن يكون لنا فيها نصيب معًا؟',
          en: 'How could we take part in it together?',
        },
      ],
    },
    {
      id: 'goals-014',
      subtopic: 'legacy',
      depth: 'medium',
      text: {
        ar: 'بعد سنوات طويلة، ماذا تتمنّيان أن يُقال عن علاقتكما؟',
        en: 'Years from now, what do you two hope people will say about your relationship?',
      },
      followUps: [
        {
          ar: 'ما الذي يمكن أن نبدأ به من الآن؟',
          en: 'What could we start doing now?',
        },
      ],
    },
    {
      id: 'goals-015',
      subtopic: 'legacy',
      depth: 'deep',
      text: {
        ar: 'ما الحكمة التي يتمنّى قلبك أن تصل إلى من يأتي بعدك؟',
        en: 'What piece of wisdom do you hope reaches those who come after you?',
      },
      followUps: [
        {
          ar: 'من أين جاءتك هذه الحكمة؟',
          en: 'Where did it come from?',
        },
        {
          ar: 'كيف تظهر في حياتك اليوم؟',
          en: 'How does it show in your life today?',
        },
      ],
    },
  ],
}
