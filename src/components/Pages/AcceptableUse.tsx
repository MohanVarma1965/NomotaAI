import React from "react";
import { useTitle } from "../Effects";

const AcceptableUse: React.FC = () => {
  useTitle("Nomota AI - Acceptable Use")
  return (
    <div>
      <h1>Acceptable Use Policy</h1>
      <p>
        Nomota AI takes the responsible use of our platform and the protection of our users' data very seriously. That's why we've put together this Acceptable Use Policy to outline the acceptable and unacceptable use of our platform.
      </p>

      <h2>Prohibited Use</h2>
      <p>
        The following uses of our platform are strictly prohibited:
      </p>
      <ul>
        <li>
          Infringement of intellectual property rights, including the unauthorized use of trademarks, copyrighted material, or other proprietary information.
        </li>
        <li>
          Spamming, including the sending of unsolicited emails, messages, or other communications.
        </li>
        <li>
          Engaging in illegal or fraudulent activities.
        </li>
        <li>
          Use of the platform in a manner that could harm our reputation or that of our partners.
        </li>
      </ul>

      <h2>User Responsibility</h2>
      <p>
        As a user of our platform, you are solely responsible for the content you create and the information you share. You are also responsible for ensuring that your use of our platform complies with all applicable laws and regulations.
      </p>

      <h2>Monitoring</h2>
      <p>
        While we do not actively monitor the content or activities of our users, we reserve the right to review and remove any content or information that we determine, in our sole discretion, to violate this Acceptable Use Policy or applicable law.
      </p>
      <h2>Reporting</h2>
      <p>
        If you encounter any content or activities that you believe violate this Acceptable Use Policy or applicable law, please report the violation to our support team.
      </p>
      <h2>Enforcement</h2>
      <p>
        We reserve the right to enforce this Acceptable Use Policy, including but not limited to, the suspension or termination of a user's account for any violations.
      </p>

      <p>
        By using our platform, you agree to comply with this policy and to be responsible for your actions. We take the responsible use of our platform and the protection of our users' data very seriously, and we will take appropriate action to enforce this policy and ensure the security and privacy of our users' data.
      </p>
    </div>
  );
};

export default AcceptableUse;
