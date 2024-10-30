import React from 'react';
import { Link } from 'react-router-dom';
import './Webpage.css';

function Web() {
  return (
    <div>
      <header>
        <h1 className='bar'>DEV@Deakin</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
          <Link className="log" to="/logout">Log Out</Link>
        </div>

      </header>
    </div>
  );
}

export default Web;