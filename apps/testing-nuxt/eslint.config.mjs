import { createConfigForNuxt } from '@nuxt/eslint-config';
import baseConfig from '../../eslint.config.mjs';
import vue from 'eslint-plugin-vue';

export default createConfigForNuxt({})
  .prepend([
    ...baseConfig,
    ...vue.configs['flat/recommended'],
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.vue'],
      // Override or add rules here
      rules: {},
    },
    {
      ignores: ['.nuxt/**', '.output/**', 'node_modules'],
    },
  ])
  .append([
    {
      files: ['**/*.vue'],
      languageOptions: {
        parserOptions: {
          parser: await import('@typescript-eslint/parser'),
        },
      },
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ]);
