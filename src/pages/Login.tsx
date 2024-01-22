import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';


export default function Login() {
  const [isRegister, setIsRegister] = useState(true);
  const [cookies] = useCookies(['token']);
  const navigate = useNavigate()

  const toChange = (data: boolean) => {
    setIsRegister(data);
  };
  useEffect(() => {
    if (cookies.token) {
      console.log("redirect")
      navigate('/todo')
    }
  }, [cookies.token]);
  return (
    <>
      <div className="flex justify-center">
        {isRegister ? <LoginForm onButtonClick={toChange} /> : <SignupForm onButtonClick={toChange} />}
      </div>
    </>
  );
}
