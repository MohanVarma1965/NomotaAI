import React from 'react';
import { useTitle } from '../../Effects';
import MarketPlaceItem from './MarketPlaceItem';
import Roadmap from './Roadmap';

const data = [
  {
    title: 'Accessing Resources',
    items: [
      {
        subtitle: 'Browse and Select',
        description:
          'Users start by browsing the marketplace for available CPU and GPU resources. Listings provide detailed specifications, performance ratings, and pricing, enabling users to select the most suitable options for their needs.',
      },
      {
        subtitle: 'Instant Provisioning',
        description:
          "Once a selection is made, the resources are provisioned for the user's project almost instantly, thanks to the automated matching and allocation system. This efficiency minimizes downtime and accelerates project timelines.",
      },
      {
        subtitle: 'Seamless Integration',
        description:
          "The provisioned resources can be seamlessly integrated into the user's workflow, whether they're running complex simulations, rendering high-quality video content, or performing data analysis. Nomota AI's infrastructure ensures compatibility and ease of use.",
      },
    ],
  },
  {
    title: 'Pay-As-You-Go Pricing Model',
    items: [
      {
        subtitle: 'Transparent Costs',
        description:
          'Pricing is straightforward and transparent, based on the amount of computational power used and the duration of usage. This model eliminates the need for significant upfront investments, making high-performance computing accessible to everyone.',
      },
      {
        subtitle: 'Flexible Usage',
        description:
          "Users have the flexibility to scale their resource consumption up or down based on the project's requirements. This means you pay only for what you use, when you use it, without being locked into long-term contracts or commitments.",
      },
      {
        subtitle: 'Billing and Payment',
        description: "Payments can be made using Nomota AI's tokens, ETH or USDT.",
      },
    ],
  },
  {
    title: 'Benefits of the Pay-As-You-Go Model',
    items: [
      {
        subtitle: 'Cost-Effective',
        description:
          'This model allows users to manage their computing costs more effectively, aligning expenses with project budgets and avoiding wasted resources.',
      },
      {
        subtitle: 'Scalability',
        description:
          'It offers the ability to quickly adjust to changing computational needs, providing the agility to respond to project demands without the constraints of fixed resources.',
      },
      {
        subtitle: 'Accessibility',
        description:
          'By lowering the barrier to entry for high-performance computing, the pay-as-you-go model opens up new possibilities for innovation and creativity across various fields.',
      },
    ],
  },
];

const Marketplace: React.FC = () => {
  useTitle('Nomota AI - GPU and VPS marketplace');
  return (
    <div className="p-8 py-12 text-gray-800 bg-white sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">VPS & GPU Ecosystem</h1>
        <h2 className="mb-8 text-xl font-semibold md:text-2xl">Decentralized computing power</h2>

        <p className="mb-6 text-gray-600">
          Welcome to Nomota AI's CPU/GPU Marketplace, a groundbreaking platform where technology meets creativity,
          unlocking unparalleled opportunities for both resource providers and users.
        </p>

        <p className=" mb-6 text-gray-600">
          Nomota AI's marketplace is built on principles of transparency, efficiency, and mutual benefit. With advanced
          matching algorithms, we ensure that resource seekers are paired with the most suitable providers, guaranteeing
          an optimal balance of performance and cost.
        </p>
        <div className="flex flex-col items-center justify-center ">
          <img src="/cpu.png" style={{ maxWidth: '250px', width: '100%' }} alt="CPU" />
        </div>

        <div>
          <h2 className="my-8 text-xl font-semibold md:text-2xl">Provide CPU and GPU power</h2>
          <p className="mb-6 text-gray-600">
            For those with spare CPU/GPU capacity, our platform represents a unique opportunity to contribute to the
            creative community while earning rewards. By listing your resources, you become an integral part of a
            vibrant ecosystem, supporting a wide range of projects and innovations.
          </p>
          <p className="mb-6 text-gray-600">Computing rewards: to be announced as soon as possible</p>
        </div>
        <div>
          <h2 className="mb-8 text-xl font-semibold md:text-2xl">Pay-as-you-go access to CPU and GPU power</h2>
          <p className="mb-6 text-gray-600">
            Individuals and organizations in need of computational resources can harness the power of available CPU and
            GPU power through a flexible and efficient pay-as-you-go model. This approach is gives you access to
            high-performance computing, making it accessible for projects of all sizes and scopes, from small-scale
            creative endeavors to large, computationally intensive tasks. Here's how it works:
          </p>
          {data.map((item) => (
            <MarketPlaceItem {...item} />
          ))}
        </div>
      </div>
      <div className="my-8 flex flex-col items-center justify-center">
        <Roadmap />
      </div>
    </div>
  );
};

export default Marketplace;
