module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-essential',
  ],
  plugins: [],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
  globals: {
    useHead: 'readonly',
    useSeoMeta: 'readonly',
  },
}
