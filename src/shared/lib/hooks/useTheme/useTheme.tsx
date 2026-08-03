import { useContext } from 'react';
import { ThemeContext } from '../../providers/Theme/context';

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error('Cannot use useTheme without ThemeProvider!');
  }

  return context;
}
