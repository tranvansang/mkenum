## mkenum: make enum type in javascript

[![npm version](https://badge.fury.io/js/mkenum.svg)](https://badge.fury.io/js/mkenum)

## Install

Install via [npm package](https://www.npmjs.com/package/mkenum):

```bash
yarn add mkenum
```

## Usage

```typescript
import makeEnum, {type IEnum} from 'mkenum'
// or
const makeEnum = require('mkenum')

const Env = makeEnum('a', 'b', 'c') // type {a: 'a', b: 'b', c: 'c'}
const a = Env.a // type 'a'
type EnvEnum = IEnum<typeof Env> // type 'a' | 'b' | 'c'
```
