// src/components/Content.js
import React from 'react';

const Content = () => {
  const name = 'React Developer';
  const message = `Hello, ${name}!`;

  return (
    <main className="content">
      <p>{message}</p>
      <p>Today is {new Date().toLocaleDateString()}.</p>
    </main>
  );
};

export default Content;
