import React from 'react'

export default function QuestionList({ question, options, setCurrentAnswer, currentAnswer }) {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => setCurrentAnswer(option)}
            className={currentAnswer === option ? 'selected' : ''}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  )
}