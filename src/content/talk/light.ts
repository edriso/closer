import type { Topic } from '../../types/content'

export const light: Topic = {
  id: 'light',
  section: 'talk',
  tone: 'sky',
  title: { ar: 'خفيف ولطيف', en: 'Light & casual' },
  description: {
    ar: 'أسئلة بسيطة تفتح باب الحديث وتُبقي الابتسامة حاضرة.',
    en: 'Easy questions that get you talking and keep you smiling.',
  },
  subtopics: [
    { id: 'everyday', title: { ar: 'يوميات', en: 'Everyday' } },
    { id: 'favorites', title: { ar: 'المفضّلات', en: 'Favorites' } },
    { id: 'little-things', title: { ar: 'تفاصيل صغيرة', en: 'Little things' } },
  ],
  questions: [
    {
      id: 'light-001',
      subtopic: 'everyday',
      depth: 'light',
      text: {
        ar: 'ما الذي ينتظره قلبك بشوق في الأيام القادمة، ولو كان صغيرًا؟',
        en: 'What are you looking forward to in the coming days, even something small?',
      },
      followUps: [
        { ar: 'ما الذي يجعله مميزًا؟', en: 'What makes it special?' },
        { ar: 'وكيف يمكن أن يصبح أجمل؟', en: 'And how could it be even better?' },
      ],
    },
    {
      id: 'light-002',
      subtopic: 'everyday',
      depth: 'light',
      text: {
        ar: 'كيف يبدو صباحك المثالي من أول دقيقة؟',
        en: 'What does your perfect morning look like, from the very first minute?',
      },
      followUps: [
        { ar: 'وما الذي يُفسد الصباح فورًا؟', en: 'And what ruins a morning instantly?' },
        {
          ar: 'ما أول ما يخطر ببالك عند الاستيقاظ عادةً؟',
          en: "What's usually your first thought when you wake up?",
        },
      ],
    },
    {
      id: 'light-004',
      subtopic: 'everyday',
      depth: 'light',
      text: {
        ar: 'ما الاختراع الصغير الذي يحتاجه يومك بشدة؟',
        en: 'What little invention does your day badly need?',
      },
      followUps: [
        {
          ar: 'وما اسمه التجاري؟',
          en: 'And what would it be called?',
        },
      ],
    },
    {
      id: 'light-005',
      subtopic: 'everyday',
      depth: 'light',
      text: {
        ar: 'ما الذي يحوّل مساءً عاديًا في منتصف الأسبوع إلى مساء جميل؟',
        en: 'What turns an ordinary weeknight into a lovely one?',
      },
      followUps: [
        { ar: 'متى حدث ذلك آخر مرة؟', en: 'When did that last happen?' },
        { ar: 'هل يمكن أن يتكرر هذا الأسبوع؟', en: 'Could it happen again this week?' },
      ],
    },
    {
      id: 'light-006',
      subtopic: 'everyday',
      depth: 'light',
      text: {
        ar: 'ما الذي يحدث عادةً في أول عشر دقائق بعد العودة إلى البيت؟',
        en: 'What usually happens in your first ten minutes back home?',
      },
      followUps: [
        { ar: 'هل من طقس ثابت لا يتغير؟', en: 'Is there a ritual that never changes?' },
        { ar: 'وما الذي يجعل هذه الدقائق أجمل؟', en: 'What would make those minutes even nicer?' },
      ],
    },
    {
      id: 'light-007',
      subtopic: 'everyday',
      depth: 'light',
      text: {
        ar: 'أي جزء من يومك يمضي أسرع مما ينبغي؟',
        en: 'Which part of your day always goes by too fast?',
      },
      followUps: [{ ar: 'وأي جزء يمضي ببطء شديد؟', en: 'And which part drags on and on?' }],
    },
    {
      id: 'light-008',
      subtopic: 'everyday',
      depth: 'medium',
      text: {
        ar: 'ما العادة الجديدة الصغيرة التي أحدثت فرقًا واضحًا في حياتك؟',
        en: 'What small new habit has made a real difference for you?',
      },
      followUps: [
        { ar: 'كيف بدأت الحكاية؟', en: 'How did it start?' },
        { ar: 'وهل من عادة أخرى في البال؟', en: 'Is there another one you would like to try?' },
      ],
    },
    {
      id: 'light-009',
      subtopic: 'favorites',
      depth: 'light',
      text: {
        ar: 'ما الطبق الذي يمكن أن يكون على مائدتك كل يوم دون ملل؟',
        en: 'What dish could you eat every day without getting bored?',
      },
      followUps: [
        { ar: 'من يُعدّه أفضل من الجميع؟', en: 'Who makes it best?' },
        { ar: 'هل من ذكرى مرتبطة به؟', en: 'Is there a memory tied to it?' },
      ],
    },
    {
      id: 'light-010',
      subtopic: 'favorites',
      depth: 'light',
      text: {
        ar: 'ما أحبّ الأماكن إلى قلبك في مدينتك؟',
        en: 'What is your favorite spot in your city?',
      },
      followUps: [
        { ar: 'ما الذي يشدّك إليه؟', en: 'What draws you there?' },
        { ar: 'كيف تكون الزيارة المثالية له؟', en: 'What would a perfect visit there look like?' },
      ],
    },
    {
      id: 'light-012',
      subtopic: 'favorites',
      depth: 'light',
      text: {
        ar: 'أيّهما أقرب إليك: صباح ممطر في البيت أم مساء صيفي في الهواء الطلق؟',
        en: 'Which is more you: a rainy morning indoors or a summer evening outside?',
      },
      followUps: [{ ar: 'وما الذي يُكمل الصورة؟', en: 'What completes the picture?' }],
    },
    {
      id: 'light-013',
      subtopic: 'favorites',
      depth: 'light',
      text: {
        ar: 'ما المشروب الذي يعني لك الراحة؟',
        en: 'What drink feels like comfort to you?',
      },
      followUps: [
        { ar: 'وبأي طريقة تحديدًا؟', en: 'Made exactly how?' },
        { ar: 'وفي أي كوب؟', en: 'And in which mug?' },
      ],
    },
    {
      id: 'light-014',
      subtopic: 'favorites',
      depth: 'light',
      text: {
        ar: 'أيّ فصول السنة أحبّ إليك، ولماذا؟',
        en: 'Which season is your favorite, and why?',
      },
      followUps: [
        { ar: 'ما أجمل ذكرى لديك من ذلك الفصل؟', en: 'What is your best memory from that season?' },
      ],
    },
    {
      id: 'light-015',
      subtopic: 'favorites',
      depth: 'light',
      text: {
        ar: 'ما الحلوى التي لا يمكنك رفضها أبدًا؟',
        en: 'Which dessert can you never turn down?',
      },
      followUps: [
        { ar: 'هل من مكان يصنعها أفضل من غيره؟', en: 'Is there one place that makes it best?' },
        { ar: 'ومتى تكون ألذّ؟', en: 'And when does it taste best?' },
      ],
    },
    {
      id: 'light-017',
      subtopic: 'favorites',
      depth: 'medium',
      text: {
        ar: 'ما النشاط الذي يُنسيك الوقت تمامًا؟',
        en: 'What activity makes you lose all track of time?',
      },
      followUps: [
        { ar: 'متى كانت آخر مرة؟', en: 'When was the last time?' },
        {
          ar: 'ما الذي قد يمنحه مكانًا أكبر في أيامك؟',
          en: 'What would give it more room in your days?',
        },
      ],
    },
    {
      id: 'light-018',
      subtopic: 'little-things',
      depth: 'light',
      text: {
        ar: 'ما الإطراء البسيط الذي يبقى أثره معك طوال اليوم؟',
        en: 'What simple compliment stays with you all day?',
      },
      followUps: [{ ar: 'متى وصلك مثله آخر مرة؟', en: 'When did you last hear one like that?' }],
    },
    {
      id: 'light-019',
      subtopic: 'little-things',
      depth: 'light',
      text: {
        ar: 'ما الذي يلفت نظرك في الطريق ولا يكاد يلاحظه أحد غيرك؟',
        en: 'What do you notice when you are out that nobody else seems to?',
      },
      followUps: [{ ar: 'هل من مثال من هذا الأسبوع؟', en: 'Any example from this week?' }],
    },
    {
      id: 'light-020',
      subtopic: 'little-things',
      depth: 'medium',
      text: {
        ar: 'ما التفصيلة الصغيرة في بيت طفولتك التي ما زالت عالقة في ذاكرتك؟',
        en: 'What small detail of your childhood home is still stuck in your memory?',
      },
      followUps: [
        { ar: 'هل ما زالت موجودة؟', en: 'Is it still there?' },
        { ar: 'وما الشعور الذي يرافق هذه الذكرى؟', en: 'What feeling comes with that memory?' },
      ],
    },
    {
      id: 'light-021',
      subtopic: 'little-things',
      depth: 'light',
      text: {
        ar: 'ما أبسط شيء يُضحكك مهما كان مزاجك؟',
        en: "What's the simplest thing that makes you laugh, whatever your mood?",
      },
      followUps: [
        { ar: 'متى حدث ذلك آخر مرة؟', en: 'When did that last happen?' },
        { ar: 'هل يمكنني أن أجرّبه الآن؟', en: 'Can I try it right now?' },
      ],
    },
    {
      id: 'light-022',
      subtopic: 'little-things',
      depth: 'light',
      text: {
        ar: 'ما الرسالة القصيرة التي تُسعدك حين تصلك فجأة؟',
        en: 'What short message makes you happiest when it arrives out of the blue?',
      },
      followUps: [
        {
          ar: 'هل من رسالة مني ما زالت محفوظة عندك؟',
          en: 'Is there a message from me you still keep?',
        },
      ],
    },
    {
      id: 'light-023',
      subtopic: 'little-things',
      depth: 'light',
      text: {
        ar: 'ما الشيء الصغير الذي لا تخلو منه حقيبتك أو جيبك أبدًا؟',
        en: 'What little thing is always in your bag or pocket?',
      },
      followUps: [
        { ar: 'منذ متى يرافقك؟', en: 'How long has it been with you?' },
        {
          ar: 'وماذا يحدث في اليوم الذي يُنسى فيه؟',
          en: 'And what happens on the day it gets left behind?',
        },
      ],
    },
    {
      id: 'light-024',
      subtopic: 'little-things',
      depth: 'light',
      text: {
        ar: 'ما الرائحة التي تعيدك فورًا إلى مكان أو زمن جميل؟',
        en: 'What smell takes you straight back to a lovely place or time?',
      },
      followUps: [
        { ar: 'إلى أين تأخذك بالضبط؟', en: 'Where exactly does it take you?' },
        { ar: 'ومن الشخص الذي يرتبط بها؟', en: 'Who does it remind you of?' },
      ],
    },
    {
      id: 'light-025',
      subtopic: 'little-things',
      depth: 'medium',
      text: {
        ar: 'ما اللفتة الصغيرة من الآخرين التي تعني لك أكثر مما يظنون؟',
        en: 'What small gesture from others means more to you than they realize?',
      },
      followUps: [
        { ar: 'هل من مثال قريب؟', en: 'Any recent example?' },
        { ar: 'وما أحب لفتة مني إلى قلبك؟', en: 'And which of my gestures do you love most?' },
      ],
    },
    {
      id: 'light-026',
      subtopic: 'everyday',
      depth: 'light',
      text: {
        ar: 'ما الصوت الهادئ الذي يريح قلبك: المطر، أم تلاوة هادئة، أم موج البحر؟',
        en: 'What calm sound soothes you most: rain, a gentle recitation or the sea?',
      },
      followUps: [
        { ar: 'في أي وقت من اليوم يكون أحبّ إليك؟', en: 'What time of day do you love it most?' },
        { ar: 'هل نستمع إليه معًا الآن؟', en: 'Shall we listen to it together now?' },
      ],
    },
    {
      id: 'light-027',
      subtopic: 'favorites',
      depth: 'light',
      text: {
        ar: 'ما الكتاب الذي يمكن أن يُقرأ مرة بعد مرة دون ملل؟',
        en: 'What book could you read again and again?',
      },
      followUps: [
        { ar: 'أي فصل فيه هو الأقرب إلى قلبك؟', en: 'Which part is closest to your heart?' },
        { ar: 'متى كانت القراءة الأولى؟', en: 'When did you first read it?' },
      ],
    },
    {
      id: 'light-028',
      subtopic: 'favorites',
      depth: 'light',
      text: {
        ar: 'ما الحلوى أو الوجبة الخفيفة التي كانت تُسعد طفولتك؟',
        en: 'What treat or snack made your childhood happier?',
      },
      followUps: [
        { ar: 'هل ما زالت تُباع اليوم؟', en: 'Can you still find it today?' },
        { ar: 'ومن كان يشتريها لك؟', en: 'And who used to buy it for you?' },
      ],
    },
  ],
}
