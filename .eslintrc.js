module.exports = {
  root: true,
  env: { browser: true, es6: true, node: true },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['import'],
  ignorePatterns: ['node_modules', 'public', '**/*.css.d.ts'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript', // this line does the trick
        'plugin:react/recommended',
      ],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json',
      },
      rules: {
        'import/order': 'error',
        'no-undef': 'off',
        'react/jsx-uses-react': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
};
