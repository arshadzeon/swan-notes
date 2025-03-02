'use client';

import Link from 'next/link'
import Navbar from './components/Navbar'
import { BackgroundGradient } from "@/components/ui/background-gradient"
import Image from 'next/image'

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started',
    features: [
      'Up to 5 notes',
      'Basic formatting',
      'Mobile app access',
      'Email support'
    ],
    cta: 'Get started',
    highlighted: false
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/month',
    description: 'Best for professionals',
    features: [
      'Unlimited notes',
      'Advanced formatting',
      'Collaboration features',
      'Version history',
      'Priority support',
      'API access'
    ],
    cta: 'Start free trial',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'Advanced security',
      'Dedicated support',
      'SLA guarantee',
      'Custom contracts'
    ],
    cta: 'Contact sales',
    highlighted: false
  }
];

const faqs = [
  {
    q: 'Can I try SwanNotes before paying?',
    a: 'Yes! We offer a free tier that lets you explore the basic features. You can also start a 14-day trial of our Pro plan with no credit card required.'
  },
  {
    q: 'What happens when I upgrade or downgrade?',
    a: 'Changes to your subscription take effect immediately. We will prorate any payments and credit your account accordingly.'
  },
  {
    q: 'Do you offer refunds?',
    a: 'Yes, if you are not satisfied with SwanNotes, we offer a 30-day money-back guarantee for all paid plans.'
  },
  {
    q: 'Is my data secure with SwanNotes?',
    a: 'Absolutely. We use bank-level encryption, regular security audits, and comply with GDPR and CCPA regulations to ensure your data remains private and protected.'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero section with blue gradient background */}
      <section className="pt-20 pb-16 px-4 md:px-6 bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-white/10 to-blue-100/20"></div>
        
        {/* Enhanced blue background patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.blue.50),transparent_70%)]"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/20 via-purple-100/10 to-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-20 w-[30rem] h-[30rem] bg-gradient-to-tr from-blue-100/20 via-purple-100/10 to-pink-100/20 rounded-full blur-3xl"></div>
        
        {/* Animated particles - blue theme */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Floating geometric shapes - blue theme */}
        <div className="absolute top-1/3 right-1/4 w-8 h-8 border border-blue-200/30 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 border border-purple-200/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm px-4 py-1.5 rounded-full mb-5 border border-blue-100/50 shadow-sm">
              <span className="text-sm font-medium text-blue-600 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                Introducing SwanNotes AI
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900 max-w-4xl leading-tight">
              Your ideas, <span className="relative inline-block group">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 animate-gradient-x drop-shadow-sm">organized</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </span> and enhanced by AI
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              The intelligent workspace that helps you capture, connect, and create better content with the power of artificial intelligence.
            </p>
            
            {/* Blue-themed buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#" 
                className="group bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-3.5 rounded-xl font-medium hover:shadow-lg hover:shadow-gray-300/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Enhanced shine effect */}
                <span className="absolute inset-0 w-full h-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700"></span>
                
                <span className="relative z-10 flex items-center justify-center">
                  Get started for free
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
              <a 
                href="#features" 
                className="text-gray-700 border border-gray-300 bg-white/90 backdrop-blur-sm px-8 py-3.5 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center group"
              >
                <svg className="w-5 h-5 mr-2 text-gray-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>See how it works</span>
              </a>
            </div>
          </div>
          
          {/* Enhanced browser mockup - made more visible */}
          <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden border border-gray-200/80 shadow-2xl bg-white transform hover:scale-[1.02] transition-transform duration-500">
            {/* Enhanced glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-sm opacity-70"></div>
            
            {/* Browser header */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 px-4 py-3 flex items-center relative z-10">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-md flex-1 h-6 flex items-center justify-center text-xs text-gray-500 border border-gray-200/50">
                <span className="mr-1 text-green-600">https://</span>app.swannotes.com/workspace
              </div>
            </div>
            
            {/* App interface - with simplified content */}
            <div className="bg-white p-4 md:p-6 relative z-10">
              {/* Toolbar */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between mb-6 border-b border-gray-200 pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="font-medium text-sm text-gray-800">Project Notes</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-100 rounded-md px-2 py-1 text-xs text-blue-700 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Shared
                  </div>
                  <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center font-medium">JD</div>
                  <div className="w-6 h-6 bg-green-500 rounded-full text-white text-xs flex items-center justify-center font-medium">KL</div>
                </div>
              </div>

              <div className="flex gap-6 mt-12">
                {/* Sidebar */}
                <div className="hidden md:block w-48 shrink-0">
                  <div className="flex items-center mb-6">
                    <div className="w-5 h-5 bg-gray-100 rounded-md mr-2 flex items-center justify-center">
                      <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-gray-700">My Notes</div>
                  </div>
                  
                  {/* AI Tools section */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">AI Tools</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center px-2 py-1.5 rounded bg-blue-50 text-blue-700 cursor-pointer">
                        <svg className="w-3.5 h-3.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <div className="text-xs font-medium">Talk to Document</div>
                      </div>
                      <div className="flex items-center px-2 py-1.5 rounded hover:bg-gray-100 cursor-pointer">
                        <svg className="w-3.5 h-3.5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        <div className="text-xs text-gray-700">Download as PDF</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recent Notes */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Recent Notes</div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center px-2 py-1 rounded bg-blue-50 cursor-pointer">
                        <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
                        <div className="text-xs text-blue-700">Project Notes</div>
                      </div>
                      <div className="flex items-center px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">
                        <div className="w-3 h-3 bg-green-500 rounded-sm mr-2"></div>
                        <div className="text-xs text-gray-700">Meeting Notes</div>
                      </div>
                      <div className="flex items-center px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">
                        <div className="w-3 h-3 bg-purple-500 rounded-sm mr-2"></div>
                        <div className="text-xs text-gray-700">Ideas</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Main content */}
                <div className="flex-1">
                  <div className="space-y-4 mb-6">
                    <h1 className="text-xl font-bold text-gray-800">Project Ideas</h1>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Ideas</div>
                      <div className="text-xs text-gray-500">Updated 2 hours ago</div>
                    </div>
                    
                    <p className="text-sm text-gray-700">Here are some ideas for our next project:</p>
                    
                    <ul className="text-sm text-gray-700 space-y-2 pl-5 list-disc">
                      <li>Build a mobile app for task management</li>
                      <li>Create a website redesign with modern UI</li>
                      <li>Develop a simple budget tracking tool</li>
                    </ul>
                  </div>
                  
                  {/* Talk to Document Feature */}
                  <div className="mb-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex items-center mb-3">
                      <div className="w-5 h-5 bg-blue-500 rounded-md mr-2 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div className="font-medium text-sm text-blue-700">Talk to Document</div>
                    </div>
                    
                    <div className="flex items-start mb-3">
                      <div className="w-6 h-6 bg-gray-200 rounded-full mr-2 flex-shrink-0 flex items-center justify-center text-xs font-medium">
                        You
                      </div>
                      <div className="text-xs text-gray-700 bg-gray-100 rounded-lg p-2">
                        Which idea should we focus on first?
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-500 rounded-full mr-2 flex-shrink-0 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="text-xs text-gray-700 bg-white rounded-lg p-2 border border-gray-200">
                        Based on your notes, I recommend starting with the mobile app for task management because:
                        <ul className="mt-1 pl-4 list-disc space-y-1">
                          <li>It addresses an immediate need</li>
                          <li>It can be developed in smaller phases</li>
                          <li>It has potential for user growth</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-3 relative">
                      <input 
                        type="text" 
                        placeholder="Ask a question about this document..." 
                        className="w-full text-xs border border-gray-200 rounded-full py-2 px-4 pr-8 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* AI Notes Feature */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-purple-100 rounded-md mr-2 flex items-center justify-center">
                          <svg className="w-3 h-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                        <div className="font-medium text-sm text-gray-800">AI Notes</div>
                      </div>
                      <button className="text-xs text-blue-600 font-medium">Add Note</button>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-3 border border-purple-100 mb-2">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-xs font-medium text-purple-700">Consider User Research</div>
                        <div className="text-xs text-gray-500">Added by AI</div>
                      </div>
                      <p className="text-xs text-gray-700">Before starting development, consider doing some user research to validate these ideas.</p>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-xs font-medium text-purple-700">Timeline Suggestion</div>
                        <div className="text-xs text-gray-500">Added by AI</div>
                      </div>
                      <p className="text-xs text-gray-700">Create a simple timeline for each project to better understand resource needs.</p>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
                      <div className="w-6 h-6 bg-blue-100 rounded-md mb-2 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div className="font-medium text-xs text-gray-800 mb-1">Talk to Document</div>
                      <div className="text-xs text-gray-500">Ask questions</div>
                    </div>
                    
                    <div className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
                      <div className="w-6 h-6 bg-purple-100 rounded-md mb-2 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </div>
                      <div className="font-medium text-xs text-gray-800 mb-1">AI Notes</div>
                      <div className="text-xs text-gray-500">Add insights</div>
                    </div>
                    
                    <div className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
                      <div className="w-6 h-6 bg-green-100 rounded-md mb-2 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                      </div>
                      <div className="font-medium text-xs text-gray-800 mb-1">Download PDF</div>
                      <div className="text-xs text-gray-500">Export document</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced AI Badge */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center transform hover:scale-105 transition-transform">
            <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-medium">Powered by AI</span>
          </div>
          
          {/* Enhanced typing indicator */}
          <div className="absolute bottom-12 right-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center">
            <div className="mr-1.5 font-medium">AI writing</div>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
          
          {/* Social proof - made more compact */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 mb-3">Trusted by teams at</p>
            <div className="flex flex-wrap justify-center gap-6 opacity-70">
              {['Microsoft', 'Airbnb', 'Spotify', 'Uber', 'Netflix'].map((company) => (
                <div key={company} className="text-gray-400 font-semibold text-sm">{company}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced Background */}
      <section id="features" className="py-28 px-4 md:px-6 relative overflow-hidden">
        {/* Rich layered background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-blue-50/60 z-0"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMGYwZjAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0zMCAzNGgtMnYtNGgydjR6bTAtNnYtNGgtMnY0aDJ6TTI0IDM0aC0ydi00aDJ2NHptMC02di00aC0ydjRoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 z-0"></div>
        
        {/* Enhanced gradient accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-40 animate-pulse z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-40 animate-pulse z-0" style={{ animationDelay: '1s' }}></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl z-0"></div>
        
        {/* Enhanced floating elements */}
        <div className="absolute top-1/3 left-10 w-32 h-32 border border-blue-300 rounded-full opacity-30 animate-float z-0"></div>
        <div className="absolute bottom-1/3 right-10 w-24 h-24 border border-blue-300 rounded-full opacity-20 animate-float z-0" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-4 h-4 border border-blue-400 rounded-sm opacity-40 rotate-45 animate-pulse z-0"></div>
        <div className="absolute bottom-1/4 right-1/3 w-6 h-6 border border-blue-300 rounded-md opacity-30 rotate-12 animate-float z-0" style={{ animationDelay: '3s' }}></div>
        
        {/* Diagonal accent lines */}
        <div className="absolute top-0 right-0 w-64 h-px bg-gradient-to-l from-blue-600 to-transparent opacity-30 rotate-45 origin-right z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-px bg-gradient-to-r from-blue-600 to-transparent opacity-30 rotate-45 origin-left z-0"></div>
        <div className="absolute top-1/4 left-0 w-96 h-px bg-gradient-to-r from-blue-400 to-transparent opacity-20 rotate-[30deg] origin-left z-0"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-px bg-gradient-to-l from-blue-400 to-transparent opacity-20 rotate-[30deg] origin-right z-0"></div>
        
        {/* Content container with higher z-index to appear above background elements */}
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 border border-blue-400 rounded-full text-blue-700 text-xs font-mono tracking-widest mb-5 backdrop-blur-sm relative">
              <span className="relative z-10">SYSTEM.FEATURES</span>
              <span className="absolute inset-0 bg-blue-50/70 rounded-full"></span>
            </div>
            
            <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight relative inline-block">
              <span className="relative z-10">Powerful Features</span>
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent"></span>
              <span className="absolute -bottom-4 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></span>
            </h2>
            
            <p className="text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
              Discover how our platform can transform your workflow with these powerful capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Ultra Futuristic Card - Improved Contrast */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50/40 rounded-lg p-8 backdrop-blur-sm border border-blue-200/70 hover:border-blue-300/80 transition-all duration-500">
              {/* Futuristic corner accents - improved contrast */}
              <div className="absolute -top-px -left-px w-6 h-6">
                <div className="absolute top-0 left-0 w-full h-px bg-blue-500"></div>
                <div className="absolute top-0 left-0 w-px h-full bg-blue-500"></div>
              </div>
              <div className="absolute -bottom-px -right-px w-6 h-6">
                <div className="absolute bottom-0 right-0 w-full h-px bg-blue-500"></div>
                <div className="absolute bottom-0 right-0 w-px h-full bg-blue-500"></div>
              </div>
              
              {/* Glowing accent - improved contrast */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-80"></div>
              
              {/* Holographic number - improved contrast */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center border border-blue-300 text-blue-700 text-xs font-mono z-10">
                <span className="relative z-10">01</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/60 to-transparent blur-sm"></div>
              </div>
              
              {/* Feature content with enhanced styling */}
              <div className="relative z-10">
                {/* Futuristic icon - improved contrast */}
                <div className="w-14 h-14 mb-6 relative">
                  <div className="absolute inset-0 bg-blue-200 rounded-md rotate-45 transform-gpu"></div>
                  <div className="absolute inset-1 bg-white rounded-md rotate-45 transform-gpu flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600 -rotate-45 transform-gpu" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="absolute -right-1 -bottom-1 w-3 h-3 bg-blue-500 rounded-sm rotate-45 transform-gpu opacity-80"></div>
                </div>
                
                {/* Feature title with animated underline - improved contrast */}
                <h3 className="text-xl font-medium text-gray-900 tracking-tight mb-4 relative inline-block">
                  AI-Powered Insights
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-blue-500/0 via-blue-500/80 to-blue-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </h3>
                
                <p className="text-gray-700 mb-6 font-light leading-relaxed">
                  Our advanced AI analyzes your notes to extract key insights, identify patterns, and suggest connections.
                </p>
                
                {/* Futuristic list items - improved contrast */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-300 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-700 font-light">Automatic summarization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-300 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-700 font-light">Smart topic clustering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-300 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-700 font-light">Personalized recommendations</span>
                  </li>
                </ul>
                
                {/* Futuristic link - improved contrast */}
                <a href="#" className="inline-flex items-center text-blue-700 text-sm font-medium group/link">
                  <span className="relative overflow-hidden">
                    <span className="relative z-10 font-mono tracking-wide">VIEW.DETAILS</span>
                    <span className="absolute bottom-0 left-0 w-full h-px bg-blue-600 transform origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
                  </span>
                  <svg className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
              {/* Hover reveal glow - improved contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 via-blue-100/0 to-blue-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
            </div>
            
            {/* Feature 2 - Ultra Futuristic Card - Improved Contrast */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50/40 rounded-lg p-8 backdrop-blur-sm border border-blue-200/70 hover:border-blue-300/80 transition-all duration-500">
              {/* Futuristic corner accents - improved contrast */}
              <div className="absolute -top-px -left-px w-6 h-6">
                <div className="absolute top-0 left-0 w-full h-px bg-blue-500"></div>
                <div className="absolute top-0 left-0 w-px h-full bg-blue-500"></div>
              </div>
              <div className="absolute -bottom-px -right-px w-6 h-6">
                <div className="absolute bottom-0 right-0 w-full h-px bg-blue-500"></div>
                <div className="absolute bottom-0 right-0 w-px h-full bg-blue-500"></div>
              </div>
              
              {/* Glowing accent - improved contrast */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-80"></div>
              
              {/* Holographic number - improved contrast */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center border border-blue-300 text-blue-700 text-xs font-mono z-10">
                <span className="relative z-10">02</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/60 to-transparent blur-sm"></div>
              </div>
              
              {/* Feature content with enhanced styling */}
              <div className="relative z-10">
                {/* Futuristic icon - improved contrast */}
                <div className="w-14 h-14 mb-6 relative">
                  <div className="absolute inset-0 bg-blue-200 rounded-md rotate-45 transform-gpu"></div>
                  <div className="absolute inset-1 bg-white rounded-md rotate-45 transform-gpu flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600 -rotate-45 transform-gpu" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute -right-1 -bottom-1 w-3 h-3 bg-blue-500 rounded-sm rotate-45 transform-gpu opacity-80"></div>
                </div>
                
                {/* Feature title with animated underline - improved contrast */}
                <h3 className="text-xl font-medium text-gray-900 tracking-tight mb-4 relative inline-block">
                  Smart Organization
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-blue-500/0 via-blue-500/80 to-blue-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </h3>
                
                <p className="text-gray-700 mb-6 font-light leading-relaxed">
                  Keep your notes organized with intelligent tagging, categorization, and search capabilities.
                </p>
                
                {/* Futuristic list items - improved contrast */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-300 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-700 font-light">Automatic tagging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-300 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-700 font-light">Nested folders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-300 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-700 font-light">Find anything in seconds</span>
                  </li>
                </ul>
                
                {/* Futuristic link - improved contrast */}
                <a href="#" className="inline-flex items-center text-blue-700 text-sm font-medium group/link">
                  <span className="relative overflow-hidden">
                    <span className="relative z-10 font-mono tracking-wide">VIEW.DETAILS</span>
                    <span className="absolute bottom-0 left-0 w-full h-px bg-blue-600 transform origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
                  </span>
                  <svg className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
              {/* Hover reveal glow - improved contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 via-blue-100/0 to-blue-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
            </div>
            
            {/* Feature 3 - Ultra Futuristic Card - Improved Contrast */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50/40 rounded-lg p-8 backdrop-blur-sm border border-blue-200/70 hover:border-blue-300/80 transition-all duration-500">
              {/* Futuristic corner accents - improved contrast */}
              <div className="absolute -top-px -left-px w-6 h-6">
                <div className="absolute top-0 left-0 w-full h-px bg-blue-500"></div>
                <div className="absolute top-0 left-0 w-px h-full bg-blue-500"></div>
              </div>
              <div className="absolute -bottom-px -right-px w-6 h-6">
                <div className="absolute bottom-0 right-0 w-full h-px bg-blue-500"></div>
                <div className="absolute bottom-0 right-0 w-px h-full bg-blue-500"></div>
              </div>
              
              {/* Glowing accent - improved contrast */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-80"></div>
              
              {/* Holographic number - improved contrast */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center border border-blue-300 text-blue-700 text-xs font-mono z-10">
                <span className="relative z-10">03</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/60 to-transparent blur-sm"></div>
              </div>
              
              {/* Feature content with enhanced styling */}
              <div className="relative z-10">
                {/* Futuristic icon - improved contrast */}
                <div className="w-14 h-14 mb-6 relative">
                  <div className="absolute inset-0 bg-blue-200 rounded-md rotate-45 transform-gpu"></div>
                  <div className="absolute inset-1 bg-white rounded-md rotate-45 transform-gpu flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600 -rotate-45 transform-gpu" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="absolute -right-1 -bottom-1 w-3 h-3 bg-blue-500 rounded-sm rotate-45 transform-gpu opacity-80"></div>
                </div>
                
                {/* Feature title with animated underline - improved contrast */}
                <h3 className="text-xl font-medium text-gray-900 tracking-tight mb-4 relative inline-block">
                  Real-time Collaboration
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-blue-500/0 via-blue-500/80 to-blue-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </h3>
                
                <p className="text-gray-700 mb-6 font-light leading-relaxed">
                  Work together seamlessly with your team in real-time, with smart commenting and sharing.
                </p>
                
                {/* Futuristic list items - improved contrast */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-300 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-700 font-light">Collaborate in real-time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-300 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-700 font-light">Comment and provide feedback</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-300 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-700 font-light">Control sharing permissions</span>
                  </li>
                </ul>
                
                {/* Futuristic link - improved contrast */}
                <a href="#" className="inline-flex items-center text-blue-700 text-sm font-medium group/link">
                  <span className="relative overflow-hidden">
                    <span className="relative z-10 font-mono tracking-wide">VIEW.DETAILS</span>
                    <span className="absolute bottom-0 left-0 w-full h-px bg-blue-600 transform origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
                  </span>
                  <svg className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
              {/* Hover reveal glow - improved contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 via-blue-100/0 to-blue-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Futuristic Design */}
      <section id="pricing" className="py-28 px-4 md:px-6 bg-white relative overflow-hidden">
        {/* Futuristic grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMGYwZjAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0zMCAzNGgtMnYtNGgydjR6bTAtNnYtNGgtMnY0aDJ6TTI0IDM0aC0ydi00aDJ2NHptMC02di00aC0ydjRoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Animated gradient lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Futuristic floating elements */}
        <div className="absolute top-1/3 left-10 w-32 h-32 border border-blue-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-1/3 right-10 w-24 h-24 border border-blue-100 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-4 h-4 border border-blue-200 rounded-sm opacity-30 rotate-45 animate-pulse"></div>
        
        {/* Diagonal accent lines */}
        <div className="absolute top-0 right-0 w-64 h-px bg-gradient-to-l from-blue-500 to-transparent opacity-20 rotate-45 origin-right"></div>
        <div className="absolute bottom-0 left-0 w-64 h-px bg-gradient-to-r from-blue-500 to-transparent opacity-20 rotate-45 origin-left"></div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-1.5 border border-blue-200 rounded-full text-blue-600 text-xs font-mono tracking-widest mb-5 backdrop-blur-sm relative">
              <span className="relative z-10">SYSTEM.PRICING</span>
              <span className="absolute inset-0 bg-blue-50/50 rounded-full"></span>
            </div>
            
            <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight relative inline-block">
              <span className="relative z-10">Choose Your Plan</span>
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></span>
              <span className="absolute -bottom-4 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70"></span>
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Select the perfect plan for your needs. All plans include core features with different usage limits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan - Futuristic Card */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50/30 rounded-lg backdrop-blur-sm border border-blue-100/50 hover:border-blue-200/70 transition-all duration-500 overflow-hidden">
              {/* Futuristic corner accents */}
              <div className="absolute -top-px -left-px w-6 h-6">
                <div className="absolute top-0 left-0 w-full h-px bg-blue-300"></div>
                <div className="absolute top-0 left-0 w-px h-full bg-blue-300"></div>
              </div>
              <div className="absolute -bottom-px -right-px w-6 h-6">
                <div className="absolute bottom-0 right-0 w-full h-px bg-blue-300"></div>
                <div className="absolute bottom-0 right-0 w-px h-full bg-blue-300"></div>
              </div>
              
              {/* Plan header */}
              <div className="p-6 border-b border-blue-100">
                <h3 className="text-xl font-medium text-gray-900 tracking-tight mb-1">Free</h3>
                <p className="text-gray-600 text-sm font-light mb-4">Perfect for getting started</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-500 ml-1 font-light">/month</span>
                </div>
              </div>
              
              {/* Plan features */}
              <div className="p-6">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-600 font-light">Up to 5 documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-600 font-light">Basic AI features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-600 font-light">1GB storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-600 font-light">Community support</span>
                  </li>
                </ul>
                
                <a href="#" className="block w-full py-3 px-4 bg-white border border-blue-200 text-blue-600 font-medium rounded-lg text-center hover:border-blue-400 transition-colors duration-300 relative group/btn overflow-hidden">
                  <span className="relative z-10">Get Started</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500"></span>
                </a>
              </div>
              
              {/* Hover reveal glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 via-blue-100/0 to-blue-200/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
            </div>
            
            {/* Pro Plan - Futuristic Card */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50/30 rounded-lg backdrop-blur-sm border border-blue-400/50 hover:border-blue-400/70 transition-all duration-500 overflow-hidden transform scale-105 shadow-lg shadow-blue-100/50 z-10">
              {/* Popular badge */}
              <div className="absolute top-0 right-0">
                <div className="bg-blue-500 text-white text-xs font-mono tracking-wider py-1.5 px-3 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
              </div>
              
              {/* Futuristic corner accents */}
              <div className="absolute -top-px -left-px w-6 h-6">
                <div className="absolute top-0 left-0 w-full h-px bg-blue-400"></div>
                <div className="absolute top-0 left-0 w-px h-full bg-blue-400"></div>
              </div>
              <div className="absolute -bottom-px -right-px w-6 h-6">
                <div className="absolute bottom-0 right-0 w-full h-px bg-blue-400"></div>
                <div className="absolute bottom-0 right-0 w-px h-full bg-blue-400"></div>
              </div>
              
              {/* Glowing accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70"></div>
              
              {/* Plan header */}
              <div className="p-6 border-b border-blue-100">
                <h3 className="text-xl font-medium text-gray-900 tracking-tight mb-1">Pro</h3>
                <p className="text-gray-600 text-sm font-light mb-4">For individuals and small teams</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">$12</span>
                  <span className="text-gray-500 ml-1 font-light">/month</span>
                </div>
              </div>
              
              {/* Plan features */}
              <div className="p-6">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-600 font-light">Unlimited documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-600 font-light">Advanced AI features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-600 font-light">10GB storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-600 font-light">Priority email support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-600 font-light">Team collaboration</span>
                  </li>
                </ul>
                
                <a href="#" className="block w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg text-center hover:bg-blue-700 transition-colors duration-300 relative group/btn overflow-hidden">
                  <span className="relative z-10">Get Started</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500"></span>
                </a>
              </div>
              
              {/* Hover reveal glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 via-blue-100/0 to-blue-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
            </div>
            
            {/* Enterprise Plan - Futuristic Card */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50/30 rounded-lg backdrop-blur-sm border border-blue-100/50 hover:border-blue-200/70 transition-all duration-500 overflow-hidden">
              {/* Futuristic corner accents */}
              <div className="absolute -top-px -left-px w-6 h-6">
                <div className="absolute top-0 left-0 w-full h-px bg-blue-300"></div>
                <div className="absolute top-0 left-0 w-px h-full bg-blue-300"></div>
              </div>
              <div className="absolute -bottom-px -right-px w-6 h-6">
                <div className="absolute bottom-0 right-0 w-full h-px bg-blue-300"></div>
                <div className="absolute bottom-0 right-0 w-px h-full bg-blue-300"></div>
              </div>
              
              {/* Plan header */}
              <div className="p-6 border-b border-blue-100">
                <h3 className="text-xl font-medium text-gray-900 tracking-tight mb-1">Enterprise</h3>
                <p className="text-gray-600 text-sm font-light mb-4">For organizations and large teams</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-500 ml-1 font-light">/month</span>
                </div>
              </div>
              
              {/* Plan features */}
              <div className="p-6">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-600 font-light">Everything in Pro</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-600 font-light">Advanced security features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-600 font-light">100GB storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-600 font-light">24/7 phone & email support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mr-3 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></span>
                    </span>
                    <span className="text-sm text-gray-600 font-light">Custom integrations</span>
                  </li>
                </ul>
                
                <a href="#" className="block w-full py-3 px-4 bg-white border border-blue-200 text-blue-600 font-medium rounded-lg text-center hover:border-blue-400 transition-colors duration-300 relative group/btn overflow-hidden">
                  <span className="relative z-10">Contact Sales</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500"></span>
                </a>
              </div>
              
              {/* Hover reveal glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 via-blue-100/0 to-blue-200/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
            </div>
          </div>
          
          {/* Futuristic FAQ link */}
          <div className="mt-16 text-center">
            <a href="#" className="inline-flex items-center text-blue-500 text-sm font-medium group/link">
              <span className="relative overflow-hidden">
                <span className="relative z-10 font-mono tracking-wide">VIEW.PRICING.FAQ</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-blue-400 transform origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
              </span>
              <svg className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced with Consistent Design Theme */}
      <section id="faq" className="py-24 px-4 md:px-6 bg-white relative overflow-hidden">
        {/* Background elements - matching features page style */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        
        {/* Decorative elements - matching features page style */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-50 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-50 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 left-10 w-32 h-32 border border-blue-200 rounded-full opacity-10"></div>
        <div className="absolute bottom-1/3 right-10 w-24 h-24 border border-blue-200 rounded-full opacity-10"></div>
        
        <div className="container mx-auto max-w-5xl relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 border border-blue-400 rounded-full text-blue-700 text-xs font-mono tracking-widest mb-5 backdrop-blur-sm relative">
              <span className="relative z-10">SYSTEM.FAQ</span>
              <span className="absolute inset-0 bg-blue-50/70 rounded-full"></span>
            </div>
            
            <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight relative inline-block">
              <span className="relative z-10">Got Questions? We&apos;ve Got Answers</span>
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent"></span>
              <span className="absolute -bottom-4 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></span>
            </h2>
            
            <p className="text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
              Everything you need to know about SwanNotes. Can&apos;t find the answer you&apos;re looking for? 
              Feel free to <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">contact our support team</a>.
            </p>
          </div>
          
          <div className="grid gap-6">
            {/* FAQ Item 1 - Styled to match feature cards */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50/40 rounded-lg p-6 backdrop-blur-sm border border-blue-200/70 hover:border-blue-300/80 transition-all duration-500">
              {/* Futuristic corner accents - matching feature cards */}
              <div className="absolute -top-px -left-px w-6 h-6">
                <div className="absolute top-0 left-0 w-full h-px bg-blue-500"></div>
                <div className="absolute top-0 left-0 w-px h-full bg-blue-500"></div>
              </div>
              <div className="absolute -bottom-px -right-px w-6 h-6">
                <div className="absolute bottom-0 right-0 w-full h-px bg-blue-500"></div>
                <div className="absolute bottom-0 right-0 w-px h-full bg-blue-500"></div>
              </div>
              
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mr-4 font-semibold text-sm">Q</div>
                  <h3 className="text-lg font-medium text-gray-900 pt-1">Can I try SwanNotes before paying?</h3>
                </div>
                <button className="text-gray-500 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-4 pl-12">
                <p className="text-gray-700 font-light leading-relaxed">
                  Yes! We offer a free tier that lets you explore the basic features. You can also start a 14-day trial of our Pro plan with no credit card required.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href="#" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium group/link">
                    <span className="relative overflow-hidden">
                      <span className="relative z-10">Start free trial</span>
                      <span className="absolute bottom-0 left-0 w-full h-px bg-blue-600 transform origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
                    </span>
                    <svg className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* FAQ Item 2 - Styled to match feature cards */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50/40 rounded-lg p-6 backdrop-blur-sm border border-blue-200/70 hover:border-blue-300/80 transition-all duration-500">
              {/* Futuristic corner accents - matching feature cards */}
              <div className="absolute -top-px -left-px w-6 h-6">
                <div className="absolute top-0 left-0 w-full h-px bg-blue-500"></div>
                <div className="absolute top-0 left-0 w-px h-full bg-blue-500"></div>
              </div>
              <div className="absolute -bottom-px -right-px w-6 h-6">
                <div className="absolute bottom-0 right-0 w-full h-px bg-blue-500"></div>
                <div className="absolute bottom-0 right-0 w-px h-full bg-blue-500"></div>
              </div>
              
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mr-4 font-semibold text-sm">Q</div>
                  <h3 className="text-lg font-medium text-gray-900 pt-1">How secure is my data with SwanNotes?</h3>
                </div>
                <button className="text-gray-500 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-4 pl-12">
                <p className="text-gray-700 font-light leading-relaxed">
                  Your security is our priority. We use industry-standard encryption for all data, both in transit and at rest. Our servers are regularly audited for security compliance, and we never share your data with third parties.
                </p>
                <div className="mt-4 p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-100 border border-blue-300 flex items-center justify-center mr-3">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></span>
                    </span>
                    <span>End-to-end encryption for all Pro and Business plans</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Item 3 - Styled to match feature cards */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50/40 rounded-lg p-6 backdrop-blur-sm border border-blue-200/70 hover:border-blue-300/80 transition-all duration-500">
              {/* Futuristic corner accents - matching feature cards */}
              <div className="absolute -top-px -left-px w-6 h-6">
                <div className="absolute top-0 left-0 w-full h-px bg-blue-500"></div>
                <div className="absolute top-0 left-0 w-px h-full bg-blue-500"></div>
              </div>
              <div className="absolute -bottom-px -right-px w-6 h-6">
                <div className="absolute bottom-0 right-0 w-full h-px bg-blue-500"></div>
                <div className="absolute bottom-0 right-0 w-px h-full bg-blue-500"></div>
              </div>
              
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mr-4 font-semibold text-sm">Q</div>
                  <h3 className="text-lg font-medium text-gray-900 pt-1">Can I access my notes offline?</h3>
                </div>
                <button className="text-gray-500 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-4 pl-12">
                <p className="text-gray-700 font-light leading-relaxed">
                  Absolutely! Our desktop and mobile apps support offline access. Any changes you make while offline will automatically sync when you reconnect to the internet.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                    iOS App
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                    Android App
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                    Desktop App
                  </span>
                </div>
              </div>
            </div>
            
            {/* FAQ Item 4 - Styled to match feature cards */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50/40 rounded-lg p-6 backdrop-blur-sm border border-blue-200/70 hover:border-blue-300/80 transition-all duration-500">
              {/* Futuristic corner accents - matching feature cards */}
              <div className="absolute -top-px -left-px w-6 h-6">
                <div className="absolute top-0 left-0 w-full h-px bg-blue-500"></div>
                <div className="absolute top-0 left-0 w-px h-full bg-blue-500"></div>
              </div>
              <div className="absolute -bottom-px -right-px w-6 h-6">
                <div className="absolute bottom-0 right-0 w-full h-px bg-blue-500"></div>
                <div className="absolute bottom-0 right-0 w-px h-full bg-blue-500"></div>
              </div>
              
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mr-4 font-semibold text-sm">Q</div>
                  <h3 className="text-lg font-medium text-gray-900 pt-1">What happens if I exceed my storage limit?</h3>
                </div>
                <button className="text-gray-500 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-4 pl-12">
                <p className="text-gray-700 font-light leading-relaxed">
                  You&apos;ll receive a notification when you&apos;re approaching your storage limit. You can continue to view and edit existing notes, but you won&apos;t be able to create new ones until you either upgrade your plan or free up space.
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-md border border-blue-200">
                    <div className="text-sm font-medium text-gray-800 mb-1">Free</div>
                    <div className="text-xs text-gray-600">500MB storage</div>
                  </div>
                  <div className="bg-white p-3 rounded-md border border-blue-200">
                    <div className="text-sm font-medium text-gray-800 mb-1">Pro</div>
                    <div className="text-xs text-gray-600">10GB storage</div>
                  </div>
                  <div className="bg-white p-3 rounded-md border border-blue-200">
                    <div className="text-sm font-medium text-gray-800 mb-1">Business</div>
                    <div className="text-xs text-gray-600">100GB storage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional help section - styled to match the rest of the site */}
          <div className="mt-16 bg-gradient-to-br from-white to-blue-50/40 rounded-lg p-8 backdrop-blur-sm border border-blue-200/70 relative overflow-hidden">
            {/* Futuristic corner accents - matching feature cards */}
            <div className="absolute -top-px -left-px w-6 h-6">
              <div className="absolute top-0 left-0 w-full h-px bg-blue-500"></div>
              <div className="absolute top-0 left-0 w-px h-full bg-blue-500"></div>
            </div>
            <div className="absolute -bottom-px -right-px w-6 h-6">
              <div className="absolute bottom-0 right-0 w-full h-px bg-blue-500"></div>
              <div className="absolute bottom-0 right-0 w-px h-full bg-blue-500"></div>
            </div>
            
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-80"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
                <p className="text-gray-700 font-light leading-relaxed max-w-md">
                  Our support team is ready to help you with any questions or concerns you might have.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-white bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 shadow-sm transition-all duration-300 hover:shadow-md text-sm font-medium">
                  Contact Support
                </a>
                <a href="#" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 shadow-sm transition-all duration-300 hover:shadow-md text-sm font-medium">
                  View Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 relative overflow-hidden pt-20 pb-32">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          {/* Top Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Brand Column */}
            <div>
              <h3 className="text-xl font-bold mb-6">SwanNotes</h3>
              <p className="text-gray-600 mb-6">
                Your workspace, reimagined. Write, plan, and get organized in one place.
              </p>
              <div className="flex gap-6">
                <Link 
                  href="https://twitter.com" 
                  target="_blank"
                  className="text-gray-600 hover:text-black transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link 
                  href="https://github.com" 
                  target="_blank"
                  className="text-gray-600 hover:text-black transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.92 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                  </svg>
                </Link>
                <Link 
                  href="https://linkedin.com" 
                  target="_blank"
                  className="text-gray-600 hover:text-black transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Links Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'FAQ', 'Support', 'Blog'].map(link => (
                  <li key={link}>
                    <Link href="#" className="text-gray-600 hover:text-black transition">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quote Column */}
            <div>
              <blockquote className="text-lg font-medium text-gray-900 mb-4">
                &ldquo;SwanNotes transformed how we organize our thoughts and collaborate.&rdquo;
              </blockquote>
              <p className="text-gray-600">
                — Sarah Chen, Product Designer
              </p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-200 pt-8 pb-4 text-sm text-gray-600">
            © 2023 SwanNotes. All rights reserved.
          </div>
        </div>
        
        {/* Swan Text Effect at bottom */}
        <div className="absolute bottom-[-60px] left-0 w-full">
          <div className="w-full px-4">
            <div className="relative text-center">
              <h2 className="text-[150px] md:text-[220px] font-black tracking-tighter leading-none w-full inline-block">
                <span className="text-black">Swan</span>
                <span className="relative">
                  <span className="text-gray-400">Notes</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
                </span>
              </h2>
              <div className="absolute -top-10 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 right-1/4 w-60 h-60 bg-gradient-to-br from-amber-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
