/* eslint-disable jsdoc/check-tag-names */
/* eslint-disable perfectionist/sort-objects */

// @ts-check
/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    es2022: true,
  },
  ignorePatterns: [
    '!.*',
    'coverage*',
    'node_modules',
    'pnpm-lock.yaml',
    'dist',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
    'perfectionist',
    'vitest',
    'jsdoc',
    'eslint-plugin-local-rules',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:perfectionist/recommended-natural',
    'plugin:vitest/recommended',
    'plugin:jsdoc/recommended-typescript',
  ],
  rules: {
    // Base ESlint Rules
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: true,
          FunctionExpression: false,
        },
      },
    ],
    'no-case-declarations': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: 'Use const objects over TS Enums',
      },
    ],

    // Typescript ESlint Plugin Rules
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { caughtErrors: 'all' }],
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      { blankLine: 'always', next: '*', prev: 'block-like' },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'error',

    // Import Plugin Rules
    'import/extensions': ['error', 'ignorePackages'],
    'perfectionist/sort-objects': [
      'error',
      {
        'order': 'asc',
        'partition-by-comment': true,
        'type': 'natural',
      },
    ],

    // JSDoc Plugin Rules
    'jsdoc/informative-docs': 'error',

    // Local Rules
    'local-rules/require-node-prefix': 'error',
  },
  overrides: [
    {
      extends: ['plugin:markdown/recommended'],
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
    {
      excludedFiles: ['**/*.md/*.{ts,tsx}'],
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        'deprecation/deprecation': 'error',
        '@typescript-eslint/no-unnecessary-condition': [
          'error',
          {
            allowConstantLoopConditions: true,
          },
        ],
      },
      plugins: ['deprecation'],
      extends: ['plugin:deprecation/recommended'],
      parserOptions: {
        project: './tsconfig.common.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
  ],
};

module.exports = config;
