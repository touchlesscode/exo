module.exports = {
  '*.{ts,tsx}': ["echo '🤖 type checking...'", 'yarn type:staged'],
  '*.{js,jsx,ts,tsx}': [
    "echo '🤖  Linting files....",
    'yarn lint:staged --fix --max-warnings=0'
  ],
  '*.{js,jsx,ts,tsx,md,css,scss,yaml,yml,json}': [
    "echo '🤖 formatting files...'",
    'yarn prettier:staged'
  ]
};
