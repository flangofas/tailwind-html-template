import html from "@html-eslint/eslint-plugin";

export default [
  {
    ...html.configs["flat/recommended"],
    files: ["**/*.html"],
    rules: {
      "@html-eslint/attrs-newline": "error",
      "@html-eslint/element-newline": ["error", { "inline": ["$inline"] }],
      "@html-eslint/indent": "error",
      "@html-eslint/lowercase": "error",
      "@html-eslint/id-naming-convention": ["warn", "camelCase"],
      "@html-eslint/no-duplicate-attrs": "error",
      "@html-eslint/no-duplicate-id": "error",
      "@html-eslint/no-extra-spacing-attrs": "error",
      "@html-eslint/no-extra-spacing-text": "error",
      "@html-eslint/no-multiple-empty-lines": "error",
      "@html-eslint/no-multiple-h1": "error",
      "@html-eslint/no-nested-interactive": "error",
      "@html-eslint/no-obsolete-tags": "error",
      "@html-eslint/no-target-blank": "error",
      "@html-eslint/no-trailing-spaces": "error",
      "@html-eslint/quotes": "error",
      "@html-eslint/require-button-type": "error",
      "@html-eslint/require-closing-tags": "error",
      "@html-eslint/require-doctype": "error",
      "@html-eslint/require-img-alt": "error",
      "@html-eslint/require-lang": "error",
      "@html-eslint/require-li-container": "error",
      "@html-eslint/require-title": "error",
      "@html-eslint/sort-attrs": "error",
      "@html-eslint/use-baseline": "error"
    }
  },
];