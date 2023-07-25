import React, { ChangeEvent } from 'react';
import { useTheme, ThemeName } from './ThemeContext';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value as ThemeName;
    toggleTheme(selectedTheme);
  };

  const availableThemes: ThemeName[] = ['default', 'dark'];

  return (
    <div>
      <label htmlFor="theme-select">Select Theme:</label>
      <select id="theme-select" value={theme} onChange={handleThemeChange}>
        {availableThemes.map((themeName) => (
          <option key={themeName} value={themeName}>
            {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeToggleButton;
