import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  root: 'src',
  base: command === 'build' ? '/Habit-Tracking/dist/' : '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [react()],
}));
