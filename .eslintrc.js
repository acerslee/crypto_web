module.export = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
        jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
},
  parser: "@typescript-eslint/parser",
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "plugin:react/recommended",
    "prettier/@typescript-lint",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
  ],
  rules: {}
}
