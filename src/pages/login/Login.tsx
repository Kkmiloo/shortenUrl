import { Link } from 'react-router-dom';
import SubmitButton from '../../components/button/SubmitButton';

import PasswordInput from '../../components/inputs/PasswordInput';
import { Form, Formik, FormikValues } from 'formik';
import { LabelInput } from '../../components/inputs/LabelInput';
import { MdEmail } from 'react-icons/md';
import * as Yup from 'yup';

export default function Login() {
  const handleSubmit = (val: FormikValues) => {
    console.log(val);
  };
  return (
    <div className='flex  items-center h-screen'>
      <div className='flex items-center flex-col m-auto mt-52 p-10 w-96'>
        <div className='mb-4 text-left w-full ml-4 uppercase font-semibold'>
          <Link to={'/'}> Go back </Link>
        </div>
        <h1 className='mb-12  font-extrabold text-4xl text-black dark:text-white '>
          Log in <span className='text-sky-500 text-4xl'>. </span>
        </h1>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().required('Required'),
          })}
        >
          {() => (
            <Form className='mb-4'>
              <LabelInput
                name='email'
                label='email'
                iconComponent={<MdEmail />}
              />
              <PasswordInput label='password' name='password' />
              <SubmitButton value='Iniciar Sesión' />
            </Form>
          )}
        </Formik>
        <div>
          <Link to={'/register'} className='text-sky-500'>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
