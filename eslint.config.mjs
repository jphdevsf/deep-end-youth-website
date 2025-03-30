import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.browser } },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: { ...globals.node } }, // Add Node.js globals
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      indent: ['error', 2],         // Enforce 2 spaces for indentation
      quotes: ['error', 'single'], // Enforce single quotes
      semi: ['error', 'never']     // Disallow extraneous semicolons
    },
  },
  {
    files: ['**/*.babel.js'], // Target .babel.js files
    languageOptions: { sourceType: 'module' }, // Specify ES module support (if needed)
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'never']
    },
  }
])
