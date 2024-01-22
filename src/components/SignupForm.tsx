import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

interface SignupFormProps {
  onButtonClick: (data: boolean) => void;
}

interface ApiResponse {
  token?: string;
  message?: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ onButtonClick }) => {

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [_, setCookie] = useCookies(['token']);

  const navigate = useNavigate()
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)

    setUsername(e.target.value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)

    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/signup', {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        try {
          const response = await axios.post<ApiResponse>('http://localhost:8080/login', {
            email,
            password,
          });

          if (response.status === 200 && response.data.token) {
            const data = response.data;
            setCookie('token', data.token, { path: '/' });
            navigate('/todo');
          } else {
            navigate('/');
          }
        } catch (error) {
          navigate('/');
        }
      } else {
        if (response.data && response.data.message) {
          setResponseMessage(`Signup Failed: ${response.data.message}`);
        } else {
          setResponseMessage(`Signup Failed: ${response.statusText}`);
        }
      }
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        setResponseMessage(`Signup Failed: ${error.response.data.message}`);
      } else {
        setResponseMessage('Signup Failed');
      }
    }
  };
  return (
    <div className="border-2 h-3/4 w-96 p-8 rounded-md" >
      <h2 className="text-2xl m-6">welcome</h2>
      <div>
        <input type="text" placeholder="username" className="input input-bordered w-full max-w-xs m-2" onChange={handleUsernameChange} />
        <input type="email" placeholder="email" className="input input-bordered w-full max-w-xs m-2" onChange={handleEmailChange} />
        <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs m-2" onChange={handlePasswordChange} />
      </div>
      <p>{responseMessage}</p>
      <button className="btn m-6" onClick={handleSubmit}>continue</button>
      <div>
        <p className="text-gray-400">Already have an account?</p>
        <button className="text-blue-600" onClick={() => onButtonClick(true)}>→login</button>
      </div>
    </div>
  );
}

export default SignupForm