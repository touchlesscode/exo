module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module", 
    ecmaFeatures: {
      jsx: true 
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  plugins: [
    "@typescript-eslint",
    "prettier",
    "react-hooks",
    "simple-import-sort",
    "import"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "plugin:security/recommended",
    "plugin:react-hooks/recommended"
  ],
  rules: {
    semi: ["error", "never", { "beforeStatementContinuationChars": "always" }],
    "no-console": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    'no-template-curly-in-string': "error",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true
        }
      }
    ],
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false
      }
    ],
    "prettier/prettier": "error"
  }
}