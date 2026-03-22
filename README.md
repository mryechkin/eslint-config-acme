<h1 align="center">
  <img width="500" src="assets/banner.png" alt="banner" />
</h1>

# ESLint + Prettier Config for React

Shareable config for [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/), aimed primarily to be used in React projects.

> [!IMPORTANT]
> Version `4.0` and above of this config **requires ESLint 9 minimum** and supports ONLY the new ESLint [flat config](https://eslint.org/docs/latest/use/configure/configuration-files) format. If you require the [legacy config](https://eslint.org/docs/latest/use/configure/migration-guide) format, please use [version 3](https://github.com/mryechkin/eslint-config-acme/releases/tag/v3.1.0) of this package.

## Overview

This is a [shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for [ESLint](https://eslint.org/) code linter, for use in JavaScript and TypeScript projects.

The goal of this configuration is to get code linting and formatting up and running as quickly as possible in a modern development environment, without sacrificing cleanliness and readability.

## Installation

To install the package, run:

```bash
npm install -D eslint-config-acme
```

This will install the shared config, as well as the following peer dependencies:

**ESLint**

- [eslint](https://github.com/eslint/eslint)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript)
- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [eslint-plugin-sort-destructure-keys](https://github.com/mthadley/eslint-plugin-sort-destructure-keys)

**Prettier**

- [prettier](https://github.com/prettier/prettier)
- [@ianvs/prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports)
- [prettier-plugin-packagejson](https://github.com/matzkoh/prettier-plugin-packagejson)

If using TypeScript, then you'll also need to install [`typescript-eslint`](https://typescript-eslint.io):

```bash
npm install -D typescript-eslint
```

## Usage

### Flat Config Format

To start using this shared config, create an `estlint.config.*` file (or update your existing one), and import the desired configuration.

There are two configurations available - `base` (for JavaScript) and `typescript` (for TypeScript):

<!-- prettier-ignore -->
```js
import base from 'eslint-config-acme/base';

// and optionally, if using TypeScript:
import typescript from 'eslint-config-acme/typescript';

// or alternatively, if using both:
import { base, typescript } from 'eslint-config-acme';
```

Import the `base` in your config file (eg. `eslint.config.mjs`):

```js
// eslint.config.mjs
import base from 'eslint-config-acme/base';
import { defineConfig } from 'eslint/config';

const config = defineConfig([
  base,
  // ...other configurations (optional)
]);

export default config;
```

### TypeScript

If using TypeScript, make sure that the optional peer dependency `typescript-eslint` is installed:

```bash
npm install -D typescript-eslint
```

Then, import the `typescript` config (in addition to the `base` one):

```jsx
// eslint.config.mjs
import { base, typescript } from 'eslint-config-acme';
import { defineConfig } from 'eslint/config';

const config = defineConfig([
  base,
  typescript,
  // ...other configurations (optional)
]);

export default config;
```

### Usage with other plugins and configurations

You can also extend your configuration with any other ESLint plugin or config in addition to `eslint-config-acme`, and specify other [configuration objects](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects) if desired as well.

For example, here's how to add [`eslint-plugin-sonarjs`](https://www.npmjs.com/package/eslint-plugin-sonarjs) and override some of the rules:

```js
import base from 'eslint-config-acme/base';
import sonarjs from 'eslint-plugin-sonarjs';
import { defineConfig } from 'eslint/config';

const config = defineConfig([
  base,
  sonarjs.configs.recommended,
  {
    rules: {
      'sonarjs/cognitive-complexity': 'warn',
    },
  },
]);

export default config;
```

## Import Alias

Aliases are pre-configured in this config by default, using [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript) (for both JavaScript and TypeScript):

```js
{
  // ...
  settings: {
    'import-x/resolver-next': [
      // ...
      createTypeScriptImportResolver({
        alias: {
          '~': [path.resolve(__dirname, './src')],
          '@': [path.resolve(__dirname, './src')],
          '#': [path.resolve(__dirname, './src')],
          src: [path.resolve(__dirname, './src')],
          internals: [path.resolve(__dirname, './internals')],
        },
        // ...
      }),
    ],
  }
}
```

This maps shorthands like `~`, `@`, `#` and `src` to the `./src` directory in your project, which allows you to write imports like this anywhere in your code:

```jsx
import Foo from '@/components/Foo';
// or
import Foo from '#/components/Foo';
// or
import Foo from '~/components/Foo';
// or
import Foo from 'src/components/Foo';
```

instead of relative paths:

```jsx
import Foo from '../../components/Foo';
```

Use this alongside [absolute imports and module path aliases](https://nextjs.org/docs/advanced-features/module-path-aliases) in **Next.js**.

These aliases can also be customized in your local configuration file, and new ones added, if needed:

```js
// eslint.config.mjs
import { fileURLToPath } from 'node:url';
import path from 'path';

import { base, typescript } from 'eslint-config-acme';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { defineConfig } from 'eslint/config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config = defineConfig([
  base,
  typescript,
  {
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alias: {
            app: [path.resolve(dirname, './path/to/app')],
            src: [path.resolve(dirname, './path/to/src')],
          },
        }),
      ],
    },
  },
]);

export default config;
```

In the example above, `app` is a new alias, and `src` is customized to point to a different path.

## Prettier

This config supports Prettier integration out of the box. Rules that may conflict with ESLint are disabled via [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).

### Shared Config

This package provides a shared Prettier config for use alongside ESLint.

To enable, create a Prettier config file (`.prettierrc`, `.prettierrc.js`, etc.), and import the shared Prettier config.

**JSON:**

```jsx
// .prettierrc
'eslint-config-acme/prettier';
```

**CommonJS:**

```jsx
// .prettierrc.js
/** @type {import("prettier").Config} */
const acme = require('eslint-config-acme/prettier');

module.exports = acme;
```

**ESM:**

```jsx
// .prettierrc.mjs
/** @type {import("prettier").Config} */
import acme from 'eslint-config-acme/prettier';

export default acme;
```

If you'd like to override any of the default options, you can use the spread operator (`...`) to extend the default config:

```jsx
// .prettierrc.mjs
/** @type {import("prettier").Config} */
import acme from 'eslint-config-acme/prettier';

const config = {
  ...acme,
  plugins: [...acme.plugins, 'prettier-plugin-tailwindcss'], // Use additional plugins alongside included ones
  singleQuote: false, // Override defaults
  tailwindStylesheet: './resources/css/app.css', // Set options for plugins, ie. Tailwind CSS
};

export default config;
```

### Import Sorting

Import statement sorting is enabled via [`@ianvs/prettier-plugin-sort-imports`](https://github.com/IanVS/prettier-plugin-sort-imports), with the following default `importOrder` set:

```json
{
  "importOrder": [
    "<TYPES>",
    "<TYPES>^[.]",
    "",
    "<BUILT_IN_MODULES>",
    "",
    "^react$",
    "<THIRD_PARTY_MODULES>",
    "",
    "^(src|~|@|#)(/.*)$",
    "",
    "^[.]"
  ]
}
```

This will take import statements like these:

```js
import fs from 'node:fs';

import { module } from 'package-name';

import foo from '@/foo';

import main from '../index';
import { bar } from './bar';
```

And turn them into this:

```js
import fs from 'node:fs';

import { module } from 'package-name';

import foo from '@/foo';

import main from '../index';
import { bar } from './bar';
```

See the plugin [docs](https://github.com/IanVS/prettier-plugin-sort-imports#importorder) for more information on how to customize this option.

## Adding Scripts

Add the following to your `package.json` file to define a script that will lint all known files and output the results:

```jsx
// package.json
{
  "scripts": {
    "lint": "eslint --ignore-path .gitignore ."
  }
}
```

To fix all automatically-fixable issues, you can add the following script to your `package.json` as well (in addition to above):

```jsx
// package.json
{
  "scripts": {
    "lint:fix": "npm run lint -- --fix"
  }
}
```

Note that you can update the above scripts as you see fit, this is just an example. See ESLint [CLI reference](https://eslint.org/docs/user-guide/command-line-interface) for more details.

## Author

[Mykhaylo Ryechkin](https://github.com/mryechkin)

## License

[MIT](https://choosealicense.com/licenses/mit/)
