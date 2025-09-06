import { BookOpen } from 'lucide-react';
import ComingSoon from './ComingSoon';

const ScripturesPage = () => {
  const expectedFeatures = [
    "Complete translations and commentaries of the four Vedas with Sanskrit verses and meanings",
    "Interactive exploration of major Upanishads with philosophical insights and historical context",
    "Comprehensive study guides for the Bhagavad Gita with chapter-wise analysis and teachings",
    "Epic narratives from Ramayana and Mahabharata with character studies and moral lessons",
    "Puranic stories and their symbolic meanings with cultural significance explained",
    "Search functionality across all texts with keyword and theme-based filtering",
    "Audio recitations by Sanskrit scholars with proper pronunciation guides",
    "Cross-references between different scriptures showing interconnected wisdom",
    "Timeline of scriptural composition with historical and archaeological evidence"
  ];

  return (
    <ComingSoon
      icon={BookOpen}
      title="Sacred Scriptures"
      description="Discover the profound wisdom of ancient Indian scriptures - from the eternal truths of the Vedas to the epic narratives that have shaped civilization. Each text holds keys to understanding dharma, cosmic order, and the eternal questions of existence."
      expectedFeatures={expectedFeatures}
    />
  );
};

export default ScripturesPage;