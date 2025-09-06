import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  ArrowRight,
  LucideIcon
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

  const getCategoryIcon = (category: string): LucideIcon => {
    const iconMap: { [key: string]: LucideIcon } = {
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
        
        <div className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-parchment-100 border-2 border-gold-300 shadow-temple text-left transition-all mt-16">
          {/* Header */}
          <div className="border-b-2 border-gold-200 px-6 py-5 bg-parchment-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-display font-semibold text-maroon-800">Search JnanaSutra</h3>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-ochre-600 hover:bg-parchment-300 hover:text-gold-600 transition-all duration-300"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Search Input */}
            <div className="mt-4 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-ochre-500" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for scriptures, dynasties, architecture, philosophy..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 border-2 border-sandalwood-300 rounded-xl bg-parchment-50 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-ochre-800 font-serif placeholder-ochre-400"
              />
            </div>
            
            {/* Category Filters */}
            <div className="mt-5 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-serif font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gold-500 text-white shadow-golden'
                      : 'bg-parchment-300 text-ochre-700 hover:bg-sandalwood-200 hover:text-gold-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Results */}
          <div className="max-h-96 overflow-y-auto px-6 py-5 bg-parchment-50">
            {results.length > 0 ? (
              <div className="space-y-4">
                <div className="text-sm text-ochre-500 mb-5 font-serif">
                  {results.length} result{results.length !== 1 ? 's' : ''} found
                </div>
                {results.map((item) => {
                  const IconComponent = getCategoryIcon(item.category);
                  return (
                    <div
                      key={item.id}
                      className="group p-5 rounded-xl border-2 border-sandalwood-200 hover:border-gold-400 bg-parchment-100 hover:bg-parchment-200 card-manuscript hover-golden transition-all cursor-pointer"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center group-hover:bg-gold-200 transition-colors shadow-manuscript">
                            <IconComponent size={22} className="text-gold-600" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-display font-semibold text-maroon-800 group-hover:text-gold-700 transition-colors">
                              {highlightText(item.title, searchTerm)}
                            </h4>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-serif font-medium bg-sandalwood-200 text-ochre-700">
                              {item.category}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-ochre-600 font-serif leading-relaxed">
                            {highlightText(item.description, searchTerm)}
                          </p>
                          <div className="mt-3 flex items-center text-gold-600 group-hover:text-gold-700">
                            <span className="text-sm font-serif font-medium">Learn more</span>
                            <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <Search className="mx-auto h-16 w-16 text-ochre-400" />
                <h3 className="mt-6 text-lg font-display font-medium text-maroon-800">No results found</h3>
                <p className="mt-3 text-sm text-ochre-600 font-serif">
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
      <nav className="nav-temple shadow-temple sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link 
                to="/"
                className="flex items-center hover-golden rounded-lg p-2 transition-all duration-300 focus:outline-none"
                aria-label="Go to homepage"
              >
                <div className="text-3xl font-display font-bold text-mystical devanagari">
                  ज्ञानसूत्र
                </div>
                <div className="ml-3 text-sm text-ochre-600 font-serif font-medium">
                  JnanaSutra
                </div>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-2 px-4 py-2 text-ochre-700 hover:text-gold-600 hover:bg-parchment-300 rounded-lg font-serif font-medium transition-all duration-300 hover-golden focus:outline-none"
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </Link>
              ))}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-3 text-ochre-700 hover:text-gold-600 hover:bg-parchment-300 rounded-lg transition-all duration-300 hover-golden"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden p-3 text-ochre-700 hover:text-gold-600 hover:bg-parchment-300 rounded-lg transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-parchment-200 border-t border-gold-300">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-3 py-3 px-3 text-ochre-700 hover:text-gold-600 hover:bg-parchment-300 rounded-lg font-serif transition-all duration-300 focus:outline-none"
                  onClick={toggleMenu}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  toggleMenu();
                }}
                className="flex items-center space-x-3 py-3 px-3 text-ochre-700 hover:text-gold-600 hover:bg-parchment-300 rounded-lg font-serif transition-all duration-300 w-full text-left"
              >
                <Search size={18} />
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

export default Navigation;