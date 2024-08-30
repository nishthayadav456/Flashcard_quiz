import React, { useState } from 'react';

export const Quiz = ({ flashcards, onQuizComplete }) => {
    const [currentCard, setCurrentCard] = useState(0);
    const [score, setScore] = useState(0);
  
    const handleAnswer = (isCorrect) => {
      if (isCorrect) setScore(score + 1);
      if (currentCard < flashcards.length - 1) {
        setCurrentCard(currentCard + 1);
      } else {
        onQuizComplete(score);
      }
    };
  
    return (
      <div className="flex flex-col space-y-4">
        <div className="bg-gray-200 p-4">{flashcards[currentCard].question}</div>
        <button
          onClick={() => handleAnswer(true)}
          className="bg-green-500 text-white p-2"
        >
          I got it right
        </button>
        <button
          onClick={() => handleAnswer(false)}
          className="bg-red-500 text-white p-2"
        >
          I got it wrong
        </button>
      </div>
    );
}
