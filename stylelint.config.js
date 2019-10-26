// https://stylelint.io/user-guide/configuration/#loading-the-configuration-object

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
  rules: {
    'no-empty-source': null,
    'scss/at-rule-no-unknown': [true]
  }
}
