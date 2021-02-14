// const { checkSignIn } = require('../utils/checkSignIn')
import { checkSignIn } from '../utils/checkSignIn'

const dataNormal = {
  Nickname: 'fadsfads',
  Password: '12345678123',
}

const dataWithProblem = {
  Nickname: 'fads fads',
  Password: '12345678',
}

const dataWithProblemOtherLang = {
  Nickname: 'фрыпидфло',
  Password: '12345678',
}

const setErrorSignIn = (a) => {
  return 0
}

describe('Login', () => {
  test('check login with normal login', () => {
    expect(checkSignIn(dataNormal, setErrorSignIn)).toBeTruthy()
  })

  test('check login with problem login', () => {
    expect(checkSignIn(dataWithProblem, setErrorSignIn)).toBeFalsy()
  })

  test('check login with problem login(non eng lang)', () => {
    expect(checkSignIn(dataWithProblemOtherLang, setErrorSignIn)).toBeFalsy()
  })
})
