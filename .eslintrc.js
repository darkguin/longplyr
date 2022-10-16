module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },

  extends: [
    "plugin:vue/strongly-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "prettier/prettier": "error",
    "vue/multi-word-component-names": ["error", { ignores: ["Poster", "Time"] }],
    "multiline-ternary": "off",
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
};
