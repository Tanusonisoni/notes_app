import React from 'react'
import aptitudeMockData from '../aptitude'

function Quiz4() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      
      <h1 className="text-3xl font-bold text-center text-cyan-400 mb-8">
        Aptitude Topics
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {aptitudeMockData.map((item, index) => (
          
          <div 
            key={index} 
            className="bg-slate-800 border border-slate-700 rounded-2xl p-5 shadow-lg hover:shadow-cyan-500/20 transition duration-300"
          >
            
            {/* Topic */}
            <h3 className="text-xl font-semibold text-white mb-4">
              {item.topic}
            </h3>

            {/* Subtopics */}
            <ul className="space-y-2">
              {item.subtopics?.map((to, idx) => (
                <li 
                  key={idx}
                  className="bg-slate-700 text-slate-200 px-3 py-1 rounded-lg text-sm hover:bg-cyan-600 hover:text-white transition"
                >
                  {to}
                </li>
              ))}
            </ul>

          </div>

        ))}

      </div>
    </div>
  )
}

export default Quiz4