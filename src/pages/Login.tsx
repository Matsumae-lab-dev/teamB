import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { useState } from 'react';


export default function Login() {
  const [isRegister, setIsRegister] = useState(false);

  const toChange = (data: boolean) => {
    setIsRegister(data);
  };
  return (
    <>
      <h2>Login</h2>
      <div className="flex justify-center">
        {isRegister ? <LoginForm onButtonClick={toChange} /> : <SignupForm onButtonClick={toChange} />}
      </div>
    </>
  );
}
