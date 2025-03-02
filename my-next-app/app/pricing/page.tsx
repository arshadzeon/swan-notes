'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

const pricingTiers: PricingTier[] = [
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
  }
];

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div 
      className={`rounded-2xl p-8 ${
        tier.highlighted 
          ? 'border-2 border-black relative shadow-xl' 
          : 'border border-gray-200'
      }`}
    >
      {tier.highlighted && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
          <span className="bg-black text-white text-sm font-medium px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold">{tier.price}</span>
          {tier.period && (
            <span className="text-gray-600">{tier.period}</span>
          )}
        </div>
        <p className="text-gray-600 mt-2">{tier.description}</p>
      </div>
      
      <ul className="space-y-4 mb-8">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href="#"
        className={`block text-center px-6 py-3 rounded-lg font-medium transition ${
          tier.highlighted
            ? 'button-gradient text-white'
            : 'bg-white text-gray-900 border border-gray-200 hover:border-gray-300'
        }`}
      >
        {tier.cta}
      </Link>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, transparent
            <br />
            <span className="text-gradient">pricing for everyone</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're just getting started or running a large team, we have a plan that's right for you.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 