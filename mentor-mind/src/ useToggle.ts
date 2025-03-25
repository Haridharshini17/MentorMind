import { useState } from 'react';

// Custom hook for toggle functionality
const useToggle = (initialValue: boolean = false) => {
  const [state, setState] = useState<boolean>(initialValue);

  const toggle = () => setState((prev) => !prev);

  return [state, toggle] as const;
};

export default useToggle;
