<h1 align="center">
  <img width="500" src="assets/banner.png" alt="banner" />
</h1>

# ESLint + Prettier Config for React

> Shareable config for [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/), aimed primarily to be used in React projects.

## Overview

This configuration extends [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) ESLint config, with [`eslint-config-airbnb/hooks`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnbhooks) enabled, and Prettier integration via the ESLint [plugin](https://github.com/prettier/eslint-plugin-prettier). Additionally, a few default rules are overridden to provide a more relaxed development experience in Next.js applications out of the box.

The goal of this configuration is to get code linting and formatting up and running as quickly as possible in a modern development environment, without sacrificing cleanliness and readability, and having to configure ESLint + Prettier from scratch every time.

## Installation

To install the package, run:

```shell
$ npm install -D eslint-config-acme
```

This will install the shared config, as well as its peer dependencies:

- [eslint](https://github.com/eslint/eslint)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-import-resolver-custom-alias](https://github.com/laysent/eslint-import-resolver-custom-alias)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [eslint-plugin-sort-destructure-keys](https://github.com/mthadley/eslint-plugin-sort-destructure-keys)
- [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)
- [prettier](https://github.com/prettier/prettier)
- [@ianvs/prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports)
- [prettier-plugin-packagejson](https://github.com/matzkoh/prettier-plugin-packagejson)
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

**NOTE:** if you are on NPM <7, you will need to install these manually:

```shell
$ npx install-peerdeps -D eslint-config-acme
```

## Usage

To start using this shared config, add `eslint-config-acme` (or just `acme`) to either your `package.json`:

```jsx
// package.json
{
  "eslintConfig": {
    "extends": ["acme"]
  }
}
```

or the `.eslintrc` [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files):

```jsx
// .eslintrc
{
  "extends": ["acme"]
}
```

> **NOTE:**
> The new [flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) format is not yet supported, as there is an [upstream dependency](https://github.com/airbnb/javascript/issues/2804) for its support in `eslint-config-airbnb`.

## Import Alias

This config provides a default import alias resolver for `eslint-plugin-import` to support shorthand imports of local modules:

```json
{
  "import/resolver": {
    "eslint-import-resolver-custom-alias": {
      "alias": {
        "~": "./src",
        "@": "./src",
        "#": "./src",
        "src": "./src"
      },
      "extensions": [".js", ".jsx", ".ts", ".tsx"]
    }
  }
}
```

This maps any of the above shorthands (`~`, `@`, `#`, `src`) to the `./src` directory in your project, and allows you to write imports like this anywhere in your code:

```jsx
import Foo from '~/components/Foo';
// or
import Foo from '@/components/Foo';
// or
import Foo from '#/components/Foo';
// or
import Foo from 'src/components/Foo';
```

instead of relative paths:

```jsx
import Foo from '../../components/Foo';
```

Use this alongside [absolute imports and module path aliases](https://nextjs.org/docs/advanced-features/module-path-aliases) in **Next.js**.

These aliases can also be customized in your local configuration file, if needed:

```jsx
// .eslintrc
{
  "extends": ["acme"],
  "settings": {
    "import/resolver": {
      "eslint-import-resolver-custom-alias": {
        "alias": {
          "lib": "./lib",
          "src": "./some/other/src"
        },
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".mdx"]
      }
    }
  }
}
```

## Import Sorting

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
import foo from '@/foo';
import main from '../index';
import fs from 'node:fs';
import { bar } from './bar';
import { module } from 'package-name';
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

If you'd like to override any of the default options, you can use the spread operator (`...`) to extend the default config:

```jsx
// .prettierrc.js
/** @type {import("prettier").Config} */
const acme = require('eslint-config-acme/prettier');

const config = {
  ...acme,
  singleQuote: false,
};

module.exports = config;
```

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

Or, if using Next.js:

```jsx
// package.json
{
  "scripts": {
    "lint": "next lint"
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
