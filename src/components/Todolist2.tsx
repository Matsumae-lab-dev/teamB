import React from 'react';
import TOdolist from "../components/Todolist";
import TodoButton from "../components/TodoButton";
import Button from "../components/Button";

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
            <TOdolist />
          </div>
          </div>
          <div className="bg-white collapse-content text-primary-content">
          
          <div className="TodoButton">
            <TodoButton />
          </div>
          <div className="Button">
            <Button />
          </div>
          </div>
          
        </div>
      </>
    )
  }