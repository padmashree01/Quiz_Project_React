import React, { useState } from 'react'
import QuestionList from './QuestionList'
import './Quiz.css'

export default function Quiz() {
  const questions = [
    {
      question: "what is npm?",
      options: ['node package manager', 'error', 'all above'],
      answer: "node package manager"
    },
    {
      question: "what is 2+2?",
      options: ['2', '4', '10', '19'],
      answer: "4"
    },
    {
      question: "what is React?",
      options: ['library', 'framework', 'database', 'language'],
      answer: "library"
    }
  ]

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleNext = () => {
    // check answer
    if (currentAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1)
    }

    // move next or finish
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setCurrentAnswer(null)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="App">

      {showScore ? (
        <h2>Your Score: {score} / {questions.length}</h2>
      ) : (
        <>
          <QuestionList
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            setCurrentAnswer={setCurrentAnswer}
            currentAnswer={currentAnswer}
          />

          <button
            className={currentAnswer ? "button" : "button-disable"}
            onClick={handleNext}
            disabled={!currentAnswer}
          >
            Next Question
          </button>
        </>
      )}

    </div>
  )
}