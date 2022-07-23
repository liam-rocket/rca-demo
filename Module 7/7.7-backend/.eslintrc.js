module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // Don't enforce control flow closing curly brace needs to be
    // on same line as next control flow opening statement.
    // This is so we can add comments above control flow statements such as else if or else.
    'brace-style': 'off',
    // Require import extensions for all imports except packages because
    // SWE1 doesn't use a bundler for executing Node, thus Node will fail
    // when importing local modules without the .js extension.
    // https://github.com/airbnb/javascript/issues/2134
    'import/extensions': ['error', 'ignorePackages'],
    // Disable dependency checking. By default, ESLint complains when we import
    // dev dependencies such as React, even though technically React is only "used"
    // in compilation (what we consider development) and not in production (in the client).
    'import/no-extraneous-dependencies': 'off',
    // Disable linebreak style to prevent ESLint errors on Windows line endings
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': 'off',
    // Allow console for students to debug
    'no-console': 'off',
    // Allow function param reassign for array or object elements or properties
    'no-param-reassign': ['error', { props: false }],
  },
};
