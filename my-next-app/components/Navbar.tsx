'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#integrations', label: 'Integrations' },
    { href: '#about', label: 'About' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
                  ${isScrolled 
                    ? 'bg-white shadow-lg py-2' 
                    : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <div 
              className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center 
                         transition-all duration-300 group-hover:bg-purple-700"
            >
              <svg 
                className="w-6 h-6 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-purple-600' : 'text-white'}`}>
              SwanNotes
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200
                           ${isScrolled 
                             ? 'text-gray-700 hover:text-purple-600' 
                             : 'text-white/80 hover:text-white'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="#" 
              className={`font-medium transition-colors
                         ${isScrolled 
                           ? 'text-gray-700 hover:text-purple-600' 
                           : 'text-white/80 hover:text-white'}`}
            >
              Sign In
            </Link>
            <Link 
              href="#" 
              className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium
                         hover:bg-purple-700 transition-colors duration-300
                         shadow-lg shadow-purple-600/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5
                       ${isScrolled ? 'text-purple-600' : 'text-white'}`}
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''} ${isScrolled ? 'bg-purple-600' : 'bg-white'}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'} ${isScrolled ? 'bg-purple-600' : 'bg-white'}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''} ${isScrolled ? 'bg-purple-600' : 'bg-white'}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden
                    ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-purple-600 py-2 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-4">
              <Link 
                href="#" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="#" 
                className="bg-purple-600 text-white py-3 rounded-lg font-medium text-center
                           hover:bg-purple-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 