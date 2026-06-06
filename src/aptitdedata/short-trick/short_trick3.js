// verbalShortcutGuide.js

const verbalShortcutGuide = [
  {
    id: 1,
    topic: "Reading Comprehension",
    concept: "Main Idea Questions",
    howToIdentify: [
      "Mainly",
      "Primary Purpose",
      "Central Idea",
      "Best Title",
      "Theme"
    ],
    shortcut: [
      "First paragraph padho",
      "Last paragraph padho",
      "Dono ko combine karo",
      "Jo option pura passage cover kare wahi answer"
    ],
    avoidMistakes: [
      "Single line based option mat select karo",
      "Personal opinion mat lagao",
      "Extreme words avoid karo"
    ],
    example: {
      question: "What is the central idea of the passage?",
      solveMethod: "First + Last paragraph method"
    }
  },

  {
    id: 2,
    topic: "Reading Comprehension",
    concept: "Fact Based Questions",
    howToIdentify: [
      "According to passage",
      "Author says",
      "Passage states"
    ],
    shortcut: [
      "Question ka keyword identify karo",
      "Passage scan karo",
      "Keyword wali line padho",
      "Answer directly nikal jaega"
    ]
  },

  {
    id: 3,
    topic: "Sentence Correction",
    concept: "Subject Verb Agreement",
    howToIdentify: [
      "Each",
      "Every",
      "Either",
      "Neither",
      "Everyone",
      "Everybody"
    ],
    shortcut: [
      "Ye sab singular hote hain",
      "Singular verb use karo"
    ],
    examples: [
      {
        wrong: "Each student have a book",
        correct: "Each student has a book"
      }
    ]
  },

  {
    id: 4,
    topic: "Sentence Correction",
    concept: "One Of The Rule",
    shortcut: [
      "One of the + plural noun",
      "Verb hamesha singular"
    ],
    examples: [
      {
        wrong: "One of the boys are absent",
        correct: "One of the boys is absent"
      }
    ]
  },

  {
    id: 5,
    topic: "Error Spotting",
    concept: "Fast Error Detection",
    shortcut: [
      "Verb check karo",
      "Tense check karo",
      "Preposition check karo",
      "Article check karo"
    ],
    solvePattern: [
      "Subject dhundo",
      "Verb match karo",
      "Tense consistency check karo"
    ]
  },

  {
    id: 6,
    topic: "Fill in the Blanks",
    concept: "Context Based Questions",
    shortcut: [
      "Sentence me clue word dhundo",
      "Because = Reason",
      "Although = Contrast",
      "Therefore = Result",
      "Despite = Opposite Meaning"
    ]
  },

  {
    id: 7,
    topic: "Fill in the Blanks",
    concept: "Preposition Questions",
    shortcut: [
      "Interested in",
      "Good at",
      "Depend on",
      "Responsible for",
      "Capable of",
      "Different from",
      "Married to",
      "Proud of"
    ],
    solveMethod: "Fixed combinations memorize karo"
  },

  {
    id: 8,
    topic: "Para Jumbles",
    concept: "Find First Sentence",
    shortcut: [
      "Pronoun first nahi aata",
      "He, She, They, This, That skip karo",
      "General statement search karo"
    ]
  },

  {
    id: 9,
    topic: "Para Jumbles",
    concept: "Find Last Sentence",
    shortcut: [
      "Therefore",
      "Thus",
      "Hence",
      "Consequently",
      "Finally"
    ],
    solveMethod: [
      "Ye words mostly conclusion batate hain"
    ]
  },

  {
    id: 10,
    topic: "Sentence Completion",
    concept: "Conditional Sentences",
    shortcut: [
      "If + Had + V3",
      "Would Have + V3"
    ],
    example: {
      question: "If I had known",
      answerPattern: "Would have helped"
    }
  },

  {
    id: 11,
    topic: "Vocabulary",
    concept: "Unknown Word Trick",
    shortcut: [
      "Word positive lag raha ya negative?",
      "Options me tone match karo"
    ],
    examples: [
      {
        word: "Robust",
        thinking: "Positive word",
        answer: "Strong"
      }
    ]
  },

  {
    id: 12,
    topic: "Vocabulary",
    concept: "Most Repeated TCS Words",
    words: [
      {
        word: "Adept",
        meaning: "Skilled"
      },
      {
        word: "Prudent",
        meaning: "Wise"
      },
      {
        word: "Robust",
        meaning: "Strong"
      },
      {
        word: "Mitigate",
        meaning: "Reduce"
      },
      {
        word: "Feasible",
        meaning: "Possible"
      },
      {
        word: "Obsolete",
        meaning: "Outdated"
      },
      {
        word: "Integrity",
        meaning: "Honesty"
      }
    ]
  },

  {
    id: 13,
    topic: "Synonyms",
    concept: "Solve Method",
    shortcut: [
      "Same meaning search karo",
      "Positive ka positive",
      "Negative ka negative"
    ]
  },

  {
    id: 14,
    topic: "Antonyms",
    concept: "Solve Method",
    shortcut: [
      "Opposite emotion socho",
      "Opposite quality socho"
    ],
    examples: [
      {
        word: "Prudent",
        answer: "Reckless"
      },
      {
        word: "Benevolent",
        answer: "Cruel"
      }
    ]
  },

  {
    id: 15,
    topic: "Idioms & Phrases",
    concept: "Idiom Questions",
    shortcut: [
      "Literal meaning kabhi mat lagao",
      "Memorized meaning use karo"
    ],
    examples: [
      {
        idiom: "Break the Ice",
        meaning: "Start Conversation"
      },
      {
        idiom: "Piece of Cake",
        meaning: "Very Easy"
      },
      {
        idiom: "Spill the Beans",
        meaning: "Reveal Secret"
      }
    ]
  }
];

export default verbalShortcutGuide;