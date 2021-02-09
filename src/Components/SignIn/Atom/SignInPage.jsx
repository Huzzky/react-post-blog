import { useForm } from 'react-hook-form'

const SignInPage = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => {
    console.log(Object.keys(errors).length > 0)
    if (Object.keys(errors)) {
      console.log(errors)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First Name"
          name="First Name"
          ref={register({ required: true, maxLength: 200 })}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="Last Name"
          ref={register({ maxLength: 200 })}
        />
        <input
          type="text"
          placeholder="Nickname"
          name="Nickname"
          ref={register({ required: true, maxLength: 32 })}
        />
        <input
          type="email"
          placeholder="Email"
          name="Email"
          ref={register({ required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          name="Password"
          ref={register({ required: true })}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="Confirm password"
          ref={register({ required: true })}
        />

        <input type="submit" />
      </form>
    </div>
  )
}

export default SignInPage
