import React from 'react';
import './style.css';
const Registration = () => {
  return ( 
    <div className="register">
      <div className="heading">
        Register Here
      </div>
      <div className="registration-form">
        <form action="#">
          <div className="form-input">
          <label htmlFor="fName">First Name:</label>
          <input type="text" name="fName" id="fName"  />
          </div>
          <div className="form-input">
          <label htmlFor="lName">Last Name:</label>
          <input type="text" name="lName" id="lName"  />
          </div>
          <div className="form-input">
          <label htmlFor="emailID">Email ID:</label>
          <input type="email" name="emailID" id="emailID"  />
          </div>
          <div className="form-input">
          <label htmlFor="password">Enter Password:</label>
          <input type="password" name="password" id="password"/>
          </div>
          <div className="form-buttons">
          <button type="submit">REGISTER</button>
          <button type="reset">RESET</button>
          <button >GO BACK</button>
          </div>
        </form>
        <div className="sign-up-with">
          <button>SIGN UP WITH GOOGLE</button>
          <button>SIGN UP WITH FACEBOOK</button>
          <button>SIGN UP WITH GITHUB</button>
        </div>
      </div>
    </div>
   );
}
 
export default Registration;