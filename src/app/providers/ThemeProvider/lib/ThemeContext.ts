import { createContext } from 'react';

export enum Theme {
  LIGHT = 'app-light-theme',
  DARK = 'app-dark-theme',
  LEAF = 'app-leaf-theme',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const THEME_KEY = 'theme';
