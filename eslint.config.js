import { defineConfig } from 'eslint/config';

import baseConfig from './src/configs/base.js';

const config = defineConfig([
  baseConfig,
  {
    rules: {
      'import-x/extensions': ['error', 'ignorePackages'],
      'import-x/no-useless-path-segments': 'off',
    },
  },
]);

export default config;
