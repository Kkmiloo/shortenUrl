import { useField } from 'formik';
import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export default function PasswordInput({ label, ...props }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const [field, metadata] = useField(props);

  const toggleShowPassword = () => {
    setShowPassword((s) => !s);
  };

  return (
    <div className={` ${metadata.touched && metadata.error ? '' : 'mb-9'}`}>
      <div className='w-full relative group dark:focus-within:shadow-lg dark:focus-within:shadow-sky-950 rounded-xl select-none'>
        <label
          htmlFor={props.id || props.name}
          className={`${
            metadata.touched && metadata.error && 'text-red-400 '
          } capitalize transform transition-all -translate-y-1 text-slate- text-slate-400 h-1/2 absolute top-0 left-0 flex items-center px-4 pt-3 text-xs  group-focus-within:text-sky-500`}
        >
          {label}
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          {...field}
          {...props}
          className={`${
            metadata.touched && metadata.error ? 'ring-red-400 ring-2' : ''
          } w-full font-semibold h-[2px] px-4 pr-12 pb-4 pt-8  text-sm peer  outline-none rounded-xl bg-gray-50 border-gray-300 text-gray-500  focus:ring-blue-500 focus:border-blue-500  dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-1 `}
        />
        {showPassword ? (
          <MdVisibilityOff
            className='absolute right-3  p-1  end-2 top-1/2 -translate-y-1/2 selection:select-none hover:cursor-pointer hover:bg-gray-400 rounded-lg dark:hover:bg-gray-800'
            size={30}
            color='#94A3B8'
            onClick={toggleShowPassword}
          />
        ) : (
          <MdVisibility
            className='absolute right-3  p-1  end-2 top-1/2 -translate-y-1/2 selection:select-none hover:cursor-pointer hover:bg-gray-400   rounded-lg dark:hover:bg-gray-800'
            size={30}
            color='#94A3B8'
            onClick={toggleShowPassword}
          />
        )}
      </div>
      <div className='mb-3'>
        {metadata.touched && metadata.error && (
          <span className='pl-2 font-medium text-xs text-red-400'>
            {metadata.error}
          </span>
        )}
      </div>
    </div>
  );
}
