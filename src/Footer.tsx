import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-indigo-900 to-maroon-900 text-parchment-100 py-20 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lotus" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 10 Q60 30 50 50 Q40 30 50 10 M50 50 Q70 60 50 90 Q30 60 50 50" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lotus)"/>
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link 
              to="/"
              className="flex items-center mb-6 hover-golden rounded-lg p-2 transition-all duration-300 focus:outline-none inline-block"
              aria-label="Go to homepage"
            >
              <div className="text-3xl font-display font-bold text-gold-400 devanagari">ज्ञानसूत्र</div>
              <div className="ml-3 text-sandalwood-300 font-serif">JnanaSutra</div>
            </Link>
            <p className="text-sandalwood-200 mb-6 max-w-md font-serif leading-relaxed text-lg">
              Preserving and sharing the timeless wisdom of ancient Indian civilization 
              for future generations worldwide.
            </p>
            <div className="flex items-center text-sandalwood-300">
              <MapPin size={18} className="mr-3 text-gold-400" />
              <span className="font-serif">Connecting cultures globally</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-gold-400">Quick Links</h3>
            <ul className="space-y-3 text-sandalwood-200">
              <li><Link to="/about" className="hover:text-gold-300 transition-colors font-serif hover-golden p-1 rounded focus:outline-none">About Us</Link></li>
              <li><a href="#" className="hover:text-gold-300 transition-colors font-serif hover-golden p-1 rounded focus:outline-none">Contributors</a></li>
              <li><a href="#" className="hover:text-gold-300 transition-colors font-serif hover-golden p-1 rounded focus:outline-none">Contact</a></li>
              <li><a href="#" className="hover:text-gold-300 transition-colors font-serif hover-golden p-1 rounded focus:outline-none">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-gold-400">Resources</h3>
            <ul className="space-y-3 text-sandalwood-200">
              <li><a href="#" className="hover:text-gold-300 transition-colors font-serif hover-golden p-1 rounded focus:outline-none">Research Papers</a></li>
              <li><a href="#" className="hover:text-gold-300 transition-colors font-serif hover-golden p-1 rounded focus:outline-none">Bibliography</a></li>
              <li><a href="#" className="hover:text-gold-300 transition-colors font-serif hover-golden p-1 rounded focus:outline-none">Glossary</a></li>
              <li><a href="#" className="hover:text-gold-300 transition-colors font-serif hover-golden p-1 rounded focus:outline-none">Download Center</a></li>
            </ul>
          </div>
        </div>
        
        {/* Ornamental divider */}
        <div className="mt-16 mb-8">
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent flex-1"></div>
            <div className="mx-6 text-gold-400 text-2xl">❋ ◆ ❋</div>
            <div className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent flex-1"></div>
          </div>
        </div>
        
        <div className="text-center text-sandalwood-300 font-serif">
          <p>&copy; 2025 JnanaSutra. Dedicated to preserving ancient wisdom for modern minds.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;