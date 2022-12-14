module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "semi": "off",
    "@typescript-eslint/semi": "warn",
    "comma-dangle": "off",
    "keyword-spacing": "off",
    "object-curly-newline": "off",
    "object-property-newline": "off",
    "object-curly-spacing": "off",
    "indent": "off"
  },
};
