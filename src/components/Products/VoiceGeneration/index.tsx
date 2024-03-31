import React from 'react';
import { useTitle } from '../../Effects';
import Roadmap from './Roadmap';

const VoiceGeneration: React.FC = () => {
  useTitle('Nomota AI - Voice synthesis like you never heard before');
  return (
    <div className="p-8 py-12 text-gray-800 bg-white sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">Voice Generation: Beta Phase to be launched April 2024</h1>
        <p className="mb-6 text-gray-600">
          Welcome to the beta phase of Nomota AI's Voice Generation, where cutting-edge AI meets the art of sound. Our
          Voice Generation tool is crafted to convert text into natural, lifelike speech, opening up a world of auditory
          possibilities. During this beta phase, we're fine-tuning every nuance to perfect the human-like inflections
          and ensure a seamless listening experience, all in preparation for a broader launch.
        </p>
        <div className="flex flex-col items-center justify-center ">
          <img src="/products/voice.png" style={{ maxWidth: '250px', width: '100%' }} alt="Voice image" />
        </div>
        <div>
          <h2 className="my-8 text-xl font-bold md:text-2xl">Key Features</h2>
          <h3>Realistic Voice Synthesis</h3>
          <p className="mb-6 text-gray-600">
            Create voices that convey emotion and clarity, ideal for making your content accessible and engaging.
          </p>
          <h3>Multiple Language Capabilities</h3>
          <p className="mb-6 text-gray-600">
            Our Voice Generation bot speaks the global language of innovation, supporting multiple languages to connect
            with audiences worldwide.
          </p>
          <h3>User-Friendly Interface</h3>
          <p className="mb-6 text-gray-600">
            Effortlessly transform text to speech with an interface that's simple enough for beginners, yet powerful for
            professionals.
          </p>
          <h3>Speed and Efficiency</h3>
          <p className="mb-6 text-gray-600">
            Generate speech in moments, enabling rapid production of voiceovers, readings, and more, without
            compromising on quality.
          </p>
          <h3>Customizable Speech Patterns</h3>
          <p className="mb-6 text-gray-600">
            Adjust speaking rate, pitch, and tone for each voice to fit the specific needs of your project.
          </p>
        </div>
        <div className="my-8 flex flex-col items-center justify-center">
          <Roadmap />
        </div>
      </div>
    </div>
  );
};

export default VoiceGeneration;
