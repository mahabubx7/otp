/**
 * @type {Object} GenerateOtpArgs
 * @property {number} digits - Number of digits to generate
 * @property {boolean} alpha - Mix alpha-numeric [optional]
 * @property {boolean} capitalize - Capitalize result [dependsOn => alpha & optional]
 */

interface GenerateOtpArgsBase {
  digits?: number
  alpha?: false
  capitalize?: never
}

interface GenerateOtpArgsAlpha {
  digits?: number
  alpha: true
  capitalize?: boolean
}

export type GenerateOtpArgs = GenerateOtpArgsBase | GenerateOtpArgsAlpha
