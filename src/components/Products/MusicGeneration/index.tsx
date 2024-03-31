import React from 'react';
import { useTitle } from '../../Effects';
import Roadmap from './Roadmap';

const MusicGeneration: React.FC = () => {
  useTitle('Nomota AI - Music Generation');
  return (
    <div className="py-12 text-center bg-white max-md:p-8">
      <h1>Music Generation: Beta Phase to be launched May 2024</h1>
      <p>
        Step into the beta phase of Nomota AI's Music Generation, a symphony of AI innovation harmonizing with the rich
        world of music composition. Our Music Generation tool empowers you to create unique melodies and harmonies,
        designed to cater to both musicians and enthusiasts alike. In this beta phase, we are meticulously adjusting the
        algorithms to capture the essence of music, ensuring every tune resonates with emotion and depth as we prepare
        for a full-scale launch.
      </p>
      <img src="/music.png" />

      <h2>Key Features</h2>
      <h3>Dynamic Composition Tools</h3>
      <p>
        Compose full-bodied music pieces with tools that cater to creativity across genres, from classical to
        contemporary beats.
      </p>
      <h3>Versatile Instrument Selection</h3>
      <p>Choose from a wide array of virtual instruments to bring the desired feel and texture to your music.</p>
      <h3>Intuitive Design Interface</h3>
      <p>
        Our user-friendly platform simplifies music creation, making composition accessible to novices and professionals
        alike.
      </p>
      <h3>Quick Production</h3>
      <p>
        Turn inspiration into reality with fast processing that translates your musical ideas into audible tracks
        promptly.
      </p>
      <h3>Personalized Editing Options</h3>
      <p>Fine-tune your compositions with a variety of editing options to perfect every note and rhythm.</p>

      <h2>Beta Limitations</h2>
      <h3>Daily Output Limit</h3>
      <p>
        During the beta phase, there is a cap on how much music each user can generate daily to optimize our server
        capabilities.
      </p>
      <h3>Interaction Quota</h3>
      <p>
        We have implemented a limit on the number of interactions per session to ensure an equitable and smooth
        experience for all users.
      </p>

      <p>
        The beta limitations are crucial in helping us provide a stable and evolving music generation service. Your
        active participation and feedback are invaluable to us as we fine-tune Nomota AI's Music Generation to
        orchestrate a platform where technology orchestrates creativity.
      </p>

      <Roadmap />
    </div>
  );
};

export default MusicGeneration;
