import React, { useState } from 'react'
import note from '../notes';

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

      <div className="min-h-screen bg-black text-white px-5 md:px-10 py-6">

      {/* HEADING */}

      <div className="mb-10">

        <h1 className="text-4xl font-black text-pink-500">
          Operting Systen Notes
        </h1>

        <p className="text-gray-400 mt-2">
          Important topics and PDF notes for interview preparation.
        </p>

      </div>

      {/* TOPICS */}

      <div>

        <h2 className="text-2xl font-semibold mb-5">
          Important Topics
        </h2>

        <div className="flex flex-wrap gap-3">

          {topics.map((topic, index) => (

            <div
              key={index}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg"
            >

              <input type="checkbox" />

              <span className="text-sm">
                {topic}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* NOTES */}

<div className="mt-12">

  <h2 className="text-2xl font-semibold mb-5 text-pink-400">
    PDF Notes
  </h2>

  {/* SMALL COMPACT CARDS */}

  <div className="flex flex-wrap gap-4">

    {note.os.map((val, idx) => (

      <div
        key={idx}
        className="group w-[260px]
        bg-[#101010]
        border border-pink-500/15
        rounded-2xl
        p-4
        hover:border-pink-400/40
        hover:-translate-y-1
        transition-all duration-300"
      >

        {/* TOP */}

        <div className="flex items-start gap-3">

          <div className="w-10 h-10 rounded-xl
          bg-pink-500/10
          flex items-center justify-center
          text-pink-400 text-lg shrink-0">
            📘
          </div>

          <div>

            <h3 className="text-sm font-semibold leading-5">
              {val.title}
            </h3>

            <p className="text-xs text-gray-400 mt-1 leading-5">
              Important concepts & interview notes
            </p>

          </div>

        </div>

        {/* BUTTON */}

        <button
          onClick={() => setSelectedPdf(val.pdf)}
          className="mt-4 w-full
          bg-gradient-to-r from-pink-500 to-fuchsia-500
          hover:opacity-90
          py-2 rounded-xl
          text-sm font-medium
          transition-all duration-300"
        >
          Open PDF
        </button>

      </div>

    ))}

  </div>

</div>

 {selectedPdf && (

        <div className="mt-12 bg-[#101b2d] border border-cyan-500/20 rounded-2xl p-4">

          <div className="flex items-center justify-between mb-4">

            <h2 className="text-lg font-semibold text-cyan-300">
              PDF Viewer
            </h2>

            <button
              onClick={() => setSelectedPdf("")}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm transition-all"
            >
              Close
            </button>

          </div>

          <iframe
            src={selectedPdf}
            width="100%"
            height="700px"
            title="PDF Viewer"
            className="rounded-xl bg-white"
          />

        </div>

      )}

    </div>
  )
}

export default Os;