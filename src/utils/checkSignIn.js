const typeError = require('../const')

const checkSignIn = (data, setErrorSignIn) => {
  if (Object.keys(data) === 0) {
    return false
  } else if (Object.keys(data).length > 0) {
    let regTest = /\s/g.test(data.Nickname.trim())

    if (regTest === true) {
      setErrorSignIn(typeError.loginSignInError)
      return false
    } else {
      let regTest = /\w/gi.test(data.Nickname)

      if (regTest === true) {
        setErrorSignIn(null)
        return true
      } else {
        return false
      }
    }
  }
}

module.exports = {
  checkSignIn,
}
