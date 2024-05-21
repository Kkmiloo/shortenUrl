const navItems = ['Users', 'Links', 'Pagos', 'Otros'];

export default function Dashboard() {
  return (
    <div className='flex'>
      <div className='w-64 p-2 border border-red-50 h-screen bg-zinc-900'>
        <h1 className='font-bold text-3xl'>Dashboard</h1>
        <nav className='mt-6'>
          <ul>
            {navItems.map((item) => (
              <li>
                <a
                  className='px-2 py-4 block rounded-lg border text-sm font-bold hover:bg-zinc-800 '
                  href=''
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='flex p-20'>
        <div className='border border-red-50'>
          <table>
            <tr>
              <th>hola</th>
              <th>hola</th>
              <th>hola</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
