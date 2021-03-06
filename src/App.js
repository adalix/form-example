import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";

function App() {
  const [isUserRegistered, setIsUserRegistered] = useState(true);
  function change() {
    setIsUserRegistered(!isUserRegistered);
  }
  return (
    <div className="container">
      {isUserRegistered && <LoginForm />}
      {!isUserRegistered && <RegistrationForm />}

      {isUserRegistered && (
        <div>
          <button className="btn" onClick={change}>
            Create Account
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
