import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import Context from '../context/context';


function Short_trick() {
  const categories = [
    "LogicalReasoning",
    "QuantitativeAptitude",
    "VerbalAbility",
    "AdvanceQuant",
  ];

  const navigate = useNavigate();
  const { setTrick } = useContext(Context);

  

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        Short Tricks
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
       >
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setTrick(item);
              navigate('/read');
            }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <h2 className="text-lg font-semibold text-white text-center">
              {item}
            </h2>

            <p className="text-slate-400 text-sm text-center mt-2">
              View Short Tricks
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Short_trick;