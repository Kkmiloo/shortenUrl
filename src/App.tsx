import { useEffect, useState } from 'react';

import RootLayout from './layouts/RootLayout';
import axios, { AxiosError } from 'axios';
import SubmitButton from './components/button/SubmitButton';
import { host } from './common/env.config';
import { Card } from './components/card/Card';
import {
  CreateShortUrlRequest,
  ShortUrlResponse,
} from './interfaces/url.interface';

function App() {
  const [urlShorter, setUrlShorter] = useState<ShortUrlResponse[]>([]);
  const [url, setUrl] = useState('');

  const [error, setError] = useState<AxiosError<any, any>>();

  const handleError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // La respuesta fue hecha y el servidor respondió con un código de estado
        // que esta fuera del rango de 2xx
        console.log(error.response.data);
        console.log(error.response.status);

        setError(error);
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
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const postData: CreateShortUrlRequest = { longUrl: url };
      const { data } = await axios.post<ShortUrlResponse>(
        `${host}/api/shorten`,
        postData
      );
      console.log(data);

      setUrlShorter((oldUrl) => [...oldUrl, data]);
      setUrl('');
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    //save urlShorter to local storage
    if (!urlShorter || urlShorter.length == 0) return;

    localStorage.setItem('urlShorter', JSON.stringify(urlShorter));
  }, [urlShorter]);

  useEffect(() => {
    //get urlShorter from local storage
    const storedUrlShorter = localStorage.getItem('urlShorter');

    if (storedUrlShorter) {
      setUrlShorter(JSON.parse(storedUrlShorter));
    }
  }, []);

  return (
    <RootLayout>
      <div className='max-w-6xl m-auto flex justify-center  flex-col'>
        <div className='w-full mt-52 mb-16'>
          {error && <p>{error.response?.data.message}</p>}
          <form className='flex justify-center' onSubmit={handleSubmit}>
            <input
              className='w-full font-semibold  px-4 pr-12   text-sm peer  bg-zinc-700 outline-none rounded-xl focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              type='text'
              name='url  '
              id='url'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <div className='ml-4'>
              <SubmitButton value='Short it' />
            </div>
          </form>
        </div>
        <div>
          <div className='grid grid-cols-4 gap-3'>
            {urlShorter?.map((url) => (
              <Card key={url.id} url={url} />
            ))}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}

export default App;
