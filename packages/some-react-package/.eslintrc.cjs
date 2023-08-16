/* eslint-disable no-undef */ // Because module.exports is causing issues.

// @ts-check
/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
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
    'eslint:recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
  env: {
    browser: true,
    es2021: true,
  },
};
