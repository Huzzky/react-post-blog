import { typeError } from '../const'

export const checkSignIn = (data, setErrorSignIn, errors) => {
  if (Object.keys(data) === 0) {
    console.log(errors)
  } else if (Object.keys(data).length > 0) {
    let regTest = /\s/g.test(data['Nickname'].trim())
    if (regTest === true) {
      console.error('Space in login')
      setErrorSignIn(typeError.loginSignInError)
    } else {
      console.log(data)
      setErrorSignIn(null)
    }
  }
}
