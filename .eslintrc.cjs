// @ts-check
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.common.json',
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  ignorePatterns: [
    '!.*',
    'coverage*',
    'lib',
    'node_modules',
    'pnpm-lock.yaml',
    'dist',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
};
