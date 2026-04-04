// src/components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BuildingIcon,
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  WrenchIcon,
  BookIcon,
  MailIcon,
  MenuIcon,
  CloseIcon
} from '../components/CivilIcons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'About', path: '/about', icon: UserIcon },
    { name: 'Experience', path: '/experience', icon: BriefcaseIcon },
    { name: 'Projects', path: '/projects', icon: WrenchIcon },
    { name: 'Research', path: '/research', icon: BookIcon },
    { name: 'Contact', path: '/contact', icon: MailIcon }
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 shadow-[0_1px_4px_rgba(30,58,95,0.06),0_4px_16px_rgba(30,58,95,0.04)] border-b border-white/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="icon-gradient flex items-center justify-center w-10 h-10 rounded-xl text-white transition-transform duration-300 group-hover:scale-105">
              <BuildingIcon className="h-5 w-5" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-black tracking-tight text-civil-700">
                RR
              </span>
              <span className="hidden sm:inline text-base font-semibold text-civil-500">
                Raghavendra R.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActivePath(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-base font-semibold transition-all duration-200
                    ${active
                      ? 'text-civil-500 bg-civil-50 shadow-sm'
                      : 'text-civil-600 hover:text-civil-500 hover:bg-civil-50'
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-civil-600 hover:text-civil-500 hover:bg-civil-50 focus:outline-none focus:ring-2 focus:ring-civil-500 transition-all duration-200"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 pb-4">
            <div className="pt-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActivePath(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-lg font-semibold transition-all duration-200
                      ${active
                        ? 'text-civil-500 bg-civil-50'
                        : 'text-civil-600 hover:text-civil-500 hover:bg-civil-50'
                      }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
