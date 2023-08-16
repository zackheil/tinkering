import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const setupFile = './setup.test.ts';

export default defineConfig({
  plugins: [react()],
  test: {
    name: 'Some React Package',
    environment: 'jsdom',
    setupFiles: [setupFile],
    exclude: [setupFile],
  },
});
