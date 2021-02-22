import react from 'react';
import './Navbar.css';


const Navbar = () => {
  return ( 
    <div className="navbar">
      <div className="brand">React Quiz App</div>
      <div className="menu">
        <div className="item">
          <a href="#opt1">Option One</a>
        </div>
        <div className="item">
          <a href="#opt2">Option Two</a>
        </div>
        <div className="item">
          <a href="#opt3">Option Three</a>
        </div>
      </div>
    </div>
   );
}
 
export default Navbar;