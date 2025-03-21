import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import './styles.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <h1>Theme Switcher using Context</h1>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default App;
