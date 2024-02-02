# OTP generator for NodeJS runtime apps (JavaScript or TypeScript)

> Welcome! This node package is built for generating OTP per necessary requirements. It can generate both numeric or alpha-numeric. Hope you will enjoy it!

**It can be used with NodeJS runtime and Deno/Bun too! (I guess)**

## Getting started

**Install this package**

```bash
npm i @mx7/otp # using NPM
# or
yarn add @mx7/top # using yarn
# or
pnpm add @mx7/otp # using pnpm
# or
bun add otp  # using bun
```

## How to use

**ESM imports**

```js
import { generateOtp } from '@mx7/otp'
// or async way
import { generateOtpAsync } from '@mx7/otp'
```

**CommonJS**

```js
const { generateOtp } = require('@mx7/otp')
// or async way
const { generateOtpAsync } = require('@mx7/otp')
```

## Requirements

```yaml
Node: v14.x or later
Environments: ['^ Node14', 'ES5 or later']
Types: ['ESM', 'CJS']
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
  capitalize?: boolean // optional, but only if alpha is set TRUE!
}
```

**Some examples**

```ts
import { generateOtp } from '@mx7/otp'

// default => length 6
const otp1 = generateOtp()
console.log(otp1) // returns: '012345'

// default with Async. way => length 6
const otpAsync = await generateOtpAsync() // Promise<string>
console.log(otpAsync) // returns: '012345'

// custom length => i.e. 4
const otp2 = generateOtp({
  digits: 4,
})
console.log(otp2) // returns: '0123'

// mix alpha => mixed [a-z]
const otp3 = generateOtp({
  alpha: true,
})
console.log(otp3) // returns: '0x27j4'

// mix alpha & uppercase => mixed [A-Z]
const otp4 = generateOtp({
  alpha: true,
  capitalize: true,
})
console.log(otp4) // returns: '0X27J4'
```

## Author

[@mahabubx7](https://github.com/mahabubx7)

## Changelogs

### [1.2.1] 2024-02-02

#### Fixes

- Fixed async OTP generator function
- Added one more test with async fn

### [1.2.0] - 2024-01-25

#### Feature

- Added `Asynchronous` function for generating OTP
- Added Module path aliases
- Added changelogs
- Updated documentation in README file

#### Fixed

- Fixed some typos
- Fixed npm files selection
