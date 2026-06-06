import React from 'react'
import advancequ from './QUIZ/Advance quant'
import logoical from './QUIZ/Logical Reasoning'
import quantap from './QUIZ/Quantitative Aptitude'
import verbal from './QUIZ/Verbal Ability'
    
    

function Allquiz() {

    
      const QUIZ={
        "Advanced Quant":advancequ,
        "Logical Reasoning":logoical,
        "Quantitative Aptitude":quantap,
        "Verbal Ability":verbal
      }

}

export default Allquiz;
