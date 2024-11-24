import React from "react";
import { FaGithub, FaDev } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer>
      <h3>Accidori 2024</h3>
      <div className="footer">
        
        //github
        <a href="https://github.com/Accidori" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>

        //dev.to
        <a href="https://dev.to/accidori" target="_blank" rel="noopener noreferrer">
          <FaDev size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
