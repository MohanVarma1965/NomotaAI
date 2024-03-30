import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const OnePlaceTiles: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Manage all in one place</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
          <ShoppingCartIcon className="mb-2 h-10 w-10 text-green-600" />
          <h3 className="text-lg font-semibold mb-2">Quick access to earned funds</h3>
          <p>Withdraw your earnings with ease.</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
          <ShoppingCartIcon className="mb-2 h-10 w-10 text-green-600" />
          <h3 className="text-lg font-semibold mb-2">Buy games and gift cards</h3>
          <p>Exclusive deals on the latest titles.</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
          <ShoppingCartIcon className="mb-2 h-10 w-10 text-green-600" />
          <h3 className="text-lg font-semibold mb-2">Manage PC work remotely</h3>
          <p>Access and control your PC from anywhere.</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
          <ShoppingCartIcon className="mb-2 h-10 w-10 text-green-600" />
          <h3 className="text-lg font-semibold mb-2">Chat AI ASTROGPT</h3>
          <p>Advanced AI chatbot for user engagement.</p>
        </div>
      </div>
    </div>
  );
};

export default OnePlaceTiles;
