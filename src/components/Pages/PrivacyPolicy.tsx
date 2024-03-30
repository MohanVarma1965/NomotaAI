import React from 'react';
import { useTitle } from '../Effects';

const PrivacyPolicy: React.FC = () => {
  useTitle('Nomota AI - Privacy Policy');
  return (
    <div>
      <h1>Privacy Policy</h1>
      <h2>Information We Collect</h2>
      <p>
        We collect information from you when you create an account, use our platform, or communicate with us. This
        information may include your name, email address, phone number, and any other information you choose to provide.
      </p>

      <h2>Use of Information</h2>
      <p>
        We use the information we collect to provide you with our services, to communicate with you, to improve our
        platform, and to comply with legal requirements.
      </p>

      <h2>Sharing of Information</h2>
      <p>
        We will not share your personal information with third parties, except as required by law or as necessary to
        provide you with our services.
      </p>

      <h2>Security of Information</h2>
      <p>
        We take the security of your personal information very seriously and have implemented appropriate measures to
        protect it. However, no method of transmission over the internet, or method of electronic storage, is 100%
        secure.
      </p>

      <h2>Access to Information</h2>
      <p>
        You have the right to access, update, or delete your personal information. You may also choose to close your
        account at any time.
      </p>

      <h2>Changes to Our Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time, and any changes will be posted on our platform. Your
        continued use of our platform after any changes have been posted constitutes your acceptance of the modified
        Privacy Policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
