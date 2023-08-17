/* eslint-disable perfectionist/sort-objects */

// @ts-check
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.common.json',
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  env: {
    node: true,
    es2022: true,
  },
  ignorePatterns: [
    '!.*',
    'coverage*',
    'lib',
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
    'deprecation',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:perfectionist/recommended-natural',
    'plugin:vitest/recommended',
    'plugin:jsdoc/recommended-typescript',
    'plugin:deprecation/recommended',
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
  },
  // overrides: [
  //   {
  //     files: ['**/*.md'],
  //     processor: 'markdown/markdown',
  //   },
  //   {
  //     files: ['**/*.md/*.{ts,typescript,tsx,node}'],
  //     parser: '@typescript-eslint/parser',
  //     rules: {},
  //   },
  // ],
  overrides: [
    {
      extends: ['plugin:markdown/recommended'],
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
    {
      excludedFiles: ['**/*.md/*.ts'],
      extends: [
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.common.json',
      },
      rules: {
        'deprecation/deprecation': 'error',
        '@typescript-eslint/no-unnecessary-condition': [
          'error',
          {
            allowConstantLoopConditions: true,
          },
        ],
      },
    },
    {
      files: '**/*.test.ts',
      rules: {
        // These on-by-default rules aren't useful in test files.
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
      },
    },
  ],
};
