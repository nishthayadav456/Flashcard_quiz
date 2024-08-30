
import React, { useState } from 'react';
import { FlashcardForm } from './Components/FlashcardForm';
import { FlashcardList } from './Components/FlashcardList';
import { Quiz } from './Components/Quiz';
import { ProgressTracker } from './Components/ProgressTracker';

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [score, setScore] = useState(0);
  const addFlashcard = (flashcard) => {
    setFlashcards([...flashcards, flashcard]);
  };

  const startQuiz = () => {
    setIsQuizMode(true);
  };

  const handleQuizComplete = (finalScore) => {
    setScore(finalScore);
    setIsQuizMode(false);
  };
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Flashcard Quiz App</h1>

      {isQuizMode ? (
        <Quiz flashcards={flashcards} onQuizComplete={handleQuizComplete} />
      ) : (
        <>
          <FlashcardForm addFlashcard={addFlashcard} />
          <FlashcardList flashcards={flashcards} />
          <button onClick={startQuiz} className="bg-blue-500 text-white p-2 mt-4">
            Start Quiz
          </button>
          {score !== 0 && (
            <ProgressTracker total={flashcards.length} correct={score} />
          )}
        </>
      )}
    </div>
  )
}

export default App;
