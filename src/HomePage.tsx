import { 
  BookOpen, 
  Crown, 
  Building, 
  Brain, 
  Microscope, 
  Users,
  ChevronRight,
  Clock,
  Play,
  LucideIcon
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-parchment py-24 overflow-hidden">
      {/* Ancient scroll background */}
      <div className="absolute inset-0 bg-gradient-to-br from-parchment-100 via-sandalwood-50 to-gold-50"></div>
      
      {/* Mandala pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mandala" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#8B4513" strokeWidth="1" opacity="0.3"/>
              <circle cx="100" cy="100" r="60" fill="none" stroke="#B8860B" strokeWidth="1" opacity="0.3"/>
              <circle cx="100" cy="100" r="40" fill="none" stroke="#CC5500" strokeWidth="1" opacity="0.3"/>
              <circle cx="100" cy="100" r="20" fill="none" stroke="#800000" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mandala)"/>
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center scroll-unfurl">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 text-mystical drop-shadow-lg">
            <span className="text-maroon-700 devanagari">ज्ञान</span>
            <span className="text-gold-600 devanagari">सूत्र</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-ochre-700 mb-6">
            Echoes of Ancient India
          </h2>
          <div className="divider-ornate my-8"></div>
          <p className="text-xl md:text-2xl text-ochre-600 max-w-4xl mx-auto mb-12 leading-relaxed font-serif ink-fade">
            Journey through millennia of wisdom, culture, and knowledge. Discover the rich tapestry 
            of ancient Indian civilization through scriptures, dynasties, architecture, philosophy, 
            science, and timeless cultural traditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gold-gradient text-white px-10 py-4 rounded-xl font-display font-semibold hover-golden transition-all duration-300 transform shadow-temple text-lg">
              Begin Your Journey
            </button>
            <button className="border-2 border-gold-500 text-gold-700 bg-parchment-100 px-10 py-4 rounded-xl font-display font-semibold hover:bg-gold-500 hover:text-white transition-all duration-300 flex items-center justify-center shadow-manuscript text-lg">
              <Play size={20} className="mr-3" />
              Watch Introduction
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  count: number;
}

const CategoryCard = ({ icon: Icon, title, description, count }: CategoryCardProps) => {
  return (
    <div className="relative h-80 overflow-hidden rounded-2xl text-ochre-800 transform hover:scale-105 transition-all duration-500 shadow-temple hover:shadow-golden cursor-pointer group card-manuscript">
      {/* Ancient tablet background */}
      <div className="absolute inset-0 bg-gradient-to-br from-parchment-200 to-sandalwood-200">
        <div className="absolute inset-0 bg-stone opacity-20"></div>
        {/* Stone texture */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, rgba(0,0,0,0.1) 1px, transparent 1px),
                           radial-gradient(circle at 70% 80%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Ornamental border */}
      <div className="absolute inset-2 border-2 border-gold-400 rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-4 border border-gold-300 rounded-lg opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center z-10">
        <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mb-6 shadow-manuscript group-hover:bg-gold-200 transition-colors duration-300">
          <Icon size={36} className="text-gold-700 group-hover:text-gold-800" />
        </div>
        <h3 className="text-2xl font-display font-bold mb-4 text-maroon-800 group-hover:text-gold-700 transition-colors">{title}</h3>
        <p className="text-ochre-700 text-sm mb-4 leading-relaxed font-serif group-hover:text-ochre-800">{description}</p>
        <div className="flex items-center justify-center bg-parchment-100 px-4 py-2 rounded-full border border-gold-300 group-hover:bg-gold-100 transition-colors">
          <span className="text-sm font-serif font-medium text-ochre-700">{count} Resources</span>
          <ChevronRight size={16} className="ml-2 text-gold-600 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
      
      {/* Decorative corner ornaments */}
      <div className="absolute top-4 left-4 text-gold-400 opacity-60 group-hover:opacity-100 transition-opacity">
        <div className="w-6 h-6 border-l-2 border-t-2 border-gold-400 rounded-tl-lg"></div>
      </div>
      <div className="absolute top-4 right-4 text-gold-400 opacity-60 group-hover:opacity-100 transition-opacity">
        <div className="w-6 h-6 border-r-2 border-t-2 border-gold-400 rounded-tr-lg"></div>
      </div>
      <div className="absolute bottom-4 left-4 text-gold-400 opacity-60 group-hover:opacity-100 transition-opacity">
        <div className="w-6 h-6 border-l-2 border-b-2 border-gold-400 rounded-bl-lg"></div>
      </div>
      <div className="absolute bottom-4 right-4 text-gold-400 opacity-60 group-hover:opacity-100 transition-opacity">
        <div className="w-6 h-6 border-r-2 border-b-2 border-gold-400 rounded-br-lg"></div>
      </div>
    </div>
  );
};

