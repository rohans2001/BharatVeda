import { Brain } from 'lucide-react';
import ComingSoon from './ComingSoon';

const PhilosophyPage = () => {
  const expectedFeatures = [
    "Comprehensive study of six schools of Hindu philosophy with comparative analysis",
    "Buddhist and Jain philosophical traditions with their unique contributions to ethics",
    "Interactive exploration of concepts like dharma, karma, and moksha with practical applications",
    "Meditation techniques and spiritual practices from different traditions",
    "Philosophical debates and dialogues that shaped intellectual discourse",
    "Modern interpretations and relevance of ancient wisdom in contemporary life",
    "Biographical sketches of great philosophers like Shankara, Nagarjuna, and Ramanuja",
    "Cross-cultural comparisons with Greek and other ancient philosophical systems",
    "Practical wisdom for daily life drawn from timeless philosophical insights"
  ];

  return (
    <ComingSoon
      icon={Brain}
      title="Philosophy"
      description="Explore the profound philosophical traditions that have guided human consciousness for millennia. From questions of ultimate reality to practical ethics, discover how ancient Indian philosophy offers timeless wisdom for modern seekers."
      expectedFeatures={expectedFeatures}
    />
  );
};

export default PhilosophyPage;