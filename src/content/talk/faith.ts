import type { Topic } from '../../types/content'

export const faith: Topic = {
  id: 'faith',
  section: 'talk',
  tone: 'mint',
  title: { ar: 'إيماننا', en: 'Our faith' },
  description: {
    ar: 'أحاديث هادئة عن الصلاة والدعاء ورمضان، وعن طريق نمشيه معًا إلى الله.',
    en: "Gentle talks about prayer, du'a and Ramadan, and the path we walk together toward Allah.",
  },
  subtopics: [
    { id: 'worship', title: { ar: 'الصلاة والذكر', en: 'Prayer & dhikr' } },
    { id: 'quran-dua', title: { ar: 'القرآن والدعاء', en: "Quran & du'a" } },
    { id: 'ramadan-eid', title: { ar: 'رمضان والعيد', en: 'Ramadan & Eid' } },
    { id: 'together', title: { ar: 'نحو الجنة معًا', en: 'Toward Jannah together' } },
  ],
  questions: [
    /* ---------- Prayer & dhikr ---------- */
    {
      id: 'faith-027',
      subtopic: 'worship',
      depth: 'light',
      text: {
        ar: 'أيّ ركن في بيتنا تحلو فيه الصلاة برأيك؟',
        en: 'Which corner of our home feels best for prayer, in your view?',
      },
      followUps: [
        { ar: 'ما الذي يجعله أهدأ؟', en: 'What would make it even calmer?' },
        { ar: 'هل نجهّزه معًا هذا الأسبوع؟', en: 'Shall we set it up together this week?' },
      ],
    },
    {
      id: 'faith-028',
      subtopic: 'worship',
      depth: 'light',
      text: {
        ar: 'غير الحرمين، أيّ مسجد في العالم يسعدك أن نزوره معًا في رحلة يومًا ما؟',
        en: 'Besides the two Holy Mosques, which mosque in the world would you love us to visit on a trip someday?',
      },
      followUps: [
        { ar: 'ما الذي يشدّك إليه؟', en: 'What draws you to it?' },
        { ar: 'وماذا نزور حوله؟', en: 'And what else would we see nearby?' },
      ],
    },
    {
      id: 'faith-031',
      subtopic: 'worship',
      depth: 'light',
      text: {
        ar: 'ما أقدم ذكرى لك مع الصلاة؟',
        en: 'What is your earliest memory of prayer?',
      },
      followUps: [
        { ar: 'من كان بجانبك حينها؟', en: 'Who was beside you then?' },
        {
          ar: 'هل نخصّه بدعوة الليلة؟',
          en: "Shall we make a special du'a for them tonight?",
        },
      ],
    },
    {
      id: 'faith-003',
      subtopic: 'worship',
      depth: 'medium',
      text: {
        ar: 'ما الذي يجعل صلاتنا معًا في البيت لحظة جميلة برأيك؟',
        en: 'What do you think makes praying together at home a lovely moment?',
      },
      followUps: [
        {
          ar: 'هل يسعدك أن نجعل لها موعدًا ثابتًا؟',
          en: 'Would you like us to give it a regular time?',
        },
        {
          ar: 'وما الذكر الذي يسعدك أن نختم به؟',
          en: 'And which dhikr would you love us to close with?',
        },
      ],
    },
    {
      id: 'faith-004',
      subtopic: 'worship',
      depth: 'medium',
      text: {
        ar: 'ما الذكر الذي يرافقك في يومك أكثر من غيره؟',
        en: 'Which dhikr stays with you most through your day?',
      },
      followUps: [
        { ar: 'متى يحضر على لسانك عادةً؟', en: 'When does it usually come to you?' },
        { ar: 'ومن علّمك إياه أول مرة؟', en: 'And who first taught it to you?' },
      ],
    },
    {
      id: 'faith-005',
      subtopic: 'worship',
      depth: 'deep',
      text: {
        ar: 'ما اللحظة التي شعر فيها قلبك بقرب خاص من الله؟',
        en: 'When did your heart feel especially close to Allah?',
      },
      followUps: [
        { ar: 'ما الذي بقي معك من تلك اللحظة؟', en: 'What stayed with you from that moment?' },
        {
          ar: 'هل يسعدك أن نصنع لحظات تشبهها معًا؟',
          en: 'Would you like us to make more moments like it together?',
        },
      ],
    },
    {
      id: 'faith-006',
      subtopic: 'worship',
      depth: 'medium',
      text: {
        ar: 'ما العمل الصالح الصغير الذي يسعدك أن نجعله عادة بيننا؟',
        en: 'What small good deed would you love us to make a habit?',
      },
      followUps: [
        { ar: 'كل يوم أم كل أسبوع؟', en: 'Daily or weekly?' },
        { ar: 'ومن أين نبدأ؟', en: 'And where do we start?' },
      ],
    },

    /* ---------- Quran & du'a ---------- */
    {
      id: 'faith-029',
      subtopic: 'quran-dua',
      depth: 'light',
      text: {
        ar: 'ما السورة التي يسعدك أن نحفظها معًا؟',
        en: 'Which surah would you love us to memorize together?',
      },
      followUps: [
        { ar: 'كم آية نحفظ كل يوم؟', en: 'How many verses a day?' },
        { ar: 'ومن يُسمّع للآخر أولًا؟', en: 'And who recites it to the other first?' },
      ],
    },
    {
      id: 'faith-008',
      subtopic: 'quran-dua',
      depth: 'medium',
      text: {
        ar: 'ما الآية التي تحضرك كثيرًا هذه الأيام؟',
        en: 'Which verse comes to mind often for you these days?',
      },
      followUps: [
        { ar: 'في أي لحظة تحضرك عادةً؟', en: 'When does it usually come to you?' },
        { ar: 'وما الذي تعنيه لك؟', en: 'And what does it mean to you?' },
      ],
    },
    {
      id: 'faith-009',
      subtopic: 'quran-dua',
      depth: 'light',
      text: {
        ar: 'ما الدعاء الذي يسعدك أن ندعو به معًا؟',
        en: "What du'a would you love us to make together?",
      },
      followUps: [
        { ar: 'متى يكون أجمل وقت له؟', en: 'When is the best time for it?' },
        { ar: 'وكيف وصلك هذا الدعاء أول مرة؟', en: "How did that du'a first reach you?" },
      ],
    },
    {
      id: 'faith-010',
      subtopic: 'quran-dua',
      depth: 'medium',
      text: {
        ar: 'أيّ قصة من قصص القرآن أقرب إلى قلبك؟',
        en: 'Which story from the Quran is closest to your heart?',
      },
      followUps: [
        { ar: 'ما الذي يلمسك فيها؟', en: 'What touches you in it?' },
        {
          ar: 'وما الدرس الذي نأخذه منها لحياتنا؟',
          en: 'And what lesson could we take from it for our life?',
        },
      ],
    },
    {
      id: 'faith-011',
      subtopic: 'quran-dua',
      depth: 'deep',
      text: {
        ar: 'ما الدعاء الذي يسعدك أن أدعو لك به؟',
        en: "What du'a would you love me to make for you?",
      },
      followUps: [
        { ar: 'هل أدعو لك به الليلة؟', en: 'Shall I make it for you tonight?' },
        { ar: 'وبماذا يسعدك الدعاء لي؟', en: 'And what would you love to pray for, for me?' },
      ],
    },
    {
      id: 'faith-012',
      subtopic: 'quran-dua',
      depth: 'medium',
      text: {
        ar: 'كيف يكون للقرآن وقت هادئ خاص في بيتنا برأيك؟',
        en: 'How could the Quran have a quiet time of its own in our home, in your view?',
      },
      followUps: [
        { ar: 'صباحًا أم مساءً؟', en: 'Morning or evening?' },
        { ar: 'هل نبدأ بصفحة واحدة في اليوم؟', en: 'Shall we start with one page a day?' },
      ],
    },

    /* ---------- Ramadan & Eid ---------- */
    {
      id: 'faith-013',
      subtopic: 'ramadan-eid',
      depth: 'light',
      text: {
        ar: 'ما الطبق الذي لا يكتمل إفطار رمضان بدونه برأيك؟',
        en: 'What dish makes a Ramadan iftar complete, in your view?',
      },
      followUps: [
        { ar: 'من يُعدّه أفضل من الجميع؟', en: 'Who makes it best?' },
        { ar: 'هل نُعدّه معًا هذا العام؟', en: 'Shall we make it together this year?' },
      ],
    },
    {
      id: 'faith-014',
      subtopic: 'ramadan-eid',
      depth: 'light',
      text: {
        ar: 'ما أجمل ما في صباح العيد بالنسبة إليك؟',
        en: 'What is the loveliest part of Eid morning for you?',
      },
      followUps: [
        {
          ar: 'وما العادة التي يسعدك أن نحافظ عليها فيه؟',
          en: 'Which Eid habit would you love us to keep?',
        },
        { ar: 'ومن أول من يسعدك أن نزوره؟', en: 'And who would you love us to visit first?' },
      ],
    },
    {
      id: 'faith-015',
      subtopic: 'ramadan-eid',
      depth: 'medium',
      text: {
        ar: 'كيف يبدو رمضاننا المثالي معًا؟',
        en: 'What does our ideal Ramadan together look like?',
      },
      followUps: [
        { ar: 'أين نُفطر في أول يوم منه؟', en: 'Where would we have our first iftar?' },
        {
          ar: 'وكيف نحمي وقته من الانشغال؟',
          en: 'And how do we protect its time from busyness?',
        },
      ],
    },
    {
      id: 'faith-030',
      subtopic: 'ramadan-eid',
      depth: 'light',
      text: {
        ar: 'ما الذي يجعل السحور معًا لحظة ننتظرها برأيك؟',
        en: 'What would make suhoor together a moment we look forward to?',
      },
      followUps: [
        {
          ar: 'حديث هادئ، أم دعاء، أم طبق مفضّل؟',
          en: "A quiet talk, a du'a or a favorite dish?",
        },
        { ar: 'ومن منا يوقظ الآخر؟', en: 'And which of us wakes the other?' },
      ],
    },
    {
      id: 'faith-017',
      subtopic: 'ramadan-eid',
      depth: 'light',
      text: {
        ar: 'من يسعدك أن ندعوه إلى الإفطار معنا في رمضان القادم؟',
        en: 'Who would you love us to invite for iftar next Ramadan?',
      },
      followUps: [
        { ar: 'وما الطبق الذي نُعدّه لهم؟', en: 'What dish would we make for them?' },
        { ar: 'هل نجعلها عادة كل رمضان؟', en: 'Shall we make it a habit every Ramadan?' },
      ],
    },
    {
      id: 'faith-018',
      subtopic: 'ramadan-eid',
      depth: 'medium',
      text: {
        ar: 'ما المعنى الذي يحمله لك عيد الأضحى؟',
        en: 'What does Eid al-Adha mean to you?',
      },
      followUps: [
        { ar: 'هل من ذكرى منه ما زالت حاضرة؟', en: 'Is there a memory of it that stays with you?' },
        {
          ar: 'كيف نجعل عيدنا القادم أقرب إلى معناه؟',
          en: 'How could we bring our next Eid closer to its meaning?',
        },
      ],
    },
    {
      id: 'faith-019',
      subtopic: 'ramadan-eid',
      depth: 'deep',
      text: {
        ar: 'ما الذي يسعدك أن يبقى معنا من رمضان بعد أن يرحل؟',
        en: 'What would you love us to keep from Ramadan after it leaves?',
      },
      followUps: [
        { ar: 'ما أصغر خطوة تحفظه؟', en: "What's the smallest step that keeps it alive?" },
        { ar: 'وكيف يذكّر أحدنا الآخر بلطف؟', en: 'And how can we gently remind each other?' },
      ],
    },

    /* ---------- Toward Jannah together ---------- */
    {
      id: 'faith-020',
      subtopic: 'together',
      depth: 'light',
      text: {
        ar: 'ما الموقف من سيرة النبي ﷺ مع أهله الذي يُدفئ قلبك؟',
        en: "Which moment from the Prophet's ﷺ life with his family warms your heart?",
      },
      followUps: [
        { ar: 'ما الذي يعلّمنا إياه عن البيت؟', en: 'What does it teach us about home?' },
        {
          ar: 'هل نعيش شيئًا منه هذا الأسبوع؟',
          en: 'Shall we live a little of it this week?',
        },
      ],
    },
    {
      id: 'faith-021',
      subtopic: 'together',
      depth: 'medium',
      text: {
        ar: 'أيّ خُلق من أخلاق النبي ﷺ يسعدك أن يكبر فينا معًا؟',
        en: "Which trait of the Prophet's ﷺ character would you love to see grow in us?",
      },
      followUps: [
        { ar: 'أين نحتاجه أكثر في يومنا؟', en: 'Where do we need it most in our days?' },
        { ar: 'وما أول خطوة نحوه؟', en: 'And what is the first step toward it?' },
      ],
    },
    {
      id: 'faith-022',
      subtopic: 'together',
      depth: 'medium',
      text: {
        ar: 'ما النعمة التي ننسى أن نشكر الله عليها برأيك؟',
        en: 'Which blessing do you think we forget to thank Allah for?',
      },
      followUps: [
        {
          ar: 'كيف نشكرها بالعمل لا بالقول فقط؟',
          en: 'How could we give thanks with deeds, not just words?',
        },
        { ar: 'هل نقول الحمد لله عليها الآن؟', en: 'Shall we say alhamdulillah for it right now?' },
      ],
    },
    {
      id: 'faith-023',
      subtopic: 'together',
      depth: 'medium',
      text: {
        ar: 'ما الصدقة الصغيرة التي يسعدك أن نجعلها سرًّا بيننا وبين الله؟',
        en: 'What small charity would you love us to keep quietly between us and Allah?',
      },
      followUps: [
        { ar: 'لمن تكون؟', en: 'Who would it be for?' },
        { ar: 'كل أسبوع أم كل شهر؟', en: 'Weekly or monthly?' },
      ],
    },
    {
      id: 'faith-025',
      subtopic: 'together',
      depth: 'deep',
      text: {
        ar: 'ما الذي يسعدك أن نسعى إليه معًا لآخرتنا؟',
        en: 'What would you love us to strive for together for our hereafter?',
      },
      followUps: [
        { ar: 'ما أول خطوة صغيرة نحوه؟', en: 'What is a small first step toward it?' },
        { ar: 'وكيف يعين أحدنا الآخر عليه؟', en: 'And how can we help each other with it?' },
      ],
    },
    {
      id: 'faith-026',
      subtopic: 'together',
      depth: 'deep',
      text: {
        ar: 'ما الذي يملأ قلبك شوقًا حين نتحدث عن الجنة؟',
        en: 'What fills your heart with longing when we talk about Jannah?',
      },
      followUps: [
        {
          ar: 'هل من آية عنها قريبة إلى قلبك؟',
          en: 'Is there a verse about it close to your heart?',
        },
        {
          ar: 'وما الذي يسعدك أن نرجوه فيها معًا؟',
          en: 'And what would you love us to hope for there together?',
        },
      ],
    },
  ],
}
