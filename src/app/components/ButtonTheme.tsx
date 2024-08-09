import { useTheme } from 'next-themes';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';

const ButtonTheme = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={() => toggleTheme}>
      {theme === 'light' ? <MdOutlineLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default ButtonTheme;
