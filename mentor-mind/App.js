import React from 'react';
import Counter from './components/Counter';
import Form from './components/Form';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>React Task Demo</h1>
      <Counter initialCount={0} />
      <Form />
    </div>
  );
};

export default App;
