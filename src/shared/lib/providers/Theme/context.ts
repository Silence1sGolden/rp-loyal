import { createContext } from 'react';

export type TTheme = 'dark' | 'light';

export type TThemeContext = {
  theme: TTheme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<TThemeContext | null>(null);
