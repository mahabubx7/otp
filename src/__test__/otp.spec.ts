import { generateOtp, generateOtpAsync } from '../otp'

describe('OTP tests ...', () => {
  test('should return an OTP', () => {
    const otp = generateOtp()
    expect(typeof otp).toBe('string')
    expect(otp.length).toBe(6)
    expect(otp).toMatch(/^[0-9]{6}$/)
  })

  test('should return an OTP asynchronously', async () => {
    const otp = await generateOtpAsync()
    expect(typeof otp).toBe('string')
    expect(otp.length).toBe(6)
    expect(otp).toMatch(/^[0-9]{6}$/)
  })

  test('should return an OTP with 4 digits', () => {
    const otp = generateOtp({ digits: 4 })
    expect(typeof otp).toBe('string')
    expect(otp.length).toBe(4)
    expect(otp).toMatch(/^[0-9]{4}$/)
  })

  test('should return an OTP with 8 digits', () => {
    const otp = generateOtp({ digits: 8 })
    expect(typeof otp).toBe('string')
    expect(otp.length).toBe(8)
    expect(otp).toMatch(/^[0-9]{8}$/)
  })

  test('should return an OTP with 6 digits and alpha-numeric', () => {
    const otp = generateOtp({ alpha: true })
    expect(typeof otp).toBe('string')
    expect(otp.length).toBe(6)
    expect(otp).toMatch(/^[0-9a-zA-Z]{6}$/)
  })

  test('should return an OTP with alpha-numeric & uppercase', () => {
    const otp = generateOtp({ alpha: true, capitalize: true })
    expect(typeof otp).toBe('string')
    expect(otp.length).toBe(6)
    expect(otp).toMatch(/^[0-9A-Z]{6}$/)
  })

  test('should return an OTP with alpha-numeric & lowercase', () => {
    const otp = generateOtp({ alpha: true, capitalize: false })
    expect(typeof otp).toBe('string')
    expect(otp.length).toBe(6)
    expect(otp).toMatch(/^[0-9a-z]{6}$/)
  })

  test('should throw error if digits is less than 4', () => {
    expect(() => generateOtp({ digits: 3 })).toThrow(
      'Digits must be between 4 and 32',
    )
  })

  test('should throw error if digits is greater than 32', () => {
    expect(() => generateOtp({ digits: 33 })).toThrow(
      'Digits must be between 4 and 32',
    )
  })
})
