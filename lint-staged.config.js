module.exports = {
  '*.{ts,tsx}': ["echo '🤖 type checking...'", 'tsc-files --noEmit'],
  '*.{js,jsx,ts,tsx}': [
    "echo '🤖  Linting files....",
    'eslint --ext ts --ext tsx --ext js --ext jsx --fix --max-warnings=0'
  ],
  '*.{js,jsx,ts,tsx,md,css,scss,yaml,yml,json}': [
    "echo '🤖 formatting files...'",
    'prettier --config .prettierrc --write'
  ]
};
