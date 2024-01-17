import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Todo() {
  const [data, setData] = useState([]);
  const [cookies, _, removeCookies] = useCookies(['token']);
  const navigate = useNavigate()

  useEffect(() => {
    if (!cookies.token) {
      navigate('/')
    }
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/auth/todo', {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        });
        const resdata = response.data;
        if (resdata != null) {
          setData(resdata.todos);
          console.log(data)
        } else {
          // ダミーデータを詰めとく
        }

      } catch (error: any) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, [cookies.token]);

  const logout = () => {
    removeCookies('token')
    navigate('/')
  }

  return (
    <>
      <div className="bg-[#AAD9BB] flex justify-around">
        <h2 className="text-4xl" >TO DO</h2>
        <button className="btn m-2" onClick={() => navigate('/new')}>  +  </button>
        <button onClick={logout}>logout</button>
        <div>
        </div>
      </div>
    </>
  );
}
