import { Microscope } from 'lucide-react';
import ComingSoon from './ComingSoon';

const SciencePage = () => {
  const expectedFeatures = [
    "Mathematical innovations including the concept of zero and decimal system with historical impact",
    "Astronomical discoveries and calendar systems that rival modern precision",
    "Ayurvedic medicine with herb databases and traditional healing practices",
    "Metallurgical techniques that created the rust-resistant Delhi Iron Pillar",
    "Surgical procedures documented by Sushruta with anatomical illustrations",
    "Chemical processes and alchemical traditions that influenced modern chemistry",
    "Agricultural innovations and water management systems like stepwells",
    "Navigation techniques and maritime technology for ocean voyages",
    "Scientific methodology and experimental approaches in ancient texts"
  ];

  return (
    <ComingSoon
      icon={Microscope}
      title="Ancient Sciences"
      description="Uncover the scientific achievements that placed ancient India at the forefront of human knowledge. From mathematical concepts to medical procedures, explore innovations that continue to influence modern science and technology."
      expectedFeatures={expectedFeatures}
    />
  );
};

export default SciencePage;