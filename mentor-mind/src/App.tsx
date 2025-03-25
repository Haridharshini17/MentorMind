import React, { useState } from 'react';
import DataFetcher from './DataFetcher';

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <div className="app-container">
      <h1>Effects & Lifecycle Demo</h1>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? 'Hide Posts' : 'Show Posts'}
      </button>
      {show && <DataFetcher />}
    </div>
  );
};

export default App;
