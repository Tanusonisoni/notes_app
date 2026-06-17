import React, { useEffect, useState } from 'react'
import { useNavigate  } from 'react-router'

// Import mock test data
// import QuantMocktest1 from '../aptitdedata/quant/Mocktest1'
// import QuantMocktest2 from '../aptitdedata/quant/Mocktest2'
// import QuantMocktest3 from '../aptitdedata/quant/Mocktest3'

import LogicalMocktest1 from '../aptitdedata/logicaldata/Mocktest1'
import LogicalMocktest2 from '../aptitdedata/logicaldata/Mocktest2'
import LogicalMocktest3 from '../aptitdedata/logicaldata/Mocktest3'

import VerbalMocktest1 from '../aptitdedata/verbal/Mocktest1'
import VerbalMocktest2 from '../aptitdedata/verbal/Mocktest2'
import VerbalMocktest3 from '../aptitdedata/verbal/Mocktest3'

import AdvancedMocktest1 from '../aptitdedata/advancedQuant/Mocktest1'
import AdvancedMocktest2 from '../aptitdedata/advancedQuant/Mocktest2'
import AdvancedMocktest3 from '../aptitdedata/advancedQuant/Mocktest3'

function ReadMock() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedMockTest, setSelectedMockTest] = useState(null)
  const [mockTestData, setMockTestData] = useState(null)
  // const [index, setIndex] = useState("");


  console.log(selectedCategory);

  const categories = [
    { name: 'Quantitative Aptitude', key: 'quant' },
    { name: 'Logical Reasoning', key: 'logical' },
    { name: 'Verbal Ability', key: 'verbal' },
    { name: 'Advanced Quant', key: 'advanced' }
  ]

  const mockTestMap = {
    // quant: {
    //   'Mock Test 1': QuantMocktest1,
    //   'Mock Test 2': QuantMocktest2,
    //   'Mock Test 3': QuantMocktest3
    // },
    logical: {
      'Mock Test 1': LogicalMocktest1,
      'Mock Test 2': LogicalMocktest2,
      'Mock Test 3': LogicalMocktest3
    },
    verbal: {
      'Mock Test 1': VerbalMocktest1,
      'Mock Test 2': VerbalMocktest2,
      'Mock Test 3': VerbalMocktest3
    },
    advanced: {
      'Mock Test 1': AdvancedMocktest1,
      'Mock Test 2': AdvancedMocktest2,
      'Mock Test 3': AdvancedMocktest3
    }
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setSelectedMockTest(null)
    setMockTestData(null)
  }

 const handleMockTestClick = (mockTest,index) => {

  const data = mockTestMap[selectedCategory.key][mockTest];

  navigate("/MockTquiz", {
    state: {
      category: selectedCategory.key,
      mockIndex: index + 1,              // 1,2,3
      mockName: mockTest
    }
  });

};

  const handleBackToCategories = () => {
    setSelectedCategory(null)
    setSelectedMockTest(null)
    setMockTestData(null)
  }

  const handleBackToMockTests = () => {
    setSelectedMockTest(null)
    setMockTestData(null)
  }


console.log(selectedCategory);
console.log(selectedCategory?.key);
// console.log(mockTest);
  // Display Categories View
  if (!selectedCategory) {

    
    return (
      <div className="min-h-screen bg-slate-900 p-6">
        <h1 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Mock Tests
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.key}
              onClick={() => handleCategoryClick(category)}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <h2 className="text-xl font-bold text-white text-center mb-3">
                {category.name}
              </h2>
              <p className="text-slate-400 text-sm text-center">
                📝 3 Mock Tests Available
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Display Mock Tests View
  if (!selectedMockTest) {

    
    return (
      <div className="min-h-screen bg-slate-900 p-6">
        <button
          onClick={handleBackToCategories}
          className="mb-6 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition"
        >
          ← Back to Categories
        </button>

        <h1 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          {selectedCategory.name}
        </h1>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Mock Test 1', 'Mock Test 2', 'Mock Test 3'].map((mockTest, index) => (
            <div
              key={index}
               onClick={() => handleMockTestClick(mockTest,index)              
               }
              className="bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-500 rounded-xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/50 group"
            >
              <h2 className="text-2xl font-bold text-white text-center group-hover:text-cyan-300 transition">
                {mockTest}
              </h2>
              <p className="text-blue-200 text-sm text-center mt-4"
              >
                Click to start →

              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  }

export default ReadMock
