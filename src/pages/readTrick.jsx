import React, { useContext } from 'react'
import Context from '../context/context'
import { shortTrickData } from '../aptitdedata/trickdata'

function ReadTrick() {
    const { trick } = useContext(Context);
    
    const categoryData = shortTrickData.find(item => item.category === trick);
    
    return (
        <div className="min-h-screen bg-slate-900 p-6">
            <h1 className="text-3xl font-bold text-center text-cyan-400 mb-8">
                {trick || 'Short Tricks'} - Tips & Tricks
            </h1>

            {categoryData ? (
                <div className="max-w-6xl mx-auto">
                    {categoryData.tricks.map((trick, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6 shadow-lg hover:shadow-cyan-500/20 transition-shadow"
                        >
                            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                                {trick.topic}
                            </h2>

                            <div className="space-y-4">
                                {trick.questionDekhteHi && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-blue-300 mb-2">
                                            Question देखते ही:
                                        </h3>
                                        <ul className="list-disc list-inside text-slate-300 space-y-1">
                                            {trick.questionDekhteHi.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {trick.kyaDekhnaHai && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-blue-300 mb-2">
                                            क्या देखना है:
                                        </h3>
                                        <ul className="list-disc list-inside text-slate-300 space-y-1">
                                            {trick.kyaDekhnaHai.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {trick.approach && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-green-300 mb-2">
                                            Approach:
                                        </h3>
                                        <ul className="list-disc list-inside text-slate-300 space-y-1">
                                            {trick.approach.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {trick.shortcut && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                                            ⚡ Shortcut:
                                        </h3>
                                        <ul className="list-disc list-inside text-slate-300 space-y-1">
                                            {trick.shortcut.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {trick.solveMethod && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-purple-300 mb-2">
                                            Solve Method:
                                        </h3>
                                        <ol className="list-decimal list-inside text-slate-300 space-y-1">
                                            {trick.solveMethod.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ol>
                                    </div>
                                )}

                                {trick.whenToUse && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-blue-300 mb-2">
                                            When To Use:
                                        </h3>
                                        <p className="text-slate-300">{trick.whenToUse}</p>
                                    </div>
                                )}

                                {trick.whatToLookFor && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-blue-300 mb-2">
                                            What To Look For:
                                        </h3>
                                        <p className="text-slate-300">{trick.whatToLookFor}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex items-center justify-center min-h-96">
                    <p className="text-xl text-slate-400">No Tricks Available</p>
                </div>
            )}
        </div>
    )
}

export default ReadTrick