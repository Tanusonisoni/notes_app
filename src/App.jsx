import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import Navbar from './component/Navbar'
import Dbms from './pages/Dbms'
import Os from './pages/Os'
import Cn from './pages/Cn'
import Quiz from './component/Quiz'
import Quiz1 from './pages/Quiz1'
import PlayQuiz from './component/PlayQuiz'
import Quiz2 from './pages/Quiz2'
import Quiz3 from './pages/Quiz3'
import Quiz4 from './pages/Quiz4'
import Quiz5 from './pages/Quiz5'
import QuizResult from './pages/QuizResult'
import AptiQuiz from './component/AptiQuiz'
import AptiQuizPlay from './pages/AptiQuizPlay'
import Short_trick from './pages/Short_trick'
import Mocktest from './pages/Mocktest'
import ReadTrick from './pages/readTrick'
import ReadMock from './pages/readMock'
import MockTquiz from './pages/MockTquiz'
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
        <Route path="/quiz2" element={<Quiz2/>} />
        <Route path="/quiz3" element={<Quiz3/>} />
        <Route path="/quiz4" element={<Quiz4/>} />
        <Route path="/quiz5" element={<Quiz5/>} />
        <Route path="/quizplay" element={<PlayQuiz />} />
        <Route path="/aptitudeQuiz" element={<AptiQuiz/>} />
        <Route path="/aptitudeQuiz/play" element={<AptiQuizPlay />} />
        <Route path="/quizplay/result" element={<QuizResult />} />
        <Route path="/shortTrick" element={<Short_trick/>}/>
        <Route path="/read" element={<ReadTrick/>}/>
        <Route path="/mockread" element={<ReadMock/>}/>
         <Route path='/mockt' element={<MockTquiz/>}/>


        
      {/* <Route path="*" element={<Navigate to="/" replace /> */}
      {/* } /> */}

      </Routes>
    </div>
  )
}

export default App
