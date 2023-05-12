module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "google",
    "next/core-web-vitals",
    "prettier",
  ],
  ignorePatterns: ["*.theme.ts", "theme.options.ts", "schema.generated.ts"],
  rules: {
    "require-jsdoc": "off",
    "no-html-link-for-pages": "off",
    "no-unused-vars": "off",
    "react/no-unescaped-entities": "off",
  },
  overrides: [
    {
      files: ["*.ts"],
      processor: "@graphql-eslint/graphql",
      parserOptions: {
        schema: "./src/lib/graphql/validation.graphql",
      },
    },
    {
      files: ["*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      rules: {
        "@graphql-eslint/known-type-names": "error",
      },
      parserOptions: {
        schema: "./src/lib/graphql/validation.graphql",
      },
    },
  ],
};
