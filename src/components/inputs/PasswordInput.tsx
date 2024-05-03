import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((s) => !s);
  };

  return (
    <div className='w-full relative group focus-within:shadow-lg focus-within:shadow-sky-950 rounded-md select-none'>
      <input
        type={showPassword ? 'text' : 'password'}
        id='password'
        required
        className='w-full font-semibold h-1 px-4 pr-12 pb-4 pt-9  text-sm peer  bg-zinc-700 outline-none rounded-xl focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
      />

      <label
        htmlFor='password'
        className='transform transition-all -translate-y-1 text-slate- text-slate-400 h-1/2 absolute top-0 left-0 flex items-center px-4 pt-3 text-xs  group-focus-within:text-sky-500'
      >
        Password
      </label>
      {showPassword ? (
        <MdVisibilityOff
          className='absolute top-4 right-3 mr-2 selection:select-none hover:cursor-pointer bg-slate'
          size={22}
          color='#FFF'
          onClick={toggleShowPassword}
        />
      ) : (
        <MdVisibility
          className='absolute top-4 right-3 mr-2 selection:select-none hover:cursor-pointer'
          size={22}
          color='#FFF'
          onClick={toggleShowPassword}
        />
      )}
    </div>
  );
}
