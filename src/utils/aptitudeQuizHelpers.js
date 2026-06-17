export const CATEGORY_FILE_MAP = {
  'Quantitative Aptitude': 'Quantitative Aptitude.js',
  'Logical Reasoning': 'Logical Reasoning.js',
  'Verbal Ability': 'Verbal Ability.js',
  'Advanced Quant': 'Advance quant.js',
};

export const TOPIC_EXPORT_MAP = {
  'Quantitative Aptitude': {
    'Quadratic Equations': 'QuadraticEqu',
    Logarithm: 'logirithmic',
    Progressions: 'progression',
    Geometry: 'Geomatry',
    Mensuration: 'mensuration',
    Trigonometry: 'Trigonometry',
    Statistics: 'statistics',
    'Data Interpretation': 'DataInterpretation',
  },
  'Logical Reasoning': {
    'Coding Decoding': 'codingDecodingQuestions',
    'Blood Relations': 'bloodRelationQuestions',
    'Number Series': 'numberSeries',
    Syllogism: 'syllogism',
    'Seating Arrangement': 'seatingArrang',
    Puzzles: 'puzzles',
    'Statement and Conclusion': 'statementConclusion',
    Analogy: 'analogy',
    'Odd One Out': 'Addoneout',
    'Data Sufficiency': 'dataSufficency',
    'Logical Sequence': 'logicalSequence',
  },
  'Verbal Ability': {
    'Reading Comprehension': 'Readingcompreshension',
    'Sentence Correction': 'sentanceCorrection',
    'Error Spotting': 'errorSpotting',
    'Fill in the Blanks': 'fillup',
    'Para Jumbles': 'paraJumble',
    Vocabulary: 'vocabulary',
    'Idioms and Phrases': 'idiomsandPhrases',
  },
  'Advanced Quant': {
    'Quadratic Equations': 'QuadraticEqu',
    Logarithm: 'logirithmic',
    Progressions: 'progression',
    Geometry: 'Geomatry',
    Mensuration: 'mensuration',
    Trigonometry: 'Trigonometry',
    Statistics: 'statistics',
    'Data Interpretation': 'DataInterpretation',
  },
};

const normalizeText = (value) =>
  String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

export const normalizeQuestions = (rawData) => {
  if (!rawData) return [];

  if (Array.isArray(rawData)) {
    if (rawData.length > 0 && rawData[0]?.questions) {
      return rawData.flatMap((item) =>
        item.questions.map((question) => ({
          ...question,
          question: question.question || question.q || '',
        }))
      );
    }

    return rawData.map((item) => ({
      ...item,
      question: item.question || item.q || '',
    }));
  }

  if (rawData.questions) {
    return rawData.questions.map((item) => ({
      ...item,
      question: item.question || item.q || '',
    }));
  }

  return [];
};

const findTopicInModule = (moduleExports, topicName) => {
  const normalizedTopic = normalizeText(topicName);

  return Object.values(moduleExports).find((value) => {
    if (!value) return false;

    if (Array.isArray(value)) {
      return true;
    }

    if (typeof value === 'object') {
      if (normalizeText(value.topic) === normalizedTopic) return true;
      if (normalizeText(value.title) === normalizedTopic) return true;
      if (value.questions && Array.isArray(value.questions)) return true;
    }

    return false;
  });
};

export async function loadAptitudeTopicQuestions(category, topic) {
  if (!category || !topic) {
    throw new Error('Select a category and topic first.');
  }

  const fileName = CATEGORY_FILE_MAP[category];
  if (!fileName) {
    throw new Error(`Unable to find quiz file for category: ${category}`);
  }

  const modules = import.meta.glob('../aptitdedata/QUIZ/*.js');
  const filePath = `../aptitdedata/QUIZ/${fileName}`;
  const loadModule = modules[filePath];

  if (!loadModule) {
    throw new Error(`Quiz file not found: ${fileName}`);
  }

  const moduleExports = await loadModule();
  const exportKey = TOPIC_EXPORT_MAP[category]?.[topic];

  const selectedTopic = exportKey
    ? moduleExports[exportKey]
    : findTopicInModule(moduleExports, topic);

  if (!selectedTopic) {
    throw new Error(`Topic not found: ${topic}`);
  }

  return normalizeQuestions(selectedTopic);
}
