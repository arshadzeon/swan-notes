'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-md border-b border-gray-700 py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center 
                           shadow-md transition-all duration-300 
                           group-hover:shadow-lg group-hover:shadow-blue-500/20">
              <svg 
                className="w-5 h-5 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">
              SwanNotes
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              <Link 
                href="#features" 
                className="px-3 py-2 text-gray-300 hover:text-white rounded-md text-sm font-medium transition-colors"
              >
                Features
              </Link>
              <Link 
                href="#pricing" 
                className="px-3 py-2 text-gray-300 hover:text-white rounded-md text-sm font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link 
                href="#faq" 
                className="px-3 py-2 text-gray-300 hover:text-white rounded-md text-sm font-medium transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-5">
            <Link 
              href="#" 
              className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 hidden md:flex items-center space-x-1.5 px-3 py-2 rounded-lg hover:bg-gray-800/80 border border-transparent hover:border-gray-700"
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span>Log in</span>
            </Link>
            <Link 
              href="#" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm px-5 py-2.5 rounded-lg font-medium
                         shadow-sm transition-all duration-300 hover:shadow-md hover:from-blue-500 hover:to-blue-600"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-300 hover:bg-gray-800/70 transition-colors"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-gray-900 to-gray-800 border-b border-gray-700 shadow-sm transition-all duration-300 overflow-hidden
                    ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-2">
            <Link 
              href="#features" 
              className="text-gray-300 hover:text-white py-2 text-sm font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className="text-gray-300 hover:text-white py-2 text-sm font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#faq" 
              className="text-gray-300 hover:text-white py-2 text-sm font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-3 border-t border-gray-700 flex flex-col space-y-3 mt-2">
              <Link 
                href="#" 
                className="text-gray-300 hover:text-white py-2 text-sm font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Log in
              </Link>
              <Link 
                href="#" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg text-sm font-medium text-center
                           transition-all duration-300 hover:from-blue-500 hover:to-blue-600"
                onClick={() => setIsOpen(false)}
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