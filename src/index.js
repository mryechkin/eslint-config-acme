const base = require('./rules/base.js');
const react = require('./rules/react.js');

module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:tailwindcss/recommended', 'prettier'],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['import', 'sort-destructure-keys', 'tailwindcss'],
  rules: {
    ...base,
    ...react,
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      version: 'detect',
    },
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '~': './src',
          '@': './src',
          '#': './src',
          src: './src',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
