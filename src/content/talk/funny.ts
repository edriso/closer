import type { Topic } from '../../types/content'

export const funny: Topic = {
  id: 'funny',
  section: 'talk',
  tone: 'peach',
  title: { ar: 'مضحك وعشوائي', en: 'Funny & random' },
  description: {
    ar: 'أسئلة طريفة وغير متوقعة، صُنعت لضحكة مشتركة.',
    en: 'Silly, unexpected questions made for laughing together.',
  },
  subtopics: [
    { id: 'imagine', title: { ar: 'خيال', en: 'Imagine' } },
    { id: 'what-if', title: { ar: 'ماذا لو؟', en: 'What if?' } },
    { id: 'silly', title: { ar: 'طرائف', en: 'Silly' } },
  ],
  questions: [
    {
      id: 'funny-003',
      subtopic: 'imagine',
      depth: 'light',
      text: {
        ar: 'أي حيوان يشبهك أكثر في الصباح الباكر؟',
        en: 'Which animal are you most like first thing in the morning?',
      },
      followUps: [
        { ar: 'وفي آخر الليل؟', en: 'And late at night?' },
        { ar: 'وأي حيوان يشبهني أنا؟', en: 'And which animal am I?' },
      ],
    },
    {
      id: 'funny-026',
      subtopic: 'imagine',
      depth: 'light',
      text: {
        ar: 'لو كان لك مطعم صغير، فما اسمه، وما طبقه الشهير؟',
        en: 'If you had a little restaurant, what would it be called, and what is the signature dish?',
      },
      followUps: [
        {
          ar: 'ما الكارثة التي تقع في يوم الافتتاح؟',
          en: 'What disaster happens on opening day?',
        },
        { ar: 'ومن أول زبون؟', en: 'And who is the first customer?' },
      ],
    },
    {
      id: 'funny-006',
      subtopic: 'imagine',
      depth: 'light',
      text: {
        ar: 'لو تحوّلت حياتك إلى لعبة فيديو، فما أصعب مرحلة فيها؟',
        en: 'If your life were a video game, what would the hardest level be?',
      },
      followUps: [
        { ar: 'وما القوة الإضافية التي تُنقذك فيها؟', en: 'What power-up saves you?' },
        { ar: 'وما الخصم في المرحلة الأخيرة؟', en: 'And what is the final boss?' },
      ],
    },
    {
      id: 'funny-007',
      subtopic: 'imagine',
      depth: 'medium',
      text: {
        ar: 'لو كان لنا شعار خاص مثل شعارات الممالك القديمة، فماذا يكون رسمه وعبارته؟',
        en: 'If we had a coat of arms like old kingdoms, what would be on it, and what would our motto be?',
      },
      followUps: [
        { ar: 'وأي نبتة أو شيء يتوسّطه؟', en: 'What plant or object sits in the middle?' },
        { ar: 'وما ألوانه؟', en: 'And what are its colors?' },
      ],
    },
    {
      id: 'funny-008',
      subtopic: 'what-if',
      depth: 'light',
      text: {
        ar: 'ماذا لو صار بإمكانك التحدث مع الحيوانات، فمن أول حيوان يستحق المحادثة؟',
        en: 'What if you could talk to animals: who gets the first conversation?',
      },
      followUps: [
        { ar: 'وما أول سؤال له؟', en: 'And what is your first question for it?' },
        {
          ar: 'وأي حيوان قد يكون الحديث معه مزعجًا جدًا؟',
          en: 'Which animal would be really annoying to talk to?',
        },
      ],
    },
    {
      id: 'funny-009',
      subtopic: 'what-if',
      depth: 'light',
      text: {
        ar: 'ماذا لو كانت لديك قوة خارقة عديمة الفائدة تمامًا، فما هي؟',
        en: 'What if you had a completely useless superpower: what would it be?',
      },
      followUps: [
        { ar: 'كيف يمكن الاستفادة منها رغم ذلك؟', en: 'How could it come in handy anyway?' },
        { ar: 'وما اسمك البطولي؟', en: 'And what is your superhero name?' },
      ],
    },
    {
      id: 'funny-012',
      subtopic: 'what-if',
      depth: 'light',
      text: {
        ar: 'ماذا لو نطق الأثاث فجأة، فأي قطعة تعرف عاداتك أكثر من غيرها؟',
        en: 'What if the furniture suddenly started talking: which piece knows the most about you?',
      },
      followUps: [
        { ar: 'وأي قطعة ستشتكي أكثر من غيرها؟', en: 'And which one would complain the most?' },
      ],
    },
    {
      id: 'funny-013',
      subtopic: 'what-if',
      depth: 'light',
      text: {
        ar: 'ماذا لو كان على كل شخص أن يرتدي زيًّا واحدًا طوال العمر، فما زيّك؟',
        en: 'What if everyone had to wear one outfit for the rest of their life: what is yours?',
      },
      followUps: [{ ar: 'وما الزيّ المناسب لي برأيك؟', en: 'And what outfit would suit me?' }],
    },
    {
      id: 'funny-014',
      subtopic: 'what-if',
      depth: 'light',
      text: {
        ar: 'ماذا لو أمكن إيقاف الزمن عشر دقائق كل يوم، فكيف تُقضى هذه الدقائق؟',
        en: 'What if you could pause time for ten minutes a day: how would you spend them?',
      },
      followUps: [
        { ar: 'هل في الخطة قيلولة صغيرة؟', en: 'Is there a little nap in the plan?' },
        { ar: 'وهل يكون لي نصيب منها؟', en: 'And do I get a share of those minutes?' },
      ],
    },
    {
      id: 'funny-015',
      subtopic: 'silly',
      depth: 'light',
      text: {
        ar: 'ما أغرب مزيج من الطعام يعجبك سرًّا؟',
        en: 'What weird food combination do you secretly love?',
      },
      followUps: [
        { ar: 'كيف كان الاكتشاف؟', en: 'How did you discover it?' },
        { ar: 'هل أجرّبه؟', en: 'Should I try it?' },
      ],
    },
    {
      id: 'funny-016',
      subtopic: 'silly',
      depth: 'light',
      text: {
        ar: 'ما الكلمة التي تبدو لك مضحكة من دون أي سبب؟',
        en: 'What word sounds hilarious to you for no reason at all?',
      },
      followUps: [{ ar: 'هل نسمعها الآن بصوت عالٍ؟', en: 'Can we hear it out loud right now?' }],
    },
    {
      id: 'funny-017',
      subtopic: 'silly',
      depth: 'medium',
      text: {
        ar: 'ما الموقف المحرج الذي ما زال يُضحكك كلما خطر ببالك؟',
        en: 'What embarrassing moment still makes you laugh whenever it crosses your mind?',
      },
      followUps: [
        { ar: 'من كان شاهدًا عليه؟', en: 'Who witnessed it?' },
        { ar: 'وكيف انتهى؟', en: 'And how did it end?' },
      ],
    },
    {
      id: 'funny-018',
      subtopic: 'silly',
      depth: 'light',
      text: {
        ar: 'ما أطرف شيء كان يبدو حقيقة مؤكدة في طفولتك؟',
        en: 'What is the funniest thing you were sure was true as a kid?',
      },
      followUps: [
        { ar: 'ومتى انكشفت الحقيقة؟', en: 'When did you learn the truth?' },
        { ar: 'وهل ما زال جزء منك يصدّقه؟', en: 'Does a tiny part of you still believe it?' },
      ],
    },
    {
      id: 'funny-019',
      subtopic: 'silly',
      depth: 'light',
      text: {
        ar: 'ما الموهبة الغريبة التي لا يعرفها عنك كثيرون؟',
        en: 'What odd talent do few people know you have?',
      },
      followUps: [{ ar: 'ومتى اكتشفتها؟', en: 'When did you discover it?' }],
    },
    {
      id: 'funny-020',
      subtopic: 'silly',
      depth: 'light',
      text: {
        ar: 'في أي رياضة غريبة تكون الميدالية الذهبية من نصيبك؟',
        en: 'In what weird sport would you win the gold medal?',
      },
      followUps: [
        { ar: 'وما الرقم القياسي المسجّل باسمك؟', en: 'What is your world record?' },
        { ar: 'ومن أقوى المنافسين؟', en: 'And who is your toughest rival?' },
      ],
    },
    {
      id: 'funny-021',
      subtopic: 'imagine',
      depth: 'light',
      text: {
        ar: 'لو كتبنا كتابًا طريفًا عن حياتنا، فما عنوانه؟',
        en: 'If we wrote a funny book about our life, what would it be called?',
      },
      followUps: [
        { ar: 'وما عنوان الفصل الأطرف فيه؟', en: 'What is the funniest chapter called?' },
        {
          ar: 'وما العبارة التي تتكرر في كل فصل؟',
          en: 'And what line keeps coming up in every chapter?',
        },
      ],
    },
    {
      id: 'funny-022',
      subtopic: 'imagine',
      depth: 'light',
      text: {
        ar: 'لو ظهرت فوق رأس كل إنسان لافتة صغيرة تصف مزاجه، فماذا تقول لافتتك الآن؟',
        en: 'If everyone had a little sign above their head showing their mood, what would yours say now?',
      },
      followUps: [
        { ar: 'وماذا تقول حين يرنّ المنبّه؟', en: 'And what does it say when the alarm goes off?' },
        { ar: 'وحين يصل الطعام؟', en: 'And when the food arrives?' },
      ],
    },
    {
      id: 'funny-023',
      subtopic: 'imagine',
      depth: 'light',
      text: {
        ar: 'لو سُمّي شارع في المدينة باسمك، فبماذا يشتهر؟',
        en: 'If a street in town were named after you, what would it be famous for?',
      },
      followUps: [
        { ar: 'وماذا تقول اللافتة عند مدخله؟', en: 'And what does the sign at its entrance say?' },
        { ar: 'وما أول محل فيه؟', en: 'And what is the first shop on it?' },
      ],
    },
    {
      id: 'funny-024',
      subtopic: 'what-if',
      depth: 'light',
      text: {
        ar: 'ماذا لو صار علينا أن نتفاهم بالإشارات فقط ليوم كامل؟',
        en: 'What if we could only talk to each other in gestures for a whole day?',
      },
      followUps: [
        { ar: 'أي جملة ستكون الأصعب؟', en: 'Which sentence would be the hardest?' },
        { ar: 'ومن منا سيستسلم أولًا؟', en: 'And which of us would give up first?' },
      ],
    },
    {
      id: 'funny-025',
      subtopic: 'what-if',
      depth: 'light',
      text: {
        ar: 'ماذا لو تبادلنا مهام البيت ليوم واحد، فبأي مهمة تكون البداية؟',
        en: 'What if we swapped household jobs for a day: which one would you start with?',
      },
      followUps: [
        { ar: 'وأي مهمة من مهامي ستكون الأصعب؟', en: 'Which of my jobs would be the hardest?' },
        { ar: 'ومن منا سيطلب النجدة أولًا؟', en: 'And which of us would call for help first?' },
      ],
    },
  ],
}
