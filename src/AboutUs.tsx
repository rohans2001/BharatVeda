import { 
  BookOpen, 
  Crown, 
  Building, 
  Brain, 
  Microscope, 
  Users,
  Heart,
  Shield,
  Globe,
  Scroll,
  TreePine,
  Lightbulb,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f97316%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Subtle mandala pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern id=%22mandala%22 x=%220%22 y=%220%22 width=%22100%22 height=%22100%22 patternUnits=%22userSpaceOnUse%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22%23f97316%22 stroke-width=%220.5%22 opacity=%220.1%22/%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2230%22 fill=%22none%22 stroke=%22%23f97316%22 stroke-width=%220.5%22 opacity=%220.1%22/%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2220%22 fill=%22none%22 stroke=%22%23f97316%22 stroke-width=%220.5%22 opacity=%220.1%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23mandala)%22/%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-600">ज्ञान</span><span className="text-red-600">सूत्र</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Preserving Timeless Wisdom
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Preserving the timeless wisdom of ancient India for modern explorers. 
              We bridge millennia to bring you the profound knowledge, culture, and 
              spiritual insights that have shaped civilization for over 5,000 years.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6256297/pexels-photo-6256297.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ancient sages under a tree with scrolls"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Mission
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our mission is to illuminate the profound wisdom of ancient India, 
                  making it accessible to seekers, scholars, and curious minds worldwide. 
                  We believe that the knowledge preserved in ancient scriptures, 
                  philosophical texts, and cultural traditions holds timeless relevance 
                  for modern life.
                </p>
                <p>
                  Through careful curation and respectful presentation, we honor the 
                  sacred traditions while making them comprehensible to contemporary 
                  audiences. Every piece of content is researched with reverence and 
                  presented with authenticity.
                </p>
                <p className="text-orange-600 font-semibold italic">
                  "From the eternal flows wisdom; from wisdom flows understanding; 
                  from understanding flows a life well-lived."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Six Pillars Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Six Pillars of Ancient Wisdom
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core focus areas that encompass the vast landscape of ancient Indian knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Sacred Scriptures",
                description: "Vedas, Upanishads, and Epic literature that form the foundation of spiritual wisdom and philosophical inquiry.",
                color: "text-orange-600",
                bgColor: "bg-orange-100"
              },
              {
                icon: Crown,
                title: "Ancient Dynasties",
                description: "The rise and fall of great empires, their governance, culture, and lasting contributions to civilization.",
                color: "text-red-600",
                bgColor: "bg-red-100"
              },
              {
                icon: Building,
                title: "Temple Architecture",
                description: "Magnificent structures that embody mathematical precision, artistic excellence, and spiritual symbolism.",
                color: "text-yellow-600",
                bgColor: "bg-yellow-100"
              },
              {
                icon: Brain,
                title: "Philosophy",
                description: "Schools of thought exploring consciousness, reality, ethics, and the path to enlightenment.",
                color: "text-purple-600",
                bgColor: "bg-purple-100"
              },
              {
                icon: Microscope,
                title: "Ancient Sciences",
                description: "Groundbreaking discoveries in mathematics, astronomy, medicine, and natural sciences that influenced the world.",
                color: "text-green-600",
                bgColor: "bg-green-100"
              },
              {
                icon: Users,
                title: "Cultural Traditions",
                description: "Rich tapestry of festivals, arts, music, and social practices that celebrate life and community.",
                color: "text-blue-600",
                bgColor: "bg-blue-100"
              }
            ].map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
                <div className={`w-16 h-16 ${pillar.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <pillar.icon size={32} className={pillar.color} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                <div className="mt-4 flex items-center text-orange-600 group-hover:text-orange-700">
                  <span className="text-sm font-medium">Explore</span>
                  <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why This Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From Vedic hymns to modern minds, we connect generations
            </p>
          </div>

          <div className="relative">
            {/* Timeline band */}
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-8 bg-gradient-to-r from-orange-100 via-red-100 to-yellow-100 rounded-full px-8 py-4 shadow-lg">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-2">
                    <Scroll size={24} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Ancient Texts</span>
                </div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-orange-300 to-red-300"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-2">
                    <Heart size={24} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Living Wisdom</span>
                </div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-red-300 to-yellow-300"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mb-2">
                    <Globe size={24} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Global Impact</span>
                </div>
              </div>
            </div>

            {/* Impact cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Preservation",
                  description: "Safeguarding ancient knowledge from being lost to time, ensuring future generations can access this invaluable wisdom."
                },
                {
                  icon: Lightbulb,
                  title: "Learning",
                  description: "Making complex philosophical and scientific concepts accessible to modern learners through contemporary understanding."
                },
                {
                  icon: Users,
                  title: "Community",
                  description: "Building a global community of seekers, scholars, and wisdom keepers who value ancient knowledge."
                }
              ].map((impact, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <impact.icon size={32} className="text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{impact.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{impact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team / Contributors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Contributors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A dedicated community of scholars, researchers, and wisdom keepers working together to preserve ancient knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                role: "Sanskrit Scholars",
                description: "Expert linguists and translators who ensure authentic interpretation of ancient texts",
                icon: BookOpen,
                count: "12+"
              },
              {
                role: "History Researchers",
                description: "Dedicated historians uncovering and documenting the rich tapestry of ancient Indian civilization",
                icon: Crown,
                count: "8+"
              },
              {
                role: "Cultural Specialists",
                description: "Anthropologists and cultural experts preserving traditional practices and their meanings",
                icon: Users,
                count: "15+"
              },
              {
                role: "Digital Archivists",
                description: "Technology specialists creating accessible digital repositories for ancient knowledge",
                icon: Microscope,
                count: "6+"
              },
              {
                role: "Design Storytellers",
                description: "Creative professionals crafting engaging and respectful presentations of sacred wisdom",
                icon: Brain,
                count: "10+"
              },
              {
                role: "Community Moderators",
                description: "Passionate volunteers ensuring quality discussions and maintaining the integrity of our platform",
                icon: Heart,
                count: "25+"
              }
            ].map((contributor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <contributor.icon size={24} className="text-orange-600" />
                  </div>
                  <span className="text-2xl font-bold text-orange-600">{contributor.count}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{contributor.role}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{contributor.description}</p>
              </div>
            ))}
          </div>

          {/* Community Contribution Call */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
              <TreePine size={48} className="text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Growing Community</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Whether you're a scholar, researcher, artist, or simply passionate about ancient wisdom, 
                there's a place for you in our community. Help us preserve and share this invaluable heritage.
              </p>
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center">
                Become a Contributor
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Us in Keeping the Wisdom Alive
              </h2>
              <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
                Be part of a global movement to preserve, understand, and share the profound 
                wisdom of ancient India. Every journey begins with a single step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center justify-center">
                  Contact Us
                  <ArrowRight size={16} className="ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors inline-flex items-center justify-center">
                  Support Our Mission
                  <Heart size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;