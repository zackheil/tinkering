import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const setupFile = './setup.test.ts';

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'v8',
    },
    environment: 'jsdom',
    exclude: [setupFile],
    name: 'Some React Package',
    setupFiles: [setupFile],
  },
});
