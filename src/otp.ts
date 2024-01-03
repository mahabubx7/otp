import { GenerateOtpArgs } from './types'

/**
 * Generate OTP function
 * @param args GenerateOtpArgs
 * @returns string
 */
export function generateOtp(args: GenerateOtpArgs = {}): string {
  if (!args.digits) {
    args.digits = 6 // default value i.e. '071234'
  }

  if (!args.alpha) {
    args.alpha = false // mix alpha-numeric
  }

  if (!args.capitalize) {
    args.capitalize = false // capitalize alpha-numeric
  }

  if (args.digits < 4 || args.digits > 32) {
    // throw error if digits is less than 4 or greater than 32
    throw new Error('Digits must be between 4 and 32')
  }

  let otp = '' // initialize otp as string

  if (args.alpha) {
    /* Alpha Numeric */
    const alphaNumeric = '0123456789abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < args.digits; i++) {
      const random = Math.floor(Math.random() * 36)
      otp += args.capitalize
        ? alphaNumeric[random].toUpperCase()
        : alphaNumeric[random]
    }
  } else {
    /* Numeric only : Default */
    for (let i = 0; i < args.digits; i++) {
      const random = Math.floor(Math.random() * 10)
      otp += random
    }
  }

  return otp
}
