import { TodoData } from "../pages/Todo";

interface todoinfo {
  todo: TodoData
}

export default function TodoInfo({ todo }: todoinfo) {
  console.log(todo)
  const parsedDeadline = todo.Deadline ? new Date(todo.Deadline) : null;
  const formattedDeadline = parsedDeadline
    ? parsedDeadline.toLocaleString()
    : "none";
  return (
    <div>
      <p className="text-2xl text-slate-400 text-left">Title:</p>
      <p className="text-2xl text-center text-black m-5">{todo.Title}</p>
      <div className="border-inherit border-2 border-sky-500 text-left"></div>
      <p className="text-3xl text-slate-400 text-left">DeadLine:</p>
      <p className="text-2xl text-center text-black  m-5">{formattedDeadline}</p>
      <div className="border-inherit border-2 border-sky-500 text-left"></div>
      <p className="text-3xl text-slate-400 text-left">Tag:</p>
      <p className="text-2xl text-black m-5 p-2 rounded-md mx-auto" style={{ backgroundColor: todo.TagColor }}>{todo.Tag}</p>
      <div className="border-inherit border-2 border-sky-500 text-left"></div>
      <p className="text-3xl text-slate-400 text-left">Menber:</p>
      <p className="text-2xl text-center text-black m-5">member</p>
      <div className="border-inherit border-2 border-sky-500 text-left"></div>
      <p className="text-3xl text-slate-400 text-left">Anything:</p>
      <p className="text-2xl text-center text-black m-5">{todo.Content ? todo.Content : "none"}</p>
    </div>
  );
}
