# stylelint-config

![Node.js CI](https://github.com/darwintantuco/stylelint-config/workflows/Node.js%20CI/badge.svg)

My personal stylelint config

## Dependencies

- stylelint
- stylelint-config-standard
- stylelint-rscss/config
- stylelint-8-point-grid
- stylelint-a11y

## Installation

### npm

```
npm install @darwintantuco/stylelint-config --save-dev
```

### yarn

```
yarn add @darwintantuco/stylelint-config --dev
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
