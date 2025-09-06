import { Users } from 'lucide-react';
import ComingSoon from './ComingSoon';

const CulturePage = () => {
  const expectedFeatures = [
    "Classical dance traditions with video demonstrations and historical significance",
    "Festival celebrations and their spiritual meanings across different regions",
    "Traditional music systems with raga analysis and instrumental showcases",
    "Handicrafts and artistic traditions with technique tutorials and cultural context",
    "Culinary heritage with ancient recipes and their nutritional wisdom",
    "Language evolution and literary traditions from Sanskrit to regional languages",
    "Folk traditions and oral histories that preserve community wisdom",
    "Wedding ceremonies and life-cycle rituals with symbolic explanations",
    "Regional variations and how geography influenced cultural practices"
  ];

  return (
    <ComingSoon
      icon={Users}
      title="Cultural Traditions"
      description="Immerse yourself in the rich tapestry of Indian cultural traditions that have been passed down through generations. From vibrant festivals to classical arts, discover how these practices connect communities and preserve ancient wisdom."
      expectedFeatures={expectedFeatures}
    />
  );
};

export default CulturePage;