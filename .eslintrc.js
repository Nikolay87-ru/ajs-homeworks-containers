module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, 
    jest: true, 
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended', 
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      rules: {
        'jest/prefer-expect-assertions': 'off',
      },
    },
  ],
};
