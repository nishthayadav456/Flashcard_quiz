import React, { useState } from 'react';
export const FlashcardForm = ({ addFlashcard }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (question.trim() && answer.trim()) {
        addFlashcard({ question, answer });
        setQuestion('');
        setAnswer('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Enter Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="p-2 border"
        />
        <input
          type="text"
          placeholder="Enter Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="p-2 border"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add Flashcard
        </button>
      </form>
    );
  }
