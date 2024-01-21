export default function TodoButton() {
  return (
    <div>
      <button className='btn btn-block btn-info'>
        <div className="btn-start">
          <p className="w-full max-w-xs">title</p>
        </div>
        <p className="w-full max-w-xs">deadline</p>
        <div className="dropdown dropdown-end">
          <p className="w-full max-w-xs">member</p>
        </div>
      </button>
    </div>
  )
}
