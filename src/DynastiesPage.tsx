import { Crown } from 'lucide-react';
import ComingSoon from './ComingSoon';

const DynastiesPage = () => {
  const expectedFeatures = [
    "Comprehensive timelines of major dynasties from Mauryans to Mughals with interactive maps",
    "Detailed profiles of legendary rulers like Chandragupta, Ashoka, and Akbar with their achievements",
    "Administrative systems and governance structures that influenced modern democratic principles",
    "Military strategies and technological innovations that changed the course of history",
    "Cultural patronage and architectural contributions of different dynasties",
    "Trade routes and economic policies that connected India to the ancient world",
    "Religious tolerance and synthesis that created India's pluralistic society",
    "Archaeological evidence and inscriptions that validate historical accounts",
    "Comparative analysis showing evolution of statecraft and diplomacy"
  ];

  return (
    <ComingSoon
      icon={Crown}
      title="Ancient Dynasties"
      description="Journey through the rise and fall of great empires that shaped the Indian subcontinent. From the pioneering Mauryan administration to the cultural synthesis of the Mughal era, explore how these dynasties created the foundation of modern India."
      expectedFeatures={expectedFeatures}
    />
  );
};

export default DynastiesPage;