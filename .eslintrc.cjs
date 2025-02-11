module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "tailwindcss/no-custom-classname": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-console": "error",
  },
};
