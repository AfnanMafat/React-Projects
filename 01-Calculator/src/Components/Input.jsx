import React from 'react'

export default function Input() {
  const [input, setInput] = React.useState("");

  const HandleButtons = (data) => {
    setInput(input + data)
  }

  const HandleSubmit = () => {
    setInput(eval(input));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-500 p-6">
      <div className="w-full max-w-md bg-gray-900 rounded-3xl shadow-2xl p-8 ring-2 ring-purple-400">
        <input
          type="text"
          disabled
          value={input}
          className="w-full mb-6 p-4 text-right text-5xl font-mono font-semibold bg-gray-800 text-green-400 rounded-xl shadow-inner border-none focus:ring-0"
        />

        <div className="grid grid-cols-4 gap-5">
          {[1,2,3,4,5,6,7,8,9,0].map(num => (
            <button
              key={num}
              onClick={() => HandleButtons(num)}
              className="h-16 flex items-center justify-center text-2xl font-bold bg-gray-700 text-white rounded-xl hover:bg-gray-600 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-150 shadow-md"
            >
              {num}
            </button>
          ))}
        
          <button onClick={() => HandleButtons('.')} className="h-16 flex items-center justify-center text-2xl font-bold bg-yellow-500 text-gray-900 rounded-xl hover:bg-yellow-400 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-150 shadow-md">.</button>
          <button onClick={() => HandleButtons('+')} className="h-16 flex items-center justify-center text-2xl font-bold bg-yellow-500 text-gray-900 rounded-xl hover:bg-yellow-400 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-150 shadow-md">+</button>
          <button onClick={() => HandleButtons('-')} className="h-16 flex items-center justify-center text-2xl font-bold bg-yellow-500 text-gray-900 rounded-xl hover:bg-yellow-400 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-150 shadow-md">-</button>
          <button onClick={() => HandleButtons('*')} className="h-16 flex items-center justify-center text-2xl font-bold bg-yellow-500 text-gray-900 rounded-xl hover:bg-yellow-400 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-150 shadow-md">×</button>
          <button onClick={() => HandleButtons('/')} className="h-16 flex items-center justify-center text-2xl font-bold bg-yellow-500 text-gray-900 rounded-xl hover:bg-yellow-400 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-150 shadow-md">÷</button>
          <button onClick={() => HandleButtons('%')} className="h-16 flex items-center justify-center text-2xl font-bold bg-yellow-500 text-gray-900 rounded-xl hover:bg-yellow-400 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-150 shadow-md">%</button>

          <button onClick={HandleSubmit} className="h-16 flex items-center justify-center text-2xl font-bold bg-green-500 text-white rounded-xl hover:bg-green-400 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-150 shadow-lg">=</button>
          <button onClick={() => setInput('')} className="h-16 flex items-center justify-center text-2xl font-bold bg-red-500 text-white rounded-xl hover:bg-red-400 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-150 shadow-lg">C</button>
        </div>
      </div>
    </div>
  )
}