import React from 'react';
import { useTitle } from '../Effects';

const PrivacyPolicy: React.FC = () => {
  useTitle('Nomota AI - Privacy Policy');

  return (
    <div className="p-8 mt-8 text-gray-800 bg-white md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">Information We Collect</h2>
          <p className="mb-4">
            We collect information from you when you create an account, use our platform, or communicate with us. This
            information may include your name, email address, phone number, and any other information you choose to provide.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">Use of Information</h2>
          <p className="mb-4">
            We use the information we collect to provide you with our services, to communicate with you, to improve our
            platform, and to comply with legal requirements.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">Sharing of Information</h2>
          <p className="mb-4">
            We will not share your personal information with third parties, except as required by law or as necessary to
            provide you with our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">Security of Information</h2>
          <p className="mb-4">
            We take the security of your personal information very seriously and have implemented appropriate measures to
            protect it. However, no method of transmission over the internet, or method of electronic storage, is 100%
            secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">Access to Information</h2>
          <p className="mb-4">
            You have the right to access, update, or delete your personal information. You may also choose to close your
            account at any time.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">Changes to Our Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time, and any changes will be posted on our platform. Your
            continued use of our platform after any changes have been posted constitutes your acceptance of the modified
            Privacy Policy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
