import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { host } from '../../common/env.config';

export default function Redirect() {
  const { shortCode } = useParams();

  const redirectToUrl = async () => {
    try {
      const { data } = await axios.get(`${host}/api/shorten/${shortCode}`);
      window.location.href =
        data.longUrl.startsWith('http://') ||
        data.longUrl.startsWith('https://')
          ? data.longUrl
          : `http://${data.longUrl}`;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    redirectToUrl();
  }, []);

  return <div></div>;
}
