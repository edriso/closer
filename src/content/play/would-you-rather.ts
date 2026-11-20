import type { WouldYouRatherItem } from '../../types/content'

/**
 * "Which one feels more like you?" Two short, balanced noun phrases per item,
 * never gendered verbs. Roughly 40% playful, 35% lifestyle and travel,
 * 25% sweet relationship moments.
 */
export const wouldYouRather: WouldYouRatherItem[] = [
  /* ---------- Playful and a little absurd ---------- */
  {
    id: 'wyr-081',
    a: { ar: 'رحلة على ظهر جمل في الصحراء', en: 'A camel ride in the desert' },
    b: { ar: 'رحلة بالقارب في نهر هادئ', en: 'A boat ride on a calm river' },
  },
  {
    id: 'wyr-004',
    a: { ar: 'تذكّر كل حلم بأدق تفاصيله', en: 'Remembering every dream in vivid detail' },
    b: { ar: 'نوم عميق بلا أحلام', en: 'Deep, dreamless sleep' },
  },
  {
    id: 'wyr-005',
    a: { ar: 'شتاء لا ينتهي', en: 'An endless winter' },
    b: { ar: 'صيف لا ينتهي', en: 'An endless summer' },
  },
  {
    id: 'wyr-006',
    a: { ar: 'الكلام مع الحيوانات', en: 'Talking with animals' },
    b: { ar: 'إتقان كل لغات العالم', en: 'Speaking every language in the world' },
  },
  {
    id: 'wyr-007',
    a: { ar: 'بيت شجرة بحجم قصر', en: 'A treehouse the size of a palace' },
    b: { ar: 'غوّاصة بحجم شقة', en: 'A submarine the size of an apartment' },
  },
  {
    id: 'wyr-008',
    a: { ar: 'البيتزا وحدها لشهر كامل', en: 'Nothing but pizza for a whole month' },
    b: { ar: 'الكبسة وحدها لشهر كامل', en: 'Nothing but kabsa for a whole month' },
  },
  {
    id: 'wyr-009',
    a: { ar: 'ضحكة عالية لا يمكن كتمانها', en: "A loud laugh that can't be held in" },
    b: { ar: 'عطسة طريفة لا يمكن كتمانها', en: "A funny sneeze that can't be held in" },
  },
  {
    id: 'wyr-010',
    a: { ar: 'ديناصور أليف بحجم قطة', en: 'A pet dinosaur the size of a cat' },
    b: { ar: 'قطة بحجم ديناصور', en: 'A cat the size of a dinosaur' },
  },
  {
    id: 'wyr-011',
    a: { ar: 'يوم كامل بعقل طفل في الخامسة', en: 'A whole day with the mind of a five-year-old' },
    b: {
      ar: 'يوم كامل بحكمة عجوز في التسعين',
      en: 'A whole day with the wisdom of a ninety-year-old',
    },
  },
  {
    id: 'wyr-015',
    a: { ar: 'ثلاجة لا تفرغ أبدًا', en: 'A fridge that never runs empty' },
    b: { ar: 'خزانة تختار الملابس كل صباح', en: 'A closet that picks the outfit every morning' },
  },
  {
    id: 'wyr-016',
    a: { ar: 'الدخول إلى أي لوحة فنية', en: 'Stepping inside any painting' },
    b: { ar: 'الدخول إلى أي كتاب', en: 'Stepping inside any book' },
  },
  {
    id: 'wyr-017',
    a: { ar: 'روبوت للطبخ', en: 'A robot that cooks' },
    b: { ar: 'روبوت للترتيب', en: 'A robot that tidies up' },
  },
  {
    id: 'wyr-018',
    a: { ar: 'ضحكة تُعدي كل من حولها', en: 'A laugh that spreads to everyone around' },
    b: { ar: 'ابتسامة تُذيب أي غضب', en: 'A smile that melts any bad mood' },
  },
  {
    id: 'wyr-077',
    a: { ar: 'يوم في مدينة قبل ألف عام', en: 'A day in a city a thousand years ago' },
    b: { ar: 'يوم في مدينة من الخيال العلمي', en: 'A day in a sci-fi city' },
  },
  {
    id: 'wyr-020',
    a: { ar: 'يوم واحد بلا جاذبية', en: 'One day without gravity' },
    b: { ar: 'يوم واحد بلا ليل', en: 'One day without night' },
  },
  {
    id: 'wyr-021',
    a: { ar: 'الشاي وحده مدى الحياة', en: 'Only tea, forever' },
    b: { ar: 'القهوة وحدها مدى الحياة', en: 'Only coffee, forever' },
  },
  {
    id: 'wyr-023',
    a: { ar: 'زرّ لتخطّي اللحظات المملّة', en: 'A button to skip the boring bits' },
    b: { ar: 'زرّ لإعادة اللحظات الجميلة', en: 'A button to replay the best bits' },
  },
  {
    id: 'wyr-061',
    a: { ar: 'قطّة كسولة تنام طوال اليوم', en: 'A lazy cat that sleeps all day' },
    b: { ar: 'ببغاء ثرثار لا يسكت أبدًا', en: 'A chatty parrot that never stops talking' },
  },
  {
    id: 'wyr-063',
    a: {
      ar: 'معرفة نهاية كل كتاب قبل قراءته',
      en: 'Knowing how every book ends before reading it',
    },
    b: { ar: 'نسيان كل كتاب بعد قراءته', en: 'Forgetting every book right after reading it' },
  },
  {
    id: 'wyr-064',
    a: { ar: 'حذاء لا تتعب معه القدمان', en: 'Shoes that never tire the feet' },
    b: { ar: 'حقيبة لا تمتلئ أبدًا', en: 'A bag that never fills up' },
  },
  {
    id: 'wyr-065',
    a: { ar: 'ذاكرة لا تنسى أي اسم', en: 'Never forgetting a name' },
    b: { ar: 'حسّ اتجاه لا يضيع في أي طريق', en: 'Never getting lost' },
  },
  {
    id: 'wyr-066',
    a: { ar: 'ليلة في مرصد فلكي', en: 'A night at an observatory' },
    b: { ar: 'يوم على متن سفينة أبحاث', en: 'A day on a research ship' },
  },

  /* ---------- Lifestyle and travel ---------- */
  {
    id: 'wyr-025',
    a: { ar: 'كوخ دافئ في الجبال', en: 'A cozy cabin in the mountains' },
    b: { ar: 'بيت صغير على البحر', en: 'A little house by the sea' },
  },
  {
    id: 'wyr-026',
    a: { ar: 'رحلة برّية بلا خطة', en: 'A road trip with no plan' },
    b: { ar: 'رحلة منظّمة بكل تفاصيلها', en: 'A trip planned down to the last detail' },
  },
  {
    id: 'wyr-027',
    a: { ar: 'صباح باكر مع شروق الشمس', en: 'An early morning with the sunrise' },
    b: { ar: 'سهرة طويلة تحت النجوم', en: 'A late night under the stars' },
  },
  {
    id: 'wyr-028',
    a: { ar: 'مدينة صاخبة لا تنام', en: 'A buzzing city that never sleeps' },
    b: { ar: 'قرية هادئة بين الحقول', en: 'A quiet village among the fields' },
  },
  {
    id: 'wyr-029',
    a: { ar: 'أسبوع في طوكيو', en: 'A week in Tokyo' },
    b: { ar: 'أسبوع في إسطنبول', en: 'A week in Istanbul' },
  },
  {
    id: 'wyr-030',
    a: { ar: 'تخييم في الصحراء', en: 'Camping in the desert' },
    b: { ar: 'إقامة في فندق فاخر', en: 'A stay in a fancy hotel' },
  },
  {
    id: 'wyr-031',
    a: { ar: 'فطور هادئ في البيت', en: 'A quiet breakfast at home' },
    b: { ar: 'فطور في مقهى جديد', en: 'Breakfast at a new café' },
  },
  {
    id: 'wyr-032',
    a: { ar: 'كتاب جيّد في يوم ممطر', en: 'A good book on a rainy day' },
    b: { ar: 'نزهة طويلة في يوم مشمس', en: 'A long walk on a sunny day' },
  },
  {
    id: 'wyr-033',
    a: { ar: 'رحلة طويلة بالقطار', en: 'A long journey by train' },
    b: { ar: 'رحلة جوية إلى بلد بعيد', en: 'A flight to a faraway country' },
  },
  {
    id: 'wyr-034',
    a: { ar: 'مطبخ واسع', en: 'A big kitchen' },
    b: { ar: 'شرفة واسعة', en: 'A big balcony' },
  },
  {
    id: 'wyr-035',
    a: { ar: 'أكلات الشارع في سوق شعبي', en: 'Street food in a busy market' },
    b: { ar: 'عشاء أنيق في مطعم راقٍ', en: 'An elegant dinner at a fine restaurant' },
  },
  {
    id: 'wyr-078',
    a: { ar: 'التجديف في نهر هادئ', en: 'Kayaking on a calm river' },
    b: { ar: 'التزلّج على الثلج', en: 'Skiing in the snow' },
  },
  {
    id: 'wyr-037',
    a: { ar: 'حديقة مليئة بالزهور', en: 'A garden full of flowers' },
    b: { ar: 'مكتبة تملأ الجدران', en: 'Bookshelves covering every wall' },
  },
  {
    id: 'wyr-041',
    a: { ar: 'عمل الأحلام بدخل متوسط', en: 'A dream job with an average paycheck' },
    b: { ar: 'عمل عادي بدخل كبير', en: 'An ordinary job with a big paycheck' },
  },
  {
    id: 'wyr-042',
    a: { ar: 'بيت ذكي يتولّى كل شيء', en: 'A smart home that handles everything' },
    b: { ar: 'بيت قديم بطابع دافئ', en: 'An old house full of character' },
  },
  {
    id: 'wyr-043',
    a: { ar: 'مشاهدة الشفق القطبي', en: 'Watching the northern lights' },
    b: { ar: 'رحلة سفاري في أفريقيا', en: 'A safari in Africa' },
  },
  {
    id: 'wyr-044',
    a: { ar: 'يوم عطلة كامل بالبيجامة', en: 'A whole day off in pajamas' },
    b: { ar: 'يوم عطلة كامل خارج البيت', en: 'A whole day off out and about' },
  },
  {
    id: 'wyr-045',
    a: { ar: 'دروس طبخ من وصفات الجدّات', en: "Cooking lessons from our grandmothers' recipes" },
    b: { ar: 'دروس خطّ عربي مع خطّاط بارع', en: 'Arabic calligraphy lessons with a master' },
  },
  {
    id: 'wyr-062',
    a: { ar: 'سباق جري في الحديقة', en: 'A footrace in the park' },
    b: { ar: 'سباق دراجات في الحديقة', en: 'A bike race in the park' },
  },
  {
    id: 'wyr-067',
    a: {
      ar: 'بئر ماء في قرية بعيدة صدقةً جارية',
      en: 'A water well in a faraway village, as lasting charity',
    },
    b: {
      ar: 'مكتبة صغيرة في حيّ محتاج صدقةً جارية',
      en: 'A small library in a neighborhood in need, as lasting charity',
    },
  },
  {
    id: 'wyr-068',
    a: { ar: 'عطلة في مزرعة بين البساتين', en: 'A holiday on a farm among the orchards' },
    b: { ar: 'عطلة في مدينة تاريخية قديمة', en: 'A holiday in an old historic city' },
  },
  {
    id: 'wyr-069',
    a: { ar: 'كتاب مسموع شيّق على الطريق', en: 'A gripping audiobook on the road' },
    b: { ar: 'حديث طويل بلا شاشات على الطريق', en: 'A long, screen-free talk on the road' },
  },
  {
    id: 'wyr-070',
    a: { ar: 'أمسية ألغاز وأحاجٍ', en: 'An evening of riddles and puzzles' },
    b: { ar: 'أمسية قراءة على ضوء خافت', en: 'An evening of reading by soft light' },
  },
  {
    id: 'wyr-071',
    a: { ar: 'تعلّم الرماية', en: 'Learning archery' },
    b: { ar: 'تعلّم ركوب الخيل', en: 'Learning to ride a horse' },
  },
  {
    id: 'wyr-072',
    a: { ar: 'عمرة في رمضان', en: 'Umrah in Ramadan' },
    b: { ar: 'عمرة في هدوء الشتاء', en: 'Umrah in the calm of winter' },
  },

  /* ---------- Sweet and romantic ---------- */
  {
    id: 'wyr-047',
    a: { ar: 'مفاجأة صغيرة كل يوم', en: 'A small surprise every day' },
    b: { ar: 'مفاجأة كبيرة بين حين وآخر', en: 'One big surprise once in a while' },
  },
  {
    id: 'wyr-048',
    a: { ar: 'سهرة هادئة بلا هواتف', en: 'A quiet, phone-free evening' },
    b: { ar: 'نزهة مليئة بالمغامرة', en: 'An outing full of adventure' },
  },
  {
    id: 'wyr-049',
    a: { ar: 'عناق طويل بعد يوم صعب', en: 'A long hug after a hard day' },
    b: { ar: 'حديث طويل بعد يوم صعب', en: 'A long talk after a hard day' },
  },
  {
    id: 'wyr-079',
    a: { ar: 'دفتر يوميات نكتبه معًا', en: 'A journal we write together' },
    b: { ar: 'علبة تذكارات من كل نزهة', en: 'A keepsake box from every outing' },
  },
  {
    id: 'wyr-051',
    a: { ar: 'هدية مصنوعة باليد', en: 'A handmade gift' },
    b: { ar: 'هدية طال انتظارها', en: 'A long-awaited gift' },
  },
  {
    id: 'wyr-052',
    a: { ar: 'كلمات طيبة أمام الجميع', en: 'Kind words in front of everyone' },
    b: { ar: 'كلمات طيبة على انفراد', en: 'Kind words in private' },
  },
  {
    id: 'wyr-053',
    a: { ar: 'مشي طويل يدًا بيد', en: 'A long walk hand in hand' },
    b: { ar: 'جلسة طويلة على فنجان قهوة', en: 'A long chat over coffee' },
  },
  {
    id: 'wyr-055',
    a: { ar: 'رسائل صوتية طوال اليوم', en: 'Voice notes all day long' },
    b: { ar: 'مكالمة طويلة آخر الليل', en: 'One long call late at night' },
  },
  {
    id: 'wyr-056',
    a: { ar: 'طبخ وجبة معًا', en: 'Cooking a meal together' },
    b: { ar: 'وجبة جاهزة على الأريكة', en: 'Takeout on the couch' },
  },
  {
    id: 'wyr-080',
    a: {
      ar: 'رسالة نكتبها اليوم ونفتحها بعد خمس سنوات',
      en: 'A letter we write today and open in five years',
    },
    b: {
      ar: 'خريطة نعلّم عليها كل مكان زرناه معًا',
      en: 'A map marking every place we have been together',
    },
  },
  {
    id: 'wyr-058',
    a: { ar: 'لقب دلع لطيف', en: 'A cute pet name' },
    b: { ar: 'اسمك الحقيقي بنبرة حنونة', en: 'Your real name, said tenderly' },
  },
  {
    id: 'wyr-059',
    a: { ar: 'حبّ يظهر في الأفعال', en: 'Love shown in actions' },
    b: { ar: 'حبّ يُقال بالكلمات', en: 'Love said in words' },
  },
  {
    id: 'wyr-073',
    a: { ar: 'رسالة حب بخط اليد', en: 'A handwritten love letter' },
    b: { ar: 'كلمات حلوة تُقال وجهًا لوجه', en: 'Sweet words said face to face' },
  },
  {
    id: 'wyr-074',
    a: {
      ar: 'زيارة مكان أول نزهة لنا كزوجين',
      en: 'Revisiting the spot of our first outing as a married couple',
    },
    b: {
      ar: 'نزهة جديدة في مكان لم يُزَر من قبل',
      en: 'A new outing somewhere never visited before',
    },
  },
  {
    id: 'wyr-075',
    a: { ar: 'إفطار رمضاني كبير مع العائلة', en: 'A big Ramadan iftar with the family' },
    b: { ar: 'إفطار رمضاني هادئ لشخصين', en: 'A quiet Ramadan iftar for two' },
  },
  {
    id: 'wyr-076',
    a: { ar: 'صباح العيد مع الأهل', en: 'Eid morning with the family' },
    b: { ar: 'صباح العيد في نزهة خارج المدينة', en: 'Eid morning on a trip out of town' },
  },
]
