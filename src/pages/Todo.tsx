import { useCookies } from 'react-cookie';
import axios from 'axios';
import useSWR from 'swr';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Todolist2 from '../components/Todolist2';

export type TodoData = {
  Id: number;
  Title: string;
  Content: string;
  CreatedAt: string;
  UpdatedAt: string;
  Deadline: string;
  Tag: string;
  TagColor: string;
  CreaterId: number;
  RepeatFlag: boolean;
  RepeatSpan: number;
  RepeatCount: number;
};


export default function Todo() {
  const [cookies] = useCookies(['token']);
  const navigate = useNavigate()

  const fetcher = async () => {
    try {

      const auth = await axios.get(`http://localhost:8080/auth`, {
        headers: {
          Authorization: cookies.token ? `Bearer ${cookies.token}` : '',
        },
      });
      const userid = auth.data.id;
      const userResponse = await axios.get(`http://localhost:8080/auth/user/${userid}`, {
        headers: {
          Authorization: cookies.token ? `Bearer ${cookies.token}` : '',
        },
      });
      const userData = userResponse.data
      const response = await axios.get('http://localhost:8080/auth/todo', {
        headers: {
          Authorization: cookies.token ? `Bearer ${cookies.token}` : '',
        },
      });
      const todoData = response.data
      return { userData, todoData };
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR('http://localhost:8080', fetcher);

  if (!cookies.token) {
    navigate('/');
    return null;
  }

  if (error) {
    console.error('Error:', error.message);
    return <div>Error loading data</div>;
  }

  return (
    <>
      <div className="header">
        <Header user={data?.userData.user} />
      </div>
      <div>
        {data && data.todoData.todos ? (
          <>
            {data.todoData.todos.map((item: TodoData[]) => (
              <Todolist2 todos={item} />
            ))}
          </>
        ) : (
          <div>Nothing to do.</div>
        )}
      </div>
    </>
  );
}
