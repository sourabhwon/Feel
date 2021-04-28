import React from "react";
import mood from "../src/img/egg.jpg";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      
      <div class="wrap">
    <div class="floatleft">
    <img src={mood} alt="mood" width="720" height="700"/>
    </div>
    <div class="floatright">
    <div class="main">
    <p class="sign" align="center">Sign in</p>
    <form class="form1">
      <input class="un " type="text" align="center" placeholder="Username"/>
      <input class="pass" type="password" align="center" placeholder="Password"/>
      <a class="submit" align="center">Sign in</a>
      <p class="forgot" align="center"><a href="#">Forgot Password?</a></p>
      </form>      
                
    </div>
    </div>
    
</div>

	 </div>

  );
}

export default Login;
