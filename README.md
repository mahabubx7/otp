# OTP generator for JavaScript or TypeScript

> Welcome! This node package is built for generating OTP per necessary requirements. It can generate both numeric or alpha-numeric. Hope you will enjoy it!

## Getting started

**Install this package**

```bash
npm i @mx7/otp
```

or

```bash
yarn add @mx7/otp
```

or

```bash
pnpm add @mx7/otp
```

## How to use

**ESM imports**

```js
import { generateOtp } from '@mx7/otp'
```

**CommonJS**

```js
const { generateOtp } = require('@mx7/otp')
```

## Requirements

```yaml
Node: v14.x or later
Environments: ['^ Node14', 'DOM', 'ES5 or later']
Types: ['module', 'commonjs']
```

## Available APIs

**Types**

```ts
// how the function will operates
function generateOtp(args?: GenerateOtpArgs): string

// arguments with types
type GenerateOtpArgs = {
  digits?: number // optional
  alpha?: boolean // optional
  capitalize?: boolean // optional
}
```

**Some examples**

```ts
import { generateOtp } from '@mx7/otp'

// default => length 6
const otp1 = generateOtp()
console.log(otp1) // returns: '012345'

// custom length => i.e. 4
const otp2 = generateOtp({
  digits: 4,
})
console.log(otp2) // returns: '0123'

// mix alpha => mixed [a-z]
const otp2 = generateOtp({
  alpha: true,
})
console.log(otp2) // returns: '0x27j4'

// mix alpha & uppercase => mixed [A-Z]
const otp3 = generateOtp({
  alpha: true,
  capitalize: true,
})
console.log(otp3) // returns: '0X27J4'
```

## Author

@mahabubx7
[Github](https://github.com/mahabubx7)
