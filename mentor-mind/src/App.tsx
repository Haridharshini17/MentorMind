import React from 'react';
import { AppProvider } from './AppContext';
import LoginStatus from './LoginStatus';
import ToggleComponent from './ToggleComponent';
import './App.css';

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="app-container">
        <h1>Context & Custom Hooks Demo</h1>
        <LoginStatus />
        <ToggleComponent />
      </div>
    </AppProvider>
  );
};

export default App;
