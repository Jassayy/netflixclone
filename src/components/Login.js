import React from "react";

function Login() {
  return (
    <div className="container2">
      <nav>
        <div className="nav-left">
          <img
            src="https://www.pngmart.com/files/10/Netflix-Logo-PNG-Image.png"
            alt=""
          />
        </div>
      </nav>
      <form action="/">
        <h1>Sign In</h1>
        <div className="inputsignup">
          <input
            className="input1"
            type="text"
            placeholder="Email or mobile number"
          />
          <input className="input1" type="password" placeholder="Password" />
          <button className="signup">Sign In</button>
          <h3 className="or">OR</h3>
          <button className="code">Use a sign-in code</button>
          <a href="/">Forgot password?</a>
          <div className="checkbox">
            <input type="checkbox" name="" id="" />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <h3>
            New to Netflix? <span>Sign up now.</span>
          </h3>
        </div>
      </form>
    </div>
  );
}

export default Login;
