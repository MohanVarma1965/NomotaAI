import React from 'react';
import { useTitle } from '../../Effects';
import Roadmap from './Roadmap';

const ImageGeneration: React.FC = () => {
  useTitle('Nomota AI - Generate any image by just describing it');
  return (
    <div className="py-12 text-center bg-white max-md:p-8">
      <h1>Image Generation: Beta Phase</h1>
      <p>
        Welcome to the beta phase of Nomota AI's Image Generation, an innovative platform where creativity meets
        cutting-edge technology. Our Image Generation tool is designed to transform your ideas into visual masterpieces
        with just a few clicks. As we fine-tune our algorithms and user experience, we invite you to explore the vast
        possibilities of AI-powered creativity during this beta phase. Please note that certain features and
        capabilities are currently being optimized for a future full-scale launch.
      </p>
      <img src="/image.png" />
      <h2>Key Features</h2>
      <p>
        Our Image Generation platform offers a suite of features designed to cater to artists, designers, and anyone
        looking to bring their creative visions to life. These include:
      </p>
      <div>
        <h3>High-Quality Image Creation</h3>
        <p>Generate stunning images in high resolution, perfect for a range of creative projects.</p>
        <h3>Versatile Styles and Themes</h3>
        <p>
          Whether you're into digital art, classic styles, or something entirely unique, our tool adapts to your
          creative needs.
        </p>
        <h3>Intuitive Interface</h3>
        <p>
          Our user-friendly interface makes creating artwork accessible to everyone, regardless of their technical skill
          level.
        </p>
        <h3>Fast Processing Times</h3>
        <p>Experience rapid generation times, allowing you to bring your ideas to life almost instantly.</p>
        <h3>Customization Options</h3>
        <p>
          Tweak and refine your creations with various customization options, ensuring the final output is exactly as
          you envisioned.
        </p>
      </div>

      <h2>Beta Limitations</h2>
      <p>
        During the beta phase of Nomota AI's Image Generation, we're implementing temporary limitations to ensure the
        stability and performance of our service:
      </p>
      <div>
        <h3>Daily Usage Limit</h3>
        <p>
          Users are limited to generating a certain number of 10 images per day, helping us manage the load on our
          servers effectively.
        </p>
        <h3>Interaction Cap</h3>
        <p>
          To provide all users with a smooth and responsive experience, we've set a cap on the number of interactions
          per session.
        </p>
        <p>
          These limitations are in place to guarantee every user benefits from high-quality image generation as we
          continue to improve and scale our services. Your feedback during this beta phase is invaluable to us, helping
          shape the future of Nomota AI's Image Generation.
        </p>
      </div>
    </div>
  );
};

export default ImageGeneration;
