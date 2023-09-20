import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    const intervalID =  
    timeRemaining > 0 && setInterval(() => 
    setTimeRemaining(timeRemaining - 1), 1000)

    if (timeRemaining === 0) {
      OutOfTime()
    } 
    return function() {
      clearInterval(intervalID)
    }
  }, [timeRemaining])


  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  function OutOfTime() {
    setTimeRemaining(10)
    onAnswered(false)
  }

  const onMouseOver = (e) => e.target.style.color = "red"
  const onMouseOut = (e) => e.target.style.color = "black"
  
  
  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button onMouseEnter={(event) => onMouseOver(event)}
          onMouseOut={(event) => onMouseOut(event)} key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
