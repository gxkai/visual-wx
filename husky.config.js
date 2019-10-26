module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'post-merge': 'post-npm-install',
    'post-rebase': 'post-npm-install',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
  }
}
