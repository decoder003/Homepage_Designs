import { useState } from "react";
import "./Dropdown.css"; 

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button className={`dropdown-button ${isOpen ? 'active' : ''}`} onClick={toggleDropdown}>
        HomePage Designs
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <a href="https://inceptivebidesign1.vercel.app/" target="blank" rel="">
              Design 1
            </a>
          </li>
          <li>
            <a href="https://inceptivebidesign2.vercel.app/" target="blank" rel="">
              Design 2
            </a>
          </li>
          <li>
            <a href="https://desig-1.vercel.app/" target="blank" rel="">
              Design 3
            </a>
          </li>
          <li>
            <a href="https://inceptivebidesign3.vercel.app/" target="blank" rel="">
              Design 4
            </a>
          </li>
          <li>
            <a href="https://inceptive-design-2.vercel.app/" target="blank" rel="">
              Design 5
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
