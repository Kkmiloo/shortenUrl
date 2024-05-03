import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { host, port } from '../../../common/env.config';

export default function Redirect() {
  const { shortCode } = useParams();

  const redirectToUrl = async () => {
    try {
      const { data } = await axios.get(`${host}/api/shorten/${shortCode}`);
      window.location.href = `http://${data.longUrl}`;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    redirectToUrl();
  }, []);

  return <div></div>;
}
