import React from 'react';
import Todolist from "../components/Todolist";
import TodoButton from "./TodoButton";

export default function list() {
  return (
    <>
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-base-200 rounded-box"
      >
        <input type="checkbox" className="peer" />
        <div className="bg-white collapse-title text-primary-content">
          <div className="list">
            <Todolist />
          </div>
        </div>
        <div className="bg-white collapse-content text-primary-content">
          <div className="Button">
            <TodoButton />
          </div>
        </div>

      </div>
    </>
  )
}