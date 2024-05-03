interface Props {
  value: string;
}

export default function SubmitButton({ value }: Props) {
  return (
    <div className='w-full relative'>
      <input
        type='submit'
        value={value}
        className='bg-sky-500 text-white p-3 px-10 rounded-xl  w-full hover:cursor-pointer font-semibold text-sm hover:bg-sky-600'
      />
    </div>
  );
}
