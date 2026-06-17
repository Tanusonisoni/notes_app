import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function QuizResult() {
  const location = useLocation();
  const navigate = useNavigate();
  let resultState = location.state;

  if (!resultState) {
    const saved = sessionStorage.getItem('quizResultData');
    if (saved) {
      try {
        resultState = JSON.parse(saved);
      } catch {
        resultState = null;
      }
    }
  }

  if (!resultState) {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-6 flex items-center justify-center">
        <div className="max-w-lg rounded-3xl bg-slate-800 border border-slate-700 p-8 text-center">
          <h1 className="text-3xl font-bold mb-4 text-cyan-300">No result data available</h1>
          <p className="text-slate-400 mb-6">Please complete a quiz before reviewing the result.</p>
          <button
            className="bg-cyan-500 text-slate-950 px-5 py-3 rounded-2xl font-semibold hover:bg-cyan-400 transition"
            onClick={() => navigate('/Quiz')}
          >
            Go to Quiz
          </button>
        </div>
      </div>
    );
  }

  const {
    quizTitle = 'Quiz Result',
    total = 0,
    attempted = 0,
    unattempted = 0,
    correct = 0,
    wrong = 0,
    score = 0,
    answers = [],
    returnPath = '/Quiz',
  } = resultState;

  const percentage = total ? Math.round((correct / total) * 100) : 0;
  const status = percentage >= 50 ? 'Pass' : 'Fail';
  const progressStyle = {
    background: `conic-gradient(#22c55e ${percentage}%, #334155 ${percentage}% 100%)`,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="rounded-3xl bg-slate-900 border border-slate-700 p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-cyan-300 mb-2">{quizTitle}</h1>
              <p className="text-slate-400">Your final quiz summary is shown below.</p>
            </div>

            <div className="relative h-40 w-40 rounded-full bg-slate-800 p-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full" style={progressStyle}></div>
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-slate-950 text-center">
                <div>
                  <p className="text-sm text-slate-400">Score</p>
                  <p className="text-4xl font-bold text-cyan-300">{percentage}%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-slate-800 p-5 text-center">
              <p className="text-sm text-slate-400">Total Questions</p>
              <p className="text-3xl font-semibold text-white">{total}</p>
            </div>
            <div className="rounded-3xl bg-slate-800 p-5 text-center">
              <p className="text-sm text-slate-400">Attempted</p>
              <p className="text-3xl font-semibold text-white">{attempted}</p>
            </div>
            <div className="rounded-3xl bg-slate-800 p-5 text-center">
              <p className="text-sm text-slate-400">Unattempted</p>
              <p className="text-3xl font-semibold text-white">{unattempted}</p>
            </div>
            <div className="rounded-3xl bg-slate-800 p-5 text-center">
              <p className="text-sm text-slate-400">Correct</p>
              <p className="text-3xl font-semibold text-emerald-400">{correct}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-800 p-5 text-center">
              <p className="text-sm text-slate-400">Wrong</p>
              <p className="text-3xl font-semibold text-rose-400">{wrong}</p>
            </div>
            <div className="rounded-3xl bg-slate-800 p-5 text-center">
              <p className="text-sm text-slate-400">Final Score</p>
              <p className="text-3xl font-semibold text-cyan-300">{score}</p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-slate-800 p-5 text-center">
            <p className="text-sm text-slate-400">Status</p>
            <p className={`mt-2 text-2xl font-bold ${status === 'Pass' ? 'text-emerald-400' : 'text-rose-400'}`}>{status}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate(returnPath)}
              className="rounded-3xl bg-cyan-500 px-6 py-3 text-slate-950 hover:bg-cyan-400 transition"
            >
              Retake Quiz
            </button>
            <button
              onClick={() => navigate('/')}
              className="rounded-3xl bg-slate-800 border border-slate-700 px-6 py-3 text-white hover:bg-slate-700 transition"
            >
              Home
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900 border border-slate-700 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Answer Review</h2>
          <div className="space-y-4">
            {answers.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-6 ${item.selected === item.correct ? 'bg-emerald-950 border border-emerald-600' : 'bg-rose-950 border border-rose-600'}`}
              >
                <p className="font-semibold text-white">Q{idx + 1}. {item.question}</p>
                <p className="text-slate-300 mt-2">Your answer: <span className="font-semibold text-white">{item.selected}</span></p>
                <p className="text-slate-300">Correct answer: <span className="font-semibold text-white">{item.correct}</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizResult;
