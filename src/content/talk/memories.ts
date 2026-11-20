import type { Topic } from '../../types/content'

export const memories: Topic = {
  id: 'memories',
  section: 'talk',
  tone: 'mint',
  title: { ar: 'ذكريات وطفولة', en: 'Memories & childhood' },
  description: {
    ar: 'رحلة دافئة إلى الأيام التي صنعتكما، من الطفولة حتى بداية قصتكما.',
    en: 'A warm trip back to the days that shaped you both, from childhood to the start of your story.',
  },
  subtopics: [
    { id: 'childhood', title: { ar: 'الطفولة', en: 'Childhood' } },
    { id: 'school', title: { ar: 'أيام الدراسة', en: 'School days' } },
    { id: 'family', title: { ar: 'البيت والعائلة', en: 'Home & family' } },
    { id: 'us', title: { ar: 'ذكرياتنا', en: 'Our story' } },
  ],
  questions: [
    /* ---------- Childhood ---------- */
    {
      id: 'memories-001',
      subtopic: 'childhood',
      depth: 'light',
      text: {
        ar: 'ما اللعبة التي كانت تملأ أيامك في الطفولة؟',
        en: 'What game filled your days as a child?',
      },
      followUps: [
        { ar: 'ومن كان يشاركك فيها؟', en: 'Who used to play it with you?' },
        { ar: 'هل ما زالت قواعدها حاضرة في ذهنك؟', en: 'Do you still remember the rules?' },
      ],
    },
    {
      id: 'memories-002',
      subtopic: 'childhood',
      depth: 'light',
      text: {
        ar: 'ما الحكاية التي كانت تأسرك في طفولتك، من كتاب كانت أو من أفواه الكبار؟',
        en: 'What story captivated you as a child, from a book or told by someone older?',
      },
      followUps: [
        {
          ar: 'هل ما زالت تفاصيلها في ذاكرتك؟',
          en: 'Do you still remember how it goes?',
        },
        {
          ar: 'هل يسعدك أن نقرأها أو نسمعها معًا من جديد؟',
          en: 'Would you like us to read or hear it together again?',
        },
      ],
    },
    {
      id: 'memories-003',
      subtopic: 'childhood',
      depth: 'medium',
      text: {
        ar: 'ما الذي كان يخيفك في صغرك ويُضحكك اليوم؟',
        en: 'What scared you as a kid that makes you laugh today?',
      },
      followUps: [
        { ar: 'ومتى بدأ هذا الخوف يتلاشى؟', en: 'When did that fear start to fade?' },
        { ar: 'من كان يطمئنك حينها؟', en: 'Who used to reassure you back then?' },
      ],
    },
    {
      id: 'memories-004',
      subtopic: 'childhood',
      depth: 'medium',
      text: {
        ar: 'ما أول مسؤولية صغيرة أُوكلت إليك في طفولتك؟',
        en: 'What was the first small responsibility you were trusted with as a child?',
      },
      followUps: [
        { ar: 'كيف كان الشعور حينها؟', en: 'How did it feel at the time?' },
        {
          ar: 'هل بقي منها شيء فيك اليوم؟',
          en: 'Is any of it still part of you today?',
        },
      ],
    },
    {
      id: 'memories-005',
      subtopic: 'childhood',
      depth: 'light',
      text: {
        ar: 'ما المكان الذي كان مخبأك السري في الطفولة؟',
        en: 'What was your secret hideaway as a child?',
      },
      followUps: [
        { ar: 'ما الذي كان يجعله مكانك وحدك؟', en: 'What made it feel like yours?' },
        { ar: 'هل ما زال موجودًا؟', en: 'Is it still there?' },
      ],
    },

    /* ---------- School days ---------- */
    {
      id: 'memories-006',
      subtopic: 'school',
      depth: 'light',
      text: {
        ar: 'أيّ معلّم أو معلّمة ما زال حاضرًا في ذاكرتك؟',
        en: 'Which teacher still stands out in your memory?',
      },
      followUps: [
        {
          ar: 'ما الذي جعل أثره يبقى كل هذه السنين؟',
          en: 'What made the impression last all these years?',
        },
        {
          ar: 'هل يحضرك موقف بعينه من تلك الحصص؟',
          en: 'Does a particular moment from those classes come to mind?',
        },
      ],
    },
    {
      id: 'memories-007',
      subtopic: 'school',
      depth: 'light',
      text: {
        ar: 'ما المادة الأحبّ إليك في المدرسة، وما المادة التي كانت تُتعبك؟',
        en: 'Which school subject was your favorite, and which one wore you out?',
      },
      followUps: [
        {
          ar: 'هل يظهر أثر المادة المفضّلة في حياتك اليوم؟',
          en: 'Does that favorite show up in your life today?',
        },
        { ar: 'ما الذي جعل الأخرى ثقيلة إلى هذا الحد؟', en: 'What made the other one so heavy?' },
      ],
    },
    {
      id: 'memories-008',
      subtopic: 'school',
      depth: 'light',
      text: {
        ar: 'ما أطرف موقف حدث لك في الفصل؟',
        en: "What's the funniest thing that happened to you in class?",
      },
      followUps: [
        { ar: 'من كان معك في تلك اللحظة؟', en: 'Who was there with you?' },
        { ar: 'وهل ما زال يُضحكك حتى اليوم؟', en: 'Does it still make you laugh today?' },
      ],
    },
    {
      id: 'memories-010',
      subtopic: 'school',
      depth: 'medium',
      text: {
        ar: 'ما اللحظة من أيام الدراسة التي ملأتك فخرًا؟',
        en: 'What moment from your school days filled you with pride?',
      },
      followUps: [
        { ar: 'من كان أول من عرف بها؟', en: 'Who was the first to hear about it?' },
        { ar: 'هل ما زال لتلك اللحظة أثر فيك؟', en: 'Does it still shape you in some way?' },
      ],
    },
    {
      id: 'memories-021',
      subtopic: 'school',
      depth: 'medium',
      text: {
        ar: 'ما الذي بقي فيك من صداقات أيام الدراسة؟',
        en: 'What have your school friendships left in you?',
      },
      followUps: [
        { ar: 'ما أجمل درس منها؟', en: 'What was the best lesson from them?' },
        { ar: 'وهل ما زال لها أثر في يومك؟', en: 'Do they still shape your days?' },
      ],
    },

    /* ---------- Home & family ---------- */
    {
      id: 'memories-011',
      subtopic: 'family',
      depth: 'light',
      text: {
        ar: 'ما العبارة الطريفة التي كان يردّدها أحد الكبار من حولك في صغرك؟',
        en: 'What funny phrase did an older person around you always repeat when you were little?',
      },
      followUps: [
        {
          ar: 'هل ما زالت تُضحكك كلما خطرت ببالك؟',
          en: 'Does it still make you laugh whenever it comes to mind?',
        },
        {
          ar: 'وهل صارت تتردّد على لسانك اليوم؟',
          en: 'Has it found its way into your own vocabulary?',
        },
      ],
    },
    {
      id: 'memories-012',
      subtopic: 'family',
      depth: 'light',
      text: {
        ar: 'أيّ أيام طفولتك يشتاق إليها قلبك أكثر: ليالي رمضان أم صباح العيد؟',
        en: 'Which childhood days does your heart miss most: Ramadan nights or Eid mornings?',
      },
      followUps: [
        {
          ar: 'ما الرائحة أو الصوت الذي يرتبط بها في ذاكرتك؟',
          en: 'What smell or sound do you link to it?',
        },
        {
          ar: 'ما العادة التي تستحق أن تعود منها؟',
          en: 'Which tradition from it deserves a comeback?',
        },
      ],
    },
    {
      id: 'memories-013',
      subtopic: 'family',
      depth: 'light',
      text: {
        ar: 'ما المشهد الذي كان لا يغيب عن لمّات العائلة أو الأصدقاء في صغرك؟',
        en: 'What scene was always part of family or friend gatherings when you were young?',
      },
      followUps: [
        { ar: 'من كان نجم تلك الجلسات؟', en: 'Who was the star of those gatherings?' },
        {
          ar: 'ما الطبق الذي لا تكتمل اللمّة بدونه؟',
          en: 'Which dish made the gathering complete?',
        },
      ],
    },
    {
      id: 'memories-014',
      subtopic: 'family',
      depth: 'medium',
      text: {
        ar: 'ما النصيحة أو الدرس الذي وصلك من شخص أكبر منك سنًّا وما زال يرافقك؟',
        en: 'What advice or lesson from an older person in your life still stays with you?',
      },
      followUps: [
        { ar: 'متى وصلك هذا الدرس؟', en: 'When did it reach you?' },
        { ar: 'هل يظهر أثره في يومك؟', en: 'Does it show up in your everyday life?' },
      ],
    },
    {
      id: 'memories-015',
      subtopic: 'family',
      depth: 'medium',
      text: {
        ar: 'ما الشيء من بيت طفولتك الذي لم تتضح قيمته لك إلا بعد سنوات؟',
        en: 'What from your childhood home only showed its value years later?',
      },
      followUps: [
        { ar: 'ما الذي كشف لك قيمته؟', en: 'What made you see its worth?' },
        { ar: 'هل له مكان في حياتك اليوم؟', en: 'Does it have a place in your life today?' },
      ],
    },
    {
      id: 'memories-022',
      subtopic: 'family',
      depth: 'light',
      text: {
        ar: 'ما أول ذكرى لك مع الصيام في طفولتك؟',
        en: 'What is your first memory of fasting as a child?',
      },
      followUps: [
        { ar: 'من كان يشجّعك حينها؟', en: 'Who cheered you on back then?' },
        { ar: 'وكيف كان ذلك الإفطار؟', en: 'And what was that iftar like?' },
      ],
    },
    {
      id: 'memories-023',
      subtopic: 'family',
      depth: 'light',
      text: {
        ar: 'ما أجمل عيدية وصلتك في طفولتك؟',
        en: 'What was the best Eid gift you got as a child?',
      },
      followUps: [
        { ar: 'ممّن كانت؟', en: 'Who was it from?' },
        { ar: 'وفيمَ ذهبت؟', en: 'And what did it go on?' },
      ],
    },

    /* ---------- Our story ---------- */
    {
      id: 'memories-016',
      subtopic: 'us',
      depth: 'light',
      text: {
        ar: 'ما أول حديث طويل بيننا بعد الزواج ما زال حاضرًا في ذاكرتك؟',
        en: 'What is the first long conversation we had as a married couple that you still remember?',
      },
      followUps: [
        { ar: 'عمّ كان الحديث؟', en: 'What was it about?' },
        { ar: 'وما الذي جعله يطول إلى هذا الحد؟', en: 'And what made it go on so long?' },
      ],
    },
    {
      id: 'memories-017',
      subtopic: 'us',
      depth: 'light',
      text: {
        ar: 'ما الكلمة أو المزحة التي لا يفهمها أحد غيرنا؟',
        en: 'What word or joke does nobody get except us?',
      },
      followUps: [
        { ar: 'من أين جاءت؟', en: 'Where did it come from?' },
        { ar: 'ومتى استُخدمت آخر مرة؟', en: 'And when did it last come up?' },
      ],
    },
    {
      id: 'memories-018',
      subtopic: 'us',
      depth: 'medium',
      text: {
        ar: 'ما اللحظة التي اطمأنّ فيها قلبك إلى أن اختيارنا لبعضنا كان صوابًا؟',
        en: 'What moment made your heart feel sure that choosing each other was right?',
      },
      followUps: [
        { ar: 'أين كنا حينها؟', en: 'Where were we at the time?' },
        { ar: 'وهل وصلني ذلك منك يومها؟', en: 'Did I know it back then?' },
      ],
    },
    {
      id: 'memories-019',
      subtopic: 'us',
      depth: 'medium',
      text: {
        ar: 'لو اختُصرت قصتنا حتى الآن في مشهد واحد، فأيّ مشهد يكون؟',
        en: 'If one scene summed up our story so far, which would it be?',
      },
      followUps: [
        {
          ar: 'ما التفصيلة فيه التي لا يلاحظها أحد غيرنا؟',
          en: 'What detail in it would nobody notice but us?',
        },
        { ar: 'هل نختار كلانا المشهد نفسه؟', en: 'Would we both pick the same one?' },
      ],
    },
    {
      id: 'memories-020',
      subtopic: 'us',
      depth: 'medium',
      text: {
        ar: 'ما الرسالة أو الكلمة من أيام زواجنا الأولى التي ما زالت تُسعدك؟',
        en: 'What message or word from the early days of our marriage still makes you happy?',
      },
      followUps: [
        { ar: 'هل ما زالت محفوظة في مكان ما؟', en: 'Is it still saved somewhere?' },
        { ar: 'ما الذي جعلها تعني لك الكثير؟', en: 'What made it mean so much to you?' },
      ],
    },
    {
      id: 'memories-024',
      subtopic: 'us',
      depth: 'light',
      text: {
        ar: 'ما أجمل مناسبة عائلية حضرناها معًا حتى الآن؟',
        en: 'What is the loveliest family occasion we have shared so far?',
      },
      followUps: [
        { ar: 'ما التفصيلة التي بقيت معك منها؟', en: 'What detail has stayed with you?' },
        {
          ar: 'وما الذي يسعدك أن يتكرر في المرة القادمة؟',
          en: 'And what would you love to happen again next time?',
        },
      ],
    },
  ],
}
