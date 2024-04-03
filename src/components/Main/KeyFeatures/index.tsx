import React, { useEffect } from 'react';
import './KeyFeatures.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: '/cpu.png',
    title: 'VPS / GPU Marketplace',
    to: '/products/marketplace',
    description:
      'A groundbreaking platform where technology meets creativity, unlocking unparalleled opportunities for both resource providers and users',
  },
  {
    icon: '/chat.png',
    title: 'Real-Time Chat',
    to: '/products/chatbot',
    description: 'An advanced AI-driven platform designed to engage users in natural, human-like conversations',
  },
  {
    icon: '/image.png',
    title: 'Innovative image generation',
    to: '/products/image-generation',
    description: 'Generate stunning images in high resolution, perfect for a range of creative projects',
  },
  {
    icon: '/voice.png',
    title: 'Lifelike voice synthesis',
    to: '/products/voice-synthesis',
    description:
      'Transforms text into lifelike speech, enabling seamless creation of voiceovers, audiobooks, and interactive voice responses with unmatched realism',
  },
  {
    icon: '/music.png',
    title: 'Music Generation',
    to: '/products/music-generation',
    description:
      'Leveraging the power of AI to compose original music, offering creators an endless stream of customizable tunes for videos, games, and personal projects',
  },
  {
    icon: '/staking.png',
    title: 'Staking',
    to: '/products/staking',
    description:
      'Stake your $NAI to get 7% to 15% APY. Staking rewards can be used to purchase CPU/GPU, and can be used as credits for chat, image, voice and music generation',
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
      <h2 className="mb-8 text-4xl font-bold text-center key-features-title animate-float">Our products</h2>
      <div
        className="grid grid-cols-1 gap-8 mx-auto mb-8 features-grid sm:grid-cols-2 md:grid-cols-3 max-w-7xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {features.map((feature, index) => (
          <Link
            to={feature.to}
            className="transition duration-300 transform feature-card hover:scale-105 hover:shadow-xl"
            key={index}
          >
            <img src={feature.icon} alt={feature.title} className="w-20 h-20 mx-auto mb-4 feature-icon" />
            <h3 className="mb-4 text-2xl font-bold feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
