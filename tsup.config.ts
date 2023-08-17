import { type Options } from 'tsup';

export const sharedTsupConfig = {
  bundle: false,
  clean: true,
  dts: true,
  entry: ['src/**/*.ts', '!src/**/*.test.*', '!dist/**/*'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  outExtension: (params) => {
    return {
      js: `.${params.format}.js`,
    };
  },
  shims: true,
  sourcemap: true,
  tsconfig: 'tsconfig.build.json',
} satisfies Options;
