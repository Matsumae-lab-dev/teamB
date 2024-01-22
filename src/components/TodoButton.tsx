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
      <button className='btn btn-block flex' style={{ backgroundColor: todo.TagColor }}>
        <div className="mx-96">
          <p className="w-full max-w-xs text-xl mx-8">{todo.Title}</p>
        </div>
        <p className="w-full max-w-xs text-xl w-">deadline: {formattedDeadline}</p>
        <p className="w-full max-w-xs text-xl">{todo.Content}</p>

      </button>
    </div>
  )
}
