import react from 'react';
import './Navbar.css';
import logo from '../../logo.svg';
import {Link} from 'react-router-dom';

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
          <Link to="/react-quiz-app/">Home</Link>
        </div>
        <div className="item">
        <Link to="/react-quiz-app/quiz">Play Random Quiz</Link>
        </div>
        <div className="item">
          <a href="#opt3">ScoreCard</a>
        </div>
        <div className="item">
          <Link to="/react-quiz-app/register">Register</Link>
        </div>
        <div className="item">
          <Link to="/react-quiz-app/sign-in">Sign In</Link>
        </div>
      </div>
    </div>
   );
}
 
export default Navbar;