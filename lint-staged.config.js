module.exports = {
  linters: {
    '*.vue': ['npm run lint:style', 'npm run lint:js', 'git add'],
    '*.js': ['npm run lint:js', 'git add'],
    '*.{css,scss}': ['npm run lint:style', 'git add'],
    '*.{md,json}': ['prettier --write', 'git add']
  },
  ignore: ['dist/**', 'package-lock.json']
}
