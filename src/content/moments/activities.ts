import type { Activity } from '../../types/content'

export const activities: Activity[] = [
  /* ---------- quick: 5-minute moments ---------- */
  {
    id: 'moment-001',
    category: 'quick',
    title: { ar: 'ثلاثة أشياء جميلة', en: 'Three good things' },
    description: {
      ar: 'تبادلا ثلاثة أشياء صغيرة جعلت يومكما أجمل، مهما بدت بسيطة.',
      en: 'Share three small things that made your day better, however simple they seem.',
    },
    minutes: 5,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-002',
    category: 'quick',
    title: { ar: 'شكرًا على…', en: 'Thank you for…' },
    description: {
      ar: 'ليشكر كل منكما الآخر على شيء محدد فعله مؤخرًا، ولو كان تفصيلًا صغيرًا لم ينتبه إليه أحد.',
      en: 'Each of you thanks the other for one specific thing they did recently, even a tiny detail nobody noticed.',
    },
    minutes: 5,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-003',
    category: 'quick',
    title: { ar: 'إهداء صوتي', en: 'A little dedication' },
    description: {
      ar: 'ليختر كل منكما بيت شعر أو حكمة جميلة تذكّره بالآخر، ثم تبادلا الإهداءين.',
      en: 'Each of you picks a line of poetry or a beautiful saying that reminds you of the other, then share them.',
    },
    steps: [
      {
        ar: 'ليختر كل منكما إهداءه سرًّا.',
        en: 'Each of you picks yours in secret.',
      },
      {
        ar: 'اقرآ الإهداءين بصوت مسموع، واحدًا تلو الآخر.',
        en: 'Read them out loud, one after the other.',
      },
      {
        ar: 'ليقل كل منكما في جملة واحدة لماذا اختاره.',
        en: 'Each of you says, in one sentence, why you chose it.',
      },
    ],
    minutes: 5,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-004',
    category: 'quick',
    title: { ar: 'ورقة مخبّأة', en: 'A hidden note' },
    description: {
      ar: 'ليكتب كل منكما ورقة صغيرة لطيفة ويخبّئها في مكان سيجدها فيه الآخر لاحقًا، في جيب أو كتاب أو حقيبة.',
      en: 'Each of you writes a small sweet note and hides it where the other will find it later: a pocket, a book or a bag.',
    },
    minutes: 5,
    modes: ['together'],
  },
  {
    id: 'moment-005',
    category: 'quick',
    title: { ar: 'ثلاث كلمات', en: 'Three words' },
    description: {
      ar: 'ليصف كل منكما الآخر بثلاث كلمات فقط، ثم اشرحا سبب اختيار كل كلمة.',
      en: 'Each of you describes the other in just three words, then explain why you picked each one.',
    },
    minutes: 5,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-006',
    category: 'quick',
    title: { ar: 'كوبان دافئان', en: 'Two warm cups' },
    description: {
      ar: 'حضّرا مشروبًا دافئًا واشرباه معًا، ولو عبر الشاشة، دون أي حديث عن العمل أو المهام.',
      en: 'Make a warm drink and sip it together, even through a screen, with no talk of work or to-do lists.',
    },
    minutes: 5,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-007',
    category: 'quick',
    title: { ar: 'لقطة الأسبوع', en: 'Snapshot of the week' },
    description: {
      ar: 'ليختر كل منكما صورة التقطها هذا الأسبوع لمكان أو طعام أو سماء، ويعرضها على الآخر، ثم تحدّثا عن الحكاية التي خلفها.',
      en: 'Each of you picks a photo you took this week of a place, a meal or the sky and shows it to the other, then talk about the story behind it.',
    },
    minutes: 5,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-008',
    category: 'quick',
    title: { ar: 'أمنية للغد', en: 'A wish for tomorrow' },
    description: {
      ar: 'ليقل كل منكما شيئًا واحدًا يتمنى أن يحدث غدًا، ثم فكّرا كيف يمكن أن يساعد أحدكما الآخر فيه، وليدعُ كل منكما للآخر به.',
      en: "Each of you names one thing you hope happens tomorrow, then think about how you could help each other with it, and make du'a for each other.",
    },
    minutes: 5,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-009',
    category: 'quick',
    title: { ar: 'رسالة صوتية للأيام الصعبة', en: 'A voice note for hard days' },
    description: {
      ar: 'سجّلا رسالة صوتية قصيرة يقول فيها كل منكما ما يحبه في الآخر، واحتفظا بها ليوم يحتاج فيه أحدكما إلى سماعها.',
      en: 'Record a short voice note where each of you says what you love about the other, and save it for a day one of you needs to hear it.',
    },
    minutes: 5,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-059',
    category: 'quick',
    title: { ar: 'قائمة الدعاء', en: "A du'a list" },
    description: {
      ar: 'ليكتب كل منكما ثلاثة أشياء يحب أن يدعو له الآخر بها، ثم تبادلا القائمتين واحفظاها لأوقات الدعاء.',
      en: "Each of you writes three things you'd love the other to make du'a for, then swap lists and keep them for your prayers.",
    },
    minutes: 5,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-065',
    category: 'quick',
    title: { ar: 'صلاة معًا', en: 'Pray together' },
    description: {
      ar: 'صلّيا صلاة معًا في البيت، ثم ليدعُ كل منكما للآخر بدعاء من القلب.',
      en: "Pray one prayer together at home, then each of you makes a heartfelt du'a for the other.",
    },
    minutes: 10,
    modes: ['together'],
  },

  /* ---------- date: date ideas ---------- */
  {
    id: 'moment-010',
    category: 'date',
    title: { ar: 'نزهة على الأرض', en: 'An indoor picnic' },
    description: {
      ar: 'افرشا غطاءً على الأرض، وحضّرا أطباقًا خفيفة، واستمتعا بنزهة كاملة دون أن تغادرا الغرفة.',
      en: 'Spread a blanket on the floor, set out some light bites and enjoy a full picnic without leaving the room.',
    },
    steps: [
      {
        ar: 'اختارا ركنًا وافرشا فيه غطاءً ووسائد.',
        en: 'Pick a corner and lay out a blanket and cushions.',
      },
      {
        ar: 'ليحضّر كل منكما طبقًا صغيرًا يفاجئ به الآخر.',
        en: 'Each of you makes one small dish to surprise the other.',
      },
      {
        ar: 'أطفئا الضوء القوي واستمتعا بأصوات الطبيعة أو بالهدوء.',
        en: 'Dim the bright lights and enjoy nature sounds or simple quiet.',
      },
    ],
    minutes: 60,
    modes: ['together'],
  },
  {
    id: 'moment-011',
    category: 'date',
    title: { ar: 'طبخة من العائلة', en: 'A family recipe' },
    description: {
      ar: 'اختارا وصفة تشتهر بها عائلة أحدكما واطبخاها معًا خطوة بخطوة، ولو كان كل منكما في مطبخه.',
      en: "Pick a recipe one of your families is known for and cook it together step by step, even if you're each in your own kitchen.",
    },
    steps: [
      {
        ar: 'اختارا الوصفة، واسألا أحد أفراد العائلة عن سرّها إن أمكن.',
        en: 'Choose the recipe, and ask a family member for its secret if you can.',
      },
      {
        ar: 'جهّزا المكونات قبل أن تبدآ.',
        en: 'Get the ingredients ready before you start.',
      },
      {
        ar: 'اطبخا في الوقت نفسه، وليتابع كل منكما خطوات الآخر.',
        en: "Cook at the same time, keeping an eye on each other's progress.",
      },
      {
        ar: 'تذوّقا النتيجة وقيّماها بصراحة ومحبة.',
        en: 'Taste the result and rate it, honestly and kindly.',
      },
    ],
    minutes: 90,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-013',
    category: 'date',
    title: { ar: 'نزهة الغروب', en: 'A sunset walk' },
    description: {
      ar: 'اخرجا قبل الغروب بقليل وامشيا بلا وجهة حتى تغيب الشمس. وإن كنتما بعيدين، فليمشِ كل منكما في حيّه وأنتما على اتصال.',
      en: "Head out just before sunset and walk with nowhere to be until the sun goes down. If you're apart, each of you walks your own street while on a call.",
    },
    steps: [
      {
        ar: 'اتركا الهاتف في الجيب إلا للمكالمة.',
        en: 'Keep your phones in your pockets, except for the call.',
      },
      {
        ar: 'صِفا لبعضكما ألوان السماء وهي تتغير.',
        en: 'Describe the colors of the sky to each other as they change.',
      },
      {
        ar: 'وعند أذان المغرب، صلّيا معًا، أو كلٌّ في مكانه.',
        en: 'When the adhan for Maghrib calls, pray together, or each where you are.',
      },
    ],
    minutes: 45,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-014',
    category: 'date',
    title: { ar: 'سائحان في مدينتكما', en: 'Tourists in your own city' },
    description: {
      ar: 'اذهبا إلى حيّ أو سوق لم تزوراه من قبل، وتصرّفا كسائحين يكتشفان المكان لأول مرة.',
      en: "Visit a neighborhood or market you've never been to, and act like tourists discovering it for the first time.",
    },
    steps: [
      {
        ar: 'اختارا مكانًا قريبًا لا تعرفانه جيدًا.',
        en: "Pick somewhere nearby you don't know well.",
      },
      {
        ar: 'جرّبا طعامًا أو مشروبًا محليًا رخيصًا.',
        en: 'Try a cheap local snack or drink.',
      },
      {
        ar: 'اشتريا تذكارًا صغيرًا رخيصًا، كما يفعل السياح تمامًا.',
        en: 'Buy a small, cheap souvenir, exactly like tourists do.',
      },
    ],
    minutes: 90,
    modes: ['together'],
  },
  {
    id: 'moment-015',
    category: 'date',
    title: { ar: 'جولة في متحف', en: 'A museum tour from the couch' },
    description: {
      ar: 'اختارا متحفًا للفن الإسلامي أو موقعًا تاريخيًا يتيح جولة افتراضية مجانية، وتجوّلا فيه معًا كأنكما هناك.',
      en: "Choose a museum of Islamic art or a historic site with a free virtual tour and wander through it together as if you're there.",
    },
    steps: [
      {
        ar: 'ابحثا عن جولة افتراضية مجانية واختارا واحدة.',
        en: 'Look up free virtual tours and pick one.',
      },
      {
        ar: 'تجوّلا ببطء، وتوقّفا عند كل ما يلفت انتباهكما.',
        en: 'Wander slowly, stopping at anything that catches your eye.',
      },
      {
        ar: 'ليختر كل منكما قطعته المفضّلة ويشرح السبب.',
        en: 'Each of you picks a favorite piece and explains why.',
      },
    ],
    minutes: 45,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-016',
    category: 'date',
    title: { ar: 'سهرة هادئة', en: 'A slow evening' },
    description: {
      ar: 'رتّبا سهرة بإضاءة خافتة ومشروب دافئ وطبق حلوى. وإن صادفت ليالي رمضان، فلتكن بعد الإفطار أو على السحور.',
      en: 'Set up an evening with soft lights, a warm drink and something sweet. If it falls during Ramadan, make it after iftar or over suhoor.',
    },
    steps: [
      {
        ar: 'اختارا حلوى تحبانها، تقليدية كانت أو بسيطة.',
        en: 'Pick a dessert you both like, traditional or simple.',
      },
      {
        ar: 'أطفئا الأضواء القوية وأشعلا فانوسًا أو ضوءًا خافتًا.',
        en: 'Turn off the bright lights and switch on a lantern or a soft lamp.',
      },
      {
        ar: 'ليحضر كل منكما حكاية أو موضوعًا يحب الحديث عنه.',
        en: 'Each of you brings a story or a topic you love talking about.',
      },
    ],
    minutes: 60,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-018',
    category: 'date',
    title: { ar: 'قراءة بصوت عالٍ', en: 'Read-aloud night' },
    description: {
      ar: 'اختارا قصة قصيرة أو فصلًا من كتاب، واقرآه بصوتيكما بالتناوب، صفحة لكل منكما.',
      en: 'Pick a short story or a chapter from a book and read it aloud, taking turns one page each.',
    },
    steps: [
      {
        ar: 'اختارا نصًّا قصيرًا يناسب مزاجكما الليلة.',
        en: "Choose a short text that suits tonight's mood.",
      },
      {
        ar: 'اقرآ بالتناوب، بتمهّل ونبرة تناسب القصة.',
        en: 'Take turns reading, slowly, in a tone that fits the story.',
      },
      {
        ar: 'تحدّثا عن الجملة التي بقيت في ذهن كل منكما.',
        en: 'Talk about the line that stayed with each of you.',
      },
    ],
    minutes: 30,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-056',
    category: 'date',
    title: { ar: 'ليلة الألغاز', en: 'Puzzle night' },
    description: {
      ar: 'تبادلا الأحاجي والألغاز، أو ركّبا معًا صورة مقطّعة لمنظر طبيعي، واستمتعا بالتفكير معًا بلا فائز ولا خاسر.',
      en: 'Trade riddles and brain teasers, or put together a jigsaw of a landscape, and enjoy thinking together with no winner and no loser.',
    },
    steps: [
      {
        ar: 'ليحضّر كل منكما خمسة ألغاز للآخر.',
        en: 'Each of you prepares five riddles for the other.',
      },
      {
        ar: 'إن كنتما في مكان واحد، فاختما السهرة بصورة مقطّعة تكملانها معًا.',
        en: "If you're in the same place, end with a jigsaw you finish together.",
      },
    ],
    minutes: 45,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-057',
    category: 'date',
    title: { ar: 'نزهة في الطبيعة', en: 'A picnic outdoors' },
    description: {
      ar: 'احملا سلة طعام بسيطة إلى حديقة أو مكان مفتوح هادئ، واقضيا وقتًا بين الشجر والهواء الطلق.',
      en: 'Pack a simple basket and head to a park or a quiet open spot to spend some time among the trees and fresh air.',
    },
    steps: [
      {
        ar: 'ليحضّر كل منكما شيئًا واحدًا للسلة دون أن يخبر الآخر.',
        en: 'Each of you packs one thing for the basket without telling the other.',
      },
      {
        ar: 'اختارا مكانًا هادئًا بعيدًا عن الزحام.',
        en: 'Pick a calm spot away from the crowds.',
      },
      {
        ar: 'ضعا الهاتفين جانبًا، واكتفيا بالحديث وأصوات الطبيعة.',
        en: 'Put your phones away and enjoy the talk and the sounds of nature.',
      },
    ],
    minutes: 90,
    modes: ['together'],
  },
  {
    id: 'moment-058',
    category: 'date',
    title: { ar: 'تلاوة معًا', en: 'Quran together' },
    description: {
      ar: 'اختارا سورة قصيرة أو صفحة من القرآن، واقرآها بالتناوب، ثم تحدّثا عمّا لمس قلب كل منكما فيها.',
      en: 'Choose a short surah or a page of the Quran, take turns reading it, then talk about what touched each of you in it.',
    },
    steps: [
      {
        ar: 'اختارا وقتًا هادئًا، بعد الفجر أو قبل النوم.',
        en: 'Pick a calm time, after Fajr or before bed.',
      },
      {
        ar: 'ليقرأ أحدكما آية ويستمع الآخر، ثم تبادلا.',
        en: 'One of you reads a verse while the other listens, then swap.',
      },
      {
        ar: 'استعينا بتفسير ميسّر لفهم آية واحدة على الأقل.',
        en: 'Use a simple tafsir to understand at least one verse.',
      },
    ],
    minutes: 20,
    modes: ['call', 'together'],
  },

  /* ---------- challenge: mini challenges ---------- */
  {
    id: 'moment-020',
    category: 'challenge',
    title: { ar: 'ثلاثة مكونات فقط', en: 'Three-ingredient challenge' },
    description: {
      ar: 'اختارا ثلاثة مكونات متوفرة لديكما، وليصنع كل منكما منها طبقًا صغيرًا في عشرين دقيقة.',
      en: 'Pick three ingredients you both have, and each of you makes a small dish from them in twenty minutes.',
    },
    steps: [
      {
        ar: 'اتفقا على المكونات الثلاثة، ويُسمح بالملح والزيت فقط إضافةً إليها.',
        en: 'Agree on the three ingredients. Salt and oil are the only extras allowed.',
      },
      {
        ar: 'ابدآ المؤقت واطبخا.',
        en: 'Start the timer and cook.',
      },
      {
        ar: 'اعرضا الطبقين وامنحا كل طبق اسمًا فاخرًا.',
        en: 'Present both dishes and give each one a fancy name.',
      },
    ],
    minutes: 30,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-021',
    category: 'challenge',
    title: { ar: 'شاعر لخمس دقائق', en: 'Poet for five minutes' },
    description: {
      ar: 'ليكتب كل منكما سطرين أو بيتين عن الآخر في خمس دقائق، ثم ألقياهما بأفضل أداء ممكن.',
      en: 'Each of you writes two lines of verse about the other in five minutes, then perform them as dramatically as you can.',
    },
    minutes: 15,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-022',
    category: 'challenge',
    title: { ar: 'قصة بالتناوب', en: 'One line each' },
    description: {
      ar: 'اصنعا قصة معًا: يقول أحدكما جملة، ويكملها الآخر بالجملة التالية، حتى تصلا إلى نهاية مضحكة.',
      en: 'Build a story together: one of you says a sentence, the other adds the next, until you reach a funny ending.',
    },
    steps: [
      {
        ar: 'ابدآ بجملة غريبة، مثل: «في صباح ذلك اليوم، استيقظت القطة وهي تتكلم».',
        en: 'Start with something odd, like: "That morning, the cat woke up talking."',
      },
      {
        ar: 'تبادلا الجمل بسرعة دون تفكير طويل.',
        en: 'Trade sentences quickly, without overthinking.',
      },
      {
        ar: 'اختارا عنوانًا للقصة في النهاية.',
        en: 'Give the story a title at the end.',
      },
    ],
    minutes: 15,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-023',
    category: 'challenge',
    title: { ar: 'تمثيل صامت', en: 'Silent acting' },
    description: {
      ar: 'ليمثّل كل منكما مثلًا شعبيًا أو مهنة أو موقفًا يوميًا دون أي كلمة، وعلى الآخر أن يخمّنه قبل انتهاء الدقيقة.',
      en: 'Each of you acts out a popular saying, a job or an everyday moment without a word, and the other has one minute to guess it.',
    },
    minutes: 20,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-024',
    category: 'challenge',
    title: { ar: 'سباق الأشياء', en: 'The fetch race' },
    description: {
      ar: 'ليطلب كل منكما من الآخر إحضار شيء بوصف معيّن، مثل «شيء أزرق» أو «شيء أقدم منكما»، خلال ثلاثين ثانية.',
      en: 'Take turns asking each other to fetch something that fits a description, like "something blue" or "something older than you both", within thirty seconds.',
    },
    minutes: 15,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-025',
    category: 'challenge',
    title: { ar: 'ممنوع الضحك', en: 'No laughing' },
    description: {
      ar: 'لينظر كل منكما في عيني الآخر دقيقة كاملة دون أن يضحك، ثم ليقل كل منكما للآخر مجاملة صادقة، ضحك أم لم يضحك.',
      en: "Look into each other's eyes for a full minute without laughing. Then, laugh or not, each of you gives the other a sincere compliment.",
    },
    minutes: 5,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-026',
    category: 'challenge',
    title: { ar: 'مهارة جديدة', en: 'A new little skill' },
    description: {
      ar: 'اختارا مهارة صغيرة، كطيّ الورق أو عقدة جديدة أو حرف بالخط العربي، وتعلّماها معًا من شرح قصير.',
      en: 'Pick a tiny skill, like paper folding, a new knot or one letter in Arabic calligraphy, and learn it together from a short guide.',
    },
    steps: [
      {
        ar: 'اختارا المهارة واقرآ الشرح مرة واحدة.',
        en: 'Choose the skill and go through the guide once.',
      },
      {
        ar: 'حاولا معًا، وساعدا بعضكما عند التعثر.',
        en: 'Try it together, and help each other when you get stuck.',
      },
      {
        ar: 'اعرضا النتيجة النهائية على بعضكما، مهما كانت.',
        en: 'Show each other the final result, whatever it looks like.',
      },
    ],
    minutes: 30,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-027',
    category: 'challenge',
    title: { ar: 'أسبوع اللطف الخفي', en: 'A week of secret kindness' },
    description: {
      ar: 'ليفعل كل منكما شيئًا لطيفًا صغيرًا للآخر كل يوم لمدة أسبوع دون أن يعلن عنه، ثم حاولا في النهاية تخمين كل ما حدث.',
      en: 'For one week, each of you does one small kind thing for the other every day without announcing it. At the end, try to guess everything.',
    },
    steps: [
      {
        ar: 'خطّطا الآن، كل على حدة، لسبعة أفعال صغيرة.',
        en: 'Right now, each of you secretly plans seven small gestures.',
      },
      {
        ar: 'نفّذا فعلًا واحدًا كل يوم بهدوء.',
        en: 'Carry out one each day, quietly.',
      },
      {
        ar: 'في اليوم السابع، اكشفا القائمتين وقارنا.',
        en: 'On day seven, reveal both lists and compare.',
      },
    ],
    minutes: 10,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-055',
    category: 'challenge',
    title: { ar: 'سباق ودّي', en: 'A friendly race' },
    description: {
      ar: 'اختارا مكانًا هادئًا وآمنًا بعيدًا عن الأعين، وتسابقا جريًا أو مشيًا سريعًا، كما سابق النبي ﷺ زوجته عائشة رضي الله عنها.',
      en: 'Find a quiet, safe spot away from other people and race each other, running or fast walking, just as the Prophet ﷺ raced his wife Aisha.',
    },
    steps: [
      {
        ar: 'اتفقا على خط البداية والنهاية.',
        en: 'Agree on a start and a finish line.',
      },
      {
        ar: 'أعيدا السباق بعد مدة، فربما يتغيّر الفائز.',
        en: 'Race again a few weeks later. The winner might change.',
      },
    ],
    minutes: 15,
    modes: ['together'],
  },
  {
    id: 'moment-064',
    category: 'challenge',
    title: { ar: 'رماية أو ركوب خيل', en: 'Archery or horse riding' },
    description: {
      ar: 'ابحثا عن مكان قريب يعلّم الرماية أو ركوب الخيل، وجرّبا معًا درسًا للمبتدئين.',
      en: 'Find a place nearby that teaches archery or horse riding, and try a beginner lesson together.',
    },
    steps: [
      {
        ar: 'اختارا مكانًا يناسب العائلات ويراعي الخصوصية.',
        en: 'Choose a place that suits families and respects privacy.',
      },
      {
        ar: 'تحدّثا بعدها عمّا أعجبكما، وهل تريدان العودة.',
        en: "Talk afterwards about what you enjoyed and whether you'd go back.",
      },
    ],
    minutes: 90,
    modes: ['together'],
  },

  /* ---------- memory: memory lane ---------- */
  {
    id: 'moment-028',
    category: 'memory',
    title: { ar: 'قصتنا من البداية', en: 'Our story, from the start' },
    description: {
      ar: 'ليحكِ كل منكما قصة لقائكما الأول من وجهة نظره، ولاحظا التفاصيل التي يتذكرها أحدكما وينساها الآخر.',
      en: 'Each of you tells the story of how you first met from your own point of view. Notice the details one remembers and the other forgot.',
    },
    minutes: 20,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-067',
    category: 'memory',
    title: { ar: 'رحلة في التذكارات', en: 'A trip through keepsakes' },
    description: {
      ar: 'اجمعا ما احتفظتما به من أيامكما معًا: تذكرة، أو ورقة، أو رسالة، أو هدية صغيرة، وليحكِ كل منكما ما يتذكره عن كل واحدة منها.',
      en: 'Gather the little things you have kept from your time together, a ticket, a note, a message or a small gift, and each of you shares what you remember about every one.',
    },
    steps: [
      {
        ar: 'ابدآ من أقدم تذكار لديكما.',
        en: 'Start from the oldest keepsake you have.',
      },
      {
        ar: 'اختارا عشرة تذكارات فقط، وهذا هو التحدي.',
        en: "Pick only ten. That's the hard part.",
      },
      {
        ar: 'اختارا من بينها تذكارًا واحدًا يكون «تذكار قصتكما».',
        en: 'Choose one of them to be "the keepsake of your story".',
      },
    ],
    minutes: 30,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-030',
    category: 'memory',
    title: { ar: 'صندوق الذكريات', en: 'A memory box' },
    description: {
      ar: 'اكتبا ذكريات جميلة جمعتكما على أوراق صغيرة، وضعاها في صندوق تفتحانه في يوم تحتاجان فيه إلى ابتسامة.',
      en: 'Write happy shared memories on small slips of paper and keep them in a box to open on a day you need a smile.',
    },
    steps: [
      {
        ar: 'ليكتب كل منكما خمس ذكريات على الأقل.',
        en: 'Each of you writes at least five memories.',
      },
      {
        ar: 'اطويا الأوراق دون أن تقرآها بعد.',
        en: 'Fold them up without reading them yet.',
      },
      {
        ar: 'زيّنا الصندوق واتفقا على مكانه.',
        en: 'Decorate the box and agree where it lives.',
      },
    ],
    minutes: 30,
    modes: ['together'],
  },
  {
    id: 'moment-068',
    category: 'memory',
    title: { ar: 'عودة إلى المكان', en: 'Back to the spot' },
    description: {
      ar: 'عودا إلى مكان من أيام زواجكما الأولى، مقهى أو حديقة أو طريق، واجلسا فيه من جديد، ثم تحدّثا عمّا تغيّر فيكما وما بقي كما هو.',
      en: 'Go back to a place from your first days of marriage, a café, a park or a street, and sit there again. Then talk about what has changed in you two and what has stayed the same.',
    },
    steps: [
      {
        ar: 'اطلبا الشيء نفسه الذي طلبتماه أول مرة، إن استطعتما تذكّره.',
        en: 'Order the same thing you had the first time, if you can remember it.',
      },
      {
        ar: 'ليذكر كل منكما تفصيلة واحدة يتذكرها عن تلك المرة.',
        en: 'Each of you names one detail you remember from that time.',
      },
    ],
    minutes: 60,
    modes: ['together'],
  },
  {
    id: 'moment-032',
    category: 'memory',
    title: { ar: 'خطّنا الزمني', en: 'Our timeline' },
    description: {
      ar: 'ارسما خطًّا على ورقة، وضعا عليه أهم المحطات في قصتكما، من أول لقاء حتى اليوم.',
      en: 'Draw a line on a sheet of paper and mark the biggest milestones in your story, from the first meeting until today.',
    },
    steps: [
      {
        ar: 'ليكتب كل منكما المحطات التي يتذكرها على حدة.',
        en: 'Each of you lists the milestones you remember, separately.',
      },
      {
        ar: 'اجمعا القائمتين على خط واحد.',
        en: 'Combine both lists on one line.',
      },
      {
        ar: 'اتركا مساحة فارغة في آخره لما سيأتي.',
        en: 'Leave some blank space at the end for what comes next.',
      },
    ],
    minutes: 30,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-033',
    category: 'memory',
    title: { ar: 'من أيام الطفولة', en: 'Back in childhood' },
    description: {
      ar: 'ليصف كل منكما ذكرى من طفولته، ومعها شيء منها إن وُجد، كلعبة قديمة أو دفتر مدرسي، ويحكِ ما يتذكره عن ذلك اليوم.',
      en: 'Each of you describes a childhood memory, with something from it if you still have it, like an old toy or a school notebook, and tells what you remember about that day.',
    },
    minutes: 20,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-034',
    category: 'memory',
    title: { ar: 'ذكريات العيد', en: 'Eid memories' },
    description: {
      ar: 'تبادلا أجمل ذكرى من أيام العيد أو رمضان في صغركما: الملابس الجديدة، والزيارات، والحلوى، والضحكات.',
      en: 'Share your favorite memory of Eid or Ramadan from when you were little: the new clothes, the visits, the sweets and the laughter.',
    },
    minutes: 20,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-035',
    category: 'memory',
    title: { ar: 'خريطة أماكننا', en: 'Our places map' },
    description: {
      ar: 'اذكرا الأماكن التي تحمل ذكرى لكما، من مقهى صغير إلى طريق مشيتما فيه، وضعا لكل منها علامة على الخريطة.',
      en: 'Name the places that hold a memory for you two, from a small café to a road you walked, and pin each one on a map.',
    },
    steps: [
      {
        ar: 'افتحا تطبيق خرائط وأنشئا قائمة باسمكما.',
        en: 'Open a maps app and create a list with your names.',
      },
      {
        ar: 'أضيفا كل مكان مع جملة قصيرة عن ذكراه.',
        en: 'Add each place with a short line about its memory.',
      },
    ],
    minutes: 20,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-036',
    category: 'memory',
    title: { ar: 'رسالة إلى البداية', en: 'A letter to the beginning' },
    description: {
      ar: 'ليكتب كل منكما رسالة قصيرة إلى نفسه يوم لقائكما الأول، يخبره فيها بما ينتظره، ثم اقرآ الرسالتين معًا.',
      en: 'Each of you writes a short letter to your past self on the day you first met, telling them what is coming, then read both together.',
    },
    minutes: 20,
    modes: ['call', 'together'],
  },

  /* ---------- dream: plan your dream day ---------- */
  {
    id: 'moment-037',
    category: 'dream',
    title: { ar: 'يومنا المثالي', en: 'Our perfect day' },
    description: {
      ar: 'خطّطا يومًا كاملًا من الصباح حتى المساء كأنه لا قيود فيه على الوقت أو المال، ثم اختارا منه جزءًا صغيرًا يمكن تحقيقه قريبًا.',
      en: 'Plan a whole day, morning to night, as if time and money were no object, then pick one small piece you could actually do soon.',
    },
    steps: [
      {
        ar: 'ابدآ بالصباح: أين تستيقظان، وماذا تفطران؟',
        en: 'Start with the morning: where do you wake up, and what is breakfast?',
      },
      {
        ar: 'ثم الظهيرة والمساء، بالتفصيل.',
        en: 'Then the afternoon and evening, in detail.',
      },
      {
        ar: 'اختارا جزءًا واحدًا وحدّدا له موعدًا.',
        en: 'Choose one piece and give it a date.',
      },
    ],
    minutes: 30,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-038',
    category: 'dream',
    title: { ar: 'رحلة الأحلام', en: 'The dream trip' },
    description: {
      ar: 'اختارا وجهة تحلمان بها، وخطّطا لرحلة من خمسة أيام: أين تقيمان، وماذا تأكلان، وما الذي لا بد أن تريانه.',
      en: "Pick a place you dream of and plan a five-day trip: where you'd stay, what you'd eat and what you can't miss.",
    },
    steps: [
      {
        ar: 'ليقترح كل منكما وجهتين، ثم اتفقا على واحدة.',
        en: 'Each of you suggests two destinations, then agree on one.',
      },
      {
        ar: 'وزّعا الأيام الخمسة بينكما، ليخطط كل منكما لبعضها.',
        en: 'Split the five days, so each of you plans some of them.',
      },
      {
        ar: 'اعرضا خطتيكما واجمعاهما في برنامج واحد.',
        en: 'Present your plans and merge them into one itinerary.',
      },
    ],
    minutes: 45,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-039',
    category: 'dream',
    title: { ar: 'جمعة هادئة مثالية', en: 'A perfect slow Friday' },
    description: {
      ar: 'صِفا معًا جمعة بلا مواعيد ولا التزامات سوى صلاة الجمعة: متى تستيقظان، وماذا تأكلان، وكيف تمضي ساعاتها بهدوء.',
      en: "Describe together a Friday with no plans beyond Jumu'ah: when you wake up, what you eat and how the hours drift by.",
    },
    minutes: 20,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-040',
    category: 'dream',
    title: { ar: 'ركن يشبهنا', en: 'A corner that feels like us' },
    description: {
      ar: 'تخيّلا ركنًا صغيرًا يشبهكما، للقراءة أو القهوة أو الحديث، واختارا ألوانه وأثاثه وإضاءته.',
      en: 'Imagine a small corner that feels like you two, for reading, coffee or long talks, and choose its colors, furniture and lighting.',
    },
    steps: [
      {
        ar: 'ليجمع كل منكما من الإنترنت ثلاث صور لأركان تلهمه.',
        en: 'Each of you finds three photos of cozy corners online that inspire you.',
      },
      {
        ar: 'قارنا الصور وابحثا عمّا يجمع بينها.',
        en: 'Compare them and look for what they share.',
      },
      {
        ar: 'اتفقا على ثلاثة عناصر أساسية لركنكما.',
        en: 'Agree on three key pieces for your corner.',
      },
    ],
    minutes: 30,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-041',
    category: 'dream',
    title: { ar: 'قائمة العشرة', en: 'Our top ten' },
    description: {
      ar: 'اكتبا معًا عشرة أشياء تودّان تجربتها معًا يومًا ما، من أبسطها إلى أكثرها مغامرة.',
      en: "Write a list of ten things you'd love to try together someday, from the simplest to the most adventurous.",
    },
    steps: [
      {
        ar: 'ليقترح كل منكما خمسة أشياء.',
        en: 'Each of you suggests five.',
      },
      {
        ar: 'رتّبا القائمة من الأسهل إلى الأصعب.',
        en: 'Order the list from easiest to hardest.',
      },
      {
        ar: 'اختارا أول بند وحدّدا متى تبدآن.',
        en: 'Pick the first item and decide when to start.',
      },
    ],
    minutes: 30,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-042',
    category: 'dream',
    title: { ar: 'مائدة الأحلام', en: 'The dream dinner' },
    description: {
      ar: 'صمّما معًا قائمة عشاء مثالية: مقبلات وطبق رئيسي وحلوى ومشروب، ثم اختارا طبقًا منها لتطبخاه قريبًا.',
      en: 'Design a perfect dinner menu together, with a starter, a main, a dessert and a drink, then pick one dish to cook soon.',
    },
    minutes: 20,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-043',
    category: 'dream',
    title: { ar: 'بعد عام من اليوم', en: 'One year from today' },
    description: {
      ar: 'تخيّلا أنكما تجلسان بعد عام من الآن وتتذكران هذه السنة. ما الذي تتمنيان أن تقولاه عنها؟',
      en: 'Imagine sitting together a year from now, looking back on this year. What do you hope you will say about it?',
    },
    steps: [
      {
        ar: 'ليكتب كل منكما ثلاثة أشياء يتمنى أن تكون قد حدثت.',
        en: 'Each of you writes three things you hope will have happened.',
      },
      {
        ar: 'قارنا القائمتين وابحثا عن المشترك.',
        en: 'Compare your lists and look for overlap.',
      },
      {
        ar: 'اختارا خطوة صغيرة تبدآن بها هذا الشهر.',
        en: 'Choose one small step to start this month.',
      },
    ],
    minutes: 20,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-044',
    category: 'dream',
    title: { ar: 'تقليد خاص بنا', en: 'A tradition of our own' },
    description: {
      ar: 'ابتكرا تقليدًا صغيرًا يخصّكما وحدكما، كوجبة شهرية أو نزهة بعد صلاة الجمعة أو رسالة في كل عيد.',
      en: "Invent a small tradition that belongs only to you two, like a monthly meal, a walk after Jumu'ah or a letter every Eid.",
    },
    steps: [
      {
        ar: 'ليقترح كل منكما فكرتين.',
        en: 'Each of you suggests two ideas.',
      },
      {
        ar: 'اختارا واحدة وأعطياها اسمًا.',
        en: 'Pick one and give it a name.',
      },
      {
        ar: 'حدّدا موعدها الأول في التقويم.',
        en: 'Put the first one in the calendar.',
      },
    ],
    minutes: 20,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-045',
    category: 'dream',
    title: { ar: 'مغامرة بميزانية صغيرة', en: 'A tiny-budget getaway' },
    description: {
      ar: 'خطّطا لعطلة نهاية أسبوع ممتعة بأقل تكلفة ممكنة، في مكان قريب وبأنشطة مجانية أو شبه مجانية.',
      en: 'Plan a fun weekend for as little money as possible, somewhere close, with free or nearly free activities.',
    },
    steps: [
      {
        ar: 'حدّدا ميزانية صغيرة جدًا والتزما بها.',
        en: 'Set a very small budget and stick to it.',
      },
      {
        ar: 'ابحثا عن مكان قريب لم تزوراه بعد.',
        en: "Find somewhere nearby you haven't been yet.",
      },
      {
        ar: 'املآ اليومين بأنشطة لا تحتاج إلى مال.',
        en: 'Fill both days with things that cost nothing.',
      },
    ],
    minutes: 30,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-060',
    category: 'dream',
    title: { ar: 'عمرة أو حجّ يومًا ما', en: 'Umrah or Hajj, someday' },
    description: {
      ar: 'خطّطا معًا لعمرة أو حجّ تحلمان به: متى تذهبان، وكيف تستعدان، وما الأدعية التي تحملانها معكما.',
      en: "Plan together the Umrah or Hajj you dream of: when you'd go, how you'll prepare and the du'as you'll carry with you.",
    },
    steps: [
      {
        ar: 'اختارا موسمًا مناسبًا، وميزانية بلا ديون.',
        en: 'Choose a good season and a budget with no debt.',
      },
      {
        ar: 'ليكتب كل منكما ثلاثة أدعية يريد أن يدعو بها هناك.',
        en: "Each of you writes three du'as you want to make there.",
      },
      {
        ar: 'حدّدا خطوة أولى صغيرة هذا الشهر، كادّخار مبلغ بسيط.',
        en: 'Set one small first step this month, like putting a little money aside.',
      },
    ],
    minutes: 30,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-063',
    category: 'dream',
    title: { ar: 'خطة صدقة', en: 'A sadaqah plan' },
    description: {
      ar: 'اتفقا على صدقة صغيرة منتظمة تقدّمانها معًا، مهما كانت بسيطة، واختارا لها جهة وموعدًا.',
      en: 'Agree on a small, regular sadaqah you give together, however modest, and choose where it goes and when.',
    },
    steps: [
      {
        ar: 'ليقترح كل منكما جهة يثق بها.',
        en: 'Each of you suggests a cause you trust.',
      },
      {
        ar: 'اختارا مبلغًا صغيرًا يسهل الاستمرار عليه، فالقليل الدائم خير من الكثير المنقطع.',
        en: 'Pick a small amount you can keep up. A little that lasts beats a lot that stops.',
      },
      {
        ar: 'حدّدا يومًا ثابتًا في كل شهر.',
        en: 'Set a fixed day each month.',
      },
    ],
    minutes: 20,
    modes: ['call', 'together'],
  },

  /* ---------- random: something random & fun ---------- */
  {
    id: 'moment-049',
    category: 'random',
    title: { ar: 'أشكال في السماء', en: 'Shapes in the sky' },
    description: {
      ar: 'تأمّلا الغيوم نهارًا أو النجوم ليلًا، وابحثا عن أشكال فيها، وأطلقا عليها أسماء من عندكما.',
      en: 'Look up at the clouds by day or the stars by night, find shapes in them and give them names of your own.',
    },
    minutes: 15,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-050',
    category: 'random',
    title: { ar: 'ازرعا شيئًا', en: 'Plant something' },
    description: {
      ar: 'ازرعا بذرة أو غصنًا صغيرًا من نبتة في كوب، واختارا لها اسمًا، وتابعا نموها معًا يومًا بعد يوم.',
      en: 'Plant a seed or a cutting in a small cup, give it a name and watch it grow together, day by day.',
    },
    steps: [
      {
        ar: 'استعملا بذور فاكهة من المطبخ إن لم تجدا غيرها.',
        en: "Use seeds from kitchen fruit if that's all you have.",
      },
      {
        ar: 'تبادلا صورة للنبتة كل أسبوع.',
        en: 'Swap a photo of it every week.',
      },
    ],
    minutes: 15,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-051',
    category: 'random',
    title: { ar: 'خلفية من اختيار الآخر', en: 'Wallpaper swap' },
    description: {
      ar: 'ليختر كل منكما عبارة جميلة أو صورة لمنظر طبيعي تكون خلفية هاتف الآخر لمدة أسبوع، دون اعتراض.',
      en: "Each of you chooses a lovely quote or a nature photo to be the other's phone wallpaper for a week, no objections allowed.",
    },
    minutes: 5,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-052',
    category: 'random',
    title: { ar: 'على ذوق الآخر', en: 'Order for each other' },
    description: {
      ar: 'في مطعم بسيط أو مقهى، ليطلب كل منكما الطبق أو المشروب للآخر دون أن يخبره بما اختار، مع مراعاة أي حساسية غذائية أو نظام غذائي.',
      en: "At a simple restaurant or café, each of you orders the other's food or drink without telling them what it is, keeping allergies and diets in mind.",
    },
    minutes: 45,
    modes: ['together'],
  },
  {
    id: 'moment-054',
    category: 'random',
    title: { ar: 'لطف لشخص ثالث', en: 'Kindness for someone else' },
    description: {
      ar: 'افعلا معًا شيئًا لطيفًا لشخص آخر: رسالة شكر لمعلّم قديم، أو مساعدة جار، أو صدقة صغيرة.',
      en: 'Do something kind for someone else, together: a thank-you message to an old teacher, a hand for a neighbor or a little sadaqah.',
    },
    steps: [
      {
        ar: 'اختارا الشخص أو الجهة معًا.',
        en: 'Choose the person or cause together.',
      },
      {
        ar: 'نفّذا الفكرة اليوم قبل أن تؤجلاها.',
        en: 'Do it today, before you put it off.',
      },
    ],
    minutes: 20,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-061',
    category: 'random',
    title: { ar: 'جرّة الامتنان', en: 'A gratitude jar' },
    description: {
      ar: 'خصّصا جرّة صغيرة، وليكتب فيها كل منكما كل يوم نعمة صغيرة يحمد الله عليها، ثم اقرآ الأوراق معًا آخر الشهر.',
      en: 'Set aside a small jar, and each day each of you adds a slip with one small blessing you thank Allah for. Read them together at the end of the month.',
    },
    steps: [
      {
        ar: 'إن كنتما بعيدين، فاجعلا الجرّة ملاحظة مشتركة على الهاتف.',
        en: "If you're apart, make the jar a shared note on your phones.",
      },
    ],
    minutes: 5,
    modes: ['call', 'together'],
  },
  {
    id: 'moment-062',
    category: 'random',
    title: { ar: 'زيارة للأهل', en: 'A family visit' },
    description: {
      ar: 'اختارا قريبًا لم تزوراه منذ مدة، ورتّبا له زيارة قصيرة مع هدية بسيطة، فصلة الرحم تملأ القلب دفئًا.',
      en: "Pick a relative you haven't visited in a while and plan a short visit with a simple gift. Keeping family ties warms the heart.",
    },
    steps: [
      {
        ar: 'اختارا الشخص معًا، واتصلا لترتيب الموعد.',
        en: 'Choose who together, and call to set a time.',
      },
      {
        ar: 'حضّرا هدية بسيطة، كحلوى أو طبق من صنعكما.',
        en: 'Bring something simple, like sweets or a dish you made.',
      },
    ],
    minutes: 60,
    modes: ['together'],
  },
  {
    id: 'moment-066',
    category: 'random',
    title: { ar: 'نزهة بالتناوب', en: 'Turn-by-turn walk' },
    description: {
      ar: 'اخرجا في نزهة قصيرة، وعند كل تقاطع يختار أحدكما الاتجاه بالتناوب، وانظرا إلى أين يأخذكما الطريق.',
      en: 'Go for a short walk and take turns choosing the direction at every corner. See where the road takes you.',
    },
    steps: [
      {
        ar: 'توقّفا عند أول مكان لطيف تصادفانه.',
        en: 'Stop at the first nice spot you stumble on.',
      },
    ],
    minutes: 30,
    modes: ['together'],
  },
]
