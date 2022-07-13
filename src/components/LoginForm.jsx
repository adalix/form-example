import React, { useState } from "react";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");

  const loginAction = function (e) {
    e.preventDefault();
    if (userName === "") {
      alert("User name must be valid");
      return;
    }
    if (userPass === "") {
      alert("User password must be valid");
      return;
    }
  };

  return (
    <form className="loginform">
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setUserPass(e.target.value)}
      />
      <button type="submit" onClick={(e) => loginAction(e)}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
