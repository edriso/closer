import type { TruthsTheme } from '../../types/content'

/**
 * "Two truths and a wish": a theme plus a one-line hint. Two of the three things
 * really happened and one is only a wish, so nobody has to say anything untrue.
 * Hints use the gender-neutral ـك suffix and never use imperatives.
 */
export const truthsThemes: TruthsTheme[] = [
  {
    id: 'truths-001',
    title: { ar: 'أيام المدرسة', en: 'School days' },
    hint: {
      ar: 'معلّم لا يُنسى، أو رحلة مدرسية، أو جائزة صغيرة في أيام دراستك',
      en: 'A teacher you never forgot, a school trip or a small prize from your school days',
    },
  },
  {
    id: 'truths-002',
    title: { ar: 'ألعاب الصغر', en: 'Childhood games' },
    hint: {
      ar: 'ألعاب الحارة، أو لعبة مفضّلة، أو مسابقة صغيرة من طفولتك',
      en: 'Street games, a favorite toy or a little contest from your childhood',
    },
  },
  {
    id: 'truths-003',
    title: { ar: 'السفر والرحلات', en: 'Travels' },
    hint: {
      ar: 'مدن ورحلات عرفتها، ووجهة ما زالت حلمًا',
      en: "Cities and trips you've known, and a place that's still a dream",
    },
  },
  {
    id: 'truths-004',
    title: { ar: 'الذوق في الطعام', en: 'Taste in food' },
    hint: {
      ar: 'أطباق جرّبتها وأحببتها، وطبق ما زال على قائمة التجربة',
      en: "Dishes you've tried and loved, and one still on the to-try list",
    },
  },
  {
    id: 'truths-005',
    title: { ar: 'مواهب خفية', en: 'Hidden talents' },
    hint: {
      ar: 'مواهب لديك فعلًا، كالطبخ أو الخط أو سرعة الحفظ، وموهبة ما زالت أمنية',
      en: "Talents you really have, like cooking, calligraphy or a sharp memory, and one you'd love to have",
    },
  },
  {
    id: 'truths-007',
    title: { ar: 'المرة الأولى', en: 'First times' },
    hint: {
      ar: 'أول رحلة، أو أول راتب، أو أول طبق من صنعك، وتجربة أولى ما زالت تنتظرك',
      en: 'Your first trip, first paycheck or first dish you cooked, and a first still waiting for you',
    },
  },
  {
    id: 'truths-009',
    title: { ar: 'حكايات العائلة', en: 'Family tales' },
    hint: {
      ar: 'لحظات جميلة مع عائلتك: زيارة، أو سفرة، أو عادة متوارثة',
      en: 'Warm moments with your family: a visit, a trip or a tradition passed down',
    },
  },
  {
    id: 'truths-010',
    title: { ar: 'الأصدقاء', en: 'Friends' },
    hint: {
      ar: 'مواقف طريفة أو لطيفة مع أصدقائك في الصغر أو اليوم',
      en: 'Funny or kind moments with your friends, back then or today',
    },
  },
  {
    id: 'truths-012',
    title: { ar: 'الهوايات', en: 'Hobbies' },
    hint: {
      ar: 'هوايات جرّبتها، كالقراءة أو الخياطة أو ركوب الدراجة، وهواية ما زالت على قائمة الأمنيات',
      en: "Hobbies you've tried, like reading, sewing or cycling, and one you hope to start someday",
    },
  },
  {
    id: 'truths-016',
    title: { ar: 'الملابس والأناقة', en: 'Clothes and style' },
    hint: {
      ar: 'قطع ملابس أحببتها أو ارتديتها في مناسبة، وقطعة ما زالت أمنية',
      en: "Clothes you've loved or worn on an occasion, and a piece that's still a wish",
    },
  },
  {
    id: 'truths-017',
    title: { ar: 'الحيوانات', en: 'Animals' },
    hint: {
      ar: 'مواقفك مع القطط أو الطيور أو الخيل أو الإبل',
      en: 'Your moments with cats, birds, horses or camels',
    },
  },
  {
    id: 'truths-018',
    title: { ar: 'الرياضة', en: 'Sports' },
    hint: {
      ar: 'رياضات مارستها، أو مباراة لا تُنسى، أو هدف رياضي ما زال حلمًا',
      en: "Sports you've played, a game you won't forget or a sporting goal you dream of",
    },
  },
  {
    id: 'truths-019',
    title: { ar: 'الدراسة والعمل', en: 'Study and work' },
    hint: {
      ar: 'إنجازات من دراستك أو عملك، وإنجاز ما زال طموحًا',
      en: "Wins from your studies or work, and one you're aiming for",
    },
  },
  {
    id: 'truths-020',
    title: { ar: 'أرقام قياسية شخصية', en: 'Personal records' },
    hint: {
      ar: 'أرقامك القياسية: أطول مشي، أو أبعد رحلة، أو أكثر ما أنجزته في يوم',
      en: 'Your personal records: the longest walk, the farthest trip or the most done in a day',
    },
  },
  {
    id: 'truths-021',
    title: { ar: 'الأسماء والألقاب', en: 'Names and nicknames' },
    hint: {
      ar: 'ألقاب نوديت بها، وحكايات عن اسمك، ولقب ما زال أمنية',
      en: "Nicknames you've had, stories about your name, and one you'd like to be called",
    },
  },
  {
    id: 'truths-022',
    title: { ar: 'الهاتف والتقنية', en: 'Phones and tech' },
    hint: {
      ar: 'أجهزة امتلكتها، أو تطبيق لا غنى عنه، أو جهاز ما زال حلمًا',
      en: "Devices you've owned, an app you can't do without or a gadget you dream of",
    },
  },
  {
    id: 'truths-023',
    title: { ar: 'البيوت والأحياء', en: 'Homes and neighborhoods' },
    hint: {
      ar: 'بيوت وأحياء عشت فيها، وبيت الأحلام',
      en: "Homes and neighborhoods you've lived in, and a home you dream of",
    },
  },
  {
    id: 'truths-024',
    title: { ar: 'أيام العيد', en: 'Eid days' },
    hint: {
      ar: 'ذكريات من صباح العيد، والعيدية، والزيارات، والملابس الجديدة',
      en: 'Memories of Eid mornings, Eid money, family visits and new clothes',
    },
  },
  {
    id: 'truths-026',
    title: { ar: 'الكتب والقراءة', en: 'Books and reading' },
    hint: {
      ar: 'كتب قرأتها وأثّرت فيك، وكتاب ما زال على قائمة القراءة',
      en: "Books you've read that stayed with you, and one you hope to read",
    },
  },
  {
    id: 'truths-027',
    title: { ar: 'مغامرات المطبخ', en: 'Kitchen adventures' },
    hint: {
      ar: 'أطباق طبختها بنجاح أو بفشل طريف، وطبق ما زال إتقانه أمنية',
      en: "Dishes you've cooked, a success or a funny flop, and one you'd love to master",
    },
  },
  {
    id: 'truths-030',
    title: { ar: 'أماكن في الذاكرة', en: 'Places in your memory' },
    hint: {
      ar: 'أماكن من طفولتك أو مدينتك تحمل ذكرى خاصة',
      en: 'Places from your childhood or your city that hold a special memory',
    },
  },
  {
    id: 'truths-031',
    title: { ar: 'مواقف شجاعة', en: 'Brave moments' },
    hint: {
      ar: 'مواقف تغلّبت فيها على خوف، وخوف ما زال التغلّب عليه أمنية',
      en: "Times you got past a fear, and a fear you'd love to get past",
    },
  },
  {
    id: 'truths-032',
    title: { ar: 'عادات يومية', en: 'Daily habits' },
    hint: {
      ar: 'عادات ثابتة في يومك، وعادة طيبة ما زالت أمنية',
      en: 'Habits that fill your day, and a good one you hope to build',
    },
  },
  {
    id: 'truths-033',
    title: { ar: 'رمضان', en: 'Ramadan' },
    hint: {
      ar: 'ذكريات السحور والإفطار والتراويح وعادات رمضانية في بيتكم',
      en: 'Memories of suhoor, iftar, taraweeh and Ramadan habits at home',
    },
  },
  {
    id: 'truths-034',
    title: { ar: 'أعمال اليد', en: 'Handmade things' },
    hint: {
      ar: 'أشياء صنعتها أو أصلحتها بيدك، وحرفة ما زال تعلّمها حلمًا',
      en: "Things you've made or fixed by hand, and a craft you'd love to learn",
    },
  },
  {
    id: 'truths-035',
    title: { ar: 'الطبيعة والهواء الطلق', en: 'Nature and the outdoors' },
    hint: {
      ar: 'تخييم، أو تسلّق، أو ليلة تحت النجوم، أو مغامرة في البرّ',
      en: 'Camping, a hike, a night under the stars or an adventure in the wild',
    },
  },
  {
    id: 'truths-036',
    title: { ar: 'اللغات', en: 'Languages' },
    hint: {
      ar: 'لغات أو لهجات لديك منها بضع كلمات، ولغة ما زال إتقانها أمنية',
      en: "Languages you know a few words of, and one you'd love to speak well",
    },
  },
  {
    id: 'truths-037',
    title: { ar: 'الضيافة والولائم', en: 'Hosting and gatherings' },
    hint: {
      ar: 'ضيوف استقبلتهم، أو وليمة شاركت فيها، أو مائدة ما زالت حلمًا',
      en: "Guests you've hosted, a feast you helped with or a table you dream of setting",
    },
  },
  {
    id: 'truths-038',
    title: { ar: 'الحدائق والنباتات', en: 'Gardens and plants' },
    hint: {
      ar: 'نباتات زرعتها أو اعتنيت بها، وحديقة الأحلام',
      en: "Plants you've grown or cared for, and a garden you dream of",
    },
  },
]
