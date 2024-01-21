import React from 'react';

export default function TodoButton() {
    return (
        <div role="button" className="navbar bg-base-300 rounded-box">
        <div className="flex-1 px-2 lg:flex-none">
            <input type="text" placeholder="Title" className="input input-ghost w-full max-w-xs" />
        </div> 
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-stretch">
            <input type="text" placeholder="date" className="input input-ghost w-full max-w-xs" />
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">member</div>
              <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li><a>name 1</a></li> 
                <li><a>name 2</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}