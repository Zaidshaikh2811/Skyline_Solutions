import React, { useState } from 'react';
import { Menu, X, Monitor, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Monitor className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Skyline Solutions</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Services</a>
            <a href="#industries" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Industries</a>
            <a href="#case-studies" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Case Studies</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Contact Us</a>
            <button onClick={toggleDarkMode} className="p-2 rounded-md text-gray-700 dark:text-gray-300">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Services</a>
            <a href="#industries" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Industries</a>
            <a href="#case-studies" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Case Studies</a>
            <a href="#contact" className="block px-3 py-2 bg-blue-600 text-white rounded-md">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;