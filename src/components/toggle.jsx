// App.jsx (Simplified Example)
import { useEffect, useState } from 'react';

function Toggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <button onClick={toggleTheme} style={{padding: '8px 16px', cursor: 'pointer'}}>Switch Theme</button>
  );
}

export default Toggle;
