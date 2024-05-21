import { MdEmail } from 'react-icons/md';

export default function EmailInput() {
  return (
    <div className='w-full relative group dark:focus-within:shadow-lg dark:focus-within:shadow-sky-950 rounded-xl select-none '>
      <MdEmail
        className='absolute top-4 right-3 mr-2'
        color='rgb(148 163 184) '
        size={22}
      />
      <input
        type='text'
        id='username'
        required
        className='w-full font-semibold h-1 px-4 pr-12 pb-5 pt-9  text-sm peer bg-gray-50 border-gray-300 text-gray-500  focus:ring-blue-500 focus:border-blue-500  dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-200 dark:focus:ring-blue-500 dark:focus:border-blue-500  outline-none rounded-xl focus:ring-1 '
      />

      <label
        htmlFor='username'
        className='transform transition-all -translate-y-1  text-slate-400 h-1/2 absolute top-0 left-0 flex items-center px-4 pt-3 text-xs  group-focus-within:text-sky-500'
      >
        Email
      </label>
    </div>
  );
}
