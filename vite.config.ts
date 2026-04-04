import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  root: 'src',
  publicDir: '../public',
  base: command === 'build' && !process.env.VERCEL ? '/Habit-Tracking/dist/' : '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [react()],
}));
