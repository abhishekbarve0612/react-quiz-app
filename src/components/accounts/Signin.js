import React from 'react';
import './style.css';
const Signin = () => {
  return ( 
    <div className="register">
      <div className="heading">
        Sign In Here
      </div>
      <div className="registration-form">
        <form action="#">
          <div className="form-input">
          <label htmlFor="emailID">Email ID:</label>
          <input type="email" name="emailID" id="emailID"  />
          </div>
          <div className="form-input">
          <label htmlFor="password">Enter Password:</label>
          <input type="password" name="password" id="password"/>
          </div>
          <div className="form-buttons">
          <button type="submit">SIGN IN</button>
          <button type="reset">RESET</button>
          <button >GO BACK</button>
          </div>
        </form>
        <div className="sign-up-with">
          <button>SIGN IN WITH GOOGLE</button>
          <button>SIGN IN WITH FACEBOOK</button>
          <button>SIGN IN WITH GITHUB</button>
        </div>
      </div>
    </div>
   );
}
 
export default Signin;