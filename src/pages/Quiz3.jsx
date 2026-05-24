import React, { useContext } from 'react'
import { osData } from '../quiz';
import { useNavigate } from 'react-router-dom';
import Context from '../context/context';

function Quiz3() {

  const {id,setId,level,setLevel} = useContext(Context)

  const navigate=useNavigate();
  
  const selectCategory = osData.categories.find(
    (item) => item.level === level
  ); 

  
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-3xl font-bold text-center mb-6 text-orange-300">
        OS Quiz 🧠
      </h1>

      {/* SELECT */}
      <div className="flex justify-center mb-6">
  <select
    className="p-3 rounded-lg w-40 bg-white text-black border border-gray-300 shadow-md 
               focus:outline-none focus:ring-2 focus:ring-indigo-500"
    onChange={(e) => {setLevel(e.target.value)}}
  >
    <option value="">Choose Level</option>
    <option value="Easy">Easy</option>
    <option value="Medium">Medium</option>
    <option value="Hard">Hard</option>
    </select>
  </div>

  
      {/* CARDS */}
      <div className="flex flex-col gap-4 max-w-xl mx-auto">

        {selectCategory?.cards?.map((card) => (
          <div
            key={card.cardId}
            className="bg-slate-800 p-4 rounded-xl shadow-lg hover:scale-[1.02] transition cursor-pointer flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-sm text-slate-400">
                {card.questions.length} Questions
              </p>
            </div>

            <button className="bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600"
            onClick={()=>{setId(card.cardId);
              navigate("/quizplay");
            }}>
              Start →
            </button>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Quiz3