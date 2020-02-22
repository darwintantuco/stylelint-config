# stylelint-config
[![Build Status](https://travis-ci.org/darwintantuco/stylelint-config.svg?branch=master)](https://travis-ci.org/darwintantuco/stylelint-config)

My personal stylelint config

## Included Plugins
- stylelint-config-standard
- stylelint-rscss/config
- stylelint-8-point-grid
- stylelint-a11y

## Installation

### npm

```
npm install stylelint @darwintantuco/stylelint-config --save-dev
```

### yarn

```
yarn add stylelint @darwintantuco/stylelint-config --dev
```

## Usage

Update `.stylelintrc`

```js
// .stylelintrc
{
  "extends": [
    "@darwintantuco/stylelint-config"
  ]
}
```

Or add stylelint config in `package.json`

```json
{
  "stylelint": { "extends": ["@darwintantuco/stylelint-config"] },
  "scripts": {
    "lint:css": "stylelint 'css/**/*.{css,scss}'"
  }
}
```

## License

MIT
