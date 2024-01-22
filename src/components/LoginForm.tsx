import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

interface LoginFormProps {
  onButtonClick: (data: boolean) => void;
}
interface ApiResponse {
  token?: string;
  message?: string;
}
const LoginForm: React.FC<LoginFormProps> = ({ onButtonClick }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [_, setCookie] = useCookies(['token']);

  const navigate = useNavigate()

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {

    try {
      const response = await axios.post<ApiResponse>('http://localhost:8080/login', {
        email,
        password,
      });

      if (response.status === 200 && response.data.token) {
        const data = response.data;
        setCookie('token', data.token, { path: '/' });
        navigate('/todo')
      } else {
        if (response.data && response.data.message) {
          setResponseMessage(`Login Failed: ${response.data.message}`);
        } else {
          setResponseMessage(`Login Failed: ${response.statusText}`);
        }
      }
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        setResponseMessage(`Login Failed: ${error.response.data.message}`);
      } else {
        setResponseMessage('Login Failed');
      }
    }
  };
  return (
    <div className="border-2 h-3/4 w-96 p-8 rounded-md" >
      <h2 className="text-2xl m-6">welcome</h2>
      <div>
        <input type="email" placeholder="email" className="input input-bordered w-full max-w-xs m-2" onChange={handleEmailChange} />
        <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs m-2" onChange={handlePasswordChange} />
      </div>
      <p>{responseMessage}</p>
      <button className="btn m-6" onClick={handleSubmit}>continue</button>
      <div>
        <p className="text-gray-400">Don't have an account?</p>
        <button className="text-blue-600" onClick={() => onButtonClick(false)} >→signup</button>
      </div>
    </div>
  );
}

export default LoginForm
