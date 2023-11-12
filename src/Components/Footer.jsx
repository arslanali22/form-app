import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-light">
      <div className="container text-center">
        <span>Thank You &copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
