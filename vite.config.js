import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.mkv'], // Include .mkv files in asset imports
  base:"/Rhine-Ho.github.io/",
});
