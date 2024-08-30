import React from 'react'

export const ProgressTracker = ({ total, correct }) => {
    return (
        <div className="text-center">
          <h2>
            You answered {correct} out of {total} flashcards correctly!
          </h2>
        </div>
      );
}
