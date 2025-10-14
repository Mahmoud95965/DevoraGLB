import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Github, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { currentUser } = useAuth();
  const location = useLocation();

  const navigation = [
    { key: 'portfolio', label: 'مشاريعنا', href: '/portfolio' },
    { key: 'about', label: 'من نحن', href: '/about' },
    { key: 'contact', label: 'تواصل معنا', href: '/contact' },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
              <Github className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              DevoraGLB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`text-base font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  location.pathname === item.href
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {currentUser?.email === 'mahmoud@gmail.com' && (
              <Link
                to="/admin/projects"
                className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Settings className="w-4 h-4" />
                <span>لوحة التحكم</span>
              </Link>
            )}
          </nav>

          {/* Settings */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* Contact CTA Button */}
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 rtl:space-x-reverse"
            >
              <span className="hidden sm:inline">اطلب موقعك</span>
              <span className="sm:hidden">تواصل</span>
            </Link>

            {/* Theme Switch */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
