import type { WouldYouRatherItem } from '../../types/content'

/**
 * "Which one feels more like you?" Two short, balanced noun phrases per item,
 * never gendered verbs. Roughly 40% playful, 35% lifestyle and travel,
 * 25% sweet relationship moments.
 */
export const wouldYouRather: WouldYouRatherItem[] = [
  /* ---------- Playful and a little absurd ---------- */
  {
    id: 'wyr-001',
    a: { ar: 'القدرة على الطيران', en: 'The power to fly' },
    b: { ar: 'القدرة على الاختفاء', en: 'The power to turn invisible' },
  },
  {
    id: 'wyr-002',
    a: { ar: 'قطّة تتكلّم', en: 'A cat that can talk' },
    b: { ar: 'كلب يقرأ الأفكار', en: 'A dog that can read minds' },
  },
  {
    id: 'wyr-003',
    a: { ar: 'موسيقى تصويرية ترافق كل لحظة', en: 'A soundtrack playing through every moment' },
    b: { ar: 'راوٍ يعلّق على كل ما يحدث', en: 'A narrator commenting on everything that happens' },
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
    id: 'wyr-012',
    a: { ar: 'معرفة نهاية كل فيلم قبل بدايته', en: 'Knowing how every film ends before it starts' },
    b: { ar: 'نسيان كل فيلم بعد مشاهدته', en: 'Forgetting every film right after watching it' },
  },
  {
    id: 'wyr-013',
    a: { ar: 'سحابة شخصية تُظلّل في الحرّ', en: 'A personal cloud for shade on hot days' },
    b: { ar: 'مظلّة تغنّي تحت المطر', en: 'An umbrella that sings in the rain' },
  },
  {
    id: 'wyr-014',
    a: { ar: 'القدرة على كشف أي كذبة', en: 'Spotting every lie' },
    b: { ar: 'القدرة على قراءة الأفكار', en: 'Reading every mind' },
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
    id: 'wyr-019',
    a: { ar: 'رحلة عبر الزمن إلى الماضي', en: 'A time trip to the past' },
    b: { ar: 'رحلة عبر الزمن إلى المستقبل', en: 'A time trip to the future' },
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
    id: 'wyr-022',
    a: { ar: 'عشاء مع رائد فضاء', en: 'Dinner with an astronaut' },
    b: { ar: 'عشاء مع طاهٍ مشهور', en: 'Dinner with a famous chef' },
  },
  {
    id: 'wyr-023',
    a: { ar: 'زرّ لتخطّي اللحظات المملّة', en: 'A button to skip the boring bits' },
    b: { ar: 'زرّ لإعادة اللحظات الجميلة', en: 'A button to replay the best bits' },
  },
  {
    id: 'wyr-024',
    a: { ar: 'طابع بريد يحمل صورتك', en: 'A postage stamp with your face on it' },
    b: { ar: 'شارع يحمل اسمك', en: 'A street named after you' },
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
    id: 'wyr-036',
    a: { ar: 'الغوص بين الشعاب المرجانية', en: 'Diving among coral reefs' },
    b: { ar: 'التزلّج على الثلج', en: 'Skiing in the snow' },
  },
  {
    id: 'wyr-037',
    a: { ar: 'حديقة مليئة بالزهور', en: 'A garden full of flowers' },
    b: { ar: 'مكتبة تملأ الجدران', en: 'Bookshelves covering every wall' },
  },
  {
    id: 'wyr-038',
    a: { ar: 'عطلة على الشاطئ', en: 'A beach holiday' },
    b: { ar: 'جولة بين المتاحف والأسواق القديمة', en: 'A tour of museums and old markets' },
  },
  {
    id: 'wyr-039',
    a: { ar: 'أغانٍ قديمة على الطريق', en: 'Old songs on the road' },
    b: { ar: 'بودكاست شيّق على الطريق', en: 'A gripping podcast on the road' },
  },
  {
    id: 'wyr-040',
    a: { ar: 'أمسية ألعاب لوحية', en: 'A board game night' },
    b: { ar: 'أمسية أفلام', en: 'A movie night' },
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
    a: { ar: 'دروس طبخ مع جدّة إيطالية', en: 'Cooking lessons with an Italian grandma' },
    b: { ar: 'دروس خطّ عربي مع خطّاط بارع', en: 'Arabic calligraphy lessons with a master' },
  },

  /* ---------- Sweet and romantic ---------- */
  {
    id: 'wyr-046',
    a: { ar: 'رسالة حب بخط اليد', en: 'A handwritten love letter' },
    b: { ar: 'أغنية مُهداة على الراديو', en: 'A song dedicated on the radio' },
  },
  {
    id: 'wyr-047',
    a: { ar: 'مفاجأة صغيرة كل يوم', en: 'A small surprise every day' },
    b: { ar: 'مفاجأة كبيرة مرة في السنة', en: 'One big surprise a year' },
  },
  {
    id: 'wyr-048',
    a: { ar: 'موعد هادئ بلا هواتف', en: 'A quiet, phone-free date' },
    b: { ar: 'موعد مليء بالمغامرة', en: 'A date full of adventure' },
  },
  {
    id: 'wyr-049',
    a: { ar: 'عناق طويل بعد يوم صعب', en: 'A long hug after a hard day' },
    b: { ar: 'حديث طويل بعد يوم صعب', en: 'A long talk after a hard day' },
  },
  {
    id: 'wyr-050',
    a: { ar: 'صورة عفوية معًا', en: 'A candid photo together' },
    b: { ar: 'صورة مرتّبة بإطلالة أنيقة', en: 'A posed photo, all dressed up' },
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
    id: 'wyr-054',
    a: { ar: 'إعادة أول موعد بكل تفاصيله', en: 'Recreating the first date, detail by detail' },
    b: { ar: 'موعد جديد في مكان لم يُزَر من قبل', en: 'A new date somewhere never visited before' },
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
    id: 'wyr-057',
    a: { ar: 'ألبوم صور مطبوع للذكريات المشتركة', en: 'A printed album of shared memories' },
    b: { ar: 'فيديو قصير لأجمل اللحظات معًا', en: 'A short video of the best moments together' },
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
    id: 'wyr-060',
    a: { ar: 'احتفال كبير مع الجميع', en: 'A big celebration with everyone' },
    b: { ar: 'احتفال هادئ لشخصين فقط', en: 'A quiet celebration, just the two of you' },
  },
]
