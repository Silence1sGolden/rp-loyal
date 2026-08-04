import { ReactNode, useEffect, useState } from 'react';
import { ThemeContext, TTheme } from './context';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as undefined | TTheme) || 'light'
  );

  const handleToggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';

      document.documentElement.classList.toggle('dark', next === 'dark');
      localStorage.setItem('theme', next);

      return next;
    });
  };

  useEffect(() => {
    document.documentElement.classList.remove('no-transition');
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme: theme, toggleTheme: handleToggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
