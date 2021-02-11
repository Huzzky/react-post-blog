import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { typeError } from '../../../const'

const SignInPage = () => {
  const [errorSignIn, setErrorSignIn] = useState(null)
  // const [password, setPassword] = useState('')
  // const [confirmPass, setConfirmPass] = useState('')

  const { register, handleSubmit, errors } = useForm()

  // @ send form on server
  const onSubmit = (data) => {
    if (Object.keys(data) === 0) {
      console.log(errors)
    } else if (Object.keys(data).length > 0) {
      let regTest = /\s/g.test(data['Nickname'].trim())
      if (regTest === true) {
        console.error('Space in login')
        setErrorSignIn(typeError.loginSignInError)
      } else {
        console.log(data)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Nickname"
          name="Nickname"
          ref={register({
            required: true,
            max: 254,
            min: 2,
            maxLength: 254,
            pattern: /\w/i,
          })}
        />
        {errorSignIn === typeError.loginSignInError ? (
          <p>Ошибка в логине</p>
        ) : null}
      </div>
      <input
        type="password"
        placeholder="Password"
        name="Password"
        ref={register({ max: 64, maxLength: 64 })}
      />

      <input type="submit" />
    </form>
  )

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       <input
  //         type="text"
  //         placeholder="First Name"
  //         name="First Name"
  //         ref={register({
  //           required: true,
  //           maxLength: 200,
  //           pattern: {
  //             value: /[a-z]/gi,
  //             message: <p>error message</p>, // JS only: <p>error message</p> TS only support string
  //           },
  //         })}
  //       />
  //       <input
  //         type="text"
  //         placeholder="Last Name"
  //         name="Last Name"
  //         ref={register({ maxLength: 200, pattern: /[A-za-z]/ })}
  //       />
  //       <input
  //         type="text"
  //         placeholder="Nickname"
  //         name="Nickname"
  //         ref={register({ required: true, maxLength: 32, pattern: /[A-za-z]/ })}
  //       />
  //       <input
  //         type="email"
  //         placeholder="Email"
  //         name="Email"
  //         ref={register({ required: true })}
  //       />
  //       <input
  //         type="password"
  //         placeholder="Password"
  //         name="Password"
  //         onChange={(event) => {
  //           setPassword(event.currentTarget.value)
  //         }}
  //         ref={register({
  //           required: true,
  //           min: 8,
  //           minLength: {
  //             value: 8,
  //             message: 'error message',
  //           },
  //         })}
  //       />
  //       <input
  //         type="password"
  //         placeholder="Confirm password"
  //         name="Confirm password"
  //         onChange={(event) => {
  //           setConfirmPass(event.currentTarget.value)
  //         }}
  //         ref={register({
  //           required: true,
  //           validate: (value) => value === password,
  //           min: 8,
  //         })}
  //       />

  //       <input
  //         type="submit"
  //         disabled={
  //           password.length >= 8 &&
  //           confirmPass.length >= 8 &&
  //           password === confirmPass
  //             ? ''
  //             : 'disabled'
  //         }
  //       />
  //     </form>
  //   </div>
  // )
}

export default SignInPage
