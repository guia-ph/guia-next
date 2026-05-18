'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="relative flex items-center justify-center w-[3vw] h-[3vw] md:w-[8vw] md:h-[8vw] rounded-full bg-bg-2-light dark:bg-bg-2 border border-gray-1-light dark:border-gray-1">
        <div className="relative w-[1.5vw] h-[1.5vw] md:w-[4vw] md:h-[4vw]">
          <Moon className="w-full h-full text-text-1-light dark:text-text-1" />
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-[3vw] h-[3vw] md:w-[8vw] md:h-[8vw] rounded-full bg-bg-2-light dark:bg-bg-2 border border-gray-1-light dark:border-gray-1 hover:border-primary-light dark:hover:border-primary transition-all duration-300"
      aria-label="Toggle theme"
    >
      <div className="relative w-[1.5vw] h-[1.5vw] md:w-[4vw] md:h-[4vw]">
        <Sun
          className={`absolute inset-0 w-full h-full text-text-1-light dark:text-text-1 transition-all duration-300 ${
            theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
          }`}
        />
        <Moon
          className={`absolute inset-0 w-full h-full text-text-1-light dark:text-text-1 transition-all duration-300 ${
            theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
          }`}
        />
      </div>
    </button>
  );
}
