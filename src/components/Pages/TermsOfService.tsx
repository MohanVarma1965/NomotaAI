import React from "react";
import { useTitle } from "../Effects";

const TermsOfService: React.FC = () => {
  useTitle("Nomota AI - Terms of Service")
  return (
    <div>
      <h1>Terms of Service</h1>
      <h1>Terms of Service for the usage of our CGP/GPU marketplace</h1>
      <p>The terms of usage will be published soon</p>

      <h1>Terms of Service for the usage of our bots</h1>
      <h2>User Responsibility</h2>
      <p>
        You are solely responsible for your use of our platform and for ensuring that your use complies with all applicable laws and regulations.
      </p>
      <h2>Content</h2>
      <p>You are solely responsible for the content that you create, upload, or otherwise make available on our platform. You grant us a non-exclusive, royalty-free, worldwide, perpetual license to use, copy, modify, and distribute your content in connection with our platform.</p>
      <h2>Proprietary Rights</h2>
      <p>Our platform and all intellectual property rights related to it are the exclusive property of PAAL and its licensors. You acknowledge and agree that you have no right to use our platform or any related intellectual property except as expressly provided in this Agreement.</p>

      <h2>Disclaimer of Warranties</h2>
      <p>Our platform is provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of our platform or the information, content, materials, or products included on our platform.</p>

      <h2>Limitation of Liability</h2>
      <p>We will not be liable for any damages of any kind arising from the use of our platform, including but not limited to direct, indirect, incidental, punitive, and consequential damages.</p>

      <h2>Changes to the Agreement</h2>
      <p>We may modify this Agreement from time to time, and any changes will be posted on our platform. Your continued use of our platform after any changes have been posted constitutes your acceptance of the modified Agreement.</p>

      <h2>Termination</h2>
      <p>We may terminate this Agreement at any time, for any reason, with or without notice. Upon termination, you will no longer have the right to access or use our platform.</p>
    </div>
  );
};

export default TermsOfService;
