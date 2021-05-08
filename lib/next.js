module.exports = {
  // Next.js overrides
  'jsx-a11y/href-no-hash': 0,
  'jsx-a11y/anchor-is-valid': [
    'error',
    {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight'],
      aspects: ['invalidHref', 'preferButton'],
    },
  ],
  'react/react-in-jsx-scope': 0,
};
