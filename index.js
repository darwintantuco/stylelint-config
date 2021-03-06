module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-rscss/config',
    'stylelint-8-point-grid',
    'stylelint-a11y/recommended',
  ],
  rules: {
    'plugin/8-point-grid': {
      base: 8,
      whitelist: ['4px', '2px', '1px'],
    },
    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': null,
  },
}
