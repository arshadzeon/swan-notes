{/* Support CTA */}
<div className="py-12 px-4 md:px-6 bg-gray-50">
  <div className="container mx-auto max-w-4xl">
    <div className="bg-white rounded-xl shadow-md p-6 flex items-center">
      <div className="flex-grow mr-6">
        <div className="flex items-center mb-3">
          <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium mr-3">
            Support
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            Need More Help?
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm">
          Our expert team is ready to provide personalized guidance for your unique challenges.
        </p>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex -space-x-2">
          <img 
            src="/support-team-1.jpg" 
            alt="Support Team Member" 
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
          <img 
            src="/support-team-2.jpg" 
            alt="Support Team Member" 
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">
            +2
          </div>
        </div>
        
        <Link 
          href="#" 
          className="group flex items-center text-sm font-medium 
                     bg-black text-white px-4 py-2 rounded-full 
                     hover:bg-gray-800 transition-colors"
        >
          Contact
          <svg 
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
</div> 