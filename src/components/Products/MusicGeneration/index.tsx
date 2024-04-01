import React from 'react';
import { useTitle } from '../../Effects';
import Roadmap from './Roadmap';

const MusicGeneration: React.FC = () => {
  useTitle('Nomota AI - Music Generation');
  return (
    <div className="p-8 py-12 text-gray-800 bg-white sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">Music Generation: Beta Phase to be launched May 2024</h1>
        <p className="mb-6 text-gray-600">
          Step into the beta phase of Nomota AI's Music Generation, a symphony of AI innovation harmonizing with the
          rich world of music composition. Our Music Generation tool empowers you to create unique melodies and
          harmonies, designed to cater to both musicians and enthusiasts alike. In this beta phase, we are meticulously
          adjusting the algorithms to capture the essence of music, ensuring every tune resonates with emotion and depth
          as we prepare for a full-scale launch.
        </p>

        <div className="flex flex-col items-center justify-center ">
          <img src="/products/music.png" style={{ maxWidth: '250px', width: '100%' }} alt="Musicimage" />
        </div>

        <h2 className="my-8 text-xl font-bold md:text-2xl">Key Features</h2>
        <h3 className="mb-3 text-xl font-semibold">Dynamic Composition Tools</h3>
        <p className="mb-6 text-gray-600">
          Compose full-bodied music pieces with tools that cater to creativity across genres, from classical to
          contemporary beats.
        </p>
        <h3 className="mb-3 text-xl font-semibold">Versatile Instrument Selection</h3>
        <p className="mb-6 text-gray-600">
          Choose from a wide array of virtual instruments to bring the desired feel and texture to your music.
        </p>
        <h3 className="mb-3 text-xl font-semibold">Intuitive Design Interface</h3>
        <p className="mb-6 text-gray-600">
          Our user-friendly platform simplifies music creation, making composition accessible to novices and
          professionals alike.
        </p>
        <h3 className="mb-3 text-xl font-semibold">Quick Production</h3>
        <p className="mb-6 text-gray-600">
          Turn inspiration into reality with fast processing that translates your musical ideas into audible tracks
          promptly.
        </p>
        <h3 className="mb-3 text-xl font-semibold">Personalized Editing Options</h3>
        <p className="mb-6 text-gray-600">
          Fine-tune your compositions with a variety of editing options to perfect every note and rhythm.
        </p>

        <h2 className="my-8 text-xl font-bold md:text-2xl">Beta Limitations</h2>
        <h3 className="mb-3 text-xl font-semibold">Daily Output Limit</h3>
        <p className="mb-6 text-gray-600">
          During the beta phase, there is a cap on how much music each user can generate daily to optimize our server
          capabilities.
        </p>
        <h3 className="mb-3 text-xl font-semibold">Interaction Quota</h3>
        <p className="mb-6 text-gray-600">
          We have implemented a limit on the number of interactions per session to ensure an equitable and smooth
          experience for all users.
        </p>

        <p className="mb-6 text-gray-600">
          The beta limitations are crucial in helping us provide a stable and evolving music generation service. Your
          active participation and feedback are invaluable to us as we fine-tune Nomota AI's Music Generation to
          orchestrate a platform where technology orchestrates creativity.
        </p>

        <div className="my-8 flex flex-col items-center justify-center">
          <Roadmap />
        </div>
      </div>
    </div>
  );
};

export default MusicGeneration;
