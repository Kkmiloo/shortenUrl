import { useEffect, useState } from 'react';

import RootLayout from './layouts/RootLayout';
import axios from 'axios';

function App() {
  const [urlShorter, setUrlShorter] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const postData = { longUrl: url };

    const { data } = await axios.post(
      'http://localhost:3000/api/shorten',
      postData
    );

    setUrl('');
    setUrlShorter(`http://localhost:5173/${data.shortCode}`);
    console.log(url);
  };

  const redirectToUrl = async (shortCode: string) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/shorten/${shortCode}`
      );
      window.location.href = `http://${data.longUrl}`;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // La respuesta fue hecha y el servidor respondió con un código de estado
          // que esta fuera del rango de 2xx
          console.log(error.response.data);
          console.log(error.response.status);
        } else if (error.request) {
          // La petición fue hecha pero no se recibió respuesta
          // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
          // http.ClientRequest en node.js
          console.log(error.request);
        } else {
          // Algo paso al preparar la petición que lanzo un Error
          console.log('Error', error.message);
        }
      }
    }
  };

  useEffect(() => {
    const pathName = window.location.pathname;
    const shortCode = pathName.slice(1);
    console.log(shortCode);

    if (shortCode.length > 1) redirectToUrl(shortCode);
  }, []);

  return (
    <RootLayout>
      <div className='max-w-7xl m-auto flex justify-center  flex-col'>
        <div className='w-full mt-52 mb-16'>
          <form className='flex justify-center' onSubmit={handleSubmit}>
            <input
              className='text-slate-800 max-w-5xl w-full py-3 px-5 rounded-md'
              type='text'
              name='url  '
              id='url'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <input
              className='ml-4 p-2 px-4 bg-white rounded-md min-w-20 hover:bg-slate-100 hover:cursor-pointer text-black transition-all'
              type='submit'
              value='Short It'
            />
          </form>
        </div>
        <div>
          <p>{urlShorter} </p>
        </div>
      </div>
    </RootLayout>
  );
}

export default App;
