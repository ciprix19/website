// import js from '@eslint/js';
// import globals from 'globals';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import tseslint from 'typescript-eslint';
// import { defineConfig, globalIgnores } from 'eslint/config';

// export default defineConfig([
//     globalIgnores(['dist']),
//     {
//         files: ['**/*.{ts,tsx}'],
//         extends: [
//             js.configs.recommended,
//             tseslint.configs.recommended,
//             reactHooks.configs.flat.recommended,
//             reactRefresh.configs.vite,
//         ],
//         languageOptions: {
//             ecmaVersion: 2020,
//             globals: globals.browser,
//         },
//     },
// ]);
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import preferArrow from 'eslint-plugin-prefer-arrow'

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.browser }
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        plugins: {
            'prefer-arrow': preferArrow
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            semi: ['error', 'never'],
            // quotes: ['error', 'single', { avoidEscape: true }],
            // 'comma-dangle': ['error', 'never'],
            indent: ['error', 4, { SwitchCase: 1 }],
            'max-len': ['error', { code: 120, ignoreUrls: true, ignoreStrings: true }],
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
            'eol-last': ['error', 'always'],

            'padded-blocks': ['error', 'never'],
            'padding-line-between-statements': ['error', {
                blankLine: 'never', prev: '*', next: 'return'
            }],
            'function-paren-newline': ['error', 'never'],
            'implicit-arrow-linebreak': ['error', 'beside'],
            'object-curly-newline': [
                'error',
                {
                    ObjectPattern: { multiline: false }, // For the { set } part
                    ObjectExpression: { multiline: true, minProperties: 1 } // For the returned { theme: 'dark' }
                }
            ],
            'object-curly-spacing': ['error', 'always'],
            'import/no-cycle': 'off',
            'import/order': 'off',
            'sort-imports': 'off',
            '@typescript-eslint/array-type': 'off',
            '@typescript-eslint/require-await': 'off',
            'pnpm/json-enforce-catalog': 'off',
            'prefer-arrow/prefer-arrow-functions': [
                'error',
                {
                    disallowPrototype: true,
                    singleReturnOnly: false,
                    classPropertiesAllowed: false
                }
            ]
        }
    },
    {
        ignores: [
            'eslint.config.js',
            'prettier.config.js',
            'vite.config.ts',
            'dist/**'
        ]
    }
]);
