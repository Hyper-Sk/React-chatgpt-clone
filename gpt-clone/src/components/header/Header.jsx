import React from "react";
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h4>ChatGPT 3.5</h4>
        <div className="mode" onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? (
            <i className="uil uil-brightness"></i>
          ) : (
            <i className="uil uil-moon"></i>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
