import React from 'react';
import CopyInput from '../inputs/CopyInput';
import { ShortUrlResponse } from '../../interfaces/url.interface';

interface Props {
  url: ShortUrlResponse;
}

export const Card = ({ url }: Props) => {
  const fullUrl = `${window.location.href}${url.shortCode}`;
  return (
    <div className='py-4 p-3 rounded-lg  bg-zinc-800'>
      <h1 className='font-bold text-sky-500 mb-2'>Original Url</h1>
      <h2 className='mb-3'>{url.longUrl}</h2>

      <CopyInput valueToCopy={fullUrl} />
    </div>
  );
};
