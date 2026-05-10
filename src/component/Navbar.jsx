// import React, { useState } from "react";
// import { Database, Cpu, Network, Code, User } from "lucide-react";

// function Navbar() {
//   const [active, setActive] = useState("DBMS");

//   const subjects = [
//     { name: "DBMS", icon: Database, color: "text-blue-400" },
//     { name: "CN", icon: Network, color: "text-green-400" },
//     { name: "OS", icon: Cpu, color: "text-purple-400" },
//     { name: "OOP", icon: Code, color: "text-pink-400" },
//   ];

//   return (
//     <>
//       {/* NAVBAR */}
//       <nav className="w-full flex items-center justify-between px-6 py-4 
// bg-white/5 backdrop-blur-xl border border-white/10 
// rounded-2xl shadow-2xl sticky top-4 z-50">

//   {/* Logo */}
//   <div>
//     <h1 className="text-2xl font-extrabold text-white tracking-wide">
//       Revise
//     </h1>

//     <p className="text-gray-400 text-sm">
//       Study smarter
//     </p>
//   </div>

//   {/* Nav Buttons */}
//   <div className="flex gap-4">

//     <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
//       DBMS
//     </button>

//     <button className="px-5 py-2 rounded-xl bg-[#111111] border border-green-500/30 text-green-400 hover:bg-green-500/10 transition duration-300">
//       CN
//     </button>

//     <button className="px-5 py-2 rounded-xl bg-[#111111] border border-pink-500/30 text-pink-400 hover:bg-pink-500/10 transition duration-300">
//       OS
//     </button>

//     <button className="px-5 py-2 rounded-xl bg-[#111111] border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition duration-300">
//       OOP
//     </button>

//   </div>

//   {/* Account */}
//   <div className="flex flex-col items-center">

//     <div className="w-12 h-12 rounded-full 
//     bg-gradient-to-r from-gray-200 to-gray-400 
//     flex items-center justify-center text-black font-bold shadow-lg">

//       A

//     </div>

//     <p className="text-xs text-gray-400 mt-1">
//       Account
//     </p>

//   </div>

// </nav>
//         {/* SUBJECT TABS */}
//         <div className="flex gap-2 overflow-x-auto px-2 pb-3">

//           {subjects.map((sub, i) => {
//             const Icon = sub.icon;

//             return (
//               <button
//                 key={i}
//                 onClick={() => setActive(sub.name)}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all

//                 ${
//                   active === sub.name
//                     ? "bg-white text-black shadow"
//                     : "bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]"
//                 }
//                 `}
//               >
//                 <Icon size={16} className={sub.color} />
//                 {sub.name}
//               </button>
//             );
//           })}
//         </div>
      

    

//     {/* Topics  */}
    
//     <div className="min-h-screen bg-black text-white px-6 py-10">

//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
//           Crack Your Placement Preparation 🚀
//         </h1>

//         <p className="text-gray-400 mt-4 text-lg">
//           Important high-impact topics for top tech companies
//         </p>
//       </div>

//       {/* Cards Container */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

//         {/* DBMS Card */}
//         <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 shadow-2xl hover:scale-105 transition duration-300">

//           <h1 className="text-3xl font-bold mb-6 text-green-400">
//             Explore DBMS
//           </h1>

//           <ul className="space-y-3 text-gray-300">

//             <li className="hover:text-white transition">• What is DBMS</li>
//             <li className="hover:text-white transition">• Normalization & Functional Dependency</li>
//             <li className="hover:text-white transition">• SQL Queries & Joins</li>
//             <li className="hover:text-white transition">• Indexing</li>
//             <li className="hover:text-white transition">• B Tree vs B+ Tree</li>
//             <li className="hover:text-white transition">• Transactions & ACID Properties</li>
//             <li className="hover:text-white transition">• Concurrency Control</li>
//             <li className="hover:text-white transition">• Deadlock</li>
//             <li className="hover:text-white transition">• Serializability</li>
//             <li className="hover:text-white transition">• Query Optimization</li>
//             <li className="hover:text-white transition">• Clustered vs Non-Clustered Index</li>
//             <li className="hover:text-white transition">• DBMS vs File System</li>
//             <li className="hover:text-white transition">• Keys</li>
//             <li className="hover:text-white transition">• Recovery Techniques</li>
//             <li className="hover:text-white transition">• Sharding & Partitioning</li>
//             <li className="hover:text-white transition">• CAP Theorem</li>

//           </ul>
//         </div>

//         {/* CN Card */}
//         <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 shadow-2xl hover:scale-105 transition duration-300">

//           <h1 className="text-3xl font-bold mb-6 text-blue-400">
//             Computer Networks
//           </h1>

//           <ul className="space-y-3 text-gray-300">

//             <li className="hover:text-white transition">• TCP vs UDP</li>
//             <li className="hover:text-white transition">• OSI vs TCP/IP</li>
//             <li className="hover:text-white transition">• Three-Way Handshake</li>
//             <li className="hover:text-white transition">• HTTP vs HTTPS</li>
//             <li className="hover:text-white transition">• DNS Working</li>
//             <li className="hover:text-white transition">• Subnetting</li>
//             <li className="hover:text-white transition">• Routing</li>
//             <li className="hover:text-white transition">• Congestion Control</li>
//             <li className="hover:text-white transition">• Flow vs Error Control</li>
//             <li className="hover:text-white transition">• SSL/TLS</li>

//           </ul>
//         </div>

