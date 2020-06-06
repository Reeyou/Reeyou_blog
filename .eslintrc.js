// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "semi":["error","never"],
      "implicit-arrow-linebreak": 0,
      "linebreak-style": ["off","windows"],
      "import/extensions": [
          2,
          {
              "ts": "never",
              "tsx": "never",
              "js": "never",
              "jsx": "never",
              "css": "never"
          }
      ],
      "indent": [
          2,
          4,
          {
              "SwitchCase": 1
          }
      ],
  }
}
