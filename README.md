# LacusSoft :: cpf-gen

[![npm version](https://img.shields.io/npm/v/@lacussoft/cpf-gen.svg?style=flat-square)](https://www.npmjs.org/package/@lacussoft/cpf-gen)
[![install size](https://packagephobia.now.sh/badge?p=@lacussoft/cpf-gen)](https://packagephobia.now.sh/result?p=@lacussoft/cpf-gen)
[![npm downloads](https://img.shields.io/npm/dm/@lacussoft/cpf-gen.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@lacussoft/cpf-gen)
[![build status](https://img.shields.io/travis/lacussoft/cpf-gen/master.svg?style=flat-square)](https://travis-ci.org/lacussoft/cpf-gen)

Basic function to generate valid CPF (Brazilian ID document).

### Installation:

```bash
$ npm install @lacussoft/cpf-gen
```

### Import:

```js
// ES6+ notation
import cpfGen from '@lacussoft/cpf-gen'

// Common JS
const cpfGen = require('@lacussoft/cpf-gen')
```

or import it through your HTML file, using CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@lacussoft/cpf-gen@latest/dist/cpf-gen.min.js"></script>
```

### Usage:

```js
const cpf = cpfGen()  // '47844241055'

const cpf = cpfGen({  // '005.265.352-88'
  format: true
})
```
