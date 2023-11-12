/* eslint-env node */
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "react-app",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { 
    ecmaVersion: "latest", 
    sourceType: "module",
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error"
  },
}
