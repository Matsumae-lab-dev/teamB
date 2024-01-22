import { TodoData } from "../pages/Todo";
interface tododata {
  todo: TodoData
}

export default function TodoButton({ todo }: tododata) {
  console.log(todo)
  return (
    <div>
      <button className='btn btn-block btn-info'>
        <div className="btn-start">
          <p className="w-full max-w-xs">{todo.Title}</p>
        </div>
        <p className="w-full max-w-xs">{todo.Deadline}</p>
        <div className="dropdown dropdown-end">
          <p className="w-full max-w-xs">{todo.Content}</p>
        </div>
      </button>
    </div>
  )
}
