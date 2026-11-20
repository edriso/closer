import type { Topic } from '../../types/content'

export const family: Topic = {
  id: 'family',
  section: 'discover',
  tone: 'peach',
  title: { ar: 'العائلة والأهل', en: 'Family & in-laws' },
  description: {
    ar: 'أحاديث دافئة عن الجذور والعادات وبرّ العائلتين، لتجمعا بين القرب من الأهل وخصوصية بيتكما.',
    en: 'Warm conversations about roots, traditions and honoring both families, to stay close to family while keeping your home your own.',
  },
  subtopics: [
    { id: 'roots', title: { ar: 'الجذور والعادات', en: 'Roots & traditions' } },
    { id: 'birr', title: { ar: 'البرّ وصلة الرحم', en: 'Honoring both families' } },
    { id: 'boundaries', title: { ar: 'الحدود والخصوصية', en: 'Boundaries & privacy' } },
    { id: 'decisions', title: { ar: 'التوقعات والقرارات', en: 'Expectations & decisions' } },
  ],
  questions: [
    {
      id: 'family-001',
      subtopic: 'roots',
      depth: 'light',
      text: {
        ar: 'ما الطبق الذي يجمع عائلتك حوله؟',
        en: 'What dish gathers your family around the table?',
      },
      followUps: [
        {
          ar: 'من يُتقن إعداده أكثر من غيره؟',
          en: 'Who makes it best?',
        },
        {
          ar: 'هل يمكن أن نتعلّمه لبيتنا؟',
          en: 'Could we learn to make it for our home?',
        },
      ],
    },
    {
      id: 'family-002',
      subtopic: 'roots',
      depth: 'light',
      text: {
        ar: 'كيف كانت عائلتك تستقبل العيد؟',
        en: 'How did your family welcome Eid?',
      },
      followUps: [
        {
          ar: 'ما التفصيل الصغير الذي لا يكتمل العيد دونه؟',
          en: 'What small detail makes Eid feel complete?',
        },
        {
          ar: 'وكيف يسعدك أن نقضيه نحن؟',
          en: 'And how would you love us to spend it?',
        },
      ],
    },
    {
      id: 'family-003',
      subtopic: 'roots',
      depth: 'medium',
      text: {
        ar: 'ما اللغة أو اللهجة الأقرب إلى قلبك، وأيّها يسعدك أن نتحدث بها في بيتنا؟',
        en: 'Which language or dialect is closest to your heart, and which would you love us to speak at home?',
      },
      followUps: [
        {
          ar: 'وماذا عن الأبناء إن رزقنا الله بهم؟',
          en: 'And with children, if Allah blesses us with them?',
        },
        {
          ar: 'وكيف نقترب من أهل كلٍّ منا بلغتهم؟',
          en: "And how can each of us get closer to the other's family in their own language?",
        },
      ],
    },
    {
      id: 'family-004',
      subtopic: 'roots',
      depth: 'medium',
      text: {
        ar: 'حين تختلف عادات عائلتينا، كيف نصنع منها مزيجًا يناسبنا؟',
        en: "Where our families' customs differ, how could we blend them into something that suits us?",
      },
      followUps: [
        {
          ar: 'ما العادة التي يهمّك ألّا تضيع؟',
          en: 'Which custom matters most to you to keep?',
        },
        {
          ar: 'وكيف نعرّف كل عائلة بعادات الأخرى بلطف؟',
          en: "And how can we gently introduce each family to the other's ways?",
        },
      ],
    },
    {
      id: 'family-005',
      subtopic: 'roots',
      depth: 'deep',
      text: {
        ar: 'ما الدرس عن معنى الأسرة الذي يبقى معك من سنوات نشأتك؟',
        en: 'What lesson about family has stayed with you from the years you grew up?',
      },
      followUps: [
        {
          ar: 'من كان له الأثر الأكبر فيه؟',
          en: 'Who had the biggest part in it?',
        },
        {
          ar: 'وكيف يمكن أن يظهر في بيتنا؟',
          en: 'And how might it show in our home?',
        },
      ],
    },
    {
      id: 'family-006',
      subtopic: 'birr',
      depth: 'light',
      text: {
        ar: 'من في عائلتك يجمع الناس حوله، وما سرّه في ذلك؟',
        en: 'Who in your family brings everyone together, and what is their secret?',
      },
      followUps: [
        {
          ar: 'هل في طبعك شيء من ذلك؟',
          en: 'Is there some of that in you?',
        },
      ],
    },
    {
      id: 'family-007',
      subtopic: 'birr',
      depth: 'light',
      text: {
        ar: 'ما المناسبة العائلية التي يعزّ عليك أن تفوتك؟',
        en: 'Which family gathering would you never want to miss?',
      },
      followUps: [
        {
          ar: 'ما الذي يجعلها مميزة؟',
          en: 'What makes it special?',
        },
        {
          ar: 'وكيف يمكنني أن أكون جزءًا منها؟',
          en: 'And how could I be part of it?',
        },
      ],
    },
    {
      id: 'family-008',
      subtopic: 'birr',
      depth: 'medium',
      text: {
        ar: 'من الأقارب الذين يسعدك أن نبقى على صلة بهم، حتى من بعيد؟',
        en: 'Which relatives would you love us to stay connected with, even from afar?',
      },
      followUps: [
        {
          ar: 'كيف نصلهم: بزيارة، أم اتصال، أم رسالة في العيد؟',
          en: 'How could we keep in touch: visits, calls or a message at Eid?',
        },
      ],
    },
    {
      id: 'family-009',
      subtopic: 'birr',
      depth: 'medium',
      text: {
        ar: 'كيف يبرّ كلٌّ منا أهل الآخر كما يبرّ أهله؟',
        en: "How can each of us honor the other's family as we honor our own?",
      },
      followUps: [
        {
          ar: 'وكيف نُشعر كل عائلة بأنها مرحَّب بها في بيتنا؟',
          en: 'And how can we make each family feel welcome in our home?',
        },
      ],
    },
    {
      id: 'family-010',
      subtopic: 'birr',
      depth: 'deep',
      text: {
        ar: 'ما الذي يعنيه لك برّ الوالدين وكبار العائلة بعد الزواج؟',
        en: 'What does honoring parents and family elders mean to you after marriage?',
      },
      followUps: [
        {
          ar: 'هل يتغيّر شكله عمّا كان قبل الزواج؟',
          en: 'Does it look different from before marriage?',
        },
        {
          ar: 'وكيف نوازن بينه وبين حقّ بيتنا؟',
          en: 'And how do we balance it with what our own home needs?',
        },
      ],
    },
    {
      id: 'family-011',
      subtopic: 'boundaries',
      depth: 'light',
      text: {
        ar: 'ما القدر الذي يريحك من مشاركة أخبار بيتنا في مجموعات العائلة؟',
        en: "How much of our home's news feels right to share in family group chats?",
      },
      followUps: [
        {
          ar: 'هل من أخبار يحسن أن ننتظر بها قليلًا؟',
          en: 'Is there news worth holding on to for a while first?',
        },
      ],
    },
    {
      id: 'family-012',
      subtopic: 'boundaries',
      depth: 'medium',
      text: {
        ar: 'كيف نستقبل نصيحة الأهل حين تأتي في أمور بيتنا؟',
        en: 'How should we take family advice about matters in our home?',
      },
      followUps: [
        {
          ar: 'ما الذي يجعل النصيحة سهلة القبول في نظرك؟',
          en: 'What makes advice easy to accept, in your view?',
        },
        {
          ar: 'ومن يتحدث مع أهله إن احتاج الأمر إلى توضيح؟',
          en: 'And who speaks to their own family if something needs clearing up?',
        },
      ],
    },
    {
      id: 'family-013',
      subtopic: 'boundaries',
      depth: 'medium',
      text: {
        ar: 'إن اختلفنا يومًا، فهل يبقى الأمر بيننا أم لا بأس أن يعرفه أحد من الأهل؟',
        en: 'If we ever disagree, should it stay between us, or is it okay for family to know?',
      },
      followUps: [
        {
          ar: 'وكيف نحفظ صورة كلٍّ منا أمام أهل الآخر؟',
          en: "And how can we protect how each of us is seen by the other's family?",
        },
      ],
    },
    {
      id: 'family-014',
      subtopic: 'boundaries',
      depth: 'deep',
      text: {
        ar: 'إن شعر أحدنا يومًا بأن خصوصية بيتنا لم تُراعَ، فكيف يقول ذلك بلطف؟',
        en: "If one of us ever feels our home's privacy wasn't respected, how can we say so kindly?",
      },
      followUps: [
        {
          ar: 'كيف نبقى فريقًا واحدًا مع حفظ البرّ للجميع؟',
          en: 'How do we stay one team while still honoring everyone?',
        },
        {
          ar: 'ومن الأنسب أن يتحدث في ذلك؟',
          en: 'And who is best placed to raise it?',
        },
      ],
    },
    {
      id: 'family-015',
      subtopic: 'decisions',
      depth: 'medium',
      text: {
        ar: 'ما الذي تنتظره عائلتك عادةً ممن ينضمّ إليها بالزواج؟',
        en: 'What does your family usually hope for from someone who joins it through marriage?',
      },
      followUps: [
        {
          ar: 'وما الذي يسهّل ذلك عليّ؟',
          en: 'And what would make that easier for me?',
        },
      ],
    },
    {
      id: 'family-016',
      subtopic: 'decisions',
      depth: 'medium',
      text: {
        ar: 'في أيّ القرارات يسعدك أن نأخذ برأي الأهل، وفي أيّها نقرّر وحدنا؟',
        en: 'Which decisions would you like us to seek family input on, and which should we make on our own?',
      },
      followUps: [
        {
          ar: 'هل يختلف ذلك بين عائلتينا؟',
          en: 'Is that different for our two families?',
        },
        {
          ar: 'وكيف نُشعرهم بالتقدير حتى حين نختار غير رأيهم؟',
          en: 'And how can we show them respect even when we choose differently?',
        },
      ],
    },
    {
      id: 'family-017',
      subtopic: 'decisions',
      depth: 'deep',
      text: {
        ar: 'ما الذي يحتاجه أهلك ليطمئنّوا عليك بعد الزواج؟',
        en: 'What would your family need to feel at peace about you after marriage?',
      },
      followUps: [
        {
          ar: 'وكيف نُبقيهم مطمئنّين مع مرور السنوات؟',
          en: 'And how could we keep them reassured over the years?',
        },
      ],
    },
  ],
}
