import React, { useState } from "react";

function RegistrationForm() {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPassConfirm, setUserPassConfirm] = useState("");

  const register = function (e) {
    e.preventDefault();
    if (userName === "") {
      alert("User name must be valid");
      return;
    }
    if (userPass === "") {
      alert("User password must be valid");
      return;
    }
    if (userPassConfirm === "" || userPassConfirm !== userPass) {
      alert("Password Confirmation must match");
      return;
    }
  };

  return (
    <form className="form">
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
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setUserPassConfirm(e.target.value)}
      />
      <button type="submit" onClick={(e) => register(e)}>
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
