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
          aria-label="Twitter"
          className="w-6 h-6 fill-current"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.164 10.164 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482A13.975 13.975 0 011.64 3.15a4.822 4.822 0 001.524 6.573 4.903 4.903 0 01-2.23-.616v.061a4.924 4.924 0 003.946 4.827 4.996 4.996 0 01-2.224.085 4.937 4.937 0 004.604 3.417 9.867 9.867 0 01-7.29 2.029A14.028 14.028 0 008.253 21c9.054 0 14.009-7.496 14.009-13.986 0-.21-.005-.42-.014-.63A9.935 9.935 0 0024 4.59z" />
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
          <path d="M9.036 15.464l-.932 3.285c-.096.337.418.478.622.2l1.27-1.74 2.457 1.827c.418.313.774.2.905-.295l3.38-15.112c.13-.496-.291-.713-.62-.498L.725 9.607c-.497.238-.498.498-.025.635l3.3 1.054 7.338-4.595c.335-.21.64-.04.283.04z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialIcons;
