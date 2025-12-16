import js from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { importX } from "eslint-plugin-import-x";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".open-next/**",
  ]),

  {
    ...js.configs.recommended,
    ...importX.flatConfigs.recommended,
    ...importX.flatConfigs.typescript,
  },

  {
    files: ["app//**/*.{js,jsx,ts,tsx}", "components/**/*.{js,jsx,ts,tsx}"],
    ignores: ["components/ui/*.{js,jsx,ts,tsx}"],
    ...perfectionist.configs["recommended-natural"],
  },

  {
    files: ["app/**/*.{js,jsx,ts,tsx}", "components/**/*.{js,jsx,ts,tsx}"],
    ignores: ["components/ui/*.{js,jsx,ts,tsx}"],

    rules: {
      "@typescript-eslint/no-unused-vars": ["error"],
      // TODO:
      // "func-style": [
      //   "error",
      //   "declaration",
      //   {
      //     allowArrowFunctions: false,
      //   },
      // ],
      "import-x/no-restricted-paths": [
        "error",
        {
          zones: [
            {
              from: ["app/**/page.tsx", "app/**/layout.tsx"],
              target: ["**/*.{ts,tsx}"],
            },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
