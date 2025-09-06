import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Crown, 
  Building, 
  Brain, 
  Microscope, 
  Users, 
  Search,
  Menu,
  X,
  ChevronRight,
  Clock,
  MapPin,
  Play
} from 'lucide-react';

const Navigation = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => {
  const navItems = [
    { name: 'Scriptures', icon: BookOpen, path: '/scriptures' },
    { name: 'Dynasties', icon: Crown, path: '/dynasties' },
    { name: 'Architecture', icon: Building, path: '/architecture' },
    { name: 'Philosophy', icon: Brain, path: '/philosophy' },
    { name: 'Science', icon: Microscope, path: '/science' },
    { name: 'Culture', icon: Users, path: '/culture' },
  ];

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-orange-600">
                भारतवेद
              </div>
              <div className="ml-2 text-sm text-gray-600 font-medium">
                BharatVeda
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors duration-200"
                >
                  <item.icon size={16} />
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
              <button className="p-2 text-gray-600 hover:text-orange-600 transition-colors">
                <Search size={20} />
              </button>
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="flex items-center space-x-2 py-2 text-gray-700 hover:text-orange-600 transition-colors"
                  onClick={toggleMenu}
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f97316%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="text-orange-600">भारत</span>
            <span className="text-red-600">वेद</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Echoes of Ancient India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Journey through millennia of wisdom, culture, and knowledge. Discover the rich tapestry 
            of ancient Indian civilization through scriptures, dynasties, architecture, philosophy, 
            science, and timeless cultural traditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Begin Your Journey
            </button>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-200 flex items-center justify-center">
              <Play size={16} className="mr-2" />
              Watch Introduction
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ icon: Icon, title, description, count, gradient }: any) => {
  return (
    <div className="relative overflow-hidden rounded-xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer group">
      <div className="absolute inset-0">
        <img 
          src={getCategoryImage(title)}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay that appears on hover */}
      <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-95 transition-opacity duration-300`}>
      </div>
      
      {/* Text content that appears on hover */}
      <div className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8 opacity-20">
          <Icon size={128} />
        </div>
        <div className="relative z-20">
          <Icon size={32} className="mb-4 text-white/90" />
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-white/90 text-sm mb-3">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{count} Resources</span>
            <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
      
      {/* Title overlay that's always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-10">
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
    </div>
  );
};

const getCategoryImage = (title: string) => {
  const imageMap: { [key: string]: string } = {
    "Sacred Scriptures": "https://images.pexels.com/photos/6002003/pexels-photo-6002003.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Ancient Dynasties": "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Temple Architecture": "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Philosophy": "https://images.pexels.com/photos/6256297/pexels-photo-6256297.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Ancient Sciences": "https://images.pexels.com/photos/8923962/pexels-photo-8923962.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Cultural Traditions": "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800"
  };
  
  return imageMap[title] || "https://images.pexels.com/photos/6002003/pexels-photo-6002003.jpeg?auto=compress&cs=tinysrgb&w=800";
};

const Timeline = () => {
  const periods = [
    { name: "Vedic Period", years: "1500-500 BCE", description: "Foundation of Hindu philosophy and practices" },
    { name: "Mauryan Empire", years: "322-185 BCE", description: "Unification under Chandragupta and Ashoka" },
    { name: "Golden Age", years: "320-550 CE", description: "Gupta Empire's cultural and scientific achievements" },
    { name: "Medieval Period", years: "650-1200 CE", description: "Temple architecture and regional kingdoms" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Timeline of Ancient India
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the chronological journey through India's ancient civilizations
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>
          
          {periods.map((period, index) => (
            <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{period.name}</h3>
                  <p className="text-orange-600 font-semibold mb-2">{period.years}</p>
                  <p className="text-gray-600 text-sm">{period.description}</p>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-md"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedContent = () => {
  const featured = [
    {
      title: "The Bhagavad Gita",
      category: "Scriptures",
      description: "Explore the timeless wisdom of Krishna's teachings to Arjuna",
      image: "https://images.pexels.com/photos/6002003/pexels-photo-6002003.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "15 min read"
    },
    {
      title: "Gupta Architecture",
      category: "Architecture", 
      description: "Discover the golden age of temple construction and artistic expression",
      image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "12 min read"
    },
    {
      title: "Ancient Mathematics",
      category: "Science",
      description: "Uncover India's contributions to mathematics and astronomy",
      image: "https://images.pexels.com/photos/6256297/pexels-photo-6256297.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "10 min read"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Content
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dive deep into carefully curated articles and resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((item, index) => (
            <article key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock size={14} className="mr-1" />
                    {item.readTime}
                  </span>
                  <ChevronRight size={16} className="text-orange-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const categories = [
    {
      icon: BookOpen,
      title: "Sacred Scriptures",
      description: "Vedas, Upanishads, Puranas, and Epic literature",
      count: 150,
      gradient: "bg-gradient-to-br from-orange-600 to-red-600"
    },
    {
      icon: Crown,
      title: "Ancient Dynasties",
      description: "Mauryan, Gupta, Chola, and other great empires",
      count: 85,
      gradient: "bg-gradient-to-br from-red-600 to-pink-600"
    },
    {
      icon: Building,
      title: "Temple Architecture",
      description: "Dravidian, Nagara, and Vesara architectural styles",
      count: 120,
      gradient: "bg-gradient-to-br from-yellow-600 to-orange-600"
    },
    {
      icon: Brain,
      title: "Philosophy",
      description: "Schools of thought and spiritual wisdom",
      count: 95,
      gradient: "bg-gradient-to-br from-purple-600 to-indigo-600"
    },
    {
      icon: Microscope,
      title: "Ancient Sciences",
      description: "Mathematics, astronomy, medicine, and metallurgy",
      count: 75,
      gradient: "bg-gradient-to-br from-green-600 to-teal-600"
    },
    {
      icon: Users,
      title: "Cultural Traditions",
      description: "Festivals, arts, music, and social practices",
      count: 110,
      gradient: "bg-gradient-to-br from-blue-600 to-cyan-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <Hero />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Ancient Wisdom
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the six pillars of ancient Indian civilization through our comprehensive collections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      <Timeline />
      <FeaturedContent />

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="text-2xl font-bold text-orange-400">भारतवेद</div>
                <div className="ml-2 text-gray-400">BharatVeda</div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Preserving and sharing the timeless wisdom of ancient Indian civilization 
                for future generations worldwide.
              </p>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                <span>Connecting cultures globally</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contributors</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Bibliography</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Glossary</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Download Center</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BharatVeda. Dedicated to preserving ancient wisdom for modern minds.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;