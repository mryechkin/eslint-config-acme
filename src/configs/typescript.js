import fs from 'fs';
import path from 'path';

import { fixupConfigRules, includeIgnoreFile } from '@eslint/compat';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { importX } from 'eslint-plugin-import-x';
import tsEslint from 'typescript-eslint';

const gitIgnorePath = path.resolve(process.cwd(), '.gitignore');

const extensions = ['.ts', '.tsx', '.cts', '.mts', '.mtsx'];

const config = fixupConfigRules([
  ...(fs.existsSync(gitIgnorePath) ? [includeIgnoreFile(gitIgnorePath)] : []),
  importX.flatConfigs.typescript,
  tsEslint.configs.recommended,
  tsEslint.configs.stylistic,
  {
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({ alwaysTryTypes: true, extensions }),
      ],
    },
  },
]);

export default config;
