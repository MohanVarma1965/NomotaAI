import React from 'react';

const SocialIcons: React.FC = () => {
  return (
    <div className="flex justify-center p-8 space-x-8">
      <a
        href="https://twitter.com/nomotaai"
        className="transition-colors duration-200 hover:text-blue-400"
        target="_blank"
      >
        <svg
          aria-label="X"
          className="w-6 h-6 fill-current"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            fill="white"
          />
        </svg>
      </a>

      <a href="https://t.me/nomotaai" className="transition-colors duration-200 hover:text-blue-500" target="_blank">
        <svg
          aria-label="Telegram"
          className="w-6 h-6 fill-current"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.036 15.464l-.932 3.285c-.096.337.418.478.622.2l1.27-1.74 2.457 1.827c.418.313.774.2.905-.295l3.38-15.112c.13-.496-.291-.713-.62-.498L.725 9.607c-.497.238-.498.498-.025.635l3.3 1.054 7.338-4.595c.335-.21.64-.04.283.04z"
            fill="white"
          />
        </svg>
      </a>
    </div>
  );
};

export default SocialIcons;
