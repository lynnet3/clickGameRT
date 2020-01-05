import React from 'react';
//import './Navbar.css';

const Navbar = props => (
  <div className="navbar ">
    <div>Logo Game</div>
    <div>
     Current Score: {props.score}  High Score: {props.highScore}
    </div>
  </div>
);

export default Navbar;