import React from "react";
import "./LoginBtn.scss";
import { useRouter } from "next/navigation";
import router from "next/router";

function LoginBtn() {
  return (
    <div className="login-btn">
      <p className="login-btn__logo-text">Login or Register to start exploring books!</p>
        <div className="login-btn__buttons">
          <button className="login-btn__btn" onClick={() => router.push("/login")}>Login</button>
          <button className="login-btn__btn" onClick={() => router.push("/register")}>Register</button>
        </div>
    </div>
  )
}

export default LoginBtn