//         {/* OS Card */}
//         <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 shadow-2xl hover:scale-105 transition duration-300">

//           <h1 className="text-3xl font-bold mb-6 text-pink-400">
//             Operating System
//           </h1>

//           <ul className="space-y-3 text-gray-300">

//             <li className="hover:text-white transition">• Process vs Thread</li>
//             <li className="hover:text-white transition">• Deadlock</li>
//             <li className="hover:text-white transition">• Semaphores vs Mutex</li>
//             <li className="hover:text-white transition">• Paging vs Segmentation</li>
//             <li className="hover:text-white transition">• Virtual Memory</li>
//             <li className="hover:text-white transition">• Context Switching</li>
//             <li className="hover:text-white transition">• CPU Scheduling Algorithms</li>
//             <li className="hover:text-white transition">• Synchronization Problems</li>
//             <li className="hover:text-white transition">• Critical Section</li>
//             <li className="hover:text-white transition">• Page Replacement Algorithms</li>

//           </ul>
//         </div>

//       </div>
//     </div>

      
//     </>
//   );
// }

// export default Navbar;


import React, { useState } from "react";
import { Database, Cpu, Network, Code, User } from "lucide-react";
import Dbms from "../pages/Dbms";

function Navbar() {
  
  

  const subjects = [
    { name: "DBMS", icon: Database, color: "text-cyan-400" },
    { name: "CN", icon: Network, color: "text-green-400" },
    { name: "OS", icon: Cpu, color: "text-pink-400" },
    { name: "OOP", icon: Code, color: "text-purple-400" },
  ];
  const components=[
  {
    name:"DBMS",
    component:<Dbms/>
  }
  ]
  const [active, setActive] = useState();

   return (
    <>
      {/* MAIN CONTAINER */}
      <div className="min-h-screen bg-black text-white px-5 md:px-10 py-6">

        {/* NAVBAR */}
        <nav className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-14">

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
          <div className="flex items-center gap-3 bg-[#111111] border border-gray-800 rounded-2xl p-2 shadow-xl overflow-x-auto">

            {subjects.map((sub, i) => {
              const Icon = sub.icon;

              return (
                <button
                  key={i}
                  onClick={() => setActive(sub.component)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap

                  ${
                    active === sub.name
                      ? "bg-white text-black shadow-lg"
                      : "text-gray-400 hover:bg-[#1c1c1c]"
                   }
                  `}
                >
                  <Icon
                    size={17}
                    className={
                      active === sub.name
                        ? "text-black"
                        : sub.color
                    }
                  />

                  {sub.name}
                </button>
              );
            })}
            
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-[#111111] border border-gray-700 flex items-center justify-center shadow-lg">

              <User size={20} className="text-gray-300" />

            </div>

          </div>
        </nav>

        {/* HERO SECTION */}
        <div className="text-center mb-16">

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">

            Crack Your <span className="text-cyan-400">Placement</span>
            <br />
            Preparation 🚀

          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            Important high-impact topics for top tech companies
          </p>

        </div>

        {/* TOPIC CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* DBMS */}
          <div className="bg-gradient-to-b from-[#111111] to-[#0a0a0a]
          border border-cyan-500/20 rounded-3xl p-7
          hover:-translate-y-2 transition duration-300 shadow-2xl">

            <div className="flex items-center gap-3 mb-6">

              <Database className="text-cyan-400" size={32} />

              <h1 className="text-3xl font-bold text-cyan-400">
                DBMS
              </h1>

            </div>

            <ul className="space-y-4 text-gray-300">

              <li>• Normalization</li>
              <li>• SQL Queries & Joins</li>
              <li>• Indexing</li>
              <li>• Transactions & ACID</li>
              <li>• Concurrency Control</li>
              <li>• Deadlock</li>
              <li>• Serializability</li>
              <li>• Query Optimization</li>
              <li>• B+ Tree</li>

            </ul>
          </div>

          {/* CN */}
          <div className="bg-gradient-to-b from-[#111111] to-[#0a0a0a]
          border border-green-500/20 rounded-3xl p-7
          hover:-translate-y-2 transition duration-300 shadow-2xl">

            <div className="flex items-center gap-3 mb-6">

              <Network className="text-green-400" size={32} />

              <h1 className="text-3xl font-bold text-green-400">
                CN
              </h1>

            </div>

            <ul className="space-y-4 text-gray-300">

              <li>• TCP vs UDP</li>
              <li>• OSI vs TCP/IP</li>
              <li>• HTTP vs HTTPS</li>
              <li>• DNS</li>
              <li>• Routing</li>
              <li>• Subnetting</li>
              <li>• Congestion Control</li>
              <li>• SSL/TLS</li>

            </ul>
          </div>

          {/* OS */}
          <div className="bg-gradient-to-b from-[#111111] to-[#0a0a0a]
          border border-pink-500/20 rounded-3xl p-7
          hover:-translate-y-2 transition duration-300 shadow-2xl">

            <div className="flex items-center gap-3 mb-6">

              <Cpu className="text-pink-400" size={32} />

              <h1 className="text-3xl font-bold text-pink-400">
                OS
              </h1>

            </div>

            <ul className="space-y-4 text-gray-300">

              <li>• Process vs Thread</li>
              <li>• Deadlock</li>
              <li>• Mutex vs Semaphore</li>
              <li>• Virtual Memory</li>
              <li>• Paging</li>
              <li>• CPU Scheduling</li>
              <li>• Context Switching</li>
              <li>• Critical Section</li>

            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;