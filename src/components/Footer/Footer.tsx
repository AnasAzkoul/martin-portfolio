import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary p-2">
      <div className="text-center text-sm text-gray-500 pt-64 mt-24 p-6">
        Designed and built by &nbsp;
        <a
          href="https://www.anasazkoul.com"
          target="_blank"
          rel="noreferrer"
          className='underline underline-offset-3 text-secondaryLight hover:text-secondary'
          >
          Anas Azkoul
        </a>
      </div>
    </footer>
  );
};

export default Footer;
