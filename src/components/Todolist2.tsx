import Todolist from "../components/Todolist";
import TodoButton from "./TodoButton";
import { TodoData } from '../pages/Todo';

interface tododata {
  todos: TodoData[]
}

export default function list({ todos }: tododata) {
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
            <div>
              <TodoButton todo={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}