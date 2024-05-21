import { Link } from 'react-router-dom';
import SubmitButton from '../../components/button/SubmitButton';

import EmailInput from '../../components/inputs/EmailInput';
import PasswordInput from '../../components/inputs/PasswordInput';

export default function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
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
        <form
          className='flex flex-col gap-4  text-white '
          onSubmit={handleSubmit}
        >
          <EmailInput />
          <PasswordInput />
          <SubmitButton value='Iniciar Sesión' />
        </form>
      </div>
    </div>
  );
}
