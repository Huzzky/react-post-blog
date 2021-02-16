import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { typeError } from '../../../const'
import { Link } from 'react-router-dom'
import { checkSignIn } from '../../../utils/checkSignIn'

const SignInPage = () => {
  const [errorSignIn, setErrorSignIn] = useState(null)
  const [password, setPassword] = useState('')

  const { register, handleSubmit, errors } = useForm()

  // @ send form on server
  const onSubmit = (data) => {
    checkSignIn(data, setErrorSignIn, errors)
  }

  return (
    <div>
      <div>
        <Link to="/">Главная</Link>
      </div>
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
          onChange={(event) => setPassword(event.currentTarget.value)}
          ref={register({ max: 64, maxLength: 64 })}
        />

        <input
          type="submit"
          disabled={password.length >= 8 ? null : 'disabled'}
        />
      </form>
      <div>
        <p>
          Нет аккаунта? <Link to="/sign-up">Зарегистрируйтесь!</Link>
        </p>
      </div>
    </div>
  )
}

export default SignInPage
