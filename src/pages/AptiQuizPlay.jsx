import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function AptiQuizPlay() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};
  const { quizTitle: routeQuizTitle, questions: routeQuestions = [], timerSeconds: routeTimerSeconds } = state;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(null);
  const [selectedTimerMinutes, setSelectedTimerMinutes] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const storageKey = useMemo(
    () => `aptiQuiz-session-${routeQuizTitle || 'aptitude-quiz'}`,
    [routeQuizTitle]
  );

  const restoredSession = useMemo(() => {
    if (location.state?.questions?.length) return null;
    const saved = sessionStorage.getItem(storageKey);
    if (!saved) return null;
    try {
      const parsed = JSON.parse(saved);
      if (parsed.submitted) return null;
      if (!Array.isArray(parsed.questions) || parsed.questions.length === 0) return null;
      if (typeof parsed.timeLeft !== 'number' || parsed.timeLeft <= 0) return null;
      return parsed;
    } catch {
      return null;
    }
  }, [location.state, storageKey]);

  const timerOptions = [5, 10, 15];

  const handleTimerChange = (e) => {
    const minutes = Number(e.target.value);
    setSelectedTimerMinutes(minutes);
    setTimeLeft(minutes * 60);
  };

  const questions = useMemo(() => {
    if (routeQuestions.length > 0) return routeQuestions;
    if (restoredSession?.questions?.length > 0) return restoredSession.questions;
    return [];
  }, [routeQuestions, restoredSession]);

  const quizTitle = routeQuizTitle || restoredSession?.quizTitle || 'Aptitude Quiz';
  const defaultTimer = useMemo(() => Math.max(questions.length * 60, 300), [questions.length]);

  useEffect(() => {
    if (restoredSession) {
      setCurrentIndex(restoredSession.currentIndex ?? 0);
      setSelectedOption(restoredSession.selectedOption || '');
      setUserAnswers(restoredSession.userAnswers || []);
      setTimeLeft(restoredSession.timeLeft ?? routeTimerSeconds ?? defaultTimer);
      setSelectedTimerMinutes(restoredSession.selectedTimerMinutes ?? null);
      return;
    }
    if (!questions.length || timeLeft !== null) return;
    setTimeLeft(routeTimerSeconds ?? defaultTimer);
  }, [restoredSession, routeTimerSeconds, defaultTimer, questions.length, timeLeft]);

  useEffect(() => {
    if (!questions.length || submitted) return;
    const snapshot = {
      quizTitle,
      questions,
      currentIndex,
      selectedOption,
      userAnswers,
      timeLeft,
      selectedTimerMinutes,
    };
    sessionStorage.setItem(storageKey, JSON.stringify(snapshot));
  }, [questions, currentIndex, selectedOption, userAnswers, timeLeft, submitted, quizTitle, storageKey, selectedTimerMinutes]);

  const buildResult = (answers) => {
    const total = questions.length;
    const attempted = answers.filter((item) => item.selected !== 'No Answer').length;
    const correct = answers.filter((item) => item.selected !== 'No Answer' && item.selected === item.correct).length;
    const wrong = answers.filter((item) => item.selected !== 'No Answer' && item.selected !== item.correct).length;
    const unattempted = total - attempted;
    const score = correct;
    return {
      quizTitle,
      total,
      attempted,
      unattempted,
      correct,
      wrong,
      score,
      answers,
      returnPath: '/aptitudeQuiz',
    };
  };

  const navigateToResult = (resultPayload) => {
    sessionStorage.removeItem(storageKey);
    sessionStorage.setItem('quizResultData', JSON.stringify(resultPayload));
    setSubmitted(true);
    navigate('/quizplay/result', { state: resultPayload });
  };

  const submitQuiz = () => {
    if (submitted || !questions.length) return;

    const currentAnswer = {
      question: questions[currentIndex]?.question || `Question ${currentIndex + 1}`,
      selected: selectedOption || 'No Answer',
      correct: questions[currentIndex]?.answer || 'No Answer',
      isCorrect: selectedOption !== '' && selectedOption === questions[currentIndex]?.answer,
    };

    const answered = [...userAnswers, currentAnswer];
    const finalAnswers = questions.map((question, index) => {
      if (index < answered.length) {
        return answered[index];
      }
      return {
        question: question.question,
        selected: 'No Answer',
        correct: question.answer,
        isCorrect: false,
      };
    });

    const resultPayload = buildResult(finalAnswers);
    navigateToResult(resultPayload);
  };

  useEffect(() => {
    if (submitted || timeLeft === null || timeLeft <= 0 || !questions.length) return undefined;
    const timer = setInterval(() => setTimeLeft((prev) => Math.max(prev - 1, 0)), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted, questions.length]);

  useEffect(() => {
    if (submitted || timeLeft === null || timeLeft > 0 || !questions.length) return;
    submitQuiz();
  }, [timeLeft, submitted, questions.length]);

  const handleSubmit = () => {
    if (!questions.length) return;

    const currentAnswer = {
      question: questions[currentIndex]?.question || `Question ${currentIndex + 1}`,
      selected: selectedOption || 'No Answer',
      correct: questions[currentIndex]?.answer || 'No Answer',
      isCorrect: selectedOption === questions[currentIndex]?.answer,
    };

    const nextAnswers = [...userAnswers, currentAnswer];
    setUserAnswers(nextAnswers);
    setSelectedOption('');

    if (currentIndex + 1 === questions.length) {
      submitQuiz();
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  if (!questions.length) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-6 flex items-center justify-center">
        <div className="max-w-xl rounded-3xl bg-slate-900 border border-slate-700 p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">No Quiz Loaded</h1>
          <p className="text-slate-400 mb-6">Please choose a quiz card first. Then start the quiz from the aptitude launcher.</p>
          <button
            onClick={() => navigate('/aptitudeQuiz')}
            className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-5 py-3 rounded-xl font-semibold transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const percentage = questions.length ? Math.round((buildResult(userAnswers).correct / questions.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-950 p-6 flex items-center justify-center">
      <div className="w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700 p-8 shadow-xl">
        <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-cyan-300">{quizTitle}</h1>
            <p className="text-slate-400">Question {currentIndex + 1} of {questions.length}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <label className="text-slate-400 text-sm">Select Time</label>
              <select
                value={selectedTimerMinutes ?? ''}
                onChange={handleTimerChange}
                className="bg-slate-800 text-white rounded-xl border border-slate-700 px-3 py-2 text-sm"
              >
                <option value="" disabled>Select</option>
                {timerOptions.map((minutes) => (
                  <option key={minutes} value={minutes}>{minutes} min</option>
                ))}
              </select>
            </div>
          </div>
          <div className="rounded-full bg-slate-800 px-4 py-3 text-center text-slate-300 shadow-inner border border-cyan-700">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Time Remaining</p>
            <p className="text-2xl font-bold text-white">
              {timeLeft === null ? '00:00' : `${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`}
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-800 border border-slate-700 p-6 mb-6">
          <p className="text-xl font-semibold text-white mb-4">{currentQuestion.question}</p>
          <div className="space-y-3">
            {currentQuestion.options?.map((option, index) => (
              <label
                key={index}
                className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-4 transition ${selectedOption === option ? 'border-cyan-500 bg-cyan-600 text-white' : 'border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-500 hover:bg-slate-800'}`}
              >
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                  className="h-4 w-4 accent-cyan-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 py-4 text-lg font-semibold text-slate-950 hover:brightness-110 transition"
        >
          {currentIndex + 1 === questions.length ? 'Submit Quiz' : 'Submit Answer'}
        </button>
      </div>
    </div>
  );
}

export default AptiQuizPlay;
