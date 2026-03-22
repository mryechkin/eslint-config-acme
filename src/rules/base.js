const baseRules = {
  // Disallow non-import statements appearing before import statements
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/first.md
  'import-x/first': 'error',

  // Require a newline after the last import/require in a group
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md
  'import-x/newline-after-import': 'error',

  // Disallow duplicate imports
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
  'import-x/no-duplicates': 'error',

  // Forbid the use of extraneous packages
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md
  'import-x/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: true,
      bundledDependencies: true,
    },
  ],

  // Prevent importing the default as if it were named
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-default.md
  'import-x/no-named-as-default': 'off',

  // Ensure absolute imports are above relative imports and that unassigned imports are ignored
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md
  'import-x/order': [
    'error',
    {
      groups: [
        'type',
        ['builtin', 'external', 'internal'],
        ['parent', 'sibling', 'index'],
      ],
    },
  ],

  // Require modules with a single export to use a default export
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/prefer-default-export.md
  'import-x/prefer-default-export': 'off',

  // Disallow the use of console
  'no-console': 'warn',

  // Allow nested ternary expressions
  'no-nested-ternary': 'off',

  // Allow dangling underscores in identifiers
  'no-underscore-dangle': 'off',

  // Disable the rule to allow functions and variables to be used before they are defined
  'no-use-before-define': 'off',

  // Enforce sorted destructured keys
  'sort-destructure-keys/sort-destructure-keys': 'warn',

  // Disable Tailwind CSS classnames order enforcement
  'tailwindcss/classnames-order': 'off',
};

export default baseRules;
