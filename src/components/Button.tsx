export default function Button() {
  return (
    <div>
     <button className='btn btn-block btn-info'>
      <div className="btn-start">
        <input type="text" placeholder="Title" className="input input-ghost w-full max-w-xs" />
      </div> 
     <input type="text" placeholder="date" className="input input-ghost w-full max-w-xs" />
     <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">member</div>
          <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
            <li><a><input type="text" placeholder="name 1" className="input input-ghost w-full max-w-xs" /></a></li> 
            <li><a>name 2</a></li>
          </ul>
      </div>
      </button>
    </div>
  )
}
