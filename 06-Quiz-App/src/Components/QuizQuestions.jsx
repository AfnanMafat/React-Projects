import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function QuizQuestions() {

    const navigate = useNavigate();

    const [count,setCount] = useState(1);
    const [question,setQuestion] = useState({});
    const [answer,setAnswer] = useState();
    const [score,setScore] = useState(0);

    useEffect(()=>{
      axios.get(`http://localhost:8080/GetQuestionById/${count}`).then((res)=>{
        setQuestion(res.data)
        console.log(res.data);
        
      })
    },[count])

    const handlePrevios = () => {
      console.log(answer + " " +  question.correctOption);
      
      if(answer == question.correctOption){
        setScore(score+1)
      }
      setCount(count-1)

      setAnswer("");
      // setCount(count-1)
    }

    const handleNext = () => {
      console.log(answer + " " +  question.correctOption);
      
      if(answer == question.correctOption){
        setScore(score+1)
      }
      setCount(count+1)

      setAnswer("");
      // setCount(count+1)

      if(count == 45){
        navigate("/Thanks")
      }
    }

    // const handleSubmit = () => {
    //   console.log(answer + " " +  question.correctOption);
      
    //   if(answer == question.correctOption){
    //     setScore(score+1)
    //   }
    //   setCount(count+1)

    //   setAnswer("");
    // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center">Quiz Challenge</h1>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="mb-8">
            <p className="text-xl md:text-2xl font-bold text-indigo-800 mb-6">
              <span className="bg-indigo-600 text-white rounded-full w-10 h-10 inline-flex items-center justify-center mr-3">
                {count}
              </span>
              {question.question}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center bg-blue-50 p-4 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors">
                <input 
                  type="radio" 
                  id='A' 
                  name="option" 
                  value={question.optionA} 
                  onChange={(e) => setAnswer(e.target.value)}
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor='A' className="ml-3 block text-lg text-gray-800 cursor-pointer">{question.optionA}</label>
              </div>
              
              <div className="flex items-center bg-green-50 p-4 rounded-lg border border-green-100 hover:bg-green-100 transition-colors">
                <input 
                  type="radio" 
                  id='B' 
                  name="option" 
                  value={question.optionB} 
                  onChange={(e) => setAnswer(e.target.value)}
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="B" className="ml-3 block text-lg text-gray-800 cursor-pointer">{question.optionB}</label>
              </div>
              
              <div className="flex items-center bg-yellow-50 p-4 rounded-lg border border-yellow-100 hover:bg-yellow-100 transition-colors">
                <input 
                  type="radio" 
                  id='C' 
                  name="option" 
                  value={question.optionC} 
                  onChange={(e) => setAnswer(e.target.value)}
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="C" className="ml-3 block text-lg text-gray-800 cursor-pointer">{question.optionC}</label>
              </div>
              
              <div className="flex items-center bg-pink-50 p-4 rounded-lg border border-pink-100 hover:bg-pink-100 transition-colors">
                <input 
                  type="radio" 
                  id='D' 
                  name="option" 
                  value={question.optionD} 
                  onChange={(e) => setAnswer(e.target.value)}
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="D" className="ml-3 block text-lg text-gray-800 cursor-pointer">{question.optionD}</label>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-between gap-4 mb-6">
            <button 
              disabled={count == 1} 
              onClick={handlePrevios}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                count == 1 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-indigo-500 text-white hover:bg-indigo-600 transform hover:-translate-y-0.5'
              }`}
            >
              Previous
            </button>
            
            {/* <button 
              onClick={handleSubmit}
              disabled={count <= 44}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:opacity-90 transform hover:-translate-y-0.5 transition-all"
            >
              Submit Answer
            </button> */}
            
            <button 
              onClick={handleNext}
              className={`px-6 py-3 rounded-lg font-medium transition-all bg-indigo-500 text-white hover:bg-indigo-600 transform hover:-translate-y-0.5`}
            >
              {count <= 44 ? 'Next' : 'Submit Answer'}
            </button>
          </div>
          
          {/* <div className="text-center mt-6">
            <div className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 rounded-full px-8 py-4 shadow-lg">
              <span className="text-xl font-bold text-white">Your Score: </span>
              <span className="text-3xl font-extrabold text-white ml-2">{score}</span>
            </div>
          </div> */}
        </div>
        
        
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-center text-white text-sm">
          Question {count} of 45
        </div>
      </div>
    </div>
  )
}