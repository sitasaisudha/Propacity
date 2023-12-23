
import React, { useState } from 'react';
import './../Dashboard/NavbarStyles.css'
const Navbar = () => {
    const [dropdown1Visible, setDropdown1Visible] = useState(false);
  const [dropdown2Visible, setDropdown2Visible] = useState(false);

  const toggleDropdown1 = () => {
    setDropdown1Visible(!dropdown1Visible);
  };

  const toggleDropdown2 = () => {
    setDropdown2Visible(!dropdown2Visible);
  };

    return (
        <div className="side-navbar">
        <div className="nav-item" onClick={toggleDropdown1}>
          Item 1
          {dropdown1Visible && (
            <div className="dropdown">
              <p>Dropdown Content 1</p>
            </div>
          )}
        </div>
  
        <div className="nav-item" onClick={toggleDropdown2}>
          Item 2
          {dropdown2Visible && (
            <div className="dropdown">
              <p>Dropdown Content 2</p>
            </div>
          )}
        </div>
  
        {/* Add more items as needed */}
      </div>
    );
};

export default Navbar;