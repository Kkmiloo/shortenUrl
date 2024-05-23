import { useField } from 'formik';
import { cloneElement } from 'react';

interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email';
  iconComponent?: JSX.Element;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  [x: string]: any;
}

export const LabelInput = ({ label, iconComponent, ...props }: Props) => {
  let iconClone;

  if (iconComponent) {
    iconClone = cloneElement(iconComponent!, {
      className:
        'absolute right-3  p-1  end-2 top-1/2 -translate-y-1/2 selection:select-none  rounded-lg ',
      size: 30,
      color: 'rgb(148 163 184)',
    });
  }

  const [field, metadata] = useField(props);
  return (
    <div className={` ${metadata.touched && metadata.error ? '' : 'mb-9'}`}>
      <div className='w-full relative group dark:focus-within:shadow-lg dark:focus-within:shadow-sky-950 rounded-xl select-none '>
        {iconClone ? iconClone : null}
        <input
          type={props.type}
          {...field}
          {...props}
          className={`${
            metadata.touched && metadata.error ? 'ring-red-400 ring-2' : ''
          } w-full font-semibold h-[2px] px-4 pr-12 pb-4 pt-8  text-sm peer  outline-none rounded-xl bg-gray-50 border-gray-300 text-gray-500  focus:ring-blue-500 focus:border-blue-500  dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-1 `}
        />
        <label
          htmlFor={props.id || props.name}
          className={`${
            metadata.touched && metadata.error && 'text-red-400 '
          } capitalize transform transition-all -translate-y-1 text-slate- text-slate-400 h-1/2 absolute top-0 left-0 flex items-center px-4 pt-3 text-xs  group-focus-within:text-sky-500`}
        >
          {label}
        </label>
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
};
