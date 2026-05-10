import React, { useState } from 'react'
import note from '../notes';
import "./page.css";
 
function Os() {

  const topics = [
    "Introduction to OS",
    "Process & Threads",
    "CPU Scheduling",
    "Synchronization",
    "Deadlock",
    "Memory Management",
    "Paging & Segmentation",
    "Virtual Memory",
    "File System",
    "Disk Scheduling"
  ];

  const [selectedPdf, setSelectedPdf] = useState("");

  return (
    <div>

      <h1>
        Important Topics
      </h1>

      {/* Topics */}
      <div>

        {topics.map((topic, index) => (
          <div key={index}>

            <input type="checkbox" />

            <span>{topic}</span>

          </div>
        ))}

      </div>

      {/* Notes Cards */}
      <div>

        {note.os.map((val, idx) => (
          <div key={idx}>

            <h3>
              {val.title}
            </h3>

            <button onClick={() => setSelectedPdf(val.pdf)}>
              Open PDF
            </button>

          </div>
        ))}

      </div>

      {/* PDF Viewer */}
      {selectedPdf && (
        <div>

          <button onClick={() => setSelectedPdf("")}>
            Close
          </button>

          <iframe
            src={selectedPdf}
            width="100%"
            height="700px"
            title="PDF Viewer"
          />

        </div>
      )}

    </div>
  )
}

export default Os;