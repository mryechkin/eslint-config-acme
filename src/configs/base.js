import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { fixupConfigRules, includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { createNodeResolver, importX } from 'eslint-plugin-import-x';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import globals from 'globals';

import baseRules from '../rules/base.js';
import reactRules from '../rules/react.js';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const gitIgnorePath = path.resolve(process.cwd(), '.gitignore');

const extensions = ['.js', '.jsx', '.mjs', '.mjsx', '.cjs'];

const config = fixupConfigRules([
  ...(fs.existsSync(gitIgnorePath) ? [includeIgnoreFile(gitIgnorePath)] : []),
  js.configs.recommended,
  importX.flatConfigs.recommended,
  jsxA11y.flatConfigs.recommended,
  react.configs.flat.recommended,
  hooks.configs.flat['recommended-latest'],
  stylistic.configs.recommended,
  // NOTE: This must be last in order to override conflicting Prettier rules
  eslintConfigPrettier,
  {
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.es2025,
        ...globals.jest,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
      },
    },
    plugins: {
      '@stylistic': stylistic,
      'sort-destructure-keys': sortDestructureKeys,
    },
    rules: {
      ...baseRules,
      ...reactRules,
    },
    settings: {
      react: {
        // Tells eslint-plugin-react to automatically detect the version of React to use
        version: 'detect',
      },
      'import-x/resolver-next': [
        createNodeResolver({ extensions: [...extensions, '.json'] }),
        createTypeScriptImportResolver({
          alias: {
            '~': [path.resolve(dirname, './src')],
            '@': [path.resolve(dirname, './src')],
            '#': [path.resolve(dirname, './src')],
            src: [path.resolve(dirname, './src')],
          },
        }),
      ],
    },
  },
]);

export default config;
