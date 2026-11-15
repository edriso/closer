import type { Localized } from '../types/content'

/**
 * All interface copy, side by side. Arabic is the primary language.
 * Arabic copy is gender-neutral: it uses the dual for the couple, the ـك suffix,
 * nouns and names, never singular gendered verbs. See docs/CONTENT_GUIDE.md.
 * `{placeholders}` are filled in by `t(key, vars)`.
 */
export const strings = {
  // Brand
  brand: { ar: 'أقرب', en: 'Closer' },
  tagline: { ar: 'أقرب قليلًا، مع كل حديث.', en: 'A little closer, every conversation.' },
  metaDescription: {
    ar: 'مساحة دافئة للأزواج والمخطوبين: أسئلة للحديث، وألعاب لشخصين، ولحظات صغيرة لوقت أجمل معًا.',
    en: 'A cozy space for couples: conversation questions, games for two and little moments to enjoy together.',
  },

  // Navigation & chrome
  navHome: { ar: 'الرئيسية', en: 'Home' },
  navFavorites: { ar: 'المفضّلة', en: 'Favorites' },
  navAbout: { ar: 'عن أقرب', en: 'About' },
  navMain: { ar: 'التنقّل الرئيسي', en: 'Main navigation' },
  skipToContent: { ar: 'الانتقال إلى المحتوى', en: 'Skip to content' },
  switchLanguage: { ar: 'English', en: 'العربية' },
  switchLanguageLabel: { ar: 'Switch to English', en: 'التبديل إلى العربية' },
  themeToDark: { ar: 'تفعيل الوضع الليلي', en: 'Switch to night sky' },
  themeToLight: { ar: 'تفعيل الوضع النهاري', en: 'Switch to day sky' },
  back: { ar: 'رجوع', en: 'Back' },
  footerNote: {
    ar: 'بلا حسابات، بلا تتبّع، بلا إعلانات. فقط وقت جميل معًا.',
    en: 'No accounts, no tracking, no ads. Just good time together.',
  },
  footerMade: { ar: 'صُنع بحبّ للأزواج', en: 'Made with love, for couples' },

  // Sections
  talkTitle: { ar: 'لنتحدّث', en: 'Talk' },
  talkBlurb: { ar: 'أسئلة تفتح أحاديث ممتعة', en: 'Questions that open lovely conversations' },
  talkLead: {
    ar: 'اختارا موضوعًا يناسب مزاجكما، أو اتركا الأمر للصدفة.',
    en: 'Pick a topic that fits your mood, or leave it to chance.',
  },
  playTitle: { ar: 'لنلعب', en: 'Play' },
  playBlurb: { ar: 'ألعاب خفيفة لشخصين', en: 'Light games for two' },
  playLead: {
    ar: 'ألعاب لطيفة لشخصين، الغاية منها الضحك والتعارف لا الفوز.',
    en: 'Gentle games for two. The point is laughing and learning, not winning.',
  },
  discoverTitle: { ar: 'لنتعرّف', en: 'Discover' },
  discoverBlurb: { ar: 'تعرّفا على بعضكما أعمق', en: 'Get to know each other deeper' },
  discoverLead: {
    ar: 'أسئلة أعمق لتفهما بعضكما: القيم، والتوقعات، وطريقة التفكير.',
    en: 'Deeper questions to understand each other: values, expectations and the way you think.',
  },
  momentsTitle: { ar: 'لحظات', en: 'Moments' },
  momentsBlurb: { ar: 'أنشطة صغيرة لوقت جميل', en: 'Little activities for a lovely time' },
  momentsLead: {
    ar: 'أفكار صغيرة جاهزة لا تحتاج إلى تحضير، لدقائق معدودة أو لسهرة كاملة.',
    en: 'Little ready-made ideas, no prep needed. For a few minutes or a whole evening.',
  },

  // Home
  homeGreeting: {
    ar: 'ماذا تودّان أن تفعلا معًا اليوم؟',
    en: 'What would you like to do together today?',
  },
  homeLead: {
    ar: 'أسئلة وألعاب ولحظات صغيرة تجعل وقتكما معًا أجمل. بلا تسجيل، وبلا تحضير.',
    en: 'Questions, games and little moments that make your time together sweeter. No sign-up, no prep.',
  },
  surpriseUs: { ar: 'فاجئنا', en: 'Surprise us' },
  orChoose: { ar: 'أو اختارا بنفسيكما', en: 'or choose for yourselves' },
  questionOfTheDay: { ar: 'سؤال اليوم', en: 'Question of the day' },
  qotdHint: { ar: 'سؤال جديد كل يوم', en: 'A new one every day' },
  openTopic: { ar: 'المزيد من هذا الموضوع', en: 'More from this topic' },
  yourFavorites: { ar: 'مفضّلتكما', en: 'Your favorites' },
  savedCount: { ar: 'محفوظات: {n}', en: '{n} saved' },

  // Mode
  modeQuestion: { ar: 'كيف تقضيان الوقت الآن؟', en: 'How are you spending time together?' },
  modeCall: { ar: 'في مكالمة', en: 'On a call' },
  modeCallHint: {
    ar: 'يقرأ أحدكما السؤال ويجيب الآخر، ثم تتبادلان الأدوار.',
    en: 'One of you reads, the other answers, then you switch.',
  },
  modeTogether: { ar: 'معًا', en: 'Together' },
  modeTogetherHint: {
    ar: 'جهاز واحد بينكما، وتتناوبان على الإجابة.',
    en: 'One device between you. Take turns answering.',
  },

  // Deck
  next: { ar: 'التالي', en: 'Next' },
  skip: { ar: 'تخطٍّ', en: 'Skip' },
  previous: { ar: 'السابق', en: 'Previous' },
  goDeeper: { ar: 'لنتعمّق أكثر', en: 'Tell me more' },
  anotherFollowUp: { ar: 'سؤال متابعة آخر', en: 'Another follow-up' },
  saveFavorite: { ar: 'حفظ في المفضّلة', en: 'Save to favorites' },
  removeFavorite: { ar: 'إزالة من المفضّلة', en: 'Remove from favorites' },
  share: { ar: 'مشاركة', en: 'Share' },
  copied: { ar: 'تم النسخ', en: 'Copied' },
  progress: { ar: '{current} من {total}', en: '{current} of {total}' },
  depthAny: { ar: 'كل المستويات', en: 'Any depth' },
  depthLight: { ar: 'خفيف', en: 'Light' },
  depthMedium: { ar: 'متوسط', en: 'Medium' },
  depthDeep: { ar: 'عميق', en: 'Deep' },
  depthLabel: { ar: 'العمق', en: 'Depth' },
  subtopicAll: { ar: 'الكل', en: 'All' },
  subtopicLabel: { ar: 'الموضوع الفرعي', en: 'Subtopic' },
  noMatches: {
    ar: 'لا توجد أسئلة بهذا الاختيار. جرّبا تصفية أخرى.',
    en: 'No questions match these filters. Try another combination.',
  },
  deckDoneTitle: { ar: 'أتممتما هذه المجموعة', en: "You've finished this set" },
  deckDoneBody: {
    ar: 'لن يتكرّر أي سؤال في هذه الجلسة. يمكنكما خلط الأسئلة من جديد أو تجربة موضوع آخر.',
    en: 'No question repeats in a session. Shuffle again or try another topic.',
  },
  reshuffle: { ar: 'خلط من جديد', en: 'Shuffle again' },
  otherTopics: { ar: 'مواضيع أخرى', en: 'Other topics' },
  keyboardHint: {
    ar: 'تلميح: استخدما مفاتيح الأسهم للتنقّل.',
    en: 'Tip: use the arrow keys to move between questions.',
  },
  mixTitle: { ar: 'خليط من كل شيء', en: 'A bit of everything' },
  mixCta: { ar: 'ابدآ الخلط', en: 'Start shuffling' },
  mixDescription: {
    ar: 'أسئلة عشوائية من كل مواضيع الحديث.',
    en: 'Random questions from every conversation topic.',
  },
  startJourney: { ar: 'ابدآ الرحلة', en: 'Start the journey' },
  featured: { ar: 'مميّز', en: 'Featured' },

  // Feedback
  feedbackQuestion: { ar: 'هل استمتعتما؟', en: 'Did you enjoy this?' },
  feedbackLoved: { ar: 'أحببناه', en: 'Loved it' },
  feedbackNice: { ar: 'كان لطيفًا', en: 'It was nice' },
  feedbackMeh: { ar: 'ليس لنا', en: 'Not for us' },
  feedbackThanks: {
    ar: 'شكرًا لكما! رأيكما محفوظ على هذا الجهاز فقط.',
    en: 'Thank you! Your answer stays on this device only.',
  },

  // Games: shared
  gamesBack: { ar: 'كل الألعاب', en: 'All games' },
  playersTitle: { ar: 'من يلعب؟', en: "Who's playing?" },
  playerOne: { ar: 'الاسم الأول', en: 'First name' },
  playerTwo: { ar: 'الاسم الثاني', en: 'Second name' },
  playerOneDefault: { ar: 'الطرف الأول', en: 'Player one' },
  playerTwoDefault: { ar: 'الطرف الثاني', en: 'Player two' },
  playersHint: {
    ar: 'الأسماء اختيارية، وتبقى على هذا الجهاز فقط.',
    en: 'Names are optional and stay on this device only.',
  },
  letsStart: { ar: 'لنبدأ', en: "Let's start" },
  playAgain: { ar: 'جولة جديدة', en: 'Play again' },
  changeNames: { ar: 'تغيير الأسماء', en: 'Change names' },
  roundOf: { ar: 'الجولة {current} من {total}', en: 'Round {current} of {total}' },
  turnOf: { ar: 'دور {name}', en: "{name}'s turn" },
  results: { ar: 'النتيجة', en: 'Results' },
  gameClosing: {
    ar: 'الأهمّ من النتيجة: التفاصيل الجديدة التي عرفتماها عن بعضكما.',
    en: 'What matters more than the score: the little things you learned about each other.',
  },
  rounds: { ar: 'عدد الجولات', en: 'Rounds' },

  // Would you rather
  wyrTitle: { ar: 'أيّهما أقرب إليك؟', en: 'Would you rather?' },
  wyrDescription: {
    ar: 'اختيار بين أمرين، ثم حديث عن السبب.',
    en: 'Pick one of two, then talk about why.',
  },
  wyrOr: { ar: 'أم', en: 'or' },
  wyrPickFor: { ar: 'اختيار {name}', en: "{name}'s pick" },
  wyrSame: { ar: 'اخترتما الشيء نفسه!', en: 'You both picked the same!' },
  wyrDifferent: {
    ar: 'اختياران مختلفان، وهذا أجمل ما في الحديث.',
    en: 'Different picks. Even better for a chat.',
  },
  wyrWhy: { ar: 'والآن: لماذا؟ ليشرح كلٌّ منكما سببه.', en: 'Now, why? Each of you explain.' },
  wyrMatched: { ar: 'تطابقتما في {n} من {total}', en: 'You matched on {n} of {total}' },

  // Who knows who better
  whoTitle: { ar: 'من يعرف الآخر أكثر؟', en: 'Who knows who better?' },
  whoDescription: {
    ar: 'يخمّن كلٌّ منكما إجابات الآخر، ثم تُكشف الإجابة.',
    en: "Take turns guessing each other's answers.",
  },
  whoAbout: { ar: 'عن {name}', en: 'About {name}' },
  whoInstructions: {
    ar: 'التخمين على {guesser} بصوت مسموع، والإجابة الصحيحة عند {subject}.',
    en: '{guesser} guesses out loud, then {subject} reveals the real answer.',
  },
  whoRight: { ar: 'تخمين صائب', en: 'Nailed it' },
  whoWrong: { ar: 'ليس تمامًا', en: 'Not quite' },
  whoScore: { ar: 'تخمينات صائبة', en: 'Correct guesses' },

  // Two truths and a lie
  truthsTitle: { ar: 'حقيقتان وكذبة', en: 'Two truths and a lie' },
  truthsDescription: {
    ar: 'ثلاث معلومات، واحدة منها مختلَقة. هل تكتشفانها؟',
    en: 'Three facts, one made up. Can you spot it?',
  },
  truthsTheme: { ar: 'الموضوع', en: 'Theme' },
  truthsTell: {
    ar: 'على {name}: حقيقتان وكذبة عن هذا الموضوع، بأيّ ترتيب.',
    en: '{name}: share two truths and a lie about this theme, in any order.',
  },
  truthsGuess: { ar: 'وعلى {name}: اكتشاف الكذبة.', en: '{name}: spot the lie.' },
  truthsThink: {
    ar: 'خذا لحظة للتفكير، فلا داعي للعجلة.',
    en: 'Take a moment to think. No rush.',
  },
  truthsSpotted: { ar: 'اكتُشفت الكذبة', en: 'Lie spotted' },
  truthsSurvived: { ar: 'نجت الكذبة!', en: 'The lie survived!' },
  truthsAnotherTheme: { ar: 'موضوع آخر', en: 'Another theme' },
  truthsScore: { ar: 'كذبات مكشوفة', en: 'Lies spotted' },

  // Moments
  minutesShort: { ar: '{n} د', en: '{n} min' },
  worksOnCall: { ar: 'يصلح للمكالمة', en: 'Works on a call' },
  samePlace: { ar: 'في مكان واحد', en: 'Same place' },
  filterAll: { ar: 'الكل', en: 'All' },
  pickForUs: { ar: 'اختر لنا', en: 'Pick one for us' },
  steps: { ar: 'الخطوات', en: 'How to' },
  activitiesCount: { ar: 'أفكار: {n}', en: '{n} ideas' },
  showSteps: { ar: 'عرض الخطوات', en: 'Show steps' },
  hideSteps: { ar: 'إخفاء الخطوات', en: 'Hide steps' },

  // Surprise
  surpriseTitle: { ar: 'مفاجأة لكما', en: 'A little surprise' },
  surpriseLead: {
    ar: 'سؤال أو لعبة أو لحظة، اختيرت عشوائيًا. وإن لم تعجبكما، فهناك غيرها.',
    en: "A question, a game or a moment, picked at random. Not feeling it? There's always another.",
  },
  surpriseAgain: { ar: 'مفاجأة أخرى', en: 'Another one' },
  kindQuestion: { ar: 'سؤال', en: 'Question' },
  kindWyr: { ar: 'أيّهما أقرب إليك؟', en: 'Would you rather' },
  kindMoment: { ar: 'لحظة', en: 'Moment' },
  playThisGame: { ar: 'العبا اللعبة كاملة', en: 'Play the full game' },
  seeMoreMoments: { ar: 'المزيد من اللحظات', en: 'More moments' },

  // Favorites
  favoritesTitle: { ar: 'المفضّلة', en: 'Favorites' },
  favoritesLead: {
    ar: 'الأسئلة واللحظات التي أحببتماها، محفوظة على هذا الجهاز.',
    en: 'The questions and moments you loved, saved on this device.',
  },
  favoritesEmpty: {
    ar: 'لا شيء هنا بعد. اضغطا على القلب لحفظ ما يعجبكما.',
    en: 'Nothing here yet. Tap the heart to save what you love.',
  },
  favoritesQuestions: { ar: 'أسئلة', en: 'Questions' },
  favoritesMoments: { ar: 'لحظات', en: 'Moments' },
  favoritesPlay: { ar: 'العبا بالمفضّلة', en: 'Play your favorites' },
  explore: { ar: 'ابدآ الاستكشاف', en: 'Start exploring' },

  // About
  aboutTitle: { ar: 'عن أقرب', en: 'About Closer' },
  aboutLead: {
    ar: 'أقرب مساحة بسيطة ودافئة للأزواج والمخطوبين، تساعدكما على قضاء وقت أجمل معًا من خلال الحديث واللعب واللحظات الصغيرة.',
    en: 'Closer is a simple, cozy space for couples, engaged or married, to spend better time together through conversation, play and little moments.',
  },
  aboutPrinciplesTitle: { ar: 'ما نؤمن به', en: 'What we believe' },
  aboutP1Title: { ar: 'حديث لا استجواب', en: 'Conversation, not interrogation' },
  aboutP1: {
    ar: 'لا إجابات إجبارية. التخطّي متاح دائمًا، والأسئلة العميقة اختيارية.',
    en: 'No answer is required. Skipping is always fine, and deep questions are optional.',
  },
  aboutP2Title: { ar: 'متعة لا منافسة', en: 'Connection, not competition' },
  aboutP2: {
    ar: 'حتى الألعاب ذات النقاط غايتها أن تضحكا وتتعرّفا على بعضكما.',
    en: 'Even the games with points are about laughing and learning about each other.',
  },
  aboutP3Title: { ar: 'خصوصيتكما أولًا', en: 'Your privacy first' },
  aboutP3: {
    ar: 'بلا حسابات، ولا تتبّع، ولا خوادم. كل ما تحفظانه يبقى على جهازكما.',
    en: 'No accounts, no tracking, no servers. Everything you save stays on your device.',
  },
  aboutP4Title: { ar: 'الجودة قبل الكثرة', en: 'Quality over quantity' },
  aboutP4: {
    ar: 'كل سؤال مكتوب بعناية بالعربية والإنجليزية، بلا تكرار.',
    en: 'Every question is carefully written in Arabic and English, with no filler.',
  },
  aboutInspirationTitle: { ar: 'مصادر الإلهام', en: 'Inspiration' },
  aboutInspiration: {
    ar: 'استلهمنا فكرة التدرّج في العمق من دراسة «الأسئلة الستة والثلاثين» لآرون وزملائه، ومواضيع ما قبل الزواج من استبيانات الإرشاد الأسري. أما المحتوى نفسه فمكتوب خصيصًا لأقرب.',
    en: 'The gently deepening arc is inspired by Aron et al.’s “36 Questions” study, and the premarital topics by family counseling questionnaires. All the content itself is written originally for Closer.',
  },
  aboutOpenSource: { ar: 'أقرب مشروع مفتوح المصدر.', en: 'Closer is open source.' },
  viewOnGithub: { ar: 'الشيفرة على GitHub', en: 'Source on GitHub' },

  // 404
  notFoundTitle: { ar: 'ضاعت الصفحة بين الغيوم', en: 'Lost in the clouds' },
  notFoundBody: {
    ar: 'لم نجد هذه الصفحة، لكن الكثير من الأحاديث الجميلة بانتظاركما.',
    en: "We couldn't find this page, but plenty of lovely conversations are waiting.",
  },
  backHome: { ar: 'العودة إلى الرئيسية', en: 'Back home' },
} satisfies Record<string, Localized>

export type StringKey = keyof typeof strings
