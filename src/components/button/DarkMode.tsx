import { useState } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

export const DarkMode = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
  };
  return (
    <button
      className='rounded  dark:hover:bg-gray-700 hover:bg-gray-300 p-3'
      onClick={() => darkModeHandler()}
    >
      {
        dark && <IoSunny /> // render sunny when dark is true
      }
      {
        !dark && <IoMoon /> // render moon when dark is false
      }
    </button>
  );
};
