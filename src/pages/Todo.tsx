import { useCookies } from 'react-cookie';
import axios from 'axios';
import useSWR from 'swr';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Todolist2 from '../components/Todolist2';

type TodoData = {
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
      const response = await axios.get('http://localhost:8080/auth/todo', {
        headers: {
          Authorization: cookies.token ? `Bearer ${cookies.token}` : '',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR('http://localhost:8080/auth/todo', fetcher);

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
        <Header />
      </div>
      <div>
        {data ? (
          <ul>
            {data.todos.map((item: TodoData) => (
              <li key={item.Id}>
                <h3>{item.Title}</h3>
                <p>Tag: {item.Tag}</p>
                <p>TagColor: {item.TagColor}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div>Loading...</div>
        )}
        <div className="Todolist2">
          <Todolist2 />
        </div>
      </div>
    </>
  );
}
