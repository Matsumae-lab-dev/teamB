import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from "../components/Button";
import Header from "../components/Header";
import TOdolist from "../components/Todolist";
import TodoButton from "../components/TodoButton";
import Todolist2 from "../components/Todolist2";

export default function Todo() {
  const [data, setData] = useState([]);
  const [cookies, _, removeCookies] = useCookies(['token']);
  const navigate = useNavigate()

  useEffect(() => {
    /*if (!cookies.token) {
      navigate('/')
    }*/
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
    <>
    <div className="header">
      <Header />
    </div>
    </>
    <div className="list">
      <TOdolist />
    </div>
    <div className="button">
      <Button />
    </div>
    <div className="TodoButton">
      <TodoButton />
    </div>
    <div className="Todolist2">
      <Todolist2 />
    </div>
    </>
  );
}
