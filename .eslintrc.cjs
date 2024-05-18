module.exports = {
  root: true,
  env: {
    jest: true
  },
  ignorePatterns: [
    "**/_tests_/*",
    "**/__tests__/*",
    "*.test.*"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      "jsx": true
    },
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: '.',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.web.json'],
  },
  plugins: [
    "react",
    "@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": 'off',
    "@typescript-eslint/ban-types": 'off',
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    'import/prefer-default-export': 'off',
    "no-case-declarations": "off",
    'import/no-extraneous-dependencies': 'off',
    "no-prototype-builtins": "off",
    "no-useless-escape": "off",
    "react/display-name": "off",
    "react/jsx-no-undef": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 125,
      },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ]
}
