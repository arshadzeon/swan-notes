import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Every feature you need to
            <br />
            <span className="text-gradient">stay productive</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Powerful, flexible, and intuitive. SwanNotes adapts to your workflow, not the other way around.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div>
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Smart Organization
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Your thoughts, organized automatically
              </h2>
              <p className="text-gray-600 mb-6">
                Let AI help you organize your notes. Our smart system recognizes patterns in your writing and suggests the best way to structure your information.
              </p>
              <ul className="space-y-4">
                {['AI-powered categorization', 'Smart tags and links', 'Automated table of contents'].map((item) => (
                  <li key={item} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 rounded-2xl aspect-video"></div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div className="order-2 md:order-1 bg-gray-100 rounded-2xl aspect-video"></div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Real-time Collaboration
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Work together, seamlessly
              </h2>
              <p className="text-gray-600 mb-6">
                Collaborate with your team in real-time. See changes as they happen, leave comments, and keep everyone aligned.
              </p>
              <ul className="space-y-4">
                {['Real-time editing', 'Comment threads', 'Version history'].map((item) => (
                  <li key={item} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Powerful Integration
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Connect with your favorite tools
              </h2>
              <p className="text-gray-600 mb-6">
                SwanNotes works seamlessly with the tools you already use. Import, export, and sync your data with ease.
              </p>
              <ul className="space-y-4">
                {['API access', 'Custom webhooks', 'Third-party integrations'].map((item) => (
                  <li key={item} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 rounded-2xl aspect-video"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of teams who use SwanNotes to stay organized and productive.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="button-gradient text-white px-8 py-4 rounded-lg font-medium"
            >
              View pricing
            </Link>
            <Link
              href="#"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium border border-gray-200 hover:border-gray-300 transition"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 