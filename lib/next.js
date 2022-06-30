module.exports = {
  // Next.js overrides
  'jsx-a11y/href-no-hash': 'off',
  'jsx-a11y/anchor-is-valid': [
    'error',
    {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight'],
      aspects: ['invalidHref', 'preferButton'],
    },
  ],
  'react/react-in-jsx-scope': 'off',
};
