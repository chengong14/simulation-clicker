"use client"
import React, { useState } from 'react';

const Comments = () => {
  const initialComments = [
    {
      id: 1,
      text: "Surprisingly fun. Neal's done it again. I got most of the stimulation upgrades until i was generating so many passive clicks… Until the game eventually crashed.",
      author: "Player1",
      likes: 15
    },
    {
      id: 2,
      text: "This, like all of Neal's games and webtoys, is amazing.",
      author: "Player2",
      likes: 8
    }
  ];

  const [comments, setComments] = useState(initialComments);

  const handleLike = (id: number) => {
    setComments(comments.map(comment => 
      comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
    ));
  };

  return (
    <section id="reviews" className="py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">Player Reviews</h2>
        
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-200 pb-4">
              <p className="text-gray-700 mb-2">{comment.text}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">- {comment.author}</span>
                <button
                  onClick={() => handleLike(comment.id)}
                  className="flex items-center space-x-1 text-sm text-indigo-600 hover:text-indigo-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  <span>{comment.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comments; 