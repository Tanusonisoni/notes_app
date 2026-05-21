import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import Navbar from './component/Navbar'
import Dbms from './pages/Dbms'
import Os from './pages/Os'
import Cn from './pages/Cn'
import Quiz from './component/Quiz'
import Quiz1 from './pages/Quiz1'
import PlayQuiz from './component/PlayQuiz'

function Oop() {

    const [level, setLevel] = useState("");

    
  return (

    
    <div className="min-h-screen bg-black text-white px-5 md:px-10 py-6">
      <h1 className="text-4xl font-black text-purple-400">OOP Notes</h1>
      <p className="text-gray-400 mt-4">Coming soon: object-oriented programming notes and practice.</p>
    </div>
  )
}


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/dbms" element={<Dbms />} />
        <Route path="/cn" element={<Cn />} />
        <Route path="/os" element={<Os />} />
        <Route path="/oop" element={<Oop />} />

        <Route path="/Quiz" element={<Quiz />}/>
        <Route path="/quiz1" element={<Quiz1/>} />
        <Route path="/quizplay" element={<PlayQuiz />} />


        {/* <Route path="*" element={<Navigate to="/" replace /> */}
      {/* } /> */}

      </Routes>
    </div>
  )
}

export default App
