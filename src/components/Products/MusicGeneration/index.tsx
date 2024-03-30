import React from "react";
import { useTitle } from "../../Effects";

const MusicGeneration: React.FC = () => {
  useTitle("Nomota AI - Music Generation")
  return (
    <div className="py-12 text-center bg-white max-md:p-8">
      MusicGeneration
    </div>
  );
};

export default MusicGeneration;
