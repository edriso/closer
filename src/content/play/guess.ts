import type { GuessItem } from '../../types/content'

/**
 * "Who knows who better?" One player guesses the other's answer, then the
 * other reveals it. The UI shows "About {name}" above each prompt, so every
 * prompt is a pronoun-free noun phrase with a short, guessable answer.
 */
export const guessPrompts: GuessItem[] = [
  {
    id: 'guess-001',
    text: { ar: 'الأكلة المفضّلة بعد يوم طويل', en: 'Favorite comfort food after a long day' },
  },
  {
    id: 'guess-002',
    text: {
      ar: 'العادة الصباحية التي لا غنى عنها',
      en: 'The one morning habit that can never be skipped',
    },
  },
  {
    id: 'guess-003',
    text: { ar: 'المدينة الأولى في قائمة الأحلام', en: 'The top city on the travel wish list' },
  },
  { id: 'guess-004', text: { ar: 'اللون الأقرب إلى القلب', en: 'Favorite color' } },
  {
    id: 'guess-005',
    text: { ar: 'الفيلم الذي لا يُملّ من إعادته', en: 'The movie that never gets old' },
  },
  { id: 'guess-006', text: { ar: 'المشروب المعتاد في الصباح', en: 'The go-to morning drink' } },
  {
    id: 'guess-007',
    text: { ar: 'أكثر ما كان يُخيف في الطفولة', en: 'The biggest childhood fear' },
  },
  {
    id: 'guess-008',
    text: { ar: 'الحلوى التي لا تُقاوَم', en: 'The dessert that is impossible to resist' },
  },
  { id: 'guess-009', text: { ar: 'فصل السنة المفضّل', en: 'Favorite season of the year' } },
  {
    id: 'guess-010',
    text: { ar: 'المادة الدراسية المفضّلة أيام المدرسة', en: 'Favorite subject back in school' },
  },
  { id: 'guess-011', text: { ar: 'مهنة الأحلام في الطفولة', en: 'The dream job as a kid' } },
  { id: 'guess-012', text: { ar: 'الحيوان الأقرب إلى القلب', en: 'Favorite animal' } },
  {
    id: 'guess-013',
    text: { ar: 'الأغنية الأكثر ترديدًا هذه الأيام', en: 'The song most hummed these days' },
  },
  { id: 'guess-014', text: { ar: 'الأكلة المرفوضة تمامًا', en: 'The one food that is a firm no' } },
  {
    id: 'guess-015',
    text: { ar: 'الطريقة المثالية لقضاء يوم العطلة', en: 'The ideal way to spend a day off' },
  },
  {
    id: 'guess-016',
    text: { ar: 'أكثر ما يُضحك حتى الدموع', en: 'The thing guaranteed to cause tears of laughter' },
  },
  {
    id: 'guess-017',
    text: { ar: 'نوع الهدية الأكثر إسعادًا', en: 'The kind of gift that brings the most joy' },
  },
  {
    id: 'guess-018',
    text: {
      ar: 'الشخصية الكرتونية المفضّلة في الطفولة',
      en: 'Favorite cartoon character growing up',
    },
  },
  {
    id: 'guess-019',
    text: { ar: 'أكثر ما يثير الضيق في الحياة اليومية', en: 'The biggest everyday pet peeve' },
  },
  { id: 'guess-020', text: { ar: 'موعد النوم المثالي', en: 'The ideal bedtime' } },
  { id: 'guess-021', text: { ar: 'الرائحة الأحبّ إلى القلب', en: 'Favorite smell' } },
  {
    id: 'guess-022',
    text: { ar: 'التطبيق الأكثر فتحًا على الهاتف', en: 'The most-opened app on the phone' },
  },
  {
    id: 'guess-023',
    text: { ar: 'الطبق المميّز عند الطبخ', en: 'The signature dish in the kitchen' },
  },
  {
    id: 'guess-024',
    text: {
      ar: 'أول ما يُلاحَظ في الناس عند اللقاء الأول',
      en: 'The first thing noticed about people on meeting them',
    },
  },
  {
    id: 'guess-025',
    text: { ar: 'الكتاب أو القصة الأعمق أثرًا', en: 'The book or story that left the deepest mark' },
  },
  {
    id: 'guess-026',
    text: { ar: 'أغرب أكلة جُرِّبت على الإطلاق', en: 'The strangest food ever tried' },
  },
  { id: 'guess-027', text: { ar: 'الركن المفضّل في البيت', en: 'Favorite spot at home' } },
  { id: 'guess-028', text: { ar: 'المهارة التي يُتمنّى إتقانها', en: 'The skill most wished for' } },
  { id: 'guess-029', text: { ar: 'الرقم المحظوظ', en: 'The lucky number' } },
  {
    id: 'guess-030',
    text: { ar: 'أول من يُتّصل به عند سماع خبر سعيد', en: 'The first person called with good news' },
  },
  {
    id: 'guess-031',
    text: {
      ar: 'الشيء الذي يُشترى دون تردّد',
      en: 'The thing that always gets bought without a second thought',
    },
  },
  {
    id: 'guess-032',
    text: { ar: 'اسم أول صديق مقرّب في الطفولة', en: 'Name of the first close childhood friend' },
  },
  {
    id: 'guess-033',
    text: { ar: 'الحلوى المفضّلة أيام المدرسة', en: 'The favorite treat back in school days' },
  },
  {
    id: 'guess-034',
    text: { ar: 'الطريقة الأسرع لتحسين المزاج', en: 'The quickest mood booster' },
  },
  {
    id: 'guess-035',
    text: { ar: 'الرياضة المفضّلة مشاهدةً أو ممارسةً', en: 'Favorite sport to watch or play' },
  },
  { id: 'guess-036', text: { ar: 'الحشرة الأكثر إثارة للرعب', en: 'The most terrifying bug' } },
  { id: 'guess-037', text: { ar: 'الطلب المعتاد في المقهى', en: 'The usual café order' } },
  {
    id: 'guess-038',
    text: {
      ar: 'الحلم الأكبر للسنوات الخمس القادمة',
      en: 'The biggest dream for the next five years',
    },
  },
  {
    id: 'guess-039',
    text: { ar: 'اللقب الذي كان يُنادى به في الصغر', en: 'The childhood nickname' },
  },
  {
    id: 'guess-040',
    text: { ar: 'المناسبة المفضّلة في السنة', en: 'Favorite occasion of the year' },
  },
  { id: 'guess-041', text: { ar: 'المطرب أو الفرقة المفضّلة', en: 'Favorite singer or band' } },
  {
    id: 'guess-042',
    text: { ar: 'المهمة التي تُؤجَّل دائمًا', en: 'The chore that always gets put off' },
  },
  { id: 'guess-043', text: { ar: 'الفاكهة المفضّلة', en: 'Favorite fruit' } },
  {
    id: 'guess-044',
    text: { ar: 'الصفة الأهم في الصديق', en: 'The most valued quality in a friend' },
  },
  {
    id: 'guess-045',
    text: { ar: 'أسعد لحظة في العام الماضي', en: 'The happiest moment of the past year' },
  },
  {
    id: 'guess-046',
    text: { ar: 'القوة الخارقة الأكثر إغراءً', en: 'The most tempting superpower' },
  },
  {
    id: 'guess-047',
    text: { ar: 'الشيء الذي لا يغادر الحقيبة أبدًا', en: 'The one thing that never leaves the bag' },
  },
  {
    id: 'guess-048',
    text: { ar: 'المكان المفضّل للخروج معًا', en: 'The favorite place to go out together' },
  },
  {
    id: 'guess-049',
    text: { ar: 'اليوم المثالي في ثلاث كلمات', en: 'The perfect day, in three words' },
  },
  {
    id: 'guess-050',
    text: { ar: 'العمر الذي يستحق العودة إليه', en: 'The age most worth going back to' },
  },
]
