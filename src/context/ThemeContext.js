import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check if user has a preference stored in localStorage
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check if user prefers dark mode in their OS settings
    return window.matchMedia && 
      window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' 
      : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Update theme attribute on document when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between light and dark themes
  // const toggleTheme = () => {
  //   setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  // };

  return (
    <ThemeContext.Provider value={{ theme,  }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;