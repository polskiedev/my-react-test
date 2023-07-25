import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ThemeName = 'default' | 'dark';

export interface ThemeContextType {
  theme: ThemeName;
  toggleTheme: (newTheme: ThemeName) => void;
}

const defaultTheme: ThemeName = 'default';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeName>(defaultTheme);

  const toggleTheme = (newTheme: ThemeName) => {
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

export { ThemeProvider, useTheme };
