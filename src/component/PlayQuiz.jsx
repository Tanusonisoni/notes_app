import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/context';
import data from '../quiz';

function PlayQuiz() {

  const { id, level } = useContext(Context);

  const [currentQue, setCurrentQue] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  // ✅ NEW STATES
  const [userAnswers, setUserAnswers] = useState([]);
  const [showReport, setShowReport] = useState(false);

  //timer
  const [timeLimit, setTimeLimit] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  const [time, setTime] = useState(0);

  const selectCategory = data.categories.find(
    (item) => item.level === level
  );

  const selectedCard = selectCategory?.cards?.find(
    (c) => c.cardId == id
  );

  if (!selectedCard) {
    return <h2>No quiz selected</h2>;
  }

  const que = selectedCard.questions[currentQue];

  const handleTimeChange = (e) => {
    const minutes = Number(e.target.value);
    setTime(minutes*60); // yahi pe timer start ho jayega
  };

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          alert("Time up");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  // ✅ submit logic updated
  const handleSubmit = () => {
    if (!selectedOption) {
      alert("Select an option");
      return;
    }

    const correctAnswer = que.answer;

    // ✅ store answer
    setUserAnswers((prev) => [
      ...prev,
      {
        question: que.question,
        selected: selectedOption,
        correct: correctAnswer
      }
    ]);

    if (selectedOption === correctAnswer) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setWrongCount((prev) => prev + 1);
    }

    setSelectedOption("");

    // ✅ last question → show report
    if (currentQue + 1 === selectedCard.questions.length) {
      setShowReport(true);
    } else {
      setCurrentQue((prev) => prev + 1);
    }
  };

  // ✅ REPORT UI
  if (showReport) {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">📊 Quiz Report</h1>

        <div className="text-center mb-6">
          <p>Total: {userAnswers.length}</p>
          <p>✅ Correct: {correctCount}</p>
          <p>❌ Wrong: {wrongCount}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {userAnswers.map((item, idx) => {
            const isCorrect = item.selected === item.correct;

            return (
              <div
                key={idx}
                className={`p-4 rounded-lg ${isCorrect ? "bg-green-700" : "bg-red-700"
                  }`}
              >
                <p className="font-semibold">
                  Q{idx + 1}. {item.question}
                </p>

                <p>
                  Your Answer: <b>{item.selected}</b>
                </p>

                {!isCorrect && (
                  <p>
                    Correct Answer: <b>{item.correct}</b>
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ✅ NORMAL QUIZ UI

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center">

      {/* CENTER CARD */}
      <div className="w-full max-w-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-2xl shadow-2xl p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-cyan-400">
            {selectedCard.title}
          </h1>

          {/* Timer Box (placeholder) */}
          <div className="bg-slate-800 border border-cyan-500 px-4 py-3 rounded-xl shadow flex flex-col gap-2">

            <p className="text-xs text-slate-400">Select Time</p>

            {/* ✅ Dropdown */}
            <select
              value={timeLimit || ""}
              onChange={handleTimeChange }
              className="bg-slate-900 text-white text-sm px-2 py-1 rounded outline-none border border-slate-600"
            >
              <option value="" disabled>Select</option>
              <option value="10">10 min</option>
              <option value="20">20 min</option>
              <option value="30">30 min</option>
            </select>

            {/* ✅ Timer Display */}
            <h2>
              {Math.floor(time / 60)}:{time % 60 < 10 ? "0" : ""}
              {time % 60}
            </h2>

          </div>

        </div>

        {/* Question */}
        <h2 className="text-lg font-semibold mb-5 text-white">
          Q{currentQue + 1}. {que.question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {que.options.map((op, i) => (
            <label
              key={i}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition
    ${selectedOption === op
                  ? "bg-cyan-600 text-white"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-100"}`}
            >
              <input
                type="radio"
                name="option"
                value={op}
                checked={selectedOption === op}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="accent-cyan-500"
              />
              <span>{op}</span>
            </label>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Submit
        </button>

      </div>
    </div>
  );
}

export default PlayQuiz;