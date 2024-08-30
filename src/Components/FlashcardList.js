import React from 'react'
import { Flashcard } from './Flashcard';
export const FlashcardList = ({ flashcards }) => {
    return (
        <div className="space-y-4">
          {flashcards.map((flashcard, index) => (
            <Flashcard key={index} flashcard={flashcard} />
          ))}
        </div>
      );
}
