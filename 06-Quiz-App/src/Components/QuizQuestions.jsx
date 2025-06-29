import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function QuizQuestions() {

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
      setCount(count-1)
    }

    const handleNext = () => {
      setCount(count+1)
    }

    const handleSubmit = () => {
      console.log(answer + " " +  question.correctOption);
      
      if(answer == question.correctOption){
        setScore(score+1)
      }
      setCount(count+1)

      setAnswer("");
    }

  return (
    <>
        <div>
          <p><strong>{count}. {question.question} </strong></p>
          <p>
            <input type="radio" id='A' name="option" value={question.optionA} onChange={(e) => setAnswer(e.target.value)}/> <label for="A">{question.optionA}</label>
            <input type="radio" id='B' name="option" value={question.optionB} onChange={(e) => setAnswer(e.target.value)}/> <label for="B">{question.optionB}</label>
            <input type="radio" id='C' name="option" value={question.optionC} onChange={(e) => setAnswer(e.target.value)}/> <label for="C">{question.optionC}</label>
            <input type="radio" id='D' name="option" value={question.optionD} onChange={(e) => setAnswer(e.target.value)}/> <label for="D">{question.optionD}</label>
          </p>
        </div>

        <div>
          <button disabled={count == 1} onClick={handlePrevios}>Previos</button>
          <button onClick={handleSubmit}>Submit</button>
          <button disabled={count == 45} onClick={handleNext}>Next</button>
        </div>

        <div>{score}</div>
    </>
  )
}
