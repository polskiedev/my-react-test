import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ContextType as ThemeContextType, Options, _default as defaultTheme} from './ThemeInterface';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Options>(defaultTheme);

  const toggleTheme = (newTheme: Options) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export type {Options};
export { ThemeProvider, useTheme };
