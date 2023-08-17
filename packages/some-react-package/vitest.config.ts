import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const setupFile = './setup.test.ts';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    exclude: [setupFile],
    name: 'Some React Package',
    setupFiles: [setupFile],
  },
});
