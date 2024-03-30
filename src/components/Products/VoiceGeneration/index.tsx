import React from "react";
import { useTitle } from "../../Effects";

const VoiceGeneration: React.FC = () => {
  useTitle("Nomota AI - Voice synthesis like you never heard before")
  return (
    <div className="py-12 text-center bg-white max-md:p-8">
      Voice synthesis
    </div>
  );
};

export default VoiceGeneration;
