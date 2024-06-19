module.exports = {
  parser: '@typescript-eslint/parser',
  '@typescript-eslint/quotes': [
    'error',
    'single',
    {
      allowTemplateLiterals: true
    }
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error'
  },
  env: {
    node: true,
    es6: true
  }
};
