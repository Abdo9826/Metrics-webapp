import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link className="white" to="/">
        <h3> __</h3>
      </Link>
      <h1>All conturies</h1>
    </nav>
  );
}

export default Navbar;
