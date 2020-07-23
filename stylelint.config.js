module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'no-descending-specificity': null,
    'comment-whitespace-inside': null,
    'no-duplicate-selectors': null,
    'declaration-empty-line-before': null,
    'color-hex-length': null,
    'length-zero-no-unit': null,
    'declaration-block-no-duplicate-properties': null,
    'selector-pseudo-element-colon-notation': null,
    'media-feature-colon-space-after': null,
    'block-no-empty': null,
    'comment-empty-line-before': null,
    'selector-attribute-quotes': null,
  },
}
