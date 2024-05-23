import { Link } from 'react-router-dom';
import SubmitButton from '../../components/button/SubmitButton';

import PasswordInput from '../../components/inputs/PasswordInput';
import { Form, Formik, FormikValues } from 'formik';
import { LabelInput } from '../../components/inputs/LabelInput';
import * as Yup from 'yup';

export default function SignUp() {
  const handleSubmit = (values: FormikValues) => {
    console.log(values);
  };

  return (
    <div className='flex  items-center h-screen'>
      <div className='flex items-center flex-col m-auto mt-52 p-10 w-96'>
        <div className='mb-4 text-left w-full ml-4 uppercase font-semibold'>
          <Link to={'/'}> Go back </Link>
        </div>
        <h1 className='mb-12  font-extrabold text-4xl text-black dark:text-white '>
          Register <span className='text-sky-500 text-4xl'>. </span>
        </h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
            repeatPassword: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email').required('Required'),
            repeatPassword: Yup.string().required('Required'),
            password: Yup.string().oneOf(
              [Yup.ref('repeatPassword')],
              'Passwords must match'
            ),
          })}
        >
          {() => (
            <Form>
              <LabelInput label='email' name='email' />
              <PasswordInput label='password' name='password' />
              <PasswordInput label='repeat password' name='repeatPassword' />
              <SubmitButton value='Register' />
            </Form>
          )}
        </Formik>

        <form
          className='flex flex-col gap-4  text-white '
          onSubmit={handleSubmit}
        ></form>
      </div>
    </div>
  );
}
