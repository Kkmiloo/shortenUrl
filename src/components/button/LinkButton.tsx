import { Link } from 'react-router-dom';

interface Props {
  value: string;
  to: string;
}

export default function LinkButton({ value, to }: Props) {
  return (
    <div className='w-full relative'>
      <Link
        className='bg-sky-500 text-white p-3 px-6 rounded-xl  w-full hover:cursor-pointer font-semibold text-sm hover:bg-sky-600'
        to={to}
      >
        {value}
      </Link>
    </div>
  );
}
