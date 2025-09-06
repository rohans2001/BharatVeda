import { 
  Clock,
  Scroll,
  BookOpen
} from 'lucide-react';

import { LucideIcon } from 'lucide-react';

interface ComingSoonProps {
  icon: LucideIcon;
  title: string;
  description: string;
  comingSoonText?: string;
  expectedFeatures?: string[];
}

const ComingSoon: React.FC<ComingSoonProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  comingSoonText = "Coming Soon",
  expectedFeatures = []
}) => {
  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero Section with Coming Soon Banner */}
      <section className="relative bg-parchment py-24 overflow-hidden">
        {/* Ancient scroll background */}
        <div className="absolute inset-0 bg-gradient-to-br from-parchment-100 via-sandalwood-50 to-gold-50"></div>
        
        {/* Mandala pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mandala-coming-soon" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#8B4513" strokeWidth="1" opacity="0.3"/>
                <circle cx="100" cy="100" r="60" fill="none" stroke="#B8860B" strokeWidth="1" opacity="0.3"/>
                <circle cx="100" cy="100" r="40" fill="none" stroke="#CC5500" strokeWidth="1" opacity="0.3"/>
                <circle cx="100" cy="100" r="20" fill="none" stroke="#800000" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mandala-coming-soon)"/>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Coming Soon Banner */}
          <div className="inline-flex items-center bg-gold-gradient text-white px-8 py-3 rounded-full shadow-golden mb-8 border-2 border-gold-400">
            <Clock size={20} className="mr-3" />
            <span className="font-display font-semibold text-lg">{comingSoonText}</span>
          </div>
          
          {/* Category Icon */}
          <div className="w-32 h-32 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-manuscript border-4 border-gold-300">
            <Icon size={64} className="text-gold-600" />
          </div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-mystical">
            {title}
          </h1>
          
          <div className="divider-ornate my-8"></div>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-ochre-600 max-w-4xl mx-auto leading-relaxed font-serif mb-12">
            {description}
          </p>
        </div>
      </section>

      {/* Preview Content Section */}
      <section className="py-20 bg-parchment-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-maroon-800 mb-6">
              What's Coming
            </h2>
            <div className="divider-ornate my-6"></div>
            <p className="text-xl text-ochre-600 max-w-3xl mx-auto font-serif leading-relaxed">
              We're carefully curating authentic content and resources for this section. 
              Here's what you can expect when we launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expectedFeatures.map((feature, index) => (
              <div key={index} className="card-manuscript bg-parchment-100 p-8 rounded-2xl border-2 border-sandalwood-300 hover-golden transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center mr-4">
                    <Scroll size={16} className="text-gold-600" />
                  </div>
                  <div className="h-px bg-gold-300 flex-1"></div>
                </div>
                <p className="text-ochre-700 font-serif leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notification Section */}
      <section className="py-16 bg-parchment-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card-manuscript bg-parchment-100 p-12 rounded-2xl border-2 border-gold-300">
            <div className="w-24 h-24 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-manuscript">
              <BookOpen size={32} className="text-gold-600" />
            </div>
            
            <h3 className="text-3xl font-display font-bold text-maroon-800 mb-6">
              Stay Informed
            </h3>
            
            <p className="text-lg text-ochre-600 font-serif leading-relaxed mb-8">
              We're working diligently to bring you authentic, well-researched content. 
              Each section will be filled with carefully selected scriptures, historical insights, 
              architectural marvels, and cultural treasures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold-gradient text-white px-8 py-4 rounded-xl font-display font-semibold hover-golden transition-all duration-300 shadow-temple">
                Notify Me When Ready
              </button>
              <button className="border-2 border-gold-500 text-gold-700 bg-parchment-100 px-8 py-4 rounded-xl font-display font-semibold hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-manuscript">
                Explore Other Sections
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;