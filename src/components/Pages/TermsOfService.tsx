import React from 'react';
import { useTitle } from '../Effects';

const TermsOfService: React.FC = () => {
  useTitle('Nomota AI - Terms of Service');

  return (
    <div className="p-8 py-10 bg-white sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold">Terms of Service</h1>
        
        <h2 className="mt-8 mb-4 text-xl font-semibold">Terms of Service for the usage of our CGP/GPU marketplace</h2>
        <p className="mb-6">The terms of usage will be published soon.</p>

        <h2 className="mb-4 text-xl font-semibold">Terms of Service for the usage of our bots</h2>
        <h3 className="mt-6 mb-4 text-lg font-semibold">User Responsibility</h3>
        <p className="mb-6">
          You are solely responsible for your use of our platform and for ensuring that your use complies with all
          applicable laws and regulations.
        </p>
        <h3 className="mb-4 text-lg font-semibold">Content</h3>
        <p className="mb-6">
          You are solely responsible for the content that you create, upload, or otherwise make available on our platform.
          You grant us a non-exclusive, royalty-free, worldwide, perpetual license to use, copy, modify, and distribute
          your content in connection with our platform.
        </p>
        <h3 className="mb-4 text-lg font-semibold">Proprietary Rights</h3>
        <p className="mb-6">
          Our platform and all intellectual property rights related to it are the exclusive property of PAAL and its
          licensors. You acknowledge and agree that you have no right to use our platform or any related intellectual
          property except as expressly provided in this Agreement.
        </p>
        <h3 className="mb-4 text-lg font-semibold">Disclaimer of Warranties</h3>
        <p className="mb-6">
          Our platform is provided on an "as is" and "as available" basis. We make no representations or warranties of any
          kind, express or implied, as to the operation of our platform or the information, content, materials, or
          products included on our platform.
        </p>
        <h3 className="mb-4 text-lg font-semibold">Limitation of Liability</h3>
        <p className="mb-6">
          We will not be liable for any damages of any kind arising from the use of our platform, including but not
          limited to direct, indirect, incidental, punitive, and consequential damages.
        </p>
        <h3 className="mb-4 text-lg font-semibold">Changes to the Agreement</h3>
        <p className="mb-6">
          We may modify this Agreement from time to time, and any changes will be posted on our platform. Your continued
          use of our platform after any changes have been posted constitutes your acceptance of the modified Agreement.
        </p>
        <h3 className="mb-4 text-lg font-semibold">Termination</h3>
        <p>
          We may terminate this Agreement at any time, for any reason, with or without notice. Upon termination, you will
          no longer have the right to access or use our platform.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
