// @ts-check
/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
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
