import React,{ useEffect } from 'react';
import './KeyFeatures.css';

import AOS from 'aos';
import 'aos/dist/aos.css'

const features = [
  {
    icon: 'KeyFeatures_1.jpg',
    title: 'GPUs',
    description: 'Access the latest Ada Lovelace and Ampere options via CPU passthrough for maximum performance.',
  },
  {
    icon: 'KeyFeatures_2.jpg',
    title: 'Marketplace',
    description:
      'Leverage and transact in VPS tokens by contributing or utilizing AI models & applications within our Marketplace.',
  },
  {
    icon: 'KeyFeatures_1.jpg',
    title: 'AI-as-a-Service (AIaaS)',
    description:
      'Subscription-based access to turn-key AI services to utilize data analysis, enhance customer service, and improve operational efficiency with minimal initial investment.',
  },
  {
    icon: 'KeyFeatures_2.jpg',
    title: 'Revenue Sharing',
    description:
      "Stake VPS to earn a share of the VPS Ecosystem's revenues, including AI resources, charitable endeavors, and decentralized research and development projects.",
  },
  {
    icon: 'KeyFeatures_1.jpg',
    title: 'Decentralization',
    description:
      'Our AI powered future is built on inclusivity, offering everyone,unbanked or anywhere globally, equitable access to computing via $VPS token—truly decentralizing technology for all.',
  },
];

const KeyFeatures: React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className="relative px-4 py-16 overflow-hidden text-white bg-black key-features">
      <h2 className="mb-8 text-4xl font-bold text-center key-features-title animate-float">Key Features</h2>
      <div className="grid grid-cols-1 gap-8 mx-auto mb-8 features-grid md:grid-cols-3 max-w-7xl" data-aos="fade-right"
          data-aos-delay="100">
        {features.slice(0, 3).map((feature, index) => (
          <div className="transition duration-300 transform feature-card hover:scale-105 hover:shadow-xl" key={index}>
            <img src={feature.icon} alt={feature.title} className="w-20 h-20 mx-auto mb-4 feature-icon" />
            <h3 className="mb-4 text-2xl font-bold feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto mb-8 features-grid md:grid-cols-2 justify-items-center" data-aos="fade-left"
          data-aos-delay="100">
        {features.slice(3).map((feature, index) => (
          <div
            className="transition duration-300 transform feature-card hover:scale-105 hover:shadow-xl"
            key={index + 3}
          >
            <img src={feature.icon} alt={feature.title} className="w-20 h-20 mx-auto mb-4 feature-icon" />
            <h3 className="mb-4 text-2xl font-bold feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
