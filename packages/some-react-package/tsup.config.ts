import { defineConfig } from 'tsup';

// import { sharedTsupConfig } from '../../tsup.config.js';

export default defineConfig({
  bundle: false,
  clean: true,
  entry: ['src/**/*.ts*', '!src/**/*.test.*', '!dist/**/*'],
  esbuildOptions(options) {
    options.outbase = './';
  },
  format: ['esm'],
  outDir: 'dist',
  sourcemap: true,
  tsconfig: './tsconfig.build.json',
});
