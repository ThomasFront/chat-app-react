import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { Form } from '../../components/Form/Form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerWithEmailAndPassword } from '../../firebase';
import { SubmitHandler } from 'react-hook-form/dist/types';

export const Register = () => {
  const navigate = useNavigate()

  type Inputs = {
    email: string,
    name: string,
    pass: string,
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, name, pass } = data
    await registerWithEmailAndPassword(name, email, pass)
    navigate('/')
  };

  const schema = yup.object().shape({
    email: yup.string().email('email musi być poprawny').required('email jest wymagany'),
    name: yup.string().required('pseudonim jest wymagany'),
    pass: yup.string().min(6, 'hasło musi zawierać >6 znaków').max(20, 'hasło musi zawierać >20 znaków').required('hasło jest wymagane')
  })

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  return (
    <Form>
      <h1>Zarejestruj się</h1>
      <form onSubmit={handleSubmit(onSubmit)}><input
        type="email"
        placeholder='email'
        {...register('email')}
      />
        <p>{errors?.email?.message}</p>
        <input
          type="text"
          placeholder='pseudonim'
          {...register('name')}
        />
        <p>{errors?.name?.message}</p>
        <input
          type="password"
          placeholder='hasło'
          {...register('pass')}
        />
        <p>{errors?.pass?.message}</p>
        <button>Zarejestruj</button>
      </form>
      <h4>Posiadasz już konto? <button onClick={() => navigate('/login')}>Zaloguj się!</button></h4>
    </Form>
  )
}
