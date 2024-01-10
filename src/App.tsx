import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Todo from './pages/Todo';
import AddTodo from './pages/AddTodo';

export default function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/new" element={<AddTodo />} />
        </Routes>
      </div>
    </>
  )
}
