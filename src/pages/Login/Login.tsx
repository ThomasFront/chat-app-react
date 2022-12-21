import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from '../../components/Form/Form'
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler } from 'react-hook-form/dist/types';
import { logInWithEmailAndPassword } from '../../firebase';

export const Login = () => {
  const navigate = useNavigate()

  type Inputs = {
    email: string,
    pass: string,
  };

  const schema = yup.object().shape({
    email: yup.string().email('email musi być poprawny').required('email jest wymagany'),
    pass: yup.string().min(6, 'hasło musi zawierać >6 znaków').max(20, 'hasło musi zawierać >20 znaków').required('hasło jest wymagane')
  })

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, pass } = data
    await logInWithEmailAndPassword(email, pass)
    navigate('/')
  }

  return (
    <Form>
      <h1>Zaloguj się</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder='email'
          {...register('email')}
        />
        <p>{errors?.email?.message}</p>
        <input
          type="password"
          placeholder='hasło'
          {...register('pass')}
        />
        <p>{errors?.pass?.message}</p>
        <button>Zaloguj</button>
      </form>
      <h4>Nie posiadasz konta? <button onClick={() => navigate('/register')}>Zarejestruj się!</button></h4>
    </Form>
  )
}
