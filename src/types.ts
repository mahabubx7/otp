/**
 * @type {Object} GenerateOtpArgs
 * @property {number} digits - Number of digits to generate
 * @property {boolean} alpha - Mix alpha-numeric
 * @property {boolean} capitalize - Capitalize alpha-numeric
 */
export type GenerateOtpArgs = {
  digits?: number
  alpha?: boolean
  capitalize?: boolean
}
