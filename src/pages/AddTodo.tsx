import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

export default function AddTodo() {
  const [cookies] = useCookies(['token']);
  const navigate = useNavigate()
  useEffect(() => {
    if (!cookies.token) {
      console.log("token invalid")
      navigate('/')
    }
  }, [cookies.token]);
  return (
    <h2>AddTodo</h2>
  );
}
