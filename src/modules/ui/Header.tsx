import LinkButton from '../../components/button/LinkButton';
import { DarkMode } from '../../components/button/DarkMode';

export default function Header() {
  return (
    <div className='py-4 px-4 lg:px-0 '>
      <header className='w-full mx-auto md:max-w-7xl flex justify-between items-center'>
        <div className='flex'>
          <p className='font-bold'> Shorten </p>
          <nav className='gap-4 ml-8'></nav>
        </div>

        <div>
          <div className='flex gap-5 items-center'>
            <DarkMode />
            <LinkButton value='Login' to='/login' />
          </div>
        </div>
      </header>
    </div>
  );
}
