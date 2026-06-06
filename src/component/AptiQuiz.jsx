import React, { useContext } from 'react'
import Context from '../context/context'
import quiz from '../aptitdedata/Allquiz'


function AptiQuiz() {

 const {topic}=useContext(Context);

 const selectedQuiz=quiz[topic];
 console.log(selectedQuiz)
    
  return (
    <div>
      <h1>helo apti quiz</h1>
      <h1>Category: {topic?.category}</h1>
      <h2>Topic: {topic?.topic}</h2>
    
    </div>
  )
}

export default AptiQuiz