// ... existing code ...

const Timeline = () => {
  const periods = [
    { name: "Vedic Period", years: "1500-500 BCE", description: "Foundation of Hindu philosophy and practices" },
    { name: "Mauryan Empire", years: "322-185 BCE", description: "Unification under Chandragupta and Ashoka" },
    { name: "Golden Age", years: "320-550 CE", description: "Gupta Empire's cultural and scientific achievements" },
    { name: "Medieval Period", years: "650-1200 CE", description: "Temple architecture and regional kingdoms" },
  ];

  return (
    <section className="py-20 bg-parchment-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-maroon-800 mb-6">
            Timeline of Ancient India
          </h2>
          <div className="divider-ornate my-6"></div>
          <p className="text-xl text-ochre-600 max-w-3xl mx-auto font-serif leading-relaxed">
            Explore the chronological journey through India's ancient civilizations
          </p>
        </div>

        <div className="relative">
          {/* Ornamental timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gold-400 via-gold-500 to-gold-600 shadow-md"></div>
          
          {periods.map((period, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                <div className="card-manuscript bg-parchment-100 p-8 rounded-2xl border-2 border-gold-300 hover-golden transition-all duration-300">
                  <h3 className="text-2xl font-display font-bold text-maroon-800 mb-3">{period.name}</h3>
                  <p className="text-gold-600 font-serif font-semibold mb-4 text-lg">{period.years}</p>
                  <p className="text-ochre-700 font-serif leading-relaxed">{period.description}</p>
                </div>
              </div>
              
              {/* Ornamental timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gold-500 rounded-full border-4 border-parchment-100 shadow-golden z-10">
                <div className="w-full h-full bg-gold-600 rounded-full animate-pulse"></div>
              </div>
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
    <section className="py-20 bg-parchment-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-maroon-800 mb-6">
            Featured Content
          </h2>
          <div className="divider-ornate my-6"></div>
          <p className="text-xl text-ochre-600 max-w-3xl mx-auto font-serif leading-relaxed">
            Dive deep into carefully curated articles and resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featured.map((item, index) => (
            <article key={index} className="card-manuscript bg-parchment-100 rounded-2xl border-2 border-sandalwood-300 hover-golden transition-all duration-500 overflow-hidden cursor-pointer group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover filter sepia-[0.3] group-hover:sepia-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ochre-900/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-serif font-medium shadow-manuscript">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-maroon-800 mb-4 group-hover:text-gold-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-ochre-700 mb-6 leading-relaxed font-serif">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-ochre-500 flex items-center font-serif">
                    <Clock size={16} className="mr-2" />
                    {item.readTime}
                  </span>
                  <ChevronRight size={20} className="text-gold-600 group-hover:translate-x-2 group-hover:text-gold-700 transition-all duration-300" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  const categories = [
    {
      icon: BookOpen,
      title: "Sacred Scriptures",
      description: "Vedas, Upanishads, Puranas, and Epic literature",
      count: 150
    },
    {
      icon: Crown,
      title: "Ancient Dynasties",
      description: "Mauryan, Gupta, Chola, and other great empires",
      count: 85
    },
    {
      icon: Building,
      title: "Temple Architecture",
      description: "Dravidian, Nagara, and Vesara architectural styles",
      count: 120
    },
    {
      icon: Brain,
      title: "Philosophy",
      description: "Schools of thought and spiritual wisdom",
      count: 95
    },
    {
      icon: Microscope,
      title: "Ancient Sciences",
      description: "Mathematics, astronomy, medicine, and metallurgy",
      count: 75
    },
    {
      icon: Users,
      title: "Cultural Traditions",
      description: "Festivals, arts, music, and social practices",
      count: 110
    }
  ];

  return (
    <div>
      <Hero />

      <section className="py-20 bg-parchment-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-maroon-800 mb-6">
              Explore Ancient Wisdom
            </h2>
            <div className="divider-ornate my-6"></div>
            <p className="text-xl text-ochre-600 max-w-3xl mx-auto font-serif leading-relaxed">
              Discover the six pillars of ancient Indian civilization through our comprehensive collections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      <Timeline />
      <FeaturedContent />
    </div>
  );
};

export default HomePage;