import React from 'react';
import useToggle from './useToggle';

const ToggleComponent: React.FC = () => {
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  return (
    <div className={`toggle-container ${isDarkMode ? 'dark' : 'light'}`}>
      <h3>Theme Mode: {isDarkMode ? 'Dark 🌙' : 'Light ☀️'}</h3>
      <button onClick={toggleDarkMode}>
        Switch to {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default ToggleComponent;
