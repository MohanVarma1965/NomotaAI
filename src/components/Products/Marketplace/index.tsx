import React from "react";
import { useTitle } from "../../Effects";

const Marketplace: React.FC = () => {
  useTitle("Nomota AI - GPU and VPS marketplace")
  return (
    <div className="py-12 text-center bg-white max-md:p-8">
      Marketplace
    </div>
  );
};

export default Marketplace;
