import React from 'react';
import { useTitle } from '../Effects';

const AcceptableUse: React.FC = () => {
  useTitle('Nomota AI - Acceptable Use');

  return (
    <div className="p-6 py-12 text-gray-800 bg-white sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">Acceptable Use Policy</h1>
        
        <p className="mb-4 text-lg">
          Nomota AI takes the responsible use of our platform and the protection of our users' data very seriously.
          That's why we've put together this Acceptable Use Policy to outline the acceptable and unacceptable use of our platform.
        </p>

        <section className="mb-8">
          <h2 className="mb-6 text-3xl font-semibold text-gray-900">Prohibited Use</h2>
          <p className="mb-4 text-lg text-gray-700">The following uses of our platform are strictly prohibited:</p>
          <div className="pl-4">
            <ul className="space-y-4 list-disc">
              <li className="flex items-start">
                <svg className="flex-shrink-0 w-6 h-6 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm2 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 100 2h6a1 1 0 100-2H7zm-1 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                <p className="flex-1 text-gray-600">Infringement of intellectual property rights, including the unauthorized use of trademarks, copyrighted material, or other proprietary information.</p>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 w-6 h-6 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20z" /><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm0 8a7 7 0 00-5.468-6.763A5.002 5.002 0 0110 9a5.002 5.002 0 015.468 1.237A7 7 0 0010 17z" /></svg>
                <p className="flex-1 text-gray-600">Spamming, including the sending of unsolicited emails, messages, or other communications.</p>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 w-6 h-6 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-7-8a7 7 0 1114 0 7 7 0 01-14 0z" clipRule="evenodd" /><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3a1 1 0 001 1h3a1 1 0 110 2h-3a1 1 0 00-1-1V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
                <p className="flex-1 text-gray-600">Engaging in illegal or fraudulent activities.</p>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 w-6 h-6 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-7-8a7 7 0 1114 0 7 7 0 01-14 0z" clipRule="evenodd" /><path fillRule="evenodd" d="M13.293 9.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L9 12.586l3.293-3.293z" clipRule="evenodd" /></svg>
                <p className="flex-1 text-gray-600">Use of the platform in a manner that could harm our reputation or that of our partners.</p>
              </li>
            </ul>
          </div>
        </section>


        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">User Responsibility</h2>
          <p>
            As a user of our platform, you are solely responsible for the content you create and the information you share.
            You are also responsible for ensuring that your use of our platform complies with all applicable laws and regulations.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">Monitoring</h2>
          <p>
            While we do not actively monitor the content or activities of our users, we reserve the right to review and remove
            any content or information that we determine, in our sole discretion, to violate this Acceptable Use Policy or applicable law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">Reporting</h2>
          <p>
            If you encounter any content or activities that you believe violate this Acceptable Use Policy or applicable law,
            please report the violation to our support team.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">Enforcement</h2>
          <p>
            We reserve the right to enforce this Acceptable Use Policy, including but not limited to, the suspension or termination
            of a user's account for any violations.
          </p>
        </section>

        <p className="text-lg">
          By using our platform, you agree to comply with this policy and to be responsible for your actions. We take the responsible
          use of our platform and the protection of our users' data very seriously, and we will take appropriate action to enforce
          this policy and ensure the security and privacy of our users' data.
        </p>
      </div>
    </div>
  );
};

export default AcceptableUse;
