import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  base: '/rp-loyal',
  plugins: [react(), svgr()],
});
