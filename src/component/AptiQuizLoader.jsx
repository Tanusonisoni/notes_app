import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/context';
import { loadAptitudeTopicQuestions } from '../utils/aptitudeQuizHelpers';

const CATEGORY_FILE_MAP = {
  'Quantitative Aptitude': 'Quantitative Aptitude.js',
  'Logical Reasoning': 'Logical Reasoning.js',
  'Verbal Ability': 'Verbal Ability.js',
  'Advanced Quant': 'Advance quant.js',
};

const TOPIC_EXPORT_MAP = {
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

const CARD_CONFIG = [
  { id: 1, label: 'Quiz 1', questionCount: 15, timer: 20 },
  { id: 2, label: 'Quiz 2', questionCount: 15, timer: 20 },
  { id: 3, label: 'Quiz 3', questionCount: 20, timer: 20 },
];

const normalizeText = (value) =>
  String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

const normalizeQuestions = (rawData) => {
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

    if (Array.isArray(value)) return true;

    if (typeof value === 'object') {
      if (normalizeText(value.topic) === normalizedTopic) return true;
      if (normalizeText(value.title) === normalizedTopic) return true;
      if (value.questions && Array.isArray(value.questions)) return true;
    }

    return false;
  });
};

function AptiQuizLoader() {
  const { topic } = useContext(Context);
  const navigate = useNavigate();

  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadQuizFile = async () => {
      if (!topic?.category || !topic?.topic) {
        setError('Select a category and topic first.');
        return;
      }

      setLoading(true);
      setError('');

      try {
        const questions = await loadAptitudeTopicQuestions(topic.category, topic.topic);

        setQuizData({
          questions,
          category: topic.category,
          topic: topic.topic,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadQuizFile();
  }, [topic]);

  const handleCardSelect = (card) => {
    if (!quizData) return;

    const total = quizData.questions.length;

    const selectedQuestions =
      card.id === 2 && total > 15
        ? quizData.questions.slice(15, 30)
        : quizData.questions.slice(0, card.questionCount);

    navigate('/aptitudeQuiz/play', {
      state: {
        quizTitle: `${card.label} — ${quizData.topic}`,
        category: quizData.category,
        topic: quizData.topic,
        questions: selectedQuestions,
        timerSeconds: card.timer,
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold text-cyan-300 mb-4">
          Aptitude Quiz
        </h1>

        <p className="text-slate-400 mb-1">
          Category: {topic?.category || 'None selected'}
        </p>

        <p className="text-slate-400 mb-6">
          Topic: {topic?.topic || 'None selected'}
        </p>

        {/* Loading */}
        {loading && (
          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            Loading quiz data...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-900 p-6 rounded-2xl text-red-200 text-center">
            {error}
          </div>
        )}

        {/* Ready */}
        {!loading && !error && quizData && (
          <>
            <div className="bg-slate-900 p-6 rounded-2xl mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Ready to Begin 🚀
              </h2>
              <p className="text-slate-300">
                {quizData.questions.length} questions loaded
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              {CARD_CONFIG.map((card) => (
                <button
                  key={card.id}
                  onClick={() => handleCardSelect(card)}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition"
                >
                  <h2 className="text-2xl font-bold mb-2">
                    {card.label}
                  </h2>
                  <p>{card.questionCount} Questions</p>
                  <p>{card.timer} sec per question</p>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AptiQuizLoader;