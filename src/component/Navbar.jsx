import React, { useState } from "react";
import { Database, Cpu, Network, Code, User, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const subjects = [
    { name: "DBMS", icon: Database, color: "text-cyan-400", path: "/dbms" },
    { name: "CN", icon: Network, color: "text-green-400", path: "/cn" },
    { name: "OS", icon: Cpu, color: "text-pink-400", path: "/os" },
    { name: "OOP", icon: Code, color: "text-purple-400", path: "/oop" },
  ];

  let navigate = useNavigate();

   
  const [active, setActive] = useState("DBMS");


  return (
    <>
      {/* MAIN CONTAINER */}
      <div className="min-h-screen bg-black text-white px-5 md:px-10 py-6">

        {/* NAVBAR (FIXED) */}
        <nav className="fixed top-0 left-0 w-full z-50 
        flex flex-col md:flex-row md:items-center md:justify-between gap-5 
        px-5 md:px-10 py-4 bg-black/80 backdrop-blur-xl border-b border-gray-800">

          {/* LEFT */}
          <div>
            <h1 className="text-3xl font-extrabold tracking-wide">
              Revise
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Study smarter for placements
            </p>
          </div>

          {/* CENTER NAV */}
          <div className="flex items-center gap-2 bg-[#111111] border border-gray-800 rounded-2xl p-2 overflow-x-auto">

            {subjects.map((sub, i) => {
              const Icon = sub.icon;

              return (
                <button
                  key={i}
                  onClick={() => {
                    setActive(sub.name);
                    navigate(sub.path);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition

                  ${active === sub.name
                      ? "bg-white text-black"
                      : "text-gray-400 hover:bg-[#1c1c1c]"
                    }`}
                >
                  <Icon size={16} />
                  {sub.name}
                </button>
              );
            })}

            {/* QUIZ BUTTON */}
            <button
              onClick={() => navigate("/quiz")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-yellow-400 hover:bg-[#1c1c1c] transition"
            >
              <HelpCircle size={16} />
              Quiz
            </button>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#111111] border border-gray-700 flex items-center justify-center">
              <User size={18} className="text-gray-300" />
            </div>
          </div>

        </nav>

        {/* HERO (added spacing for fixed navbar) */}
        <div className="text-center mt-28 mb-14">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Crack Your <span className="text-cyan-400">Placement</span> 🚀
          </h1>
          <p className="text-gray-400 mt-4">
            Important high-impact topics for top tech companies
          </p>
        </div>

        {/* TOPIC CARDS (REDUCED SIZE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {/* DBMS */}
          <div className="bg-[#111111] border border-cyan-500/20 rounded-2xl p-5 hover:-translate-y-1 transition">

            <div className="flex items-center gap-2 mb-4">
              <Database className="text-cyan-400" size={24} />
              <h1 className="text-2xl font-bold text-cyan-400">DBMS</h1>
            </div>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Normalization</li>
              <li>• SQL Queries</li>
              <li>• Indexing</li>
              <li>• ACID Properties</li>
              <li>• Deadlock</li>
            </ul>

          </div>

          {/* CN */}
          <div className="bg-[#111111] border border-green-500/20 rounded-2xl p-5 hover:-translate-y-1 transition">

            <div className="flex items-center gap-2 mb-4">
              <Network className="text-green-400" size={24} />
              <h1 className="text-2xl font-bold text-green-400">CN</h1>
            </div>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• TCP vs UDP</li>
              <li>• OSI Model</li>
              <li>• HTTP/HTTPS</li>
              <li>• DNS</li>
              <li>• Routing</li>
            </ul>


          </div>

          {/* OS */}
          <div className="bg-[#111111] border border-pink-500/20 rounded-2xl p-5 hover:-translate-y-1 transition">

            <div className="flex items-center gap-2 mb-4">
              <Cpu className="text-pink-400" size={24} />
              <h1 className="text-2xl font-bold text-pink-400">OS</h1>
            </div>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Process vs Thread</li>
              <li>• Deadlock</li>
              <li>• Scheduling</li>
              <li>• Memory Management</li>
              <li>• Paging</li>
            </ul>

          </div>

        </div>

      </div>
    </>
  );
}

export default Navbar;