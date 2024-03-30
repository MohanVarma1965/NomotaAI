import React from 'react';
import { useTitle } from '../../Effects';

const Chatbot: React.FC = () => {
  useTitle('Nomota AI - Meet our advanced chat bot');
  return <div className="py-12 text-center bg-white max-md:p-8">Chatbot</div>;
};

export default Chatbot;
