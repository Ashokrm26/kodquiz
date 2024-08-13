import React, { useState } from 'react'
import './quiz.css'
import { data } from './data.js';

export default function Quiz() {  
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [score, setScore] = useState(0);
  const [lock, setLock] = useState(false);

  function checkAnswer(e,ans){
    if(lock === false){
      if(ans === question.ans){
        e.target.classList.add('correct');
        setScore(score + 1);
      }
      else{
        e.target.classList.add('incorrect');
      }
      setLock(true);
    }
  }

  function nextQuestion(e1){
    e1.target.classList.add('defaultcolor');
    setLock(false);
    if(index < data.length-1){
      setIndex(index+1);
      setQuestion(data[index + 1]);
    }else{
      setIsLastPage(true);
    }
  }

  if(isLastPage === true){
    return(
      <p>Congrats you finished the quiz !!!
        <br />
        <h1>Your score is {score}</h1>
      </p>
    );
  }

  return (
    <div className='quiz'>
      <h2>Kod Quiz</h2>
      <h3>{question.question}</h3>
      <ul>
          <li onClick={(e) => { checkAnswer(e,'1')}}>{question.option1}</li>
          <li onClick={(e) => { checkAnswer(e,'2')}}>{question.option2}</li>
          <li onClick={(e) => { checkAnswer(e,'3')}}>{question.option3}</li>
          <li onClick={(e) => { checkAnswer(e,'4')}}>{question.option4}</li>
      </ul>
      <button onClick={(e1) => {nextQuestion(e1)}}>Next</button>
      <br />
      <div>Question : {index+1} of {data.length}</div>
    </div>
  )
}
