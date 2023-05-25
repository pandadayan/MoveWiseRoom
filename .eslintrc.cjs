module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/vue3-recommended', '@vue/standard', './.eslintrc-auto-import.json'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    requireConfigFile: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: ['error', 2], // 缩进2格
    'vue/html-self-closing': [
      // 自定义组件自闭和警告，常规的html不校验
      1,
      {
        html: {
          normal: 'never',
          void: 'always'
        }
      }
    ],
    'vue/multi-word-component-names': 'off'
  }
}
