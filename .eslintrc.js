module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  "extends": ['google', 'plugin:prettier/recommended'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'plugins': ["prettier"],
  'rules': {
    'require-jsdoc': 0,
    'prettier/prettier': 'error',
  },
};
