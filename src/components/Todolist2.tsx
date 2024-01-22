import Todolist from "../components/Todolist";
import TodoButton from "./TodoButton";
import { TodoData } from '../pages/Todo';
import TodoInfo from "./Todoinfo";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

interface tododata {
  todos: TodoData[]
}

export default function list({ todos }: tododata) {
  const [cookies] = useCookies(['token']);
  const navigate = useNavigate()

  const deleteTodo = async (id: number) => {
    try {
      const response = await axios.delete(`http://localhost:8080/auth/todo/${id}`, {
        headers: {
          Authorization: cookies.token ? `Bearer ${cookies.token}` : '',
        },
      });

      if (response.status === 200) {
        // 削除が成功した場合の処理
        console.log('Todo deleted successfully');
        document.getElementById(`todoinfo-${id}`).close();
        navigate('/todo')
      } else {
        console.log(`Failed to delete Todo: ${response.statusText}`);
      }
    } catch (error: any) {
      console.error('Error deleting Todo:', error.message);
    }
  };
  return (
    <>
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-base-200 rounded-box"
      >
        <input type="checkbox" className="peer" />
        <div className="bg-white collapse-title text-primary-content">
          <div className="list">
            <Todolist category={todos[0].Tag} />
          </div>
        </div>
        <div className="bg-white collapse-content text-primary-content">
          {todos.map((item: TodoData) => (
            <div key={item.Id} onClick={() => document.getElementById(`todoinfo-${item.Id}`).showModal()}>
              <TodoButton todo={item} />
              <dialog id={`todoinfo-${item.Id}`} className="modal">
                <div className="modal-box">
                  <div className="flex justify-between modal-action">
                    <form method="dialog">
                      <button className="btn btn-square btn-outline ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </form>
                    <div>
                      <button className="btn btn-ghost">Edit</button>
                      <button className="btn btn-error" onClick={() => deleteTodo(item.Id)}>delete</button>
                    </div>
                  </div>
                  <TodoInfo todo={item} />
                </div>
              </dialog>
            </div >
          ))
          }
        </div >
      </div >
    </>
  )
}