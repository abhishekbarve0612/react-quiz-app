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
        <Link to="/react-quiz-app/">React Quiz App</Link>
      </div>
      </div>
      <div className="menu">
        <div className="item">
          <Link to="/react-quiz-app/">Home</Link>
        </div>
        <div className="item">
        <Link to="/react-quiz-app/random-quiz/">Play Random Quiz</Link>
        </div>
        <div className="item">
          <Link to="/react-quiz-app/quiz/result/">ScoreCard</Link>
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