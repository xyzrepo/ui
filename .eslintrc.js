module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: ['@nuxtjs'],
  globals: {
    consola: 'readonly'
  },
  rules: {
    curly: 'off',
    'arrow-parens': 'off'
  }
}
