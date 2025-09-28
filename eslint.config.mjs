const eslintConfig = [
  {
    ignores: [
      "src/generated/**/*",
      "node_modules/**/*",
      ".next/**/*",
      "out/**/*",
      "build/**/*",
      "dist/**/*",
      "coverage/**/*",
      "logs/**/*",
      "drizzle/**/*",
    ],
    rules: {
      indent: ["error", 2, { SwitchCase: 1 }],
      quotes: ["error", "double", { avoidEscape: true }],
      semi: ["error", "always"],
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": "off",
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-arrow-callback": "error",
    },
  },
];

export default eslintConfig;
