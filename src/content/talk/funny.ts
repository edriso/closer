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
      id: 'funny-001',
      subtopic: 'imagine',
      depth: 'light',
      text: {
        ar: 'لو كانت حياتنا مسلسلًا كوميديًا، فما اسمه، ومن يؤدي دور كلٍّ منا؟',
        en: 'If our life were a sitcom, what would it be called, and who would play us?',
      },
      followUps: [
        { ar: 'ما الحلقة الأكثر مشاهدة فيه؟', en: 'What is the most-watched episode?' },
        {
          ar: 'وما العبارة التي تتكرر في كل حلقة؟',
          en: 'And what is the catchphrase in every episode?',
        },
      ],
    },
    {
      id: 'funny-002',
      subtopic: 'imagine',
      depth: 'light',
      text: {
        ar: 'لو كان لكل إنسان موسيقى خلفية ترافقه طوال اليوم، فما الموسيقى التي تُعزف لك؟',
        en: 'If everyone had a background soundtrack all day, what would yours be?',
      },
      followUps: [
        { ar: 'وما الذي يُعزف حين يرنّ المنبّه؟', en: 'And what plays when the alarm goes off?' },
        { ar: 'وكيف تتغيّر حين يحين وقت الطعام؟', en: 'How does it change when food arrives?' },
      ],
    },
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
      id: 'funny-004',
      subtopic: 'imagine',
      depth: 'light',
      text: {
        ar: 'لو أُقيم لك تمثال في ساحة المدينة، فبأي وضعية يكون؟',
        en: 'If a statue of you stood in the town square, what pose would it be in?',
      },
      followUps: [
        { ar: 'وما العبارة المنقوشة تحته؟', en: 'And what would the plaque say?' },
        { ar: 'ومن أول من يلتقط صورة بجانبه؟', en: 'Who would be first to take a selfie with it?' },
      ],
    },
    {
      id: 'funny-005',
      subtopic: 'imagine',
      depth: 'light',
      text: {
        ar: 'لو كان لك برنامج طبخ على التلفاز، فما اسمه، وما طبقه الشهير؟',
        en: 'If you had a TV cooking show, what would it be called, and what is the signature dish?',
      },
      followUps: [
        {
          ar: 'ما الكارثة التي تقع في الحلقة الأولى؟',
          en: 'What disaster happens in episode one?',
        },
        { ar: 'ومن الضيف الأول؟', en: 'And who is the first guest?' },
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
        { ar: 'ومن الخصم في المرحلة الأخيرة؟', en: 'And who is the final boss?' },
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
        { ar: 'وما الحيوان الذي يحرسه؟', en: 'Which animal guards it?' },
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
      id: 'funny-010',
      subtopic: 'what-if',
      depth: 'light',
      text: {
        ar: 'ماذا لو صار علينا أن نتواصل بالغناء فقط ليوم كامل؟',
        en: 'What if we could only talk to each other by singing for a whole day?',
      },
      followUps: [
        { ar: 'أي جملة ستكون الأصعب غناءً؟', en: 'Which sentence would be hardest to sing?' },
        { ar: 'وعلى أي لحن؟', en: 'And to what tune?' },
      ],
    },
    {
      id: 'funny-011',
      subtopic: 'what-if',
      depth: 'light',
      text: {
        ar: 'ماذا لو تبادلنا الأجساد ليوم واحد، فما أول ما يخطر ببالك فعله؟',
        en: 'What if we swapped bodies for a day: what is the first thing you would do?',
      },
      followUps: [
        { ar: 'وما الذي سيكشف الأمر فورًا؟', en: 'What would give you away immediately?' },
        { ar: 'وما أصعب عادة مني في التقليد؟', en: 'Which of my habits would be hardest to copy?' },
      ],
    },
    {
      id: 'funny-012',
      subtopic: 'what-if',
      depth: 'light',
      text: {
        ar: 'ماذا لو نطق الأثاث فجأة، فأي قطعة تعرف عنك أكثر الأسرار؟',
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
        { ar: 'هل في الخطة مقلب صغير؟', en: 'Is there a little prank in the plan?' },
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
        { ar: 'ومن كان وراء هذه الفكرة؟', en: 'Who was behind it?' },
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
      followUps: [{ ar: 'هل من عرض صغير الآن؟', en: 'How about a quick demo right now?' }],
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
  ],
}
