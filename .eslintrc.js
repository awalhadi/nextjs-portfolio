module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    extends: [
      'next',
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    plugins: ['react', 'react-hooks'],
    rules: {
      // Add any specific rules you want to enforce or disable
      // For example:
      // 'react-hooks/rules-of-hooks': 'error',
      // 'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  