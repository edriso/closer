import type { Topic } from '../../types/content'

export const deep: Topic = {
  id: 'deep',
  section: 'talk',
  tone: 'indigo',
  title: { ar: 'عميق وهادئ', en: 'Deep & meaningful' },
  description: {
    ar: 'أسئلة هادئة تقرّب القلوب وتفتح باب الحديث عمّا يهمّ.',
    en: 'Quieter questions that bring your hearts closer.',
  },
  subtopics: [
    { id: 'self', title: { ar: 'الذات', en: 'Self' } },
    { id: 'life', title: { ar: 'الحياة', en: 'Life' } },
    { id: 'feelings', title: { ar: 'المشاعر', en: 'Feelings' } },
  ],
  questions: [
    {
      id: 'deep-001',
      subtopic: 'self',
      depth: 'medium',
      text: {
        ar: 'ما الصفة فيك التي صارت أقرب إلى قلبك مع مرور السنين؟',
        en: 'Which trait of yours have you grown to love over the years?',
      },
      followUps: [
        { ar: 'متى بدأ ذلك؟', en: 'When did that start?' },
        { ar: 'هل كانت تزعجك يومًا؟', en: 'Did it ever bother you?' },
      ],
    },
    {
      id: 'deep-002',
      subtopic: 'self',
      depth: 'deep',
      text: {
        ar: 'لو أمكن إرسال رسالة قصيرة إلى نفسك في سن العاشرة، فماذا يكون فيها؟',
        en: 'If you could send a short note to your ten-year-old self, what would it say?',
      },
      followUps: [
        {
          ar: 'وما الذي قد يُدهش تلك النسخة الصغيرة منك اليوم؟',
          en: 'What would surprise that younger you about today?',
        },
        {
          ar: 'وما الذي بقي فيك من ذلك العمر؟',
          en: 'What part of that age is still in you?',
        },
      ],
    },
    {
      id: 'deep-003',
      subtopic: 'self',
      depth: 'medium',
      text: {
        ar: 'ما الكلمة التي يصفك بها المقرّبون غالبًا، وهل هي دقيقة في رأيك؟',
        en: 'What word do the people closest to you often use to describe you, and is it accurate?',
      },
      followUps: [
        { ar: 'وما الكلمة التي تصفك بدقة أكبر؟', en: 'What word would describe you better?' },
        { ar: 'وأيّ كلمة أختارها أنا لك؟', en: 'And which word would I choose for you?' },
      ],
    },
    {
      id: 'deep-004',
      subtopic: 'self',
      depth: 'deep',
      text: {
        ar: 'ما الجانب منك الذي لا يعرفه إلا المقرّبون جدًا؟',
        en: 'What side of you do only your very closest people know?',
      },
      followUps: [
        { ar: 'ما الذي يجعله يظهر؟', en: 'What brings it out?' },
        {
          ar: 'وهل من رغبة في أن يراه الناس أكثر؟',
          en: 'Do you wish more people saw it?',
        },
      ],
    },
    {
      id: 'deep-005',
      subtopic: 'self',
      depth: 'medium',
      text: {
        ar: 'ما مصدر شجاعتك حين يغلبك التردد؟',
        en: 'Where does your courage come from when doubt takes over?',
      },
      followUps: [
        {
          ar: 'متى ظهرت هذه الشجاعة آخر مرة؟',
          en: 'When did that courage last show up?',
        },
      ],
    },
    {
      id: 'deep-006',
      subtopic: 'self',
      depth: 'deep',
      text: {
        ar: 'ما الجزء من قصتك الذي يستحق أن يُروى أكثر؟',
        en: 'What part of your story deserves to be told more often?',
      },
      followUps: [
        { ar: 'لماذا بقي بعيدًا عن الحكايات؟', en: 'Why has it stayed out of the stories?' },
        { ar: 'من يسعدك أن يسمعه؟', en: 'Who would you love to tell it to?' },
        { ar: 'هل نبدأ بروايته الآن؟', en: 'Shall we start telling it now?' },
      ],
    },
    {
      id: 'deep-007',
      subtopic: 'self',
      depth: 'medium',
      text: {
        ar: 'ما الذي يمنحك شعورًا بأنك على طبيعتك تمامًا؟',
        en: 'What makes you feel completely like yourself?',
      },
      followUps: [
        { ar: 'مع من يحدث ذلك أكثر؟', en: 'Who are you with when that happens?' },
        { ar: 'وفي أي مكان؟', en: 'And where?' },
      ],
    },
    {
      id: 'deep-008',
      subtopic: 'self',
      depth: 'deep',
      text: {
        ar: 'ما الدرس الذي استغرق فهمه وقتًا طويلًا في حياتك؟',
        en: 'What lesson took you a long time to learn?',
      },
      followUps: [{ ar: 'وما الذي جعله يتضح أخيرًا؟', en: 'What finally made it click?' }],
    },
    {
      id: 'deep-009',
      subtopic: 'life',
      depth: 'medium',
      text: {
        ar: 'ما الرأي الذي تغيّر عندك مع الوقت، وما الذي غيّره؟',
        en: 'What opinion of yours has changed over time, and what changed it?',
      },
      followUps: [
        { ar: 'هل كان التغيير سهلًا؟', en: 'Was it an easy change?' },
        {
          ar: 'وما الرأي الذي ما زال ثابتًا مهما حدث؟',
          en: 'And which opinion has stayed firm no matter what?',
        },
      ],
    },
    {
      id: 'deep-010',
      subtopic: 'life',
      depth: 'deep',
      text: {
        ar: 'ما الأثر الذي يأمل قلبك أن يتركه في من حولك؟',
        en: 'What mark do you hope to leave on the people around you?',
      },
      followUps: [{ ar: 'ما الذي يقرّبك منه أكثر؟', en: 'What brings you closer to it?' }],
    },
    {
      id: 'deep-011',
      subtopic: 'life',
      depth: 'medium',
      text: {
        ar: 'من الغريب الذي ترك فيك أثرًا جميلًا في لقاء عابر؟',
        en: 'What stranger left a lovely mark on you in a passing encounter?',
      },
      followUps: [
        { ar: 'أين كان ذلك؟', en: 'Where did it happen?' },
        {
          ar: 'وهل تغيّر بعدها شيء في طريقتك مع الناس؟',
          en: 'Did it change anything in how you treat people?',
        },
      ],
    },
    {
      id: 'deep-012',
      subtopic: 'life',
      depth: 'medium',
      text: {
        ar: 'ما القرار الصغير الذي تبيّن لاحقًا أنه كبير جدًا؟',
        en: 'What small decision turned out to be a huge one?',
      },
      followUps: [
        { ar: 'متى اتضح لك حجمه الحقيقي؟', en: 'When did you see how big it really was?' },
        { ar: 'وما الذي علّمك إياه؟', en: 'And what did it teach you?' },
      ],
    },
    {
      id: 'deep-013',
      subtopic: 'life',
      depth: 'deep',
      text: {
        ar: 'ما الذي تعنيه كلمة «البيت» بالنسبة إليك، بعيدًا عن الجدران؟',
        en: 'What does "home" mean to you, beyond the walls?',
      },
      followUps: [
        { ar: 'في أي لحظة كان هذا الشعور أقوى؟', en: 'When have you felt it most strongly?' },
        { ar: 'ومن يحمل لك هذا المعنى؟', en: 'Who feels like home to you?' },
      ],
    },
    {
      id: 'deep-014',
      subtopic: 'life',
      depth: 'medium',
      text: {
        ar: 'ما أجمل درس جاءك من شخص أصغر منك سنًّا؟',
        en: 'What is the best lesson that came to you from someone younger than you?',
      },
      followUps: [
        { ar: 'كيف وصلك هذا الدرس؟', en: 'How did it reach you?' },
        {
          ar: 'هل عرف صاحبه بذلك؟',
          en: 'Does that person know?',
        },
        { ar: 'وهل يظهر أثره في يومك؟', en: 'Does it show up in your days?' },
      ],
    },
    {
      id: 'deep-015',
      subtopic: 'life',
      depth: 'deep',
      text: {
        ar: 'ما الذي لا يُشترى بالمال، ويملأ حياتك غنًى حقيقيًا؟',
        en: "What can't be bought, yet makes your life truly rich?",
      },
      followUps: [
        { ar: 'متى حضر هذا الشعور آخر مرة؟', en: 'When did you last feel that?' },
        { ar: 'وهل يمكن أن نصنع منه المزيد معًا؟', en: 'Could we make more of it together?' },
      ],
    },
    {
      id: 'deep-016',
      subtopic: 'life',
      depth: 'medium',
      text: {
        ar: 'ما الإنجاز الصغير في أيامنا الذي يستحق أن نفرح به أكثر؟',
        en: 'What small everyday win of ours deserves more joy than we give it?',
      },
      followUps: [
        { ar: 'كيف نفرح به ببساطة؟', en: 'How could we mark it, simply?' },
        { ar: 'هل نبدأ هذا الأسبوع؟', en: 'Shall we start this week?' },
      ],
    },
    {
      id: 'deep-017',
      subtopic: 'life',
      depth: 'deep',
      text: {
        ar: 'ما معنى النجاح في نظرك اليوم، وكيف اختلف عن معناه في الماضي؟',
        en: 'What does success mean to you today, and how has that changed?',
      },
      followUps: [{ ar: 'من أين جاء المعنى القديم؟', en: 'Where did the old meaning come from?' }],
    },
    {
      id: 'deep-018',
      subtopic: 'feelings',
      depth: 'medium',
      text: {
        ar: 'ما الذي يُشعرك بالفخر بنفسك في يوم عادي؟',
        en: 'What makes you feel proud of yourself on an ordinary day?',
      },
      followUps: [
        { ar: 'هل يحدث ذلك كثيرًا؟', en: 'Does it happen often?' },
        { ar: 'وهل يسعدك أن أنتبه إليه أكثر؟', en: 'Would you like me to notice it more?' },
      ],
    },
    {
      id: 'deep-019',
      subtopic: 'feelings',
      depth: 'deep',
      text: {
        ar: 'متى يكون الصمت بيننا مريحًا، ومتى يكون ثقيلًا؟',
        en: 'When does silence between us feel comfortable, and when does it feel heavy?',
      },
      followUps: [
        { ar: 'ما الذي يكسر الصمت الثقيل بلطف؟', en: 'What gently breaks a heavy silence?' },
        { ar: 'وما أجمل صمت جمعنا؟', en: 'And what is the loveliest silence we have shared?' },
      ],
    },
    {
      id: 'deep-020',
      subtopic: 'feelings',
      depth: 'medium',
      text: {
        ar: 'ما الذي يُطمئنك حين يتسلّل القلق إليك؟',
        en: 'What calms you when worry creeps in?',
      },
      followUps: [{ ar: 'هل من شخص أو مكان بعينه؟', en: 'A particular person or place?' }],
    },
    {
      id: 'deep-021',
      subtopic: 'feelings',
      depth: 'deep',
      text: {
        ar: 'ما اللحظة بيننا التي ما زالت تُدفئ قلبك كلما خطرت ببالك؟',
        en: 'What moment between us still warms your heart whenever it comes to mind?',
      },
      followUps: [
        { ar: 'ما أوضح تفصيلة فيها؟', en: 'What detail is the clearest?' },
        {
          ar: 'هل عرفتُ وقتها كم كان أثرها فيك؟',
          en: 'Did I know back then how much it meant to you?',
        },
      ],
    },
    {
      id: 'deep-022',
      subtopic: 'feelings',
      depth: 'medium',
      text: {
        ar: 'ما القصيدة أو الكلمات التي تقول ما في قلبك أفضل من أي كلام؟',
        en: 'What poem or words say what is in your heart better than anything else?',
      },
      followUps: [
        { ar: 'أيّ سطر فيها تحديدًا؟', en: 'Which line exactly?' },
        { ar: 'هل نقرؤها معًا الآن؟', en: 'Shall we read it together now?' },
      ],
    },
    {
      id: 'deep-023',
      subtopic: 'feelings',
      depth: 'deep',
      text: {
        ar: 'ما الشعور الذي يزورك في آخر الليل أكثر من غيره؟',
        en: 'What feeling visits you most often late at night?',
      },
      followUps: [
        { ar: 'ما الذي يجلبه عادةً؟', en: 'What usually brings it on?' },
        {
          ar: 'وهل يسعدك أن نتحدث عنه حين يأتي؟',
          en: 'Would you like us to talk about it when it comes?',
        },
      ],
    },
    {
      id: 'deep-024',
      subtopic: 'feelings',
      depth: 'medium',
      text: {
        ar: 'ما الذي يملأ قلبك امتنانًا هذه الأيام؟',
        en: 'What fills your heart with gratitude these days?',
      },
      followUps: [
        { ar: 'هل وصل هذا الشكر إلى صاحبه؟', en: 'Has that thanks reached the person behind it?' },
      ],
    },
    {
      id: 'deep-025',
      subtopic: 'feelings',
      depth: 'deep',
      text: {
        ar: 'ما الحديث الذي يسعدك أن يكثر بيننا، لكنه نادرًا ما يجد وقته؟',
        en: 'What kind of conversation would you love us to have more often, though it rarely finds its moment?',
      },
      followUps: [
        { ar: 'ما الذي يؤجّله عادةً؟', en: 'What usually puts it off?' },
        { ar: 'هل نبدأه الآن؟', en: 'Shall we start it now?' },
      ],
    },
  ],
}
