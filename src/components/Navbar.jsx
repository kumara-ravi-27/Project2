import React, { useState } from 'react';
import './Navbar.css';

import ReactComponent from './React';
import Python from './Python';
import Sql from './Sql';
import Api from './Api';

const Navbar = () => {
  const [selected, setSelected] = useState('React');
  const [isOpen, setIsOpen] = useState(false);

  const renderContent = () => {
    switch (selected) {
      case 'React':
        return <ReactComponent />;
      case 'Python':
        return <Python />;
      case 'SQL':
        return <Sql />;
      case 'API':
        return <Api />;
      default:
        return null;
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app-wrapper">
      <button className="nav-toggle" onClick={toggleMenu}>
        {isOpen ? '×' : '☰'}
      </button>
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          {['React', 'Python', 'SQL', 'API'].map((item) => (
            <li
              key={item}
              className={`nav-item ${selected === item ? 'active' : ''}`}
              onClick={() => {
                setSelected(item);
                setIsOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default Navbar;
