import React from 'react'
import { useLocation } from "react-router";
import LogicalMocktest1 from "../aptitdedata/logicaldata/Mocktest1";
import LogicalMocktest2 from "../aptitdedata/logicaldata/Mocktest2";
import LogicalMocktest3 from "../aptitdedata/logicaldata/Mocktest3";

import VerbalMocktest1 from "../aptitdedata/verbal/Mocktest1";
import VerbalMocktest2 from "../aptitdedata/verbal/Mocktest2";
import VerbalMocktest3 from "../aptitdedata/verbal/Mocktest3";

import AdvancedMocktest1 from "../aptitdedata/advancedQuant/Mocktest1";
import AdvancedMocktest2 from "../aptitdedata/advancedQuant/Mocktest2";
import AdvancedMocktest3 from "../aptitdedata/advancedQuant/Mocktest3";

function MockTquiz() {
    const location = useLocation();

const { categoryKey, mockIndex, mockName } = location.state;

const mockData = {
  logical: {
    1: LogicalMocktest1,
    2: LogicalMocktest2,
    3: LogicalMocktest3,
  },

  verbal: {
    1: VerbalMocktest1,
    2: VerbalMocktest2,
    3: VerbalMocktest3,
  },

  advanced: {
    1: AdvancedMocktest1,
    2: AdvancedMocktest2,
    3: AdvancedMocktest3,
  },
};

const questions = mockData[categoryKey][mockIndex];
  return (
    <div>
      <h1>mock test start</h1>
      return (
  <div>
    <h1>{mockName}</h1>

    {questions.map((q, i) => (
      <div key={i}>
        <h3>Question {i + 1}</h3>

        <p>{q.question}</p>

        {q.options.map((option, idx) => (
          <div key={idx}>
            {String.fromCharCode(65 + idx)}. {option}
          </div>
        ))}
      </div>
    ))}
  </div>
);
    </div>
  )
}

export default MockTquiz
