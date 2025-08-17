import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return <footer className="bg-black/50 backdrop-blur-lg border-t border-gold-600/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gold-400 mb-4">GoldMind AI</h3>
            <p className="text-gray-400">Transforming businesses with innovative AI solutions and smart automation.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gold-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Plans', 'Contact'].map(item => <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-gold-400 transition-colors">
                    {item}
                  </Link>
                </li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gold-400 mb-4">Services</h4>
            <ul className="space-y-2">
              {['Website Design', 'Review Requests', 'Lead Capture', 'Webchat', 'Call Follow Up', 'AI Voice'].map(service => <li key={service}>
                  <Link to="/services" className="text-gray-400 hover:text-gold-400 transition-colors">
                    {service}
                  </Link>
                </li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gold-400 mb-4">Connect</h4>
            <div className="flex space-x-4">
              {[{
              Icon: Facebook,
              href: '#'
            }, {
              Icon: Twitter,
              href: '#'
            }, {
              Icon: Instagram,
              href: '#'
            }, {
              Icon: Linkedin,
              href: '#'
            }].map(({
              Icon,
              href
            }) => <a key={href} href={href} className="text-gray-400 hover:text-gold-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <Icon className="w-6 h-6" />
                </a>)}
            </div>
          </div>
        </div>
        <div className="border-t border-gold-600/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} GoldMind AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}