import react from 'react';
import './Navbar.css';
import logo from '../../logo.svg';

const Navbar = () => {
  return ( 
    <div className="navbar">
      <div className="brand">
      <div className="brand-icon">
        <img src={logo}  alt="logo" />
      </div>
      <div className="brand-name">
        React Quiz App
      </div>
      </div>
      <div className="menu">
        <div className="item">
          <a href="#opt1">Home</a>
        </div>
        <div className="item">
        <a href="#opt2">Play Random Quiz</a>
        </div>
        <div className="item">
          <a href="#opt3">ScoreCard</a>
        </div>
        <div className="item">
          <a href="#opt3">Sign Up</a>
        </div>
        <div className="item">
          <a href="#opt3">Sign In</a>
        </div>
      </div>
    </div>
   );
}
 
export default Navbar;