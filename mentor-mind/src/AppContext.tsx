import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface AppContextType {
  isLoggedIn: boolean;
  toggleLogin: () => void;
}

// Create the context with default values
const AppContext = createContext<AppContextType | undefined>(undefined);

// Context Provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Toggle login state
  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{ isLoggedIn, toggleLogin }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
