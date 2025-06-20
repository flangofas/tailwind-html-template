import html from "@html-eslint/eslint-plugin";
import angularParser from "@angular-eslint/template-parser";
import tailwindcss from "eslint-plugin-tailwindcss";

export default [
  {
    plugins: {
      tailwindcss
    },
    languageOptions: {
      parser: angularParser
    },
    rules: {
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/enforces-negative-arbitrary-values': 'warn',
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/migration-from-tailwind-2': 'warn',
      'tailwindcss/no-arbitrary-value': 'off',
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/no-contradicting-classname': 'warn',
      'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
    },
    files: ["**/*.html"],
  },
];