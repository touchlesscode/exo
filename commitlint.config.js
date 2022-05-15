/* eslint-disable unicorn/prefer-module */

/* 
 *  Types of commit:
  feat: Add a new feature to the codebase (MINOR in semantic versioning).
  fix: Fix a bug (equivalent to a PATCH in Semantic Versioning).
  docs: Documentation changes.
  style: Code style change (semicolon, indentation...).
  refactor: Refactor code without changing public API.
  perf: Update code performances.
  test: Add test to an existing feature.
  chore: Update something without impacting the user (ex: bump a dependency in package.json).

  *learn more about conventional commits
  https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
  https://www.conventionalcommits.org/en/v1.0.0/
  https://dev.to/alvarotorresc/conventional-commits-1an9#:~:text=Conventional%20Commits%20is%20a%20specification,automated%20tools%20on%20top%20of.
*/
module.exports = { extends: ['@commitlint/config-conventional'] }
