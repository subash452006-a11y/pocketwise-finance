import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative asset URLs work for GitHub Pages project sites and local previews.
export default defineConfig({
  base: './',
  plugins: [react()],
});
