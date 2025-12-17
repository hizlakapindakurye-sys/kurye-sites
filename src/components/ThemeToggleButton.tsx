"use client";

import { useTheme } from '@/components/ThemeProvider';
import SunIcon from '@/components/icons/SunIcon';
import MoonIcon from '@/components/icons/MoonIcon';
import { useEffect, useState } from 'react';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
  };

  const onAnimationEnd = () => {
    setIsAnimating(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <button
      onClick={handleToggle}
      className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
      onAnimationEnd={onAnimationEnd}
    >
      {theme === 'dark' ? (
        <SunIcon className={`w-6 h-6 text-yellow-400 ${isAnimating ? 'animate-[sun-moon-spin_1s_ease-in-out]' : ''}`} />
      ) : (
        <MoonIcon className={`w-6 h-6 text-gray-700 ${isAnimating ? 'animate-[sun-moon-spin_1s_ease-in-out]' : ''}`} />
      )}
    </button>
  );
};

export default ThemeToggleButton;
