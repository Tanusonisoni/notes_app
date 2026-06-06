export const quantComprehensiveMockTest = {
  id: 101,
  title: "TCS NQT Quant Comprehensive Mock Test",
  difficulty: "Medium-Hard",
  duration: 60,
  totalQuestions: 40,
  topics: [
    "Quadratic Equations",
    "Logarithm",
    "Progressions",
    "Geometry",
    "Mensuration",
    "Trigonometry",
    "Statistics",
    "Data Interpretation"
  ],

  questions: [

    // Quadratic Equations (1-5)

    {
      id: 1,
      topic: "Quadratic Equations",
      difficulty: "Medium",
      question: "If x² − 9x + 20 = 0, find the larger root.",
      options: ["4", "5", "6", "8"],
      answer: "5"
    },
    {
      id: 2,
      topic: "Quadratic Equations",
      difficulty: "Hard",
      question: "If roots of x² − 7x + k = 0 are equal, find k.",
      options: ["49", "12.25", "24.5", "14"],
      answer: "12.25"
    },
    {
      id: 3,
      topic: "Quadratic Equations",
      difficulty: "Medium",
      question: "Sum of roots of x² − 12x + 35 = 0?",
      options: ["12", "35", "7", "5"],
      answer: "12"
    },
    {
      id: 4,
      topic: "Quadratic Equations",
      difficulty: "Hard",
      question: "Product of roots of 2x² − 11x + 15 = 0?",
      options: ["15/2", "11/2", "15", "2"],
      answer: "15/2"
    },
    {
      id: 5,
      topic: "Quadratic Equations",
      difficulty: "Medium",
      question: "Roots of x² − 13x + 42 = 0 are?",
      options: ["6,7", "5,8", "3,14", "2,21"],
      answer: "6,7"
    },

    // Logarithm (6-10)

    {
      id: 6,
      topic: "Logarithm",
      difficulty: "Medium",
      question: "log₂(32) = ?",
      options: ["4", "5", "6", "7"],
      answer: "5"
    },
    {
      id: 7,
      topic: "Logarithm",
      difficulty: "Hard",
      question: "log₃(81) + log₃(9)",
      options: ["5", "6", "7", "8"],
      answer: "6"
    },
    {
      id: 8,
      topic: "Logarithm",
      difficulty: "Medium",
      question: "log₁₀(1000)",
      options: ["1", "2", "3", "4"],
      answer: "3"
    },
    {
      id: 9,
      topic: "Logarithm",
      difficulty: "Hard",
      question: "log₂(64) − log₂(8)",
      options: ["2", "3", "4", "5"],
      answer: "3"
    },
    {
      id: 10,
      topic: "Logarithm",
      difficulty: "Medium",
      question: "log₅(125)",
      options: ["2", "3", "4", "5"],
      answer: "3"
    },

    // Progressions (11-15)

    {
      id: 11,
      topic: "Progressions",
      difficulty: "Medium",
      question: "Find next term: 3, 7, 11, 15, ?",
      options: ["17", "18", "19", "20"],
      answer: "19"
    },
    {
      id: 12,
      topic: "Progressions",
      difficulty: "Hard",
      question: "20th term of AP: 5, 8, 11...",
      options: ["59", "60", "61", "62"],
      answer: "62"
    },
    {
      id: 13,
      topic: "Progressions",
      difficulty: "Medium",
      question: "Common ratio of 2,6,18,54?",
      options: ["2", "3", "4", "6"],
      answer: "3"
    },
    {
      id: 14,
      topic: "Progressions",
      difficulty: "Hard",
      question: "Sum of first 10 natural numbers?",
      options: ["45", "50", "55", "60"],
      answer: "55"
    },
    {
      id: 15,
      topic: "Progressions",
      difficulty: "Medium",
      question: "15th term of AP 4,7,10...?",
      options: ["43", "44", "45", "46"],
      answer: "46"
    },

    // Geometry (16-20)

    {
      id: 16,
      topic: "Geometry",
      difficulty: "Medium",
      question: "Sum of interior angles of pentagon?",
      options: ["360°", "540°", "720°", "900°"],
      answer: "540°"
    },
    {
      id: 17,
      topic: "Geometry",
      difficulty: "Hard",
      question: "A triangle has angles 50° and 60°. Third angle?",
      options: ["60°", "70°", "80°", "90°"],
      answer: "70°"
    },
    {
      id: 18,
      topic: "Geometry",
      difficulty: "Medium",
      question: "Number of diagonals in hexagon?",
      options: ["6", "7", "8", "9"],
      answer: "9"
    },
    {
      id: 19,
      topic: "Geometry",
      difficulty: "Hard",
      question: "Hypotenuse of 8-15 triangle?",
      options: ["16", "17", "18", "19"],
      answer: "17"
    },
    {
      id: 20,
      topic: "Geometry",
      difficulty: "Medium",
      question: "Each exterior angle of regular octagon?",
      options: ["45°", "50°", "60°", "72°"],
      answer: "45°"
    },

    // Mensuration (21-25)

    {
      id: 21,
      topic: "Mensuration",
      difficulty: "Medium",
      question: "Area of circle radius 14 cm?",
      options: ["616", "628", "640", "654"],
      answer: "616"
    },
    {
      id: 22,
      topic: "Mensuration",
      difficulty: "Hard",
      question: "Volume of cube side 12 cm?",
      options: ["1440", "1728", "1800", "2048"],
      answer: "1728"
    },
    {
      id: 23,
      topic: "Mensuration",
      difficulty: "Medium",
      question: "Area of rectangle 18×12?",
      options: ["206", "216", "226", "236"],
      answer: "216"
    },
    {
      id: 24,
      topic: "Mensuration",
      difficulty: "Hard",
      question: "CSA of cylinder r=7, h=10?",
      options: ["440", "540", "640", "740"],
      answer: "440"
    },
    {
      id: 25,
      topic: "Mensuration",
      difficulty: "Medium",
      question: "Perimeter of square side 18?",
      options: ["54", "72", "90", "108"],
      answer: "72"
    },

    // Trigonometry (26-30)

    {
      id: 26,
      topic: "Trigonometry",
      difficulty: "Medium",
      question: "sin 45° = ?",
      options: ["1/2", "1/√2", "√3/2", "1"],
      answer: "1/√2"
    },
    {
      id: 27,
      topic: "Trigonometry",
      difficulty: "Hard",
      question: "tan 60° × tan 30° = ?",
      options: ["1", "√3", "3", "1/3"],
      answer: "1"
    },
    {
      id: 28,
      topic: "Trigonometry",
      difficulty: "Medium",
      question: "cos 60° = ?",
      options: ["1/2", "1", "0", "√3/2"],
      answer: "1/2"
    },
    {
      id: 29,
      topic: "Trigonometry",
      difficulty: "Hard",
      question: "sec²θ − tan²θ = ?",
      options: ["0", "1", "tanθ", "secθ"],
      answer: "1"
    },
    {
      id: 30,
      topic: "Trigonometry",
      difficulty: "Medium",
      question: "sin²θ + cos²θ = ?",
      options: ["0", "1", "2", "θ"],
      answer: "1"
    },

    // Statistics (31-35)

    {
      id: 31,
      topic: "Statistics",
      difficulty: "Medium",
      question: "Mean of 10,20,30,40,50?",
      options: ["25", "30", "35", "40"],
      answer: "30"
    },
    {
      id: 32,
      topic: "Statistics",
      difficulty: "Hard",
      question: "Median of 12,14,16,18,20,22?",
      options: ["15", "16", "17", "18"],
      answer: "17"
    },
    {
      id: 33,
      topic: "Statistics",
      difficulty: "Medium",
      question: "Mode of 4,4,5,6,7?",
      options: ["4", "5", "6", "7"],
      answer: "4"
    },
    {
      id: 34,
      topic: "Statistics",
      difficulty: "Hard",
      question: "Range of 25,40,60,80,100?",
      options: ["60", "70", "75", "80"],
      answer: "75"
    },
    {
      id: 35,
      topic: "Statistics",
      difficulty: "Medium",
      question: "Mean of first 10 natural numbers?",
      options: ["5", "5.5", "6", "6.5"],
      answer: "5.5"
    },

    // Data Interpretation (36-40)

    {
      id: 36,
      topic: "Data Interpretation",
      difficulty: "Medium",
      question: "Sales: 100,150,200,250. Total sales?",
      options: ["650", "700", "750", "800"],
      answer: "700"
    },
    {
      id: 37,
      topic: "Data Interpretation",
      difficulty: "Hard",
      question: "Employees: HR=25, IT=50, Sales=75. IT percentage?",
      options: ["25%", "30%", "33.33%", "40%"],
      answer: "33.33%"
    },
    {
      id: 38,
      topic: "Data Interpretation",
      difficulty: "Medium",
      question: "Revenue: 120,140,160,180. Average?",
      options: ["140", "150", "160", "170"],
      answer: "150"
    },
    {
      id: 39,
      topic: "Data Interpretation",
      difficulty: "Hard",
      question: "Pie Chart: A=40%, B=30%, C=20%, D=10%. A exceeds D by?",
      options: ["20%", "25%", "30%", "35%"],
      answer: "30%"
    },
    {
      id: 40,
      topic: "Data Interpretation",
      difficulty: "Medium",
      question: "Population: 5000,7000,9000. Total?",
      options: ["19000", "20000", "21000", "22000"],
      answer: "21000"
    }
  ]
};