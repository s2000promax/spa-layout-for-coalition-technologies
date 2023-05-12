module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'import', 'react-hooks'],
  rules: {
    'react/jsx-indent': [2, 2, {
      indentLogicalExpressions: true,
    }],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always', {
      omitLastInOneLineBlock: true,
    }],
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', {
      ignoreComments: true,
      code: 120,
    }],
    '@typescript-eslint/naming-convention': ['error', {
      selector: 'variableLike',
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react/display-name': 'off',
    'no-shadow': 'off',
    'react/no-unknown-property': 'off',
  },
  globals: {
    _IS_DEV_: true,
    _API_: true,
    _PROJECT_: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [{
    files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    rules: {
      'max-len': 'off',
    },
  }],
};
