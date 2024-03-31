import React from 'react';
import { useTitle } from '../Effects';

const AcceptableUse: React.FC = () => {
  useTitle('Nomota AI - Acceptable Use');

  return (
    <div className="p-6 py-12 text-gray-800 bg-white sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-center md:text-4xl">Acceptable Use Policy</h1>
        
        <p className="mb-4 text-lg">
          Nomota AI takes the responsible use of our platform and the protection of our users' data very seriously.
          That's why we've put together this Acceptable Use Policy to outline the acceptable and unacceptable use of our platform.
        </p>

        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">Prohibited Use</h2>
          <p>The following uses of our platform are strictly prohibited:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Infringement of intellectual property rights, including the unauthorized use of trademarks, copyrighted material, or other proprietary information.</li>
            <li>Spamming, including the sending of unsolicited emails, messages, or other communications.</li>
            <li>Engaging in illegal or fraudulent activities.</li>
            <li>Use of the platform in a manner that could harm our reputation or that of our partners.</li>
          </ul>
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
