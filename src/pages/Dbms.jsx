import React, { useState } from "react";
import note from "../notes.js";

function Dbms() {

  const [selectedPdf, setSelectedPdf] = useState("");

  const topics = [
    "Introduction",
    "Normalization",
    "Indexing",
    "Transactions & ACID",
    "Concurrency Control",
    "SQL Queries",
    "ER Model",
    "Views & Triggers",
  ];

  return (
    <div className="p-4">

      {/* Heading */}
      <h1 className="text-lg font-semibold mb-3 text-gray-800">
        Important Topics
      </h1>

      {/* Topics */}
      <div className="flex flex-wrap gap-2">

        {topics.map((topic, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1.5 
                       bg-gray-100 text-gray-700 
                       text-xs rounded-md"
          >
            <input type="checkbox" className="w-3 h-3" />
            <span>{topic}</span>
          </div>
        ))}

      </div>

      {/* Notes Section */}
      <h1 className="text-2xl font-bold mt-6 mb-4">
        Notes for preparation
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {note.map((data, idx) => (
          <div
            className="border rounded-xl p-4 shadow"
            key={idx}
          >
            <h3 className="text-lg font-semibold">
              {data.title}
            </h3>

            <button
              onClick={() => setSelectedPdf(data.pdf)}
              className="mt-3 bg-black text-white px-4 py-2 rounded"
            >
              Open PDF
            </button>
          </div>
        ))}

      </div>

      {/* PDF Viewer */}
      {selectedPdf && (
        <div className="mt-6">
        <button onClick={()=> setSelectedPdf("")}>Close</button>
        
          <iframe
            src={selectedPdf}
            width="100%"
            height="700px"
            title="PDF Viewer"
            className="border rounded-xl"
          />

        

        </div>
      )}

    </div>
  );
}

export default Dbms;