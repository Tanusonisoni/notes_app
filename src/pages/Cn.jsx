import React, { useState } from "react";
import note from "../notes.js";

function Cn() {

  const [selectedPdf, setSelectedPdf] = useState("");

  const topics = [
    "TCP vs UDP",
    "OSI vs TCP/IP",
    "HTTP vs HTTPS",
    "DNS",
    "Routing, Subnetting",
    "Congestion Control, SSL/TLS"
  ];

  return (

    <div className="min-h-screen bg-[#07130d] text-white px-5 md:px-10 py-6">

      {/* HEADING */}

      <div className="mb-10">

        <h1 className="text-4xl font-black text-emerald-400 tracking-tight">
          Computer Network Notes
        </h1>

        <p className="text-gray-400 mt-2 text-sm">
          Study smarter for interviews, exams and placements.
        </p>

      </div>

      {/* TOPICS */}

      <div>

        <h2 className="text-2xl font-semibold mb-5 text-emerald-300">
          Important Topics
        </h2>

        <div className="flex flex-wrap gap-3">

          {topics.map((topic, index) => (

            <div
              key={index}
              className="
              flex items-center gap-2
              bg-[#0d1f16]
              border border-emerald-500/20
              px-4 py-2 rounded-xl
              hover:bg-emerald-500/10
              hover:border-emerald-400/40
              transition-all duration-300
              "
            >

              <input
                type="checkbox"
                className="accent-emerald-400"
              />

              <span className="text-sm text-gray-200">
                {topic}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* NOTES */}

      <div className="mt-12">

        <h2 className="text-2xl font-semibold mb-5 text-emerald-300">
          Notes for Preparation
        </h2>

        <div className="flex flex-wrap gap-4">

          {note.cn.map((data, idx) => (

            <div
              key={idx}
              className="
              w-[230px]
              bg-[#0d1f16]
              border border-emerald-500/20
              rounded-2xl
              p-4
              hover:border-emerald-400/40
              hover:-translate-y-1
              hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]
              transition-all duration-300
              "
            >

              {/* ICON */}

              <div className="
              w-10 h-10 rounded-xl
              bg-emerald-500/10
              flex items-center justify-center
              text-emerald-400 text-lg
              ">
                🌐
              </div>

              {/* TITLE */}

              <h3 className="text-sm font-semibold mt-3 leading-5 text-white">
                {data.title}
              </h3>

              {/* DESC */}

              <p className="text-xs text-gray-400 mt-2 leading-5">
                Networking concepts, protocols and interview notes.
              </p>

              {/* BUTTON */}

              <button
                onClick={() => setSelectedPdf(data.pdf)}
                className="
                mt-4 w-full
                bg-gradient-to-r from-emerald-500 to-green-500
                hover:opacity-90
                py-2 rounded-xl
                text-sm font-medium
                transition-all duration-300
                "
              >
                Open PDF
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* PDF VIEWER */}

      {selectedPdf && (

        <div className="
        mt-12
        bg-[#0d1f16]
        border border-emerald-500/20
        rounded-2xl
        p-4
        ">

          <div className="flex items-center justify-between mb-4">

            <h2 className="text-lg font-semibold text-emerald-300">
              PDF Viewer
            </h2>

            <button
              onClick={() => setSelectedPdf("")}
              className="
              bg-red-500 hover:bg-red-600
              px-4 py-2 rounded-lg
              text-sm transition-all
              "
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
  );
}

export default Cn;