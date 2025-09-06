import React, { useState, useEffect, useRef } from 'react';
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
  Play,
  Filter,
  ArrowRight,
  ArrowUp
} from 'lucide-react';

// Search data structure
const searchData = [
  // Scriptures
  { id: 1, title: "Bhagavad Gita", category: "Scriptures", description: "Sacred dialogue between Prince Arjuna and Krishna on duty and righteousness", keywords: ["krishna", "arjuna", "dharma", "yoga", "spiritual", "philosophy"] },
  { id: 2, title: "Rigveda", category: "Scriptures", description: "Oldest collection of Vedic Sanskrit hymns dedicated to various deities", keywords: ["vedas", "hymns", "sanskrit", "ancient", "rituals", "mantras"] },
  { id: 3, title: "Upanishads", category: "Scriptures", description: "Philosophical texts exploring the nature of reality and consciousness", keywords: ["philosophy", "consciousness", "reality", "brahman", "atman", "meditation"] },
  { id: 4, title: "Ramayana", category: "Scriptures", description: "Epic tale of Prince Rama's journey and victory over evil", keywords: ["rama", "sita", "hanuman", "epic", "dharma", "devotion"] },
  { id: 5, title: "Mahabharata", category: "Scriptures", description: "Greatest epic of ancient India containing the Bhagavad Gita", keywords: ["epic", "kurukshetra", "pandavas", "kauravas", "dharma", "war"] },
  
  // Dynasties
  { id: 6, title: "Mauryan Empire", category: "Dynasties", description: "First pan-Indian empire founded by Chandragupta Maurya", keywords: ["chandragupta", "ashoka", "empire", "maurya", "buddhism", "administration"] },
  { id: 7, title: "Gupta Empire", category: "Dynasties", description: "Golden Age of India with flourishing arts, science, and culture", keywords: ["golden age", "arts", "science", "culture", "mathematics", "astronomy"] },
  { id: 8, title: "Chola Dynasty", category: "Dynasties", description: "Maritime empire known for naval expeditions and temple architecture", keywords: ["chola", "maritime", "navy", "temples", "south india", "trade"] },
  { id: 9, title: "Mughal Empire", category: "Dynasties", description: "Islamic empire that ruled much of India for over 300 years", keywords: ["mughal", "islamic", "architecture", "akbar", "shah jahan", "taj mahal"] },
  { id: 10, title: "Vijayanagara Empire", category: "Dynasties", description: "South Indian empire known for its architectural marvels", keywords: ["vijayanagara", "south india", "hampi", "architecture", "krishna deva raya"] },
  
  // Architecture
  { id: 11, title: "Dravidian Architecture", category: "Architecture", description: "South Indian temple architecture style with towering gopurams", keywords: ["dravidian", "temples", "gopuram", "south india", "stone carving"] },
  { id: 12, title: "Nagara Architecture", category: "Architecture", description: "North Indian temple architecture characterized by curvilinear towers", keywords: ["nagara", "north india", "temples", "towers", "shikhara"] },
  { id: 13, title: "Khajuraho Temples", category: "Architecture", description: "Medieval Hindu temples famous for their intricate sculptures", keywords: ["khajuraho", "temples", "sculptures", "medieval", "art", "chandela"] },
  { id: 14, title: "Ajanta Caves", category: "Architecture", description: "Rock-cut Buddhist caves with exquisite paintings and sculptures", keywords: ["ajanta", "buddhist", "caves", "paintings", "rock cut", "art"] },
  { id: 15, title: "Ellora Caves", category: "Architecture", description: "Rock-cut temples representing Hindu, Buddhist, and Jain traditions", keywords: ["ellora", "caves", "hindu", "buddhist", "jain", "kailasa"] },
  
  // Philosophy
  { id: 16, title: "Advaita Vedanta", category: "Philosophy", description: "Non-dualistic school of Hindu philosophy founded by Adi Shankara", keywords: ["advaita", "vedanta", "shankara", "non-dualism", "brahman", "maya"] },
  { id: 17, title: "Yoga Philosophy", category: "Philosophy", description: "System of physical, mental, and spiritual practices", keywords: ["yoga", "patanjali", "meditation", "asanas", "pranayama", "spiritual"] },
  { id: 18, title: "Buddhist Philosophy", category: "Philosophy", description: "Teachings of Buddha on suffering, impermanence, and enlightenment", keywords: ["buddha", "buddhism", "enlightenment", "four noble truths", "eightfold path"] },
  { id: 19, title: "Jain Philosophy", category: "Philosophy", description: "Ancient religion emphasizing non-violence and spiritual liberation", keywords: ["jainism", "ahimsa", "non-violence", "mahavira", "liberation", "karma"] },
  { id: 20, title: "Samkhya Philosophy", category: "Philosophy", description: "Dualistic philosophical system analyzing consciousness and matter", keywords: ["samkhya", "dualism", "consciousness", "matter", "purusha", "prakriti"] },
  
  // Science
  { id: 21, title: "Ancient Mathematics", category: "Science", description: "Contributions including zero, decimal system, and algorithms", keywords: ["mathematics", "zero", "decimal", "aryabhata", "brahmagupta", "algorithms"] },
  { id: 22, title: "Ayurveda", category: "Science", description: "Traditional system of medicine focusing on holistic healing", keywords: ["ayurveda", "medicine", "healing", "herbs", "doshas", "charaka"] },
  { id: 23, title: "Astronomy", category: "Science", description: "Advanced understanding of celestial movements and calendar systems", keywords: ["astronomy", "celestial", "calendar", "aryabhata", "planets", "mathematics"] },
  { id: 24, title: "Metallurgy", category: "Science", description: "Advanced techniques in working with metals and alloys", keywords: ["metallurgy", "metals", "iron", "steel", "delhi pillar", "wootz"] },
  { id: 25, title: "Surgery", category: "Science", description: "Ancient surgical techniques documented by Sushruta", keywords: ["surgery", "sushruta", "medical", "operations", "instruments", "plastic surgery"] },
  
  // Culture
  { id: 26, title: "Classical Dance", category: "Culture", description: "Traditional dance forms like Bharatanatyam, Kathak, and others", keywords: ["dance", "bharatanatyam", "kathak", "classical", "performance", "art"] },
  { id: 27, title: "Festivals", category: "Culture", description: "Rich tradition of celebrations marking seasons and deities", keywords: ["festivals", "diwali", "holi", "dussehra", "celebrations", "traditions"] },
  { id: 28, title: "Music Traditions", category: "Culture", description: "Classical music systems including ragas and talas", keywords: ["music", "classical", "ragas", "talas", "instruments", "vocal"] },
  { id: 29, title: "Art and Crafts", category: "Culture", description: "Traditional arts including painting, sculpture, and handicrafts", keywords: ["art", "crafts", "painting", "sculpture", "handicrafts", "traditional"] },
  { id: 30, title: "Languages", category: "Culture", description: "Rich linguistic heritage including Sanskrit and regional languages", keywords: ["languages", "sanskrit", "literature", "poetry", "regional", "scripts"] }
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [results, setResults] = useState(searchData);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const categories = ['All', 'Scriptures', 'Dynasties', 'Architecture', 'Philosophy', 'Science', 'Culture'];

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const filtered = searchData.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
    setResults(filtered);
  }, [searchTerm, selectedCategory]);

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return text;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="bg-yellow-200 text-yellow-900 px-1 rounded">
          {part}
        </span>
      ) : part
    );
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'Scriptures': BookOpen,
      'Dynasties': Crown,
      'Architecture': Building,
      'Philosophy': Brain,
      'Science': Microscope,
      'Culture': Users
    };
    return iconMap[category] || BookOpen;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-start justify-center p-4 text-center">
        <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" onClick={onClose}></div>
        
        <div className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all mt-16">
          {/* Header */}
          <div className="border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Search JnanaSutra</h3>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Search Input */}
            <div className="mt-4 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for scriptures, dynasties, architecture, philosophy..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
              />
            </div>
            
            {/* Category Filters */}
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Results */}
          <div className="max-h-96 overflow-y-auto px-6 py-4">
            {results.length > 0 ? (
              <div className="space-y-3">
                <div className="text-sm text-gray-500 mb-4">
                  {results.length} result{results.length !== 1 ? 's' : ''} found
                </div>
                {results.map((item) => {
                  const IconComponent = getCategoryIcon(item.category);
                  return (
                    <div
                      key={item.id}
                      className="group p-4 rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all cursor-pointer"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                            <IconComponent size={20} className="text-orange-600" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-base font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                              {highlightText(item.title, searchTerm)}
                            </h4>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {item.category}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-gray-600">
                            {highlightText(item.description, searchTerm)}
                          </p>
                          <div className="mt-2 flex items-center text-orange-600 group-hover:text-orange-700">
                            <span className="text-sm font-medium">Learn more</span>
                            <ArrowRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-sm font-medium text-gray-900">No results found</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Try adjusting your search or category filter
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 80% or more
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrolled / maxHeight) * 100;
      
      if (scrollPercentage > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-300"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

interface NavigationProps {
  isOpen: boolean;
  toggleMenu: () => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, toggleMenu, isSearchOpen, setIsSearchOpen }) => {
  
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
              <button 
                onClick={() => window.location.href = '/'}
                className="flex items-center hover:opacity-80 transition-opacity duration-200 cursor-pointer focus:outline-none rounded"
                aria-label="Go to homepage"
              >
                <div className="text-2xl font-bold text-orange-600">
                  ज्ञानसूत्र
                </div>
                <div className="ml-2 text-sm text-gray-600 font-medium">
                  JnanaSutra
                </div>
              </button>
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
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-orange-600 transition-colors"
                aria-label="Search"
              >
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
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  toggleMenu();
                }}
                className="flex items-center space-x-2 py-2 text-gray-700 hover:text-orange-600 transition-colors w-full text-left"
              >
                <Search size={16} />
                <span>Search</span>
              </button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
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
            <span className="text-orange-600">ज्ञान</span>
            <span className="text-red-600">सूत्र</span>
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
    <div className="relative h-64 overflow-hidden rounded-xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer group">
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Cmd/Ctrl + K to open search
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
      }
      // Escape to close search
      if (event.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

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
      <Navigation 
        isOpen={isMenuOpen} 
        toggleMenu={toggleMenu}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      
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
      
      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <button 
                onClick={() => window.location.href = '/'}
                className="flex items-center mb-4 hover:opacity-80 transition-opacity duration-200 cursor-pointer focus:outline-none rounded"
                aria-label="Go to homepage"
              >
                <div className="text-2xl font-bold text-orange-400">ज्ञानसूत्र</div>
                <div className="ml-2 text-gray-400">JnanaSutra</div>
              </button>
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
            <p>&copy; 2025 JnanaSutra. Dedicated to preserving ancient wisdom for modern minds.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;