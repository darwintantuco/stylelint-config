# stylelint-config

My personal stylelint config

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
