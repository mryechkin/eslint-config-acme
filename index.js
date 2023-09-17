const base = require('./lib/base.js');
const react = require('./lib/react.js');

module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['import', 'simple-import-sort', 'sort-destructure-keys', 'tailwindcss'],
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
        alias: { src: './src' },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
