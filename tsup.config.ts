import { type Options } from 'tsup';

export const sharedTsupConfig = {
  bundle: false,
  clean: true,
  dts: true,
  entry: ['src/**/*.ts', '!src/**/*.test.*'],
  format: ['esm', 'cjs'],
  outDir: 'lib',
} as Options;
