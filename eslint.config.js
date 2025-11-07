const eslint = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');
const prettierPlugin = require('eslint-plugin-prettier');
const unusedImportsPlugin = require('eslint-plugin-unused-imports');
const simpleImportSortPlugin = require('eslint-plugin-simple-import-sort');
const importPlugin = require('eslint-plugin-import');
const jsonPlugin = require('eslint-plugin-json');
const yamlPlugin = require('eslint-plugin-yaml');
const prettierConfig = require('eslint-config-prettier');
const globals = require('globals');

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

module.exports = [
  // Global ignores
  {
    ignores: [
      'node_modules/**',
      '.pnp/**',
      '.pnp.js',
      'coverage/**',
      'build/**',
      'dist/**',
      '.DS_Store',
      '.env.local',
      '.env.development.local',
      '.env.test.local',
      '.env.production.local',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'eslint.config.js',
      '.eslintrc.js',
      '**/*.json',
      '**/*.yml',
      '**/*.yaml',
    ],
  },

  // Base config for all files
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.jest,
        React: 'readonly',
        JSX: 'readonly',
      },
    },
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
      '@typescript-eslint': tseslint,
      'unused-imports': unusedImportsPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      import: importPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
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

  // JSON files
  {
    files: ['**/*.json'],
    plugins: {
      json: jsonPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'json/*': ['error', 'allowComments'],
      'prettier/prettier': ['warn', { parser: 'json' }],
    },
  },

  // YAML files
  {
    files: ['**/*.yaml', '**/*.yml'],
    plugins: {
      yaml: yamlPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...yamlPlugin.configs.recommended.rules,
      'prettier/prettier': ['warn', { parser: 'yaml' }],
    },
  },
];
