export default function Header() {
  return (
    <div className='py-4 px-4 lg:px-0 '>
      <header className='w-full mx-auto md:max-w-7xl flex justify-between items-center'>
        <div className='flex'>
          <p className=''> Logo</p>
          <nav className='gap-4 ml-8'>
            <a> Login</a>
          </nav>
        </div>
        <div>
          <div>
            <a className='py-2   px-4 border  rounded-lg bg-gray-50 text-slate-800 hover:cursor-pointer font-medium hover:bg-gray-200 transition text-sm '>
              Sign In
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
