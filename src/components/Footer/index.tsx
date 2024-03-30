import React from "react";
import FooterColumn from "./FooterColumn";

const Footer: React.FC = () => {
  const footerData = [
    {
      title: "DEVELOPMENt",
      links: [
        { name: "Status", url: "https://status.nomota.nl" },
        { name: "Documentation", url: "https://docs.nomota.nl" },
      ],
    },
    {
      title: "ABOUT",
      links: [
        { name: "About us", to: "/about" },
        { name: "Blog", to: "/blog" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { name: "Acceptable Use Policy", to: "/acceptable-use" },
        { name: "Terms of Service", to: "/terms" },
        { name: "Privacy policy", to: "/privacy-policy" },
      ],
    },
  ];

  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-3 gap-8">
          {footerData.map((column, index) => (
            <FooterColumn key={index} title={column.title} links={column.links} />
          ))}
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          © 2024 Nomota
        </div>
      </div>
    </footer>
  );
};

export default Footer;
