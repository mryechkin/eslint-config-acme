const config = {
  printWidth: 90,
  singleQuote: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-packagejson'],
  importOrder: [
    '<TYPES>',
    '<TYPES>^[.]',
    '',
    '<BUILT_IN_MODULES>',
    '',
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(src|~|@|#)(/.*)$',
    '',
    '^[.]',
  ],
};

export default config;
