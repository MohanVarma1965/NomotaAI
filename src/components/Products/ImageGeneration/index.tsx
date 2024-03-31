import React from 'react';
import { useTitle } from '../../Effects';
import Roadmap from './Roadmap';

const ImageGeneration: React.FC = () => {
  useTitle('Nomota AI - Generate any image by just describing it');
  return (
    <div className="p-8 py-12 text-gray-800 bg-white sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">Image Generation: Beta Phase</h1>
        <p className="mb-6 text-gray-600">
          Welcome to the beta phase of Nomota AI's Image Generation, an innovative platform where creativity meets
          cutting-edge technology. Our Image Generation tool is designed to transform your ideas into visual
          masterpieces with just a few clicks. As we fine-tune our algorithms and user experience, we invite you to
          explore the vast possibilities of AI-powered creativity during this beta phase. Please note that certain
          features and capabilities are currently being optimized for a future full-scale launch.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3">
          <a
            href="https://t.me/nomotaimgbot"
            target="_blank"
            className="flex items-center justify-center px-3 py-3 transition-colors duration-300 border border-gray-600 rounded-lg hover:border-pink-500 hover:bg-pink-500 hover:bg-opacity-25"
          >
            Try our image bot right now
          </a>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <img src="/products/image.png" style={{ maxWidth: '250px', width: '100%' }} alt="Art image" />
        </div>
        <h2 className="my-8 text-xl font-bold md:text-2xl">Key Features</h2>
        <p className="mb-6 text-gray-600">
          Our Image Generation platform offers a suite of features designed to cater to artists, designers, and anyone
          looking to bring their creative visions to life. These include:
        </p>
        <div>
          <h3 className="mb-3 text-xl font-semibold">High-Quality Image Creation</h3>
          <p className="mb-6 text-gray-600">
            Generate stunning images in high resolution, perfect for a range of creative projects.
          </p>
          <h3 className="mb-3 text-xl font-semibold">Versatile Styles and Themes</h3>
          <p className="mb-6 text-gray-600">
            Whether you're into digital art, classic styles, or something entirely unique, our tool adapts to your
            creative needs.
          </p>
          <h3 className="mb-3 text-xl font-semibold">Intuitive Interface</h3>
          <p className="mb-6 text-gray-600">
            Our user-friendly interface makes creating artwork accessible to everyone, regardless of their technical
            skill level.
          </p>
          <h3 className="mb-3 text-xl font-semibold">Fast Processing Times</h3>
          <p className="mb-6 text-gray-600">
            Experience rapid generation times, allowing you to bring your ideas to life almost instantly.
          </p>
          <h3 className="mb-3 text-xl font-semibold">Customization Options</h3>
          <p className="mb-6 text-gray-600">
            Tweak and refine your creations with various customization options, ensuring the final output is exactly as
            you envisioned.
          </p>
        </div>
        <div className="my-8 flex flex-col items-center justify-center">
          <Roadmap />
        </div>
        <h2 className="my-8 text-xl font-bold md:text-2xl">Beta Limitations</h2>
        <p className="mb-6 text-gray-600">
          During the beta phase of Nomota AI's Image Generation, we're implementing temporary limitations to ensure the
          stability and performance of our service:
        </p>
        <div>
          <h3 className="mb-3 text-xl font-semibold">Daily Usage Limit</h3>
          <p className="mb-6 text-gray-600">
            Users are limited to generating a certain number of 10 images per day, helping us manage the load on our
            servers effectively.
          </p>
          <h3 className="mb-3 text-xl font-semibold">Interaction Cap</h3>
          <p className="mb-6 text-gray-600">
            To provide all users with a smooth and responsive experience, we've set a cap on the number of interactions
            per session.
          </p>
          <p className="mb-6 text-gray-600">
            These limitations are in place to guarantee every user benefits from high-quality image generation as we
            continue to improve and scale our services. Your feedback during this beta phase is invaluable to us,
            helping shape the future of Nomota AI's Image Generation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageGeneration;
