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

  const [isPending, setIsPending] = useState(false);

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

    setIsPending(true);
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
    } finally {
      setIsPending(false);
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
        <div className='pt-16'>
          <h1 className='text-5xl dark:text-white font-medium  text-center'>
            {' '}
            Create Links!{' '}
            <span className='font-normal underline decoration-dotted underline-offset-8 decoration-sky-500'>
              Shorten
            </span>
          </h1>
          <div className='w-full  my-16'>
            <form className='flex justify-center' onSubmit={handleSubmit}>
              <input
                className='w-full font-semibold  px-2 pl-5   text-sm peer bg-gray-50 border-gray-300 text-gray-500  focus:ring-blue-500 focus:border-blue-500  dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-200 dark:focus:ring-blue-500 dark:focus:border-blue-500  outline-none rounded-xl focus:ring-1 '
                type='text'
                name='url  '
                id='url'
                placeholder='Enter your url'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <div className='ml-4'>
                <SubmitButton value='Short it' />
              </div>
            </form>
            {error && <p>{error.response?.data.message}</p>}
            {isPending && <p>Loading...</p>}
          </div>
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
