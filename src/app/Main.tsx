import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from '@/shared/lib/providers/Theme/index.tsx';
import AppRoutes from './router/AppRoutes.tsx';
import '@/shared/assets/styles/fonts.css';
import '@/shared/assets/styles/reset.css';
import '@/shared/assets/styles/colors.scss';
import '@/shared/assets/styles/themes.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
