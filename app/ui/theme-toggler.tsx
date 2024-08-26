'use client';
import { useState, useEffect } from 'react';
import { Button } from './button';

const ThemeToggler = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkTheme]);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <Button onClick={() => setDarkTheme(!darkTheme)}>Toggle Theme</Button>
    </div>
  );
};

export default ThemeToggler;
