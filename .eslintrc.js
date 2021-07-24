const packages = [];
const paths = [];
const imgExtensions = ['png', 'jpg', 'jpeg', 'svg', 'css'];

const imgExtensionRegex = `\\.(${imgExtensions.join('|')})$`;
const imageRegex = `(.+${imgExtensionRegex})`;
const packageRegex = `(${packages.join('|')})\\/.+`;
const pathsRegex = `(${paths.join('|')})\\/.+`;
const relativeRegex = '(\\.)+\\/';

const allRegex = `(${[packageRegex, relativeRegex, packageRegex, imageRegex]
    .map(r => `(${r})`)
    .join('|')})`;

module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
        jest: true,
    },
    plugins: [
        'react',
        'prettier',
        '@typescript-eslint',
        'unused-imports',
        'simple-import-sort',
        'import',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['*.gql'],
            parser: '@graphql-eslint/eslint-plugin',
            plugins: ['@graphql-eslint'],
            rules: {
                'prettier/prettier': ['warn', { parser: 'graphql' }],
            },
        },
        {
            files: ['*.json'],
            extends: ['plugin:json/recommended'],
            plugins: ['json'],
            rules: {
                'json/*': ['error', 'allowComments'],
                'prettier/prettier': ['warn', { parser: 'json' }],
            },
        },
        {
            files: ['*.yaml', '*.yml'],
            extends: ['plugin:yaml/recommended'],
            plugins: ['yaml'],
            rules: {
                'prettier/prettier': ['warn', { parser: 'yaml' }],
            },
        },
        {
            files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 12,
                sourceType: 'module',
                project: './tsconfig.json',
            },
            extends: [
                'eslint:recommended',
                'plugin:react/recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:prettier/recommended',
            ],
            rules: {
                '@typescript-eslint/no-floating-promises': 'error',
                indent: 'off',
                'linebreak-style': ['warn', require('os').EOL === '\r\n' ? 'windows' : 'unix'],
                quotes: 'off',
                semi: ['warn', 'always'],
                'prettier/prettier': 'warn',
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                'no-empty-pattern': 'off',
                'typescript/no-type-alias': 'off',
                '@typescript-eslint/no-empty-interface': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/no-non-null-assertion': 'off',
                '@typescript-eslint/ban-types': 'off',
                'react/prop-types': 'off',
                'react/react-in-jsx-scope': 'off',
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/no-var-requires': 'off',
                'react/no-unescaped-entities': 'off',
                'no-case-declarations': 'off',
                'unused-imports/no-unused-imports': 'warn',
                'import/newline-after-import': 'warn',
                'simple-import-sort/imports': [
                    'warn',
                    {
                        groups: [
                            [`^(?!${allRegex})`],
                            [`^${packageRegex}(?<!(${imgExtensionRegex}))`],
                            [`^((${relativeRegex})|(${pathsRegex}))(?<!(${imgExtensionRegex}))`],
                            [`^${imageRegex}`],
                        ],
                    },
                ],
                'sort-imports': 'off',
                'import/order': 'off',
                'react/display-name': 'off',
                'no-constant-condition': 'off',
                '@typescript-eslint/no-misused-promises': 'error',
                '@typescript-eslint/no-unnecessary-condition': 'warn',
                'no-fallthrough': 'error',
            },
        },
    ],
    rules: {},
};
