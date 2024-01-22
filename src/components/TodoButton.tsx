import { TodoData } from "../pages/Todo";
interface tododata {
  todo: TodoData
}

export default function TodoButton({ todo }: tododata) {
  const parsedDeadline = todo.Deadline ? new Date(todo.Deadline) : null;
  const formattedDeadline = parsedDeadline
    ? parsedDeadline.toLocaleString()
    : "none";
  return (
    <div>
      <button className='btn btn-block' style={{ backgroundColor: todo.TagColor }}>
        <div className="btn-start">
          <p className="w-full max-w-xs">{todo.Title}</p>
        </div>
        <p className="w-full max-w-xs">{formattedDeadline}</p>
        <div className="dropdown dropdown-end">
          <p className="w-full max-w-xs">{todo.Content}</p>
        </div>
      </button>
    </div>
  )
}
