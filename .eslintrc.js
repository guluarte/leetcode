module.exports = {
  env: {
    'node': true,
    'es2021': true
  },
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single']
  }
}
