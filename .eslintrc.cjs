module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:import/errors',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.app.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'jsx-a11y', '@typescript-eslint', 'import'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/prop-types': 'off', // Since we're using TypeScript
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: {}, // this uses tsconfig.json
    },
  },
};
