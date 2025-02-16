/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },

  ignorePatterns: ['*.config.js', '*.cjs', 'vite.config.ts'],

  // Base config
  extends: [
    'eslint:recommended',
    'canonical/browser',
    'canonical/jsdoc',
    'canonical/jsx-a11y',
    'canonical/module',
    'canonical/node',
    'canonical/prettier',
    'canonical/react',
    'canonical/regexp',
    'canonical/typescript',
    'plugin:github/recommended',
  ],

  overrides: [
    // React
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: ['react', 'jsx-a11y'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      settings: {
        react: {
          version: 'detect',
        },
        formComponents: ['Form'],
        linkComponents: [
          { name: 'Link', linkAttribute: 'to' },
          { name: 'NavLink', linkAttribute: 'to' },
        ],
        'import/resolver': {
          typescript: {},
        },
      },
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        'canonical/prefer-inline-type-import': 'off',
        'prettier/prettier': 'off',
        'react/forbid-component-props': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-newline': 'off',
      },
    },

    // Typescript
    {
      files: ['**/*.{ts,tsx}'],
      plugins: ['@typescript-eslint', 'import'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      settings: {
        'import/internal-regex': '^~/',
        'import/resolver': {
          node: {
            extensions: ['.ts', '.tsx'],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
    },

    // Node
    //    {
    //      files: ['.eslintrc.cjs'],
    //      env: {
    //        node: true,
    //      },
    //    },
  ],
}
