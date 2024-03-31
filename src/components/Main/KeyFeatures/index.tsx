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
    <section className="key-features bg-black text-white py-16 px-4 relative overflow-hidden">
      <h2 className="key-features-title text-4xl font-bold text-center mb-8 animate-float">Key Features</h2>
      <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 mx-auto max-w-7xl" data-aos="fade-right"
          data-aos-delay="100">
        {features.slice(0, 3).map((feature, index) => (
          <div className="feature-card transform transition duration-300 hover:scale-105 hover:shadow-xl" key={index}>
            <img src={feature.icon} alt={feature.title} className="feature-icon w-20 h-20 mx-auto mb-4" />
            <h3 className="feature-title font-bold text-2xl mb-4">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mx-auto max-w-4xl justify-items-center" data-aos="fade-left"
          data-aos-delay="100">
        {features.slice(3).map((feature, index) => (
          <div
            className="feature-card transform transition duration-300 hover:scale-105 hover:shadow-xl"
            key={index + 3}
          >
            <img src={feature.icon} alt={feature.title} className="feature-icon w-20 h-20 mx-auto mb-4" />
            <h3 className="feature-title font-bold text-2xl mb-4">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
