const reactRules = {
  // Prevent missing displayName in a React component definition
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
  'react/display-name': 'off',

  // Enforce a specific function type for function components
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
  'react/function-component-definition': 'off',

  // Only JS/TS files may have JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  'react/jsx-filename-extension': [
    'warn',
    { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  ],

  // Allow JSX props spreading
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
  'react/jsx-props-no-spreading': 'off',

  // PropType checks have been removed as of React 19
  'react/prop-types': 'off',

  // React in scope when using JSX is not required with new JSX transform
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
  'react/react-in-jsx-scope': 'off',
};

export default reactRules;
