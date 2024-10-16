import React, { useState } from 'react';
import './Header.css';
import bellicon from "../img/Bell.png"
function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleDropdownOptionClick = (option) => {
    console.log(option);
    setDropdownVisible(false); 
  };

  return (
    <header className="header">
      <div className="header-right"> 
        <h1 className="header-title"></h1> 

        <div className="header-search">
          <input type="text" placeholder="Search..." />
        </div>

        <div className="header-notifications" onClick={() => console.log('Notifications clicked')}>
<img src={bellicon} alt ="gemicon"/>
        </div>

        <div className="header-user">
          <button 
            className="dropdown-button" 
            onClick={toggleDropdown} 
            aria-expanded={dropdownVisible}
          >
            Prashant Kumar
          </button>
          {dropdownVisible && (
            <div className="dropdown">
              <ul>
                <li onClick={() => handleDropdownOptionClick('Profile')}>Profile</li>
                <li onClick={() => handleDropdownOptionClick('Settings')}>Settings</li>
                <li onClick={() => handleDropdownOptionClick('Logout')}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
