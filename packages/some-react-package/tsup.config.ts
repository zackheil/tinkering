import { defineConfig } from 'tsup';

import { sharedTsupConfig } from '../../tsup.config.js';

export default defineConfig({
  ...sharedTsupConfig,
  entry: ['src/**/*.ts', 'src/**/*.tsx', '!src/**/*.test.*', '!dist/**/*'],
  format: ['esm'],
  shims: false,
  sourcemap: true,
});
