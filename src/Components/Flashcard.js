import React, { useState } from 'react';

export const Flashcard = ({ flashcard }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="w-full p-4 bg-gray-200 cursor-pointer"
      >
        {isFlipped ? flashcard.answer : flashcard.question}
      </div>
    );
}
