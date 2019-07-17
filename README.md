# stylelint-config
[![Build Status](https://travis-ci.org/dcrtantuco/stylelint-config.svg?branch=master)](https://travis-ci.org/dcrtantuco/stylelint-config)

My personal stylelint config

## Included Plugins
- stylelint-config-standard
- stylelint-rscss/config
- stylelint-8-point-grid
- stylelint-a11y

## Installation

### npm

```
npm install stylelint @dcrtantuco/stylelint-config --save-dev
```

### yarn

```
yarn add stylelint @dcrtantuco/stylelint-config --dev
```

## Usage

Update `.stylelintrc`

```js
// .stylelintrc
{
  "extends": [
    "@dcrtantuco/stylelint-config"
  ]
}
```

Or add stylelint config in `package.json`

```json
{
  "stylelint": { "extends": ["@dcrtantuco/stylelint-config"] },
  "scripts": {
    "lint:css": "stylelint 'css/**/*.{css,scss}'"
  }
}
```

## License

MIT
