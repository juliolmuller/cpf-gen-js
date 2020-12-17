# LacusSoft :: cpf-gen

![NPM Latest Version](https://img.shields.io/npm/v/@lacussoft/cpf-gen)
![Downloads Count](https://img.shields.io/npm/dm/@lacussoft/cpf-gen.svg)
![Bundle Size](https://packagephobia.now.sh/badge?p=@lacussoft/cpf-gen)
![Test Status](https://img.shields.io/travis/juliolmuller/cpf-gen/master.svg)
![Last Update Date](https://img.shields.io/github/last-commit/juliolmuller/cpf-gen)
![Project License](https://img.shields.io/github/license/juliolmuller/cpf-gen)

Basic function to generate valid CPF (Brazilian ID document).

## Installation

```bash
$ npm install @lacussoft/cpf-gen
```

## Import

```js
// ES Modules
import cpfGen from '@lacussoft/cpf-gen'

// Common JS
const cpfGen = require('@lacussoft/cpf-gen').default
```

or import it through your HTML file, using CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@lacussoft/cpf-gen@latest/dist/cpf-gen.min.js"></script>
```

## Usage

```js
let cpf = cpfGen()      // returns '47844241055'

cpf = cpfGen({          // returns '005.265.352-88'
  format: true
})

cpf = cpfGen({          // returns '52825091138'
  prefix: '528250911'
})

cpf = cpfGen({          // returns '528.250.911-38'
  prefix: '528250911'
  format: true
})
```

### Generator options

```js
cpfGen({
  format: false, // indicates if output should be formatted
  prefix: '',    // if you have a CPF initials and want to complete it with valid digits.
})               //     The string provided must contain between 0 and 9 digits!
```
