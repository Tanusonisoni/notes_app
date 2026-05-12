import React from "react";
import Quiz1 from "../pages/Quiz1";
import { useNavigation } from "react-router";



function Quiz() {

  const naviagte=useNavigation();
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      
      <div className="bg-gray-900 p-10 rounded-2xl shadow-2xl text-center w-[400px] border border-gray-700">
        
        <h1 className="text-4xl font-bold text-white mb-3">
          Welcome to Quiz
        </h1>

        <p className="text-gray-400 mb-8">
          Choose a subject to start quiz
        </p>

        <div className="flex flex-col gap-4">
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          onClick={()=>(
            naviagte(<Quiz1/>)
          )}>
            DBMS
          </button>

          <button className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition duration-300">
            CN
          </button>

          <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition duration-300">
            OOPS
          </button>

          <button className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition duration-300">
            OS
          </button>

        </div>
      </div>
    </div>
  );
}

export default Quiz;