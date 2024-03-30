import React from "react";
import { useTitle } from "../../Effects";

const Staking: React.FC = () => {
  useTitle("Nomota AI - Get rewarded for staking your tokens - 7% - 15% APY")
  return (
    <div className="py-12 text-center bg-white max-md:p-8">
      Staking
    </div>
  );
};

export default Staking;
