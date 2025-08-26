module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: undefined,
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: { project: '.' },
      node: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

    // Prefer sorted imports
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'import/order': 'off',

    // Optional: allow tsx extensions in JSX
    'react/jsx-filename-extension': ['off', { extensions: ['.tsx', '.jsx'] }],
  },
};

