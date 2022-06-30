<h1 align="center">
  <img width="500" src="assets/banner.png" alt="banner" />
</h1>

# ESLint + Prettier Config for React (Next.js)

`eslint-config-acme`

> Shareable config for [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/), aimed primarily to be used in [Next.js](https://nextjs.org) React projects.

## Overview

This configuration extends [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) ESLint config, with [airbnb/hooks](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnbhooks) enabled, and Prettier integration via the ESLint [plugin](https://github.com/prettier/eslint-plugin-prettier). Additionally, a few default rules are overriden to provide a more relaxed development experience in Next.js applications out of the box.

The goal of this configuration is to get code linting and formatting up and running as quickly as possible in a modern development environment, without sacrificing cleanliness and readability, and having to configure ESLint + Prettier from scratch every time.

## Installation

To install the package, run:

```shell
$ npm install -D eslint-config-acme
```

This will install the shared config, as well as its peer dependencies:

- eslint
- eslint-config-airbnb
- eslint-config-prettier
- eslint-import-resolver-alias
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-simple-import-sort
- eslint-plugin-tailwindcss
- prettier
- prettier-plugin-tailwindcss

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

or the `.eslintrc` file:

```jsx
// .eslintrc
{
  "extends": ["acme"]
}
```

## Import Alias

This config provides a default import alias resolver for `eslint-plugin-import` to support shorthand imports of local modules:

```json
{
  "import/resolver": {
    "alias": {
      "map": [["@", "./src"]],
      "extensions": [".js", ".jsx"]
    }
  }
}
```

This will allow you to write imports like this anywhere in your code:

```jsx
import Foo from '@/components/foo';
```

instead of relative paths:

```jsx
import Foo from '../../components/foo';
```

when using [absolute imports and module path aliases](https://nextjs.org/docs/advanced-features/module-path-aliases) in **Next.js**.

This can also be overriden in your local `.eslintrc` file, if needed:

```jsx
// .eslintrc
{
  "extends": ["acme"],
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [["@", "./lib"]],
        "extensions": [".js"]
      }
    }
  }
}
```

## Prettier

This config supports Prettier integration out of the box. Rules that may conflict with ESLint are disabled via recommended configuration in [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier).

If you wish to override any [Prettier options](https://prettier.io/docs/en/options.html), you can do so by specifying them under `prettier/prettier` rule in your ESLint config file. For example:

```jsx
// .eslintrc
{
  "extends": ["acme"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 90
      }
    ]
  }
}
```

Make sure that these rules match the options specified in your `.prettierrc` file.

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
    "lint:fix": "eslint --ignore-path .gitignore --fix ."
  }
}
```

Note that you can update the above scripts as you see fit, this is just an example. See ESLint [CLI reference](https://eslint.org/docs/user-guide/command-line-interface) for more details.

## Note on Next.js Link component

There is a [known issue](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402) with Next.js's decision to construct internal links by nesting an href-free `<a>` tag inside of a `<Link>` component. Next.js is also [aware of the issue](https://github.com/vercel/next.js/issues/5533) and has an [RFC](https://github.com/vercel/next.js/discussions/8207) working towards a solution.

Because of this, the [standard usage](https://nextjs.org/docs/api-reference/next/link) of Next.js `<Link>` component will result in an error for the `jsx-a11y/anchor-is-valid` rule. Until the Next.js API can be updated to a more standard pattern, `eslint-config-acme` overrides this rule as suggested in [this issue](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402#issuecomment-368305051):

```json
{
  "jsx-a11y/anchor-is-valid": [
    "error",
    {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"],
      "aspects": ["invalidHref", "preferButton"]
    }
  ]
}
```

Please be aware, however, that this workaround also **disables the check for `href` attribute altogether** for regular `<a>` elements. Keep that in mind to ensure you're not breaking accessibility.

(check out [@axe-core/react](https://www.npmjs.com/package/@axe-core/react) if you'd like an additional layer of accessibility checking)

## License

Licensed under MIT License.
