import { Building } from 'lucide-react';
import ComingSoon from './ComingSoon';

const ArchitecturePage = () => {
  const expectedFeatures = [
    "Virtual tours of iconic temples like Khajuraho, Konark, and Hampi with 360-degree views",
    "Detailed analysis of architectural styles - Dravidian, Nagara, and Vesara traditions",
    "Sacred geometry and mathematical principles embedded in temple construction",
    "Sculptural narratives and iconography that tell stories through stone",
    "Construction techniques and engineering marvels of ancient builders",
    "Regional variations and local influences on architectural evolution",
    "Rock-cut architecture from Ajanta and Ellora caves with artistic significance",
    "Urban planning principles from cities like Harappa and Pataliputra",
    "Interactive timeline showing architectural development across centuries"
  ];

  return (
    <ComingSoon
      icon={Building}
      title="Temple Architecture"
      description="Marvel at the architectural wonders that stand as testaments to ancient Indian craftsmanship. These stone symphonies blend spirituality with mathematics, creating spaces where the divine and human meet in perfect harmony."
      expectedFeatures={expectedFeatures}
    />
  );
};

export default ArchitecturePage;