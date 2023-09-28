import { useContext } from 'react';
import { THEME_KEY, Theme, ThemeContext } from './ThemeContext';

export interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    let newTheme: Theme;

    switch (theme) {
    case Theme.DARK:
      newTheme = Theme.LEAF;
      break;
    case Theme.LEAF:
      newTheme = Theme.LIGHT;
      break;
    case Theme.LIGHT:
      newTheme = Theme.DARK;
      break;
    default:
      newTheme = Theme.DARK;
    }

    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
}
