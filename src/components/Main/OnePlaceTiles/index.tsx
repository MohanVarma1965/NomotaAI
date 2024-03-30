import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const OnePlaceTiles: React.FC = () => {
  return (
    <div className="py-12 bg-white max-md:p-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Manage all in one place</h2>
      </div>
      <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
          <ShoppingCartIcon className="w-10 h-10 mb-2 text-green-600" />
          <h3 className="mb-2 text-lg font-semibold">Quick access to earned funds</h3>
          <p>Withdraw your earnings with ease.</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
          <ShoppingCartIcon className="w-10 h-10 mb-2 text-green-600" />
          <h3 className="mb-2 text-lg font-semibold">Buy games and gift cards</h3>
          <p>Exclusive deals on the latest titles.</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
          <ShoppingCartIcon className="w-10 h-10 mb-2 text-green-600" />
          <h3 className="mb-2 text-lg font-semibold">Manage PC work remotely</h3>
          <p>Access and control your PC from anywhere.</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
          <ShoppingCartIcon className="w-10 h-10 mb-2 text-green-600" />
          <h3 className="mb-2 text-lg font-semibold">Chat AI ASTROGPT</h3>
          <p>Advanced AI chatbot for user engagement.</p>
        </div>
      </div>
    </div>
  );
};

export default OnePlaceTiles;